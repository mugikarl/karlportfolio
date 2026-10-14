export type LinkKind = "live" | "github" | "figma" | "private";

export type WorkLink = {
  kind: LinkKind;
  label: string;
  href?: string;
};

export const linkKindLabel: Record<LinkKind, string> = {
  live: "Live site",
  github: "Source",
  figma: "Design file",
  private: "Access",
};

export type Plate = {
  small: string;
  large: string;
  largeWidth: number;
  width: number;
  height: number;
};

export type Work = {
  id: string;
  title: string;
  /** Label for the book navbar's works row, where full titles do not fit. */
  shortTitle?: string;
  summary: string;
  plate: Plate;
  /** Cover thumbnail when the plate's top crop does not read at small sizes. */
  thumb?: string;
  /** Tighter crop for the phone cover list, where thumbnails are 7rem wide. */
  thumbPhone?: string;
  alt: string;
  period?: string;
  year?: string;
  context?: string;
  role: string;
  stack: string[];
  link: WorkLink;
  notes: string[];
};

const plateUrls = import.meta.glob("../assets/plates/*.webp", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const plate = (name: string, largeWidth: number, largeHeight: number): Plate => ({
  small: plateUrls[`../assets/plates/${name}-800.webp`],
  large: plateUrls[`../assets/plates/${name}-1600.webp`],
  largeWidth,
  width: largeWidth,
  height: largeHeight,
});

export const featuredWorks: Work[] = [
  {
    id: "prestige-pickleball",
    title: "The Prestige Pickleball Society",
    shortTitle: "Prestige",
    summary:
      "Court booking and operations platform for a private residential community.",
    plate: plate("pickleinprestige", 1600, 872),
    alt: "The Prestige Pickleball Society home page, with a Book Your Court headline beside a live grid of court availability by hour.",
    period: "Jul 2026\u00a0- present",
    year: "2026",
    context: "Freelance client project, in production",
    role: "Freelance full-stack developer",
    stack: [
      "TypeScript",
      "Next.js",
      "React",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Resend",
      "Vercel",
    ],
    link: {
      kind: "live",
      label: "pickleinprestige.com",
      href: "https://pickleinprestige.com",
    },
    notes: [
      "Built and deployed a production platform supporting court reservations, GCash payment-proof submissions, administrative payment review, rental inventory, QR check-in, credits, and automated notifications.",
      "Designed a secure Supabase and PostgreSQL backend using row-level security, transactional database functions, audit trails, and concurrency controls to protect financial operations and prevent double bookings.",
    ],
  },
  {
    id: "admissions-chatbot",
    title: "Ateneo Admissions and Aid Chatbot",
    shortTitle: "Chatbot",
    summary:
      "A student-focused chatbot that guides Ateneo de Davao University applicants through admissions and financial aid.",
    plate: plate("chatbot", 1139, 573),
    thumb: plateUrls["../assets/plates/chatbot-thumb.webp"],
    thumbPhone: plateUrls["../assets/plates/chatbot-thumb-phone.webp"],
    alt: "Screenshot of the Ateneo Admissions and Aid Chatbot interface.",
    period: "Jul\u00a0- Nov 2025",
    year: "2025",
    context: "Thesis capstone, team project",
    role: "Led system integration and retrieval",
    stack: [
      "Python",
      "Django",
      "React",
      "Word2Vec",
      "TF-IDF",
      "ChromaDB",
      "Supabase",
    ],
    link: {
      kind: "github",
      label: "Team repository on GitHub",
      href: "https://github.com/joamdlim/addu-admissions-chatbot",
    },
    notes: [
      "Architected the end-to-end pipeline and system integration, connecting a React Vite frontend with a Django backend for low-latency communication with the language model.",
      "Implemented text processing and embedding pipelines using NLTK and Word2Vec, with TF-IDF and ChromaDB, to raise semantic-similarity precision for accurate document retrieval.",
    ],
  },
  {
    id: "wingman",
    title: "Wingman",
    shortTitle: "Wingman",
    summary:
      "Restaurant management system for BawkBawk: inventory, orders, sales, and staff attendance in one place.",
    plate: plate("wingman", 1520, 685),
    alt: "Screenshot of the Wingman management system for BawkBawk.",
    period: "Jan\u00a0- May 2025",
    year: "2025",
    context: "Built for BawkBawk",
    role: "Led end-to-end development",
    stack: ["Python", "Django", "React (Vite)", "PostgreSQL", "Supabase"],
    link: {
      kind: "github",
      label: "Source on GitHub",
      href: "https://github.com/mugikarl/Wingman",
    },
    notes: [
      "Led the end-to-end development of a management system integrating inventory tracking, order processing, sales analytics, and staff attendance.",
      "Architected the cloud database on Supabase, with secure authentication and role-based access control to protect operational and staff profile data.",
    ],
  },
  {
    id: "samahan-palaro",
    title: "SAMAHAN Palaro 2024-25",
    shortTitle: "Palaro",
    summary:
      "The official event and gallery website for SAMAHAN Palaro 2024-25 at Ateneo de Davao University.",
    plate: plate("palaro", 1600, 779),
    alt: "The SAMAHAN Palaro 2024-25 website hero with bold event artwork.",
    period: "Aug\u00a0- Sep 2024",
    year: "2024",
    context: "SAMAHAN, Ateneo de Davao University",
    role: "UI design, initial and final",
    stack: ["Figma", "Next.js", "TypeScript", "Tailwind CSS"],
    link: {
      kind: "live",
      label: "Live site on Vercel",
      href: "https://samahan-palaro-2024-samahan-system-developments-projects.vercel.app",
    },
    notes: [
      "Designed the initial responsive interface in Figma for the deployed event gallery website.",
      "Led the final UI designs carried into the build.",
    ],
  },
];

export const otherWorks: Work[] = [
  {
    id: "ai-automation",
    title: "AI Automation System",
    summary:
      "Email marketing workflow that writes personalized copy with GPT-4o and logs delivery back to the source sheet.",
    plate: plate("automation", 1364, 737),
    alt: "The n8n workflow canvas for the AI email automation.",
    role: "Designed and built the workflow",
    stack: ["n8n", "GPT-4o", "Google Sheets", "Gmail"],
    link: { kind: "private", label: "Private workflow, no public repository" },
    notes: [
      "Fetches lead data from Google Sheets, filters and validates contact details, generates personalized email copy with GPT-4o, and sends it through Gmail.",
      "Logs delivery status back to the sheet, with built-in rate limiting.",
    ],
  },
  {
    id: "order-menu",
    title: "Order and Menu Management System",
    summary:
      "Create, read, update, and delete operations for an order subsystem and a menu management subsystem.",
    plate: plate("orderandmenu", 1519, 713),
    alt: "Screenshot of the Order and Menu Management System.",
    role: "Led development",
    stack: ["Django", "Python", "HTML"],
    link: {
      kind: "github",
      label: "Source on GitHub",
      href: "https://github.com/mugikarl/sales-subsystem",
    },
    notes: [
      "Led the development.",
      "Built the create and update operations.",
    ],
  },
  {
    id: "univents-admin",
    title: "Univents Admin Portal",
    summary:
      "Admin interface for the Univents app, managing events and organizations.",
    plate: plate("adminportal", 988, 466),
    alt: "Screenshot of the Univents Admin Portal.",
    role: "UI design and Firebase integration",
    stack: ["Flutter", "Dart", "Firebase"],
    link: {
      kind: "github",
      label: "Source on GitHub",
      href: "https://github.com/mugikarl/admin_web_portal_f2",
    },
    notes: [
      "Contributed to the portal's UI design.",
      "Connected the portal to Firebase.",
    ],
  },
  {
    id: "jedd-estate",
    title: "JEDD Estate",
    summary: "A proposed website UI for the JEDD real estate company.",
    plate: plate("jedd", 1132, 702),
    alt: "Screenshot of the JEDD Estate website design.",
    role: "UI design and prototype flow",
    stack: ["Figma"],
    link: {
      kind: "figma",
      label: "Design file in Figma",
      href: "https://www.figma.com/design/vVCLtNmPAKfxgLvbn2Y1Lb/JEDD-Real-Estate?node-id=0-1&p=f",
    },
    notes: [
      "Designed the major pages of the website.",
      "Built most of the prototype flow.",
    ],
  },
  {
    id: "notes-app",
    title: "Notes App",
    summary:
      "An application for creating, viewing, editing, and deleting notes.",
    plate: plate("notesapp", 1600, 791),
    alt: "Screenshot of the Notes App.",
    role: "Built components",
    stack: ["React (Vite)", "TypeScript", "Chart.js", "Node.js"],
    link: {
      kind: "github",
      label: "Team repository on GitHub",
      href: "https://github.com/maeEsp/notesApp",
    },
    notes: ["Built interface components."],
  },
  {
    id: "shopping-cart",
    title: "Shopping Cart",
    summary:
      "A storefront where users add products to a cart, check out, and see the total.",
    plate: plate("shoppingcart", 1600, 802),
    alt: "Screenshot of the Shopping Cart storefront.",
    role: "Built the whole project",
    stack: ["React (Vite)", "JavaScript"],
    link: {
      kind: "github",
      label: "Source on GitHub",
      href: "https://github.com/mugikarl/shopping-cart",
    },
    notes: ["Developed the whole project."],
  },
  {
    id: "student-management",
    title: "Student Management System",
    summary:
      "Create, read, update, and delete operations for student records.",
    plate: plate("sms", 1085, 804),
    alt: "Screenshot of the Student Management System.",
    role: "Led development",
    stack: ["Django", "Python", "HTML"],
    link: {
      kind: "github",
      label: "Team repository on GitHub",
      href: "https://github.com/bjgarapoc/student_management_system",
    },
    notes: [
      "Led the development.",
      "Built the create and update operations.",
    ],
  },
];
