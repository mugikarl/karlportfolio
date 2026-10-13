import { certifications, education, experience } from "../data/profile";

const rowClass =
  "grid gap-x-8 gap-y-1 border-b border-rule py-5 md:grid-cols-[11rem_minmax(0,1fr)]";

const Experience = () => {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="scroll-mt-4 border-b border-rule px-5 py-14 sm:px-8 lg:px-14 lg:py-20"
    >
      <h2
        id="experience-title"
        tabIndex={-1}
        className="text-[clamp(1.875rem,2.8vw,2.875rem)] leading-[1.02] font-semibold tracking-[-0.03em]"
      >
        Experience
      </h2>

      <ol className="mt-10 border-t border-ink">
        {experience.map((position) => (
          <li key={position.title} className={rowClass}>
            <p className="text-graphite tabular-nums">{position.period}</p>
            <div>
              <h3 className="text-lg leading-tight font-semibold tracking-[-0.01em]">
                {position.title}
              </h3>
              <p className="mt-1 text-graphite">
                {position.org} · {position.place}
              </p>
              <p className="mt-3 max-w-[65ch] font-serif leading-relaxed">
                {position.summary}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <h3 className="mt-14 text-xl font-semibold tracking-[-0.015em]">
        Education
      </h3>
      <div className={`mt-4 border-t border-ink ${rowClass}`}>
        <p className="text-graphite tabular-nums">{education.period}</p>
        <div>
          <p className="text-lg leading-tight font-semibold tracking-[-0.01em]">
            {education.degree}
          </p>
          <p className="mt-1 text-graphite">{education.school}</p>
          <p className="mt-3 max-w-[65ch] font-serif leading-relaxed">
            {education.honors}
          </p>
        </div>
      </div>

      <h3 className="mt-14 text-xl font-semibold tracking-[-0.015em]">
        Certifications
      </h3>
      <ul className="mt-4 border-t border-ink">
        {certifications.map((cert) => (
          <li key={cert} className="border-b border-rule py-3 font-serif">
            {cert}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
