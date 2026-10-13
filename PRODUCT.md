# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primarily **recruiters and hiring managers** looking at Karl as a candidate for an early-career developer role. They usually arrive from a resume, LinkedIn, or a job application link, skim fast, and decide whether to reach out.

Secondarily **freelance clients**: businesses that want a web app or automation built and are checking whether Karl can deliver.

## Product Purpose

Personal portfolio of Karl Natividad, a 2026 graduate now working freelance. It exists to turn a visit into contact: an interview request (first priority) or a project inquiry.

Success means the visitor quickly understands what Karl builds, believes he can ship it, and knows how to reach him.

## Positioning

**Fullstack developer.** One person who builds the whole web app, from the backend (Django/Python, Supabase, Node.js) to the React/TypeScript frontend, and has also shipped AI-backed systems (a retrieval chatbot, a GPT-4o n8n automation).

Project management, QA, and UI design (Figma, Palaro site UI) are real secondary strengths that support the fullstack claim. They are not separate headline roles.

Tagline: "I like building things people actually use." The earlier "under the hood" line was retired at Karl's request; keep the voice casual.

## Operating Context

- Visitors evaluate on both desktop and mobile, often in short sessions between other candidates.
- The site opens on a cover (name, role, motto, Email and Resume, four project thumbnails). Choosing a project opens the full monograph: a sticky index column beside large project screenshots with a data column of recorded facts. Back or the name returns to the cover.
- Contact happens off-site, by email, LinkedIn, or GitHub.

## Capabilities and Constraints

- Stack: React 19, TypeScript, Vite 7, Tailwind CSS v4, react-icons, and react-router-dom (installed, but the site is currently a single page).
- Project content lives in `src/data/projects.ts` (`id`, `title`, `description`, `image`, `tech`, `url?`, `contributions`). Every project must keep honest **contribution** statements, because many were team projects.
- Views: cover, then the monograph (four featured works, Other work, Experience, Contact).
- Undecided: whether to add a resume download, an experience/education timeline, or a skills section. Nothing for these exists in the repo yet.

## Brand Commitments

- Name: **Karl Natividad**. Contact: karljnatividad@gmail.com, linkedin.com/in/mugikarl, github.com/mugikarl.
- Assets: profile photo `src/assets/2x2-Natividad.jpg`, logo/favicon `public/logo.jpg`.
- Voice: first person, plain, confident, not salesy.

## Evidence on Hand

Resume: `public/Karl Natividad - Resume.pdf`. It is the authority for dates, roles, and wording.
- **Featured works:** The Prestige Pickleball Society (freelance, live at pickleinprestige.com, Jul 2026 – present), the Ateneo Admissions and Aid Chatbot (thesis capstone, Jul – Nov 2025), Wingman (Jan – May 2025), SAMAHAN Palaro 2024–25 (UI design, Aug – Sep 2024).
- **Other works:** listed in `src/data/projects.ts`, with screenshots in `src/assets/`. Web-ready copies live in `src/assets/plates/`.
- **Experience:**
  - Freelance full-stack developer (Jul 2026 – present)
  - Full stack developer intern, Tech Advise Solutions (Jan – Mar 2026)
  - Backend development head, SAMAHAN Systems Development (Jul 2025 – May 2026)
- **Education:** BS Information Technology, Magna Cum Laude, Ateneo de Davao University (2022 – 2026). President's Lister and Dean's Lister.
- **Certifications:** Cisco Certified CyberOps Associate; Cisco Networking Academy: Introduction to Networks.
- **Absent:** testimonials, usage metrics, and client logos. Future work must not invent any of these.

## Product Principles

1. **Prove, don't claim.** Real projects and stated contributions do the persuading. No adjectives standing in for evidence.
2. **Fullstack first.** Every section should reinforce "builds the whole thing". Secondary skills support it, not compete with it.
3. **Recruiter in 30 seconds.** Name, role, best work, and contact must be graspable in one quick scan on any device.
4. **Honest scope.** Distinguish solo work from team contributions, exactly as the data records them.
