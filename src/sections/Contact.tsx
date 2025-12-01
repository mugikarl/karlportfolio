import { FaEnvelope, FaFacebook, FaLinkedin } from "react-icons/fa";

const contacts = [
  {
    id: "email",
    label: "Email",
    value: "mugikarljustin@gmail.com",
    href: "mailto:mugikarljustin@gmail.com",
    icon: FaEnvelope,
  },
  {
    id: "facebook",
    label: "Facebook",
    value: "facebook.com/juznatividad",
    href: "https://facebook.com/juznatividad",
    icon: FaFacebook,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/mugikarl",
    href: "https://linkedin.com/in/mugikarl",
    icon: FaLinkedin,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="space-y-4 text-center md:text-left">
        <p className="text-sm uppercase tracking-[0.4em] text-blue-600">
          Contact
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {contacts.map(({ id, href, icon: Icon, label, value }) => (
          <a
            key={id}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col gap-3 rounded-2xl border border-blue-100 bg-white/70 p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <Icon size={22} aria-hidden />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-blue-600">
                  {label}
                </p>
                <p className="text-lg font-semibold text-slate-900">{value}</p>
              </div>
            </div>
            <span className="text-sm font-medium text-blue-600">
              {label === "Email" ? "Say hello" : "Visit profile"} →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
