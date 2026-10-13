export const profile = {
  name: "Karl Natividad",
  role: "Fullstack software engineer",
  tagline: "I like building things people actually use.",
  location: "General Santos City, PH",
  availability: "Open to remote and onsite",
  email: "karljnatividad@gmail.com",
  resume: `/${encodeURIComponent("Karl Natividad - Resume.pdf")}`,
  links: [
    {
      id: "linkedin",
      label: "LinkedIn",
      handle: "linkedin.com/in/mugikarl",
      href: "https://www.linkedin.com/in/mugikarl/",
    },
    {
      id: "github",
      label: "GitHub",
      handle: "github.com/mugikarl",
      href: "https://github.com/mugikarl",
    },
  ],
};

export type Position = {
  period: string;
  title: string;
  org: string;
  place: string;
  summary: string;
};

export const experience: Position[] = [
  {
    period: "Jul 2026\u00a0- present",
    title: "Freelance full-stack developer",
    org: "Self-employed",
    place: "Remote",
    summary:
      "Design, build, deploy, and maintain production web applications for clients, from requirements and database design through testing, deployment, and ongoing support.",
  },
  {
    period: "Jan\u00a0- Mar 2026",
    title: "Full stack developer intern",
    org: "Tech Advise Solutions",
    place: "Davao City",
    summary:
      "Led the development of a proprietary full-stack application and its core backend, and wrote the system proposal and technical specifications for a separate cross-platform project.",
  },
  {
    period: "Jul 2025\u00a0- May 2026",
    title: "Backend development head",
    org: "SAMAHAN Systems Development, Ateneo de Davao University",
    place: "Davao City",
    summary:
      "Co-led onboarding and recruitment, trained members on Git workflows and pull-request reviews, founded the backend documentation center, and directed the backend of a web system for a partner organization.",
  },
];

export const education = {
  period: "2022\u00a0- 2026",
  school: "Ateneo de Davao University",
  degree: "BS Information Technology, Magna Cum Laude",
  honors: "President's Lister (3rd and 4th year), Dean's Lister (2nd year)",
};

export const certifications = [
  "Cisco Certified CyberOps Associate",
  "Cisco Networking Academy: Introduction to Networks",
];
