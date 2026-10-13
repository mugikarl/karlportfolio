import { useCallback, useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import Cover from "./components/Cover";
import WorksIndex from "./components/WorksIndex";
import { featuredWorks, otherWorks } from "./data/projects";
import { indexSections, type View } from "./data/sections";
import FeaturedWork from "./sections/FeaturedWork";
import OtherWork from "./sections/OtherWork";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

const sectionIds = indexSections.map((section) => section.id);
const knownIds = new Set([...sectionIds, ...otherWorks.map((work) => work.id)]);

const hashTarget = () => {
  const id = decodeURIComponent(window.location.hash.slice(1));
  return knownIds.has(id) ? id : null;
};

const useActiveSection = (ids: string[], enabled: boolean) => {
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    if (!enabled) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids, enabled]);

  return [activeId, setActiveId] as const;
};

const SHARED = "active-plate";
const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Puts the chosen section at the top and gives its heading focus.
const revealTarget = (id: string) => {
  const target = document.getElementById(id);
  if (!target) return null;
  target.scrollIntoView({ behavior: "instant", block: "start" });
  target.querySelector<HTMLElement>("h2, summary")?.focus({ preventScroll: true });
  return target;
};

// Runs a view swap inside a View Transition when supported. The clicked
// thumbnail and the chosen work's screenshot share one name, so the image
// travels while the rest of the page cross-fades.
const swapView = (
  direction: "enter" | "exit",
  update: () => HTMLElement | null,
  source: HTMLElement | null = null,
) => {
  if (!document.startViewTransition) {
    update();
    return;
  }
  const root = document.documentElement;
  root.dataset.vt = direction;
  if (source?.dataset.xfade !== undefined) root.dataset.vtXfade = "";
  if (source) source.style.viewTransitionName = SHARED;
  let landed: HTMLElement | null = null;

  const vt = document.startViewTransition(async () => {
    if (source) source.style.viewTransitionName = "";
    const target = update();
    const figure = source ? target?.querySelector<HTMLElement>("figure") : null;
    const plate = figure?.querySelector("img");
    if (figure && plate) {
      plate.loading = "eager";
      plate.style.opacity = "1";
      figure.style.viewTransitionName = SHARED;
      landed = figure;
      await Promise.race([plate.decode().catch(() => undefined), wait(400)]);
    }
  });

  vt.finished.finally(() => {
    delete root.dataset.vt;
    delete root.dataset.vtXfade;
    if (landed) {
      landed.style.viewTransitionName = "";
      landed.querySelector("img")?.style.removeProperty("opacity");
    }
  });
};

function App() {
  const [view, setView] = useState<View>(() => (hashTarget() ? "book" : "cover"));
  const viewRef = useRef(view);
  useEffect(() => {
    viewRef.current = view;
  }, [view]);
  const [activeId, setActiveId] = useActiveSection(sectionIds, view === "book");

  const openBook = useCallback(
    (id: string, source: HTMLElement | null) => {
      swapView(
        "enter",
        () => {
          flushSync(() => {
            setView("book");
            if (sectionIds.includes(id)) setActiveId(id);
          });
          return revealTarget(id);
        },
        source,
      );
    },
    [setActiveId],
  );

  const closeBook = useCallback(() => {
    swapView("exit", () => {
      flushSync(() => setView("cover"));
      window.scrollTo({ top: 0, behavior: "instant" });
      document.getElementById("cover-title")?.focus({ preventScroll: true });
      return null;
    });
  }, []);

  const enter = useCallback(
    (id: string, source: HTMLElement | null) => {
      window.history.pushState(null, "", `#${id}`);
      openBook(id, source);
    },
    [openBook],
  );

  const returnToCover = useCallback(() => {
    window.history.pushState(null, "", window.location.pathname + window.location.search);
    closeBook();
  }, [closeBook]);

  useEffect(() => {
    const onPop = () => {
      const hash = window.location.hash.slice(1);
      const id = hashTarget();
      if (!hash && viewRef.current === "book") closeBook();
      else if (id && viewRef.current === "cover") {
        const thumb = document.querySelector<HTMLElement>(`a[href="#${id}"] img`);
        openBook(id, thumb);
      }
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, [openBook, closeBook]);

  useEffect(() => {
    const id = hashTarget();
    if (id) revealTarget(id);
  }, []);

  if (view === "cover") return <Cover onEnter={enter} />;

  return (
    <>
      <a
        href="#main"
        className="sr-only z-50 bg-ink px-4 py-3 text-paper focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to work
      </a>
      <div className="mx-auto max-w-[1680px] lg:grid lg:grid-cols-[minmax(320px,27%)_minmax(0,1fr)]">
        <WorksIndex activeId={activeId} onCover={returnToCover} />
        <main id="main" tabIndex={-1} className="outline-none">
          {featuredWorks.map((work, i) => (
            <FeaturedWork key={work.id} work={work} number={i + 1} />
          ))}
          <OtherWork />
          <Experience />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;
