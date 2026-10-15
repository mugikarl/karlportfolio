import { useEffect, type MouseEvent } from "react";
import portrait from "../assets/plates/portrait-480.webp";
import { featuredWorks } from "../data/projects";
import { education, profile } from "../data/profile";
import { bookSections } from "../data/sections";
import { isPlainClick } from "./isPlainClick";
import { preloadPlate } from "./preloadPlate";

interface CoverProps {
  onEnter: (id: string, source: HTMLElement | null) => void;
}

const Cover = ({ onEnter }: CoverProps) => {
  // Warm all four plates once the cover is idle; hover and focus warm one sooner.
  useEffect(() => {
    const warm = () => featuredWorks.forEach((work) => preloadPlate(work.plate));
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(warm, { timeout: 2000 });
      return () => window.cancelIdleCallback(id);
    }
    const id = setTimeout(warm, 1200);
    return () => clearTimeout(id);
  }, []);

  const handleEnter = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    if (!isPlainClick(event)) return;
    event.preventDefault();
    onEnter(id, event.currentTarget.querySelector("img"));
  };

  return (
    <div className="mx-auto min-h-dvh max-w-[1680px] px-5 pt-12 pb-10 sm:px-8 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,40rem)] lg:content-center lg:items-end lg:gap-20 lg:px-[6vw] lg:py-[9vh]">
      <header>
        <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-8">
          <h1
            id="cover-title"
            tabIndex={-1}
            className="text-[clamp(3.25rem,7vw,6rem)] leading-[0.9] font-semibold tracking-[-0.04em]"
          >
            Karl
            <br />
            Natividad
          </h1>
          {/* Beside the name; wraps below it when the column is too narrow. */}
          <figure className="corner-frame mt-2 mr-2 w-21 shrink-0 md:w-30 lg:w-34">
            <img
              src={portrait}
              alt="Portrait of Karl Natividad"
              width={480}
              height={593}
              decoding="async"
              className="block h-auto w-full bg-paper-deep outline outline-1 -outline-offset-1 outline-ink/10"
            />
          </figure>
        </div>
        <p className="mt-7 text-xl font-medium md:text-2xl">{profile.role}</p>
        <p className="mt-1.5 font-serif text-xl text-graphite md:text-2xl">
          {profile.tagline}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex min-h-11 items-center bg-spot px-5 text-[0.9375rem] font-semibold text-paper transition-[background-color,scale] duration-[160ms] ease-out-strong hover:bg-spot-deep active:scale-[0.97]"
          >
            Email me
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

        <div className="mt-10 space-y-1 text-sm text-graphite">
          <p>{education.degree}</p>
          <p>{education.school}, 2026</p>
          <p className="pt-1 text-ink">
            {profile.location}. {profile.availability}.
          </p>
        </div>
      </header>

      <nav aria-label="Selected work" className="mt-14 lg:mt-0">
        <ul className="grid gap-y-4 border-t border-rule pt-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-8 sm:border-t-0 sm:pt-0">
          {featuredWorks.map((work, i) => (
            <li key={work.id}>
              <a
                href={`#${work.id}`}
                onClick={(event) => handleEnter(event, work.id)}
                onPointerEnter={() => preloadPlate(work.plate)}
                onFocus={() => preloadPlate(work.plate)}
                className="group grid grid-cols-[7rem_minmax(0,1fr)] items-center gap-x-4 sm:block"
              >
                <picture className="block">
                  {work.thumbPhone && (
                    <source media="(max-width: 639px)" srcSet={work.thumbPhone} />
                  )}
                  <img
                    src={work.thumb ?? work.plate.small}
                    data-xfade={work.thumb ? "" : undefined}
                    alt=""
                    width={800}
                    height={450}
                    decoding="async"
                    className="aspect-[16/9] w-full bg-paper-deep object-cover object-top outline outline-1 -outline-offset-1 outline-ink/10 [transition:outline-color_200ms_ease,scale_160ms_var(--ease-out-strong)] group-hover:outline-ink/50 group-active:scale-[0.98]"
                  />
                </picture>
                <span className="flex items-baseline gap-x-2 text-[0.9375rem] leading-snug sm:mt-3 sm:text-base">
                  <span className="w-5 shrink-0 text-graphite tabular-nums">{i + 1}</span>
                  <span className="font-semibold underline decoration-transparent underline-offset-4 transition-[text-decoration-color] duration-200 ease-[ease] group-hover:decoration-ink/40">
                    {work.title}
                  </span>
                  <span className="ml-auto pl-3 text-sm text-graphite tabular-nums">{work.year}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <ul className="mt-8 flex flex-wrap gap-x-6 border-t border-ink pt-2">
          {bookSections
            .filter((section) => section.id !== "work")
            .map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={(event) => handleEnter(event, section.id)}
                  className="inline-flex min-h-11 items-center text-[0.9375rem] font-medium underline decoration-ink/25 transition-[text-decoration-color] duration-200 ease-[ease] hover:decoration-ink"
                >
                  {section.label}
                </a>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
};

export default Cover;
