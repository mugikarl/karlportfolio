import { featuredWorks } from "./projects";

export type View = "cover" | "book";

export const indexSections = [
  ...featuredWorks.map((work, i) => ({
    id: work.id,
    number: String(i + 1),
    label: work.title,
    year: work.year,
  })),
  { id: "other-work", number: "", label: "Other work", year: undefined },
  { id: "experience", number: "", label: "Experience", year: undefined },
  { id: "contact", number: "", label: "Contact", year: undefined },
];
