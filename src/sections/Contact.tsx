import { FiArrowUpRight } from "react-icons/fi";
import portrait from "../assets/plates/portrait-480.webp";
import { profile } from "../data/profile";

const Contact = () => {
  const year = new Date().getFullYear();

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-4 px-5 pt-14 pb-10 sm:px-8 lg:px-14 lg:pt-20"
    >
      <h2
        id="contact-title"
        tabIndex={-1}
        className="text-[clamp(1.875rem,2.8vw,2.875rem)] leading-[1.02] font-semibold tracking-[-0.03em]"
      >
        Contact
      </h2>
      <p className="mt-3 max-w-[44ch] font-serif text-xl leading-snug text-graphite">
        Open to remote and onsite roles, including Davao City, and to
        freelance work. Based in {profile.location}.
      </p>

      <div className="mt-10 grid gap-x-12 gap-y-10 border-t border-ink pt-10 md:grid-cols-[minmax(0,1fr)_auto]">
        <div>
          <a
            href={`mailto:${profile.email}`}
            className="inline-block text-[clamp(1.5rem,3.4vw,3rem)] leading-tight font-semibold tracking-[-0.03em] break-all text-spot underline decoration-spot/30 decoration-2 transition-colors duration-200 ease-[ease] hover:text-spot-deep hover:decoration-spot-deep sm:break-normal"
          >
            {profile.email}
          </a>

          <ul className="mt-8 max-w-md border-t border-rule">
            {profile.links.map((link) => (
              <li key={link.id} className="border-b border-rule">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="grid min-h-11 grid-cols-[6.5rem_1fr_auto] items-center gap-x-3 py-2.5"
                >
                  <span className="text-graphite">{link.label}</span>
                  <span className="font-medium">{link.handle}</span>
                  <FiArrowUpRight
                    aria-hidden
                    size={16}
                  />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
            <li className="border-b border-rule">
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="grid min-h-11 grid-cols-[6.5rem_1fr_auto] items-center gap-x-3 py-2.5"
              >
                <span className="text-graphite">Resume</span>
                <span className="font-medium">PDF, 2 pages</span>
                <FiArrowUpRight
                  aria-hidden
                  size={16}
                />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </div>

        <img
          src={portrait}
          alt="Portrait of Karl Natividad"
          width={480}
          height={593}
          loading="lazy"
          decoding="async"
          className="order-first h-auto w-24 bg-paper-deep md:order-none md:w-40"
        />
      </div>

      <footer className="mt-16 flex flex-col gap-2 border-t border-rule pt-5 text-sm text-graphite md:flex-row md:justify-between">
        <p>© {year} {profile.name}</p>
        <p>
          Set in Schibsted Grotesk and Source Serif 4. Built with React,
          TypeScript, Vite, and Tailwind CSS.
        </p>
      </footer>
    </section>
  );
};

export default Contact;
