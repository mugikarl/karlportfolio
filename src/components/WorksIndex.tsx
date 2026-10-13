import { useLayoutEffect, useRef, useState, type MouseEvent } from "react";
import { indexSections } from "../data/sections";
import { profile, education } from "../data/profile";
import { isPlainClick } from "./isPlainClick";

interface WorksIndexProps {
  activeId: string;
  onCover: () => void;
}

const WorksIndex = ({ activeId, onCover }: WorksIndexProps) => {
  const handleCover = (event: MouseEvent) => {
    if (!isPlainClick(event)) return;
    event.preventDefault();
    onCover();
  };

  const listRef = useRef<HTMLOListElement>(null);
  const [mark, setMark] = useState<{ y: number; h: number } | null>(null);

  useLayoutEffect(() => {
    const place = () => {
      const row = listRef.current?.querySelector<HTMLElement>(
        `[data-target="${activeId}"]`,
      );
      if (row) setMark({ y: row.offsetTop, h: row.offsetHeight });
    };
    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [activeId]);

  return (
    <header className="border-b border-rule px-5 pt-8 pb-10 sm:px-8 lg:sticky lg:top-0 lg:flex lg:h-dvh lg:flex-col lg:overflow-y-auto lg:border-b-0 lg:border-r lg:px-10 lg:pt-10 lg:pb-8">
      <div>
        <p className="text-[clamp(2.75rem,4.2vw,4rem)] leading-[0.92] font-semibold tracking-[-0.035em]">
          <a
            href="/"
            onClick={handleCover}
            className="transition-colors duration-200 ease-[ease] hover:text-graphite"
          >
            {profile.name}
            <span className="sr-only">, back to the start</span>
          </a>
        </p>
        <p className="mt-4 text-lg font-medium">{profile.role}</p>
        <p className="mt-2 max-w-[30ch] font-serif text-[1.0625rem] leading-snug text-graphite">
          {profile.tagline}
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex min-h-11 items-center bg-spot px-5 text-[0.9375rem] font-semibold text-paper transition-[background-color,scale] duration-[160ms] ease-out-strong hover:bg-spot-deep active:scale-[0.97]"
          >
            Email Karl
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center text-[0.9375rem] font-semibold underline decoration-ink/30 transition-[text-decoration-color,scale] duration-[160ms] ease-out-strong hover:decoration-ink active:scale-[0.97]"
          >
            Resume (PDF)
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>

      <p className="mt-6 text-sm text-graphite lg:hidden">
        {profile.location}. {profile.availability}.
      </p>
      <nav aria-label="Sections" className="mt-6 lg:hidden">
        <ol className="border-t border-rule">
          {indexSections
            .filter((section) => section.number)
            .map((section) => (
              <li key={section.id} className="border-b border-rule">
                <a
                  href={`#${section.id}`}
                  className="grid min-h-11 grid-cols-[1.25rem_1fr_auto] items-baseline gap-x-2 py-2 text-[0.9375rem]"
                >
                  <span className="text-graphite tabular-nums">{section.number}</span>
                  <span className="font-medium">{section.label}</span>
                  <span className="text-sm text-graphite tabular-nums">{section.year}</span>
                </a>
              </li>
            ))}
        </ol>
        <ul className="mt-1 -mb-2 flex flex-wrap gap-x-6">
          {indexSections
            .filter((section) => !section.number)
            .map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="inline-flex min-h-11 items-center text-[0.9375rem] font-medium underline decoration-ink/25 hover:decoration-ink"
                >
                  {section.label}
                </a>
              </li>
            ))}
        </ul>
      </nav>

      <nav aria-label="Contents" className="hidden lg:mt-12 lg:block">
        <h2 className="text-sm text-graphite">Works</h2>
        <ol ref={listRef} className="relative mt-3 border-t border-rule">
          {mark && (
            <span
              aria-hidden
              className="absolute top-0 left-0 h-px w-[3px] origin-top bg-spot transition-transform duration-[250ms] ease-in-out-strong motion-reduce:transition-none"
              style={{ transform: `translateY(${mark.y}px) scaleY(${mark.h})` }}
            />
          )}
          {indexSections.map((section) => {
            const active = section.id === activeId;
            return (
              <li
                key={section.id}
                data-target={section.id}
                className="border-b border-rule"
              >
                <a
                  href={`#${section.id}`}
                  aria-current={active ? "location" : undefined}
                  className={`grid min-h-11 grid-cols-[1.5rem_1fr_auto] items-baseline gap-x-2 py-2.5 pl-3 text-[0.9375rem] transition-colors duration-200 ease-[ease] ${
                    active ? "text-ink" : "text-graphite hover:text-ink"
                  }`}
                >
                  <span className="tabular-nums">{section.number}</span>
                  <span className={active ? "font-semibold" : "font-medium"}>
                    {section.label}
                  </span>
                  <span className="tabular-nums text-sm">{section.year}</span>
                </a>
              </li>
            );
          })}
        </ol>
      </nav>

      <div className="hidden space-y-1 text-sm text-graphite lg:mt-auto lg:block lg:pt-10">
        <p>{education.degree}</p>
        <p>{education.school}, 2026</p>
        <p className="pt-2 text-ink">
          {profile.location}. {profile.availability}.
        </p>
      </div>
    </header>
  );
};

export default WorksIndex;
