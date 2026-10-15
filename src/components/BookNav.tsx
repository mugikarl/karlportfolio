import { useEffect, useLayoutEffect, useRef, useState, type MouseEvent, type RefObject } from "react";
import { bookSections, workEntries } from "../data/sections";
import { profile } from "../data/profile";
import { isPlainClick } from "./isPlainClick";
import { bookContainer } from "./layout";

interface BookNavProps {
  activeSection: string;
  activeWork: string;
  onCover: () => void;
}

// Measures the active link's marked element inside a list so one spot bar
// can slide and stretch under it.
const useMark = (listRef: RefObject<HTMLOListElement | null>, activeId: string) => {
  const [mark, setMark] = useState<{ x: number; w: number } | null>(null);

  useLayoutEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const place = () => {
      const target = list.querySelector<HTMLElement>(`[data-target="${activeId}"] [data-mark]`);
      if (target) setMark({ x: target.offsetLeft, w: target.offsetWidth });
    };
    place();
    const observer = new ResizeObserver(place);
    // Watch the labels too: a web font swap resizes them without resizing the list.
    observer.observe(list);
    list.querySelectorAll("[data-mark]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [listRef, activeId]);

  return mark;
};

const Mark = ({ mark }: { mark: { x: number; w: number } | null }) =>
  mark && (
    <span
      aria-hidden
      className="absolute bottom-0 left-0 h-0.5 w-px origin-left bg-spot transition-transform duration-[250ms] ease-in-out-strong motion-reduce:transition-none"
      style={{ transform: `translateX(${mark.x}px) scaleX(${mark.w})` }}
    />
  );

const linkTone = (active: boolean) =>
  active ? "text-ink" : "text-graphite hover:text-ink";

const BookNav = ({ activeSection, activeWork, onCover }: BookNavProps) => {
  const handleCover = (event: MouseEvent) => {
    if (!isPlainClick(event)) return;
    event.preventDefault();
    onCover();
  };

  const sectionsRef = useRef<HTMLOListElement>(null);
  const worksRef = useRef<HTMLOListElement>(null);
  const sectionMark = useMark(sectionsRef, activeSection);
  const workMark = useMark(worksRef, activeWork);
  const inWork = activeSection === "work";

  // On phones the section links scroll sideways; keep the active one in view.
  useEffect(() => {
    const list = sectionsRef.current;
    const strip = list?.parentElement;
    const row = list?.querySelector<HTMLElement>(`[data-target="${activeSection}"]`);
    if (!strip || !row || strip.scrollWidth <= strip.clientWidth) return;
    // Measure against the strip itself (it has side padding), and keep the
    // link clear of the faded right edge.
    const fade = 24;
    const left = row.getBoundingClientRect().left - strip.getBoundingClientRect().left;
    const right = left + row.offsetWidth;
    if (left < 0 || right > strip.clientWidth - fade) {
      strip.scrollTo({ left: Math.max(0, strip.scrollLeft + left - 20) });
    }
  }, [activeSection]);

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper">
      <div
        className={`${bookContainer} grid grid-cols-[minmax(0,1fr)_auto] items-center md:grid-cols-[auto_minmax(0,1fr)_auto]`}
      >
        <p className="flex h-14 items-center md:h-16">
          <a
            href="/"
            onClick={handleCover}
            className="text-lg leading-tight font-semibold tracking-[-0.01em] transition-colors duration-200 ease-[ease] hover:text-graphite"
          >
            {profile.name}
            <span className="sr-only">, back to the start</span>
          </a>
        </p>

        {/* Below md the strip scrolls under the docked Email button, so its
            right edge fades to show there is more. */}
        <nav
          aria-label="Sections"
          className="no-scrollbar -ml-5 self-stretch overflow-x-auto border-t border-rule pl-5 [mask-image:linear-gradient(to_right,#000_calc(100%-1.5rem),transparent)] sm:-ml-8 sm:pl-8 md:ml-8 md:overflow-visible md:border-t-0 md:pl-0 md:[mask-image:none] lg:ml-12"
        >
          <ol ref={sectionsRef} className="relative flex h-12 gap-x-6 pr-6 md:h-full md:gap-x-8 md:pr-0">
            <Mark mark={sectionMark} />
            {bookSections.map((section) => {
              const active = section.id === activeSection;
              return (
                <li key={section.id} data-target={section.id} className="flex shrink-0">
                  <a
                    href={`#${section.id}`}
                    aria-current={active ? "location" : undefined}
                    className={`flex items-center text-base whitespace-nowrap transition-colors duration-200 ease-[ease] max-md:-mx-2 max-md:px-2 max-md:focus-visible:-outline-offset-2 md:text-[0.9375rem] ${linkTone(active)}`}
                  >
                    <span
                      data-mark
                      data-label={section.label}
                      className={`reserve-bold ${active ? "font-semibold" : "font-medium"}`}
                    >
                      {section.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ol>
        </nav>

        <div className="col-start-2 row-start-1 flex items-center gap-x-6 md:col-start-3">
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center text-[0.9375rem] font-semibold underline decoration-ink/30 transition-[text-decoration-color,scale] duration-[160ms] ease-out-strong hover:decoration-ink active:scale-[0.97] md:hidden lg:inline-flex"
          >
            Resume (PDF)
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="hidden min-h-11 items-center bg-spot px-5 text-[0.9375rem] font-semibold text-paper transition-[background-color,scale] duration-[160ms] ease-out-strong hover:bg-spot-deep active:scale-[0.97] md:inline-flex"
          >
            Email me
          </a>
        </div>

        {/* Phones: Email docks at the end of the section strip, full strip
            height and flush to the screen edge. */}
        <a
          href={`mailto:${profile.email}`}
          className="col-start-2 row-start-2 -mr-5 inline-flex items-center self-stretch bg-spot px-5 text-base font-semibold text-paper transition-colors duration-[160ms] ease-out-strong hover:bg-spot-deep focus-visible:outline-paper focus-visible:-outline-offset-4 active:bg-spot-deep sm:-mr-8 sm:px-8 md:hidden"
        >
          Email me
        </a>
      </div>

      <nav
        aria-label="Selected work"
        inert={!inWork}
        className={`absolute inset-x-0 top-full hidden border-b border-rule bg-paper transition-[opacity,translate] duration-[160ms] ease-out-strong motion-reduce:translate-y-0 md:block ${
          inWork ? "opacity-100" : "pointer-events-none -translate-y-1 opacity-0"
        }`}
      >
        <div className={bookContainer}>
          <ol ref={worksRef} className="relative flex h-11 gap-x-8">
            <Mark mark={workMark} />
            {workEntries.map((work) => {
              const active = work.id === activeWork;
              return (
                <li key={work.id} data-target={work.id} className="flex shrink-0">
                  <a
                    href={`#${work.id}`}
                    data-mark
                    aria-current={inWork && active ? "location" : undefined}
                    className={`flex items-center gap-x-2 text-sm whitespace-nowrap transition-colors duration-200 ease-[ease] ${linkTone(active)}`}
                  >
                    <span className="tabular-nums">{work.number}</span>
                    <span
                      data-label={work.label}
                      className={`reserve-bold ${active ? "font-semibold" : "font-medium"}`}
                    >
                      {work.label}
                    </span>
                    <span className="text-graphite tabular-nums">{work.year}</span>
                  </a>
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </header>
  );
};

export default BookNav;
