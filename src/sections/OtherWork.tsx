import { FiPlus } from "react-icons/fi";
import PlateImage from "../components/PlateImage";
import WorkLinkLabel from "../components/WorkLinkLabel";
import { featuredWorks, linkKindLabel, otherWorks } from "../data/projects";

const OtherWork = () => {
  const startAt = featuredWorks.length + 1;

  return (
    <section
      id="other-work"
      aria-labelledby="other-work-title"
      className="scroll-mt-4 border-b border-rule px-5 py-14 sm:px-8 lg:px-14 lg:py-20"
    >
      <h2
        id="other-work-title"
        tabIndex={-1}
        className="text-[clamp(1.875rem,2.8vw,2.875rem)] leading-[1.02] font-semibold tracking-[-0.03em]"
      >
        Other work
      </h2>
      <p className="mt-3 max-w-[52ch] font-serif text-xl leading-snug text-graphite">
        Earlier builds, coursework, and team contributions. Open any entry for
        the screenshot and what I did.
      </p>

      <ol className="mt-10 border-t border-ink">
        {otherWorks.map((work, i) => (
          <li key={work.id} id={work.id} className="border-b border-rule">
            <details className="group">
              <summary className="grid min-h-11 cursor-pointer list-none grid-cols-[2rem_1fr_auto] items-baseline gap-x-3 py-4 transition-colors duration-200 ease-[ease] hover:bg-paper-deep/60 [&::-webkit-details-marker]:hidden">
                <span className="text-graphite tabular-nums">{startAt + i}</span>
                <span>
                  <span className="block text-lg leading-tight font-semibold tracking-[-0.01em]">
                    {work.title}
                  </span>
                  <span className="mt-1 block max-w-[60ch] font-serif text-graphite">
                    {work.summary}
                  </span>
                </span>
                <span className="flex items-center gap-4 self-center">
                  <span className="hidden text-sm text-graphite md:inline">
                    {work.stack.slice(0, 3).join(", ")}
                  </span>
                  <FiPlus
                    aria-hidden
                    size={18}
                    className="transition-transform duration-200 ease-out-strong group-open:rotate-45 motion-reduce:transition-none"
                  />
                </span>
              </summary>

              <div className="disclosure-body grid gap-x-10 gap-y-6 pt-2 pb-8 md:grid-cols-[minmax(0,1.5fr)_minmax(220px,1fr)] md:pl-[2.75rem]">
                <PlateImage
                  plate={work.plate}
                  alt={work.alt}
                  sizes="(min-width: 1024px) 45vw, 100vw"
                />
                <div>
                  <dl className="border-t border-ink text-[0.9375rem]">
                    {[
                      { term: "Role", detail: work.role },
                      { term: "Stack", detail: work.stack.join(", ") },
                      {
                        term: linkKindLabel[work.link.kind],
                        detail: <WorkLinkLabel link={work.link} />,
                      },
                    ].map((fact) => (
                      <div
                        key={fact.term}
                        className="grid grid-cols-[6.5rem_1fr] gap-x-3 border-b border-rule py-2.5"
                      >
                        <dt className="text-graphite">{fact.term}</dt>
                        <dd className="leading-snug">{fact.detail}</dd>
                      </div>
                    ))}
                  </dl>
                  <ul className="mt-5 space-y-2 font-serif leading-relaxed">
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
              </div>
            </details>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default OtherWork;
