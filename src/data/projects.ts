import projectPalaro from "../assets/Project-PALARO.png";
import projectWingman from "../assets/Project-WINGMAN.png";
import projectChatbot from "../assets/Project-CHATBOT.png";
import projectOrderMenu from "../assets/Project-ORDERANDMENU.png";
import projectAdminPortal from "../assets/Project-AdminPortal.jpg";
import projectNotesApp from "../assets/Project-NotesApp.png";
import projectCart from "../assets/Project-shoppingcart.png";
import projectSMS from "../assets/Project-SMS.png";

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  url?: string;
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
  },
  {
    id: "palaro2024",
    title: "SAMAHAN Palaro 2024-25",
    description: "The official SAMAHAN Palaro 2024 website",
    image: projectPalaro,
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    url: "https://samahan-palaro-2024-samahan-system-developments-projects.vercel.app",
  },
  {
    id: "ordermenu",
    title: "Order and Menu Management System",
    description:
      "The system supports full CRUD (Create, Read, Update, Delete) operations for both the Order Subsystem and Menu Management Subsystem, ensuring flexibility and efficient management of operations.",
    image: projectOrderMenu,
    tech: ["Django", "Python", "HTML"],
    url: "https://github.com/mugikarl/sales-subsystem",
  },
  {
    id: "adminportal",
    title: "Univents Admin Portal",
    description:
      "An admin interface for the app Univents which support full CRUD (Create, Read, Update, Delete) operations for Events and Orgranziations management system..",
    image: projectAdminPortal,
    tech: ["Flutter", "Dart"],
    url: "https://github.com/mugikarl/admin_web_portal_f2",
  },
  {
    id: "notes",
    title: "Notes App",
    description:
      "A simple application for creating, viewing, editing, and deleting notes. It allows users to efficiently organize and store their thoughts or tasks.",
    image: projectNotesApp,
    tech: ["React Vite", "TypeScript", "Chart.js", "Node.js"],
    url: "https://github.com/maeEsp/notesApp",
  },
  {
    id: "cart",
    title: "Shopping Cart",
    description:
      "A simple e-shopping cart built with React + Vite, where users can add products to the cart, proceed to checkout, and view the total price and pay.",
    image: projectCart,
    tech: ["React Vite", "JavaScript"],
    url: "https://github.com/mugikarl/shopping-cart",
  },
  {
    id: "student",
    title: "Student Management System",
    description:
      "A simple Student Management System where it supports full CRUD (Create, Read, Update, Delete) operation for Student Management",
    image: projectSMS,
    tech: ["Django", "Python", "HTML"],
    url: "https://github.com/bjgarapoc/student_management_system",
  },
];
