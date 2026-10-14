import SectionHead from "../components/SectionHead";
import { bookContainer, sectionGap } from "../components/layout";
import { certifications, education, experience } from "../data/profile";

const rowClass =
  "grid gap-x-8 gap-y-1 border-b border-rule py-6 md:grid-cols-[11rem_minmax(0,1fr)] lg:grid-cols-[14rem_minmax(0,1fr)] lg:py-8";

const groupHeadClass = "text-2xl leading-tight font-semibold tracking-[-0.02em]";

const Experience = () => {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className={`${bookContainer} ${sectionGap} scroll-mt-nav`}
    >
      <SectionHead
        id="experience-title"
        title="Experience"
        lede="Freelance work, an internship, and heading backend for a student systems team, alongside my IT degree."
      />

      <h3 className={`mt-12 lg:mt-16 ${groupHeadClass}`}>Positions</h3>
      <ol className="mt-5 border-t border-ink">
        {experience.map((position) => (
          <li key={position.title} className={rowClass}>
            <p className="text-graphite tabular-nums">{position.period}</p>
            <div>
              <h4 className="text-lg leading-tight font-semibold tracking-[-0.01em]">
                {position.title}
              </h4>
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

      <h3 className={`mt-16 lg:mt-20 ${groupHeadClass}`}>Education</h3>
      <div className={`mt-5 border-t border-ink ${rowClass}`}>
        <p className="text-graphite tabular-nums">{education.period}</p>
        <div>
          <h4 className="text-lg leading-tight font-semibold tracking-[-0.01em]">
            {education.degree}
          </h4>
          <p className="mt-1 text-graphite">{education.school}</p>
          <p className="mt-3 max-w-[65ch] font-serif leading-relaxed">
            {education.honors}
          </p>
        </div>
      </div>

      <h3 className={`mt-16 lg:mt-20 ${groupHeadClass}`}>Certifications</h3>
      <ul className="mt-5 border-t border-ink">
        {certifications.map((cert) => (
          <li key={cert} className="border-b border-rule py-4 font-serif">
            {cert}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
