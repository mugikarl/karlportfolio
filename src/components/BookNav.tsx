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
    const left = row.offsetLeft;
    const right = left + row.offsetWidth;
    if (left < strip.scrollLeft || right > strip.scrollLeft + strip.clientWidth) {
      strip.scrollTo({ left: Math.max(0, left - 20) });
    }
  }, [activeSection]);

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper">
      <div
        className={`${bookContainer} grid grid-cols-[minmax(0,1fr)_auto] items-center md:grid-cols-[auto_minmax(0,1fr)_auto]`}
      >
        <p className="flex h-12 items-center md:h-16">
          <a
            href="/"
            onClick={handleCover}
            className="text-lg leading-tight font-semibold tracking-[-0.01em] transition-colors duration-200 ease-[ease] hover:text-graphite"
          >
            {profile.name}
            <span className="sr-only">, back to the start</span>
          </a>
        </p>

        <nav
          aria-label="Sections"
          className="no-scrollbar col-span-2 -mx-5 overflow-x-auto border-t border-rule px-5 sm:-mx-8 sm:px-8 md:col-span-1 md:mx-0 md:ml-8 md:self-stretch lg:ml-12 md:overflow-visible md:border-t-0 md:px-0"
        >
          <ol ref={sectionsRef} className="relative flex h-11 gap-x-6 md:h-full md:gap-x-8">
            <Mark mark={sectionMark} />
            {bookSections.map((section) => {
              const active = section.id === activeSection;
              return (
                <li key={section.id} data-target={section.id} className="flex shrink-0">
                  <a
                    href={`#${section.id}`}
                    aria-current={active ? "location" : undefined}
                    className={`flex items-center text-[0.9375rem] whitespace-nowrap transition-colors duration-200 ease-[ease] max-md:-mx-2 max-md:px-2 max-md:focus-visible:-outline-offset-2 ${linkTone(active)}`}
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
            className="hidden min-h-11 items-center text-[0.9375rem] font-semibold underline decoration-ink/30 transition-[text-decoration-color,scale] duration-[160ms] ease-out-strong hover:decoration-ink active:scale-[0.97] lg:inline-flex"
          >
            Resume (PDF)
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex min-h-11 items-center bg-spot px-4 text-[0.9375rem] font-semibold text-paper transition-[background-color,scale] duration-[160ms] ease-out-strong hover:bg-spot-deep active:scale-[0.97] md:px-5"
          >
            Email Karl
          </a>
        </div>
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
