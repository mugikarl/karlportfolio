interface SectionHeadProps {
  id: string;
  title: string;
  lede?: string;
}

// Top tier of the book: an ink rule, the section title at display size, and
// an optional one-line lede.
const SectionHead = ({ id, title, lede }: SectionHeadProps) => (
  <div className="border-t border-ink pt-6 lg:pt-8">
    <h2
      id={id}
      tabIndex={-1}
      className="text-[clamp(2.75rem,4.2vw,4rem)] leading-[0.92] font-semibold tracking-[-0.035em]"
    >
      {title}
    </h2>
    {lede && (
      <p className="mt-5 max-w-[52ch] font-serif text-xl leading-snug text-graphite">
        {lede}
      </p>
    )}
  </div>
);

export default SectionHead;
