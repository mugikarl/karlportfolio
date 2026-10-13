import { FiArrowUpRight, FiLock } from "react-icons/fi";
import type { WorkLink } from "../data/projects";

const WorkLinkLabel = ({ link }: { link: WorkLink }) => {
  if (!link.href) {
    return (
      <span className="inline-flex items-start gap-1.5 text-graphite">
        <FiLock aria-hidden className="mt-[0.2em] shrink-0" size={13} />
        {link.label}
      </span>
    );
  }

  return (
    <a
      href={link.href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-start gap-1 font-medium text-spot underline decoration-spot/40 transition-colors duration-200 ease-[ease] hover:text-spot-deep hover:decoration-spot-deep"
    >
      <span>
        {link.label}
        <span className="sr-only"> (opens in a new tab)</span>
      </span>
      <FiArrowUpRight
        aria-hidden
        className="mt-[0.15em] shrink-0"
        size={15}
      />
    </a>
  );
};

export default WorkLinkLabel;
