import { featuredWorks } from "./projects";

export type View = "cover" | "book";

// Top level of the book: one entry per section, in reading order.
export const bookSections = [
  { id: "work", label: "Work" },
  { id: "other-work", label: "Other work" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

// Second level, shown under Work in the navbar.
export const workEntries = featuredWorks.map((work, i) => ({
  id: work.id,
  number: String(i + 1),
  label: work.shortTitle ?? work.title,
  year: work.year,
}));
