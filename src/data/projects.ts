import projectPalaro from "../assets/Project-PALARO.png";
import projectWingman from "../assets/Project-WINGMAN.png";
import projectChatbot from "../assets/Project-CHATBOT.png";
import projectOrderMenu from "../assets/Project-ORDERANDMENU.png";
import projectAdminPortal from "../assets/Project-AdminPortal.jpg";
import projectNotesApp from "../assets/Project-NotesApp.png";
import projectCart from "../assets/Project-shoppingcart.png";
import projectSMS from "../assets/Project-SMS.png";
import projectJedd from "../assets/Project-Jedd.png";

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  url?: string;
  contributions: string[];
};

export const projects: Project[] = [
  {
    id: "wingman",
    title: "Wingman",
    description:
      "An Integrated System for Inventory, Orders, Sales, and Attendance and Staff Profiling for BawkBawk",
    image: projectWingman,
    tech: ["React Vite", "Javascript", "Django", "Python"],
    url: "https://github.com/mugikarl/Wingman",
    contributions: [
      "Led the entire development, from setting up the backend and frontend to setting up API calls and make components",
      "Majorly contributed to setting up Supabase to the system",
    ],
  },
  {
    id: "chatbot",
    title: "Ateneo Admissions and Aid Chatbot",
    description:
      "A Student-Focused Chatbot for Guiding Ateneo de Davao University Admissions and Aid Processes",
    image: projectChatbot,
    tech: [
      "React Vite",
      "Javascript",
      "Django",
      "Python",
      "LLM",
      "Word2Vec",
      "TF-IDF",
    ],
    url: "https://github.com/joamdlim/addu-admissions-chatbot",
    contributions: [
      "Connected each technologies together",
      "Led the workflow of consistent document retrievals using semantic similarity with the proposed NLPs",
    ],
  },
  {
    id: "palaro2024",
    title: "SAMAHAN Palaro 2024-25",
    description: "The official SAMAHAN Palaro 2024 website",
    image: projectPalaro,
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    url: "https://samahan-palaro-2024-samahan-system-developments-projects.vercel.app",
    contributions: [
      "Designed the initial UI of the website",
      "Led the final designs of the UI of the website",
    ],
  },
  {
    id: "jedd",
    title: "JEDD Estate UI Design",
    description: "A proposed Website UI for the JEDD Estate",
    image: projectJedd,
    tech: ["Figma"],
    url: "https://www.figma.com/design/vVCLtNmPAKfxgLvbn2Y1Lb/JEDD-Real-Estate?node-id=0-1&p=f",
    contributions: [
      "Designed the major pages of the website",
      "Majorly contributed in the Prototype flow",
    ],
  },
  {
    id: "ordermenu",
    title: "Order and Menu Management System",
    description:
      "The system supports full CRUD (Create, Read, Update, Delete) operations for both the Order Subsystem and Menu Management Subsystem, ensuring flexibility and efficient management of operations.",
    image: projectOrderMenu,
    tech: ["Django", "Python", "HTML"],
    url: "https://github.com/mugikarl/sales-subsystem",
    contributions: [
      "Led the development",
      "Contributed in making the Create and Update operations",
    ],
  },
  {
    id: "adminportal",
    title: "Univents Admin Portal",
    description:
      "An admin interface for the app Univents which support full CRUD (Create, Read, Update, Delete) operations for Events and Orgranziations management system..",
    image: projectAdminPortal,
    tech: ["Flutter", "Dart"],
    url: "https://github.com/mugikarl/admin_web_portal_f2",
    contributions: [
      "Contributed in designing the UI of the Portal",
      "Also contributed in connecting the Firebase to the Portal",
    ],
  },
  {
    id: "notes",
    title: "Notes App",
    description:
      "A simple application for creating, viewing, editing, and deleting notes. It allows users to efficiently organize and store their thoughts or tasks.",
    image: projectNotesApp,
    tech: ["React Vite", "TypeScript", "Chart.js", "Node.js"],
    url: "https://github.com/maeEsp/notesApp",
    contributions: ["Contributed in creating components"],
  },
  {
    id: "cart",
    title: "Shopping Cart",
    description:
      "A simple e-shopping cart built with React + Vite, where users can add products to the cart, proceed to checkout, and view the total price and pay.",
    image: projectCart,
    tech: ["React Vite", "JavaScript"],
    url: "https://github.com/mugikarl/shopping-cart",
    contributions: ["Developed the whole project"],
  },
  {
    id: "student",
    title: "Student Management System",
    description:
      "A simple Student Management System where it supports full CRUD (Create, Read, Update, Delete) operation for Student Management",
    image: projectSMS,
    tech: ["Django", "Python", "HTML"],
    url: "https://github.com/bjgarapoc/student_management_system",
    contributions: [
      "Led the whole development",
      "Contributed in Create and Update operations",
    ],
  },
];
