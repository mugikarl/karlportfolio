import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import BookNav from "./components/BookNav";
import Cover from "./components/Cover";
import SectionHead from "./components/SectionHead";
import { bookContainer } from "./components/layout";
import { featuredWorks, otherWorks } from "./data/projects";
import { bookSections, workEntries, type View } from "./data/sections";
import FeaturedWork from "./sections/FeaturedWork";
import OtherWork from "./sections/OtherWork";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

const sectionIds = bookSections.map((section) => section.id);
const workIds = workEntries.map((work) => work.id);
const knownIds = new Set([
  ...sectionIds,
  ...workIds,
  ...otherWorks.map((work) => work.id),
]);

const hashTarget = () => {
  const id = decodeURIComponent(window.location.hash.slice(1));
  return knownIds.has(id) ? id : null;
};

// Tracks which section, and which featured work, crosses a thin band near
// the top third of the viewport. The work keeps its last value between plates.
const useActiveLocation = (enabled: boolean) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);
  const [activeWork, setActiveWork] = useState(workIds[0]);

  useEffect(() => {
    if (!enabled) return;
    const inBand = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) inBand.add(entry.target.id);
          else inBand.delete(entry.target.id);
        });
        const section = sectionIds.find((id) => inBand.has(id));
        const work = workIds.find((id) => inBand.has(id));
        if (section) setActiveSection(section);
        if (work) setActiveWork(work);
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );
    [...sectionIds, ...workIds].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [enabled]);

  // Lands the marks on a jump target before the observer catches up.
  const point = useCallback((id: string) => {
    if (sectionIds.includes(id)) setActiveSection(id);
    if (workIds.includes(id)) {
      setActiveSection("work");
      setActiveWork(id);
    }
  }, []);

  return { activeSection, activeWork, point };
};

const SHARED = "active-plate";
const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Puts the chosen section at the top and gives its heading focus.
const revealTarget = (id: string) => {
  const target = document.getElementById(id);
  if (!target) return null;
  target.scrollIntoView({ behavior: "instant", block: "start" });
  target.querySelector<HTMLElement>("h2, h3, summary")?.focus({ preventScroll: true });
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
      await Promise.race([plate.decode().catch(() => undefined), wait(120)]);
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
  const { activeSection, activeWork, point } = useActiveLocation(view === "book");

  const openBook = useCallback(
    (id: string, source: HTMLElement | null) => {
      swapView(
        "enter",
        () => {
          flushSync(() => {
            setView("book");
            point(id);
          });
          return revealTarget(id);
        },
        source,
      );
    },
    [point],
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
    if (!id) return;
    point(id);
    revealTarget(id);
  }, [point]);

  if (view === "cover") return <Cover onEnter={enter} />;

  return (
    <>
      <a
        href="#main"
        className="sr-only z-50 bg-ink px-4 py-3 text-paper focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to work
      </a>
      <BookNav activeSection={activeSection} activeWork={activeWork} onCover={returnToCover} />
      <main id="main" tabIndex={-1} className="pt-(--nav-works-h) pb-10 outline-none">
        <section
          id="work"
          aria-labelledby="work-title"
          className={`${bookContainer} scroll-mt-nav-works mt-12 lg:mt-20`}
        >
          <SectionHead
            id="work-title"
            title="Selected work"
            lede="Four builds I'd point to first, with what I did on each."
          />
          <div className="mt-14 lg:mt-20">
            {featuredWorks.map((work, i) => (
              <Fragment key={work.id}>
                {i > 0 && <hr className="my-16 border-rule lg:my-28" />}
                <FeaturedWork work={work} number={i + 1} />
              </Fragment>
            ))}
          </div>
        </section>
        <OtherWork />
        <Experience />
        <Contact />
      </main>
    </>
  );
}

export default App;
