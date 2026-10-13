import type { ReactNode } from "react";
import PlateImage from "../components/PlateImage";
import { FEATURED_PLATE_SIZES } from "../components/preloadPlate";
import WorkLinkLabel from "../components/WorkLinkLabel";
import { linkKindLabel, type Work } from "../data/projects";

interface FeaturedWorkProps {
  work: Work;
  number: number;
}

const FeaturedWork = ({ work, number }: FeaturedWorkProps) => {
  const titleId = `${work.id}-title`;
  const facts: { term: string; detail: ReactNode }[] = [
    { term: "Period", detail: work.period },
    { term: "Context", detail: work.context },
    { term: "Role", detail: work.role },
    { term: "Stack", detail: work.stack.join(", ") },
    { term: linkKindLabel[work.link.kind], detail: <WorkLinkLabel link={work.link} /> },
  ].filter((fact) => fact.detail);

  return (
    <article
      id={work.id}
      aria-labelledby={titleId}
      className="scroll-mt-4 border-b border-rule px-5 pt-8 pb-14 sm:px-8 lg:px-14 lg:pt-14 lg:pb-20"
    >
      <figure>
        <PlateImage
          plate={work.plate}
          alt={work.alt}
          sizes={FEATURED_PLATE_SIZES}
          priority={number === 1}
        />
      </figure>

      <div className="mt-8 grid gap-x-12 gap-y-8 lg:mt-10 xl:grid-cols-[minmax(0,1fr)_minmax(260px,320px)]">
        <div>
          <h2
            id={titleId}
            tabIndex={-1}
            className="text-[clamp(1.875rem,2.8vw,2.875rem)] leading-[1.02] font-semibold tracking-[-0.03em]"
          >
            <span className="mr-[0.35em] font-normal text-graphite tabular-nums">
              {number}
            </span>
            {work.title}
          </h2>
          <p className="mt-3 max-w-[52ch] font-serif text-xl leading-snug text-graphite">
            {work.summary}
          </p>
          <ul className="mt-7 max-w-[65ch] space-y-4 font-serif text-[1.0625rem] leading-relaxed">
            {work.notes.map((note) => (
              <li key={note} className="grid grid-cols-[1.25rem_1fr]">
                <span aria-hidden className="text-graphite">
                  -
                </span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>

        <dl className="self-start border-t border-ink text-[0.9375rem]">
          {facts.map((fact) => (
            <div
              key={fact.term}
              className="grid grid-cols-[6.5rem_1fr] gap-x-3 border-b border-rule py-2.5"
            >
              <dt className="text-graphite">{fact.term}</dt>
              <dd className="leading-snug">{fact.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
};

export default FeaturedWork;
