# Personal Portfolio Website — Implementation Spec

> This document is a complete specification for an AI coding assistant (e.g. Antigravity) to build a personal portfolio website. Follow this spec closely, in the build order given. Ask clarifying questions only if truly ambiguous.

---

## ✅ Personal Content (filled from CV)

> Filled from Minothma Sithumini's CV. GitHub repo links for some team projects, live demo links, and a photo are still needed — placeholders marked below. Antigravity should leave these as clear `[PLACEHOLDER]` comments in the data file if not filled in before handoff.

```
Full Name:            Minothma Sithumini
Title / Tagline:      Software Engineering Intern | Full-Stack Developer
Short Bio:            IT undergraduate at the University of Moratuwa with hands-on experience
                       in full-stack development, building end-to-end web applications using
                       Next.js, React, Spring Boot, and NestJS. Skilled in designing RESTful
                       APIs, relational database systems, and secure authentication workflows.
                       Currently seeking a Software Engineering Internship to apply technical
                       skills and contribute to real-world projects.

Education:
  - B.Sc. (Hons) in Information Technology and Management, University of Moratuwa,
    2024–Present (CGPA: 3.47/4.00)
  - G.C.E. Advanced Level, Sumana Balika Vidyalaya, Ratnapura, 2022
    (Physical Science Stream — Combined Maths A, Chemistry B, Physics C, Z-score: 1.2516)

Location:              Ratnapura, Sri Lanka

Contact:
  - Email:              minothmasithumini@gmail.com
  - Phone:               +94 71 931 9477
  - GitHub:              https://github.com/Minothma
  - LinkedIn:            https://linkedin.com/in/minothma

Skills (group by category):
  - Languages:           Java, C, Python, JavaScript, TypeScript, PHP, SQL
  - Frontend:             React, Next.js, HTML, CSS, Tailwind CSS
  - Backend:              Spring Boot, RESTful APIs
  - Database:             PostgreSQL, MySQL
  - DevOps & Tools:       Docker, Git, Postman
  - UI/UX & Design:       Figma, GIMP

Projects:

  1. Name:               Durdans Hospital LIMS
     Description:         Enterprise laboratory management system covering Sample Reception,
                           Accessioning, MLT Result Entry, and Quality Control. Built an
                           automated sample verification system with tube-cap recognition,
                           rejection workflows, barcode reprints, and priority triage
                           (STAT/Urgent/Routine). Implemented real-time result validation with
                           dynamic reference range checks, longitudinal delta-checks, and
                           Westgard QC rules. Integrated Keycloak RBAC and PostgreSQL audit
                           logs for secure APIs and full specimen traceability. Designed
                           responsive real-time lab dashboards with live TAT tracking.
     Tech Stack:           Next.js, React, TypeScript, Spring Boot, PostgreSQL, Keycloak
     GitHub Link:          [PLACEHOLDER — team project, confirm repo URL/owner]
     Live Demo Link:       Not yet deployed — omit this field/button for now
     Status:               Ongoing (Aug 2025 – Aug 2026)
     Highlight/Badge:      ⭐ Real-time QC engine with Westgard rules + full audit traceability
     Note:                 2nd-Year Group Project

  2. Name:               Job Application Tracker
     Description:         End-to-end application lifecycle tracking platform with an
                           interactive drag-and-drop Kanban board (Applied → Offer/Rejection).
                           Multi-version resume management with direct AWS S3 presigned
                           uploads, interview scheduling, and an activity notes timeline.
                           Modular RESTful APIs in NestJS with JWT auth (access & refresh
                           tokens), Flyway migrations with Prisma ORM, containerized with
                           Docker. Responsive dashboard with real-time analytics.
     Tech Stack:           Next.js, React, TypeScript, NestJS, PostgreSQL, Prisma, Flyway, AWS S3, Docker
     GitHub Link:          [PLACEHOLDER — individual project, confirm repo URL]
     Live Demo Link:       [PLACEHOLDER — add if deployed]
     Status:               Completed (Aug 2026 – Sep 2026)
     Highlight/Badge:      ⭐ Drag-and-drop Kanban + S3 resume versioning
     Note:                 Individual Project — good candidate for featured/first project

  3. Name:               Inkora
     Description:         Full-stack blogging platform with authentication and full CRUD —
                           rich-text publishing, draft auto-saving, and SEO-friendly URLs.
                           Interactive features including real-time AJAX search, a multi-type
                           reaction system, and a dynamic comment section. Strengthened
                           security with CSRF protection and SQL injection prevention
                           (prepared statements); built an Admin Dashboard for moderation.
     Tech Stack:           PHP, MySQL, JavaScript, HTML, CSS, Bootstrap, AJAX
     GitHub Link:          [PLACEHOLDER — confirm repo URL]
     Live Demo Link:       [PLACEHOLDER — add if deployed]
     Status:               Completed (Dec 2025 – Jan 2026)
     Note:                 Personal Project

  4. Name:               Battery Vitals
     Description:         Automated charging, resting, and discharging cycles for Li-Po
                           batteries using ESP32 and relay-based switching. Integrated
                           TP4056, TP5100, and IP2312 charging modules with configurable
                           discharge loads. Implemented temperature monitoring and
                           fan-based thermal protection using DS18B20; contributed to SOH
                           analysis through charge–discharge curve evaluation.
     Tech Stack:           Python, ESP32, Embedded Systems
     GitHub Link:          [PLACEHOLDER — team project, confirm repo URL/owner]
     Status:               Completed (Aug 2024 – Aug 2025)
     Note:                 1st-Year Group Project — good candidate as a smaller/non-featured card

Resume/CV:              /resume.pdf (place Minothma_Sithumini_CV.pdf in the public/ folder
                         under this filename)

Photo:                 [PLACEHOLDER — not provided]. Antigravity should use an initials-based
                        avatar ("MS") in the hero until a real photo is added.

Optional — Leadership & Activities (small section or folded into About):
  - Director of IT — Rotaract Club of Alumni of University of Moratuwa (Term 26/27)
  - Editorial Committee Member — IEEE RAS Student Branch Chapter, University of Moratuwa
  - Committee Member — IEEE Communications Society Student Branch Chapter, University of Moratuwa
  - Committee Member — Cancer Awareness Campaign 2025 & Hand in Hand Sub-Project, Rotaract Club
  - Finance Committee Member — HackElite 2.0, IEEE WIE Student Branch Affinity Group
  - Editorial Committee Member — Rise Up Mora 2025, IEEE Student Branch

Optional — Certifications (small section, or omit and keep CV-only):
  - Cloud Essentials — IBM (May 2025)
  - Python for Data Science — IBM (Mar 2025)
  - SQL and Relational Databases 101 — IBM (Mar 2025)
  - SQL (Advanced) — HackerRank (Apr 2025)
  - Web Design for Beginners — University of Moratuwa (Feb 2025)
  - Python for Beginners — University of Moratuwa (Feb 2025)

References (optional — usually omitted from public portfolio sites, keep on CV only):
  - Mr. B.H. Sudantha, Former Dean & Senior Lecturer, Faculty of IT, UoM
  - Mr. P.A. Dasith Niwanthaka, Software Engineer, Codegen International Pvt Ltd
```

---

## 1. Project Overview

**Purpose:** A personal portfolio website to showcase skills, projects, and background to recruiters and technical interviewers — used primarily as a CV supplement/link.

**Design reference sites** (match this general quality bar — clean, modern, minimal, dark-mode friendly, smooth micro-interactions):
- https://dinith-portfolio-new.vercel.app/
- https://thavishi-weerasinghe.vercel.app/
- https://www.kalanalk.com/
- https://portfolio.imeshm.workers.dev/

**Priorities, in order:** (1) content clarity — recruiter should understand who you are and what you've built within 10 seconds, (2) fast load time, (3) clean visual design, (4) subtle animation/polish. Do not over-animate or sacrifice readability for style.

---

## 2. Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js (App Router, TypeScript) |
| Styling | Tailwind CSS |
| Animation | Framer Motion (used sparingly — scroll reveals, hover states, page transitions) |
| Icons | lucide-react |
| Deployment | Vercel |
| Contact form (optional) | Simple `mailto:` link, or a serverless form handler (e.g. Resend/Formspree) — otherwise just direct email/LinkedIn links |
| Analytics (optional) | Vercel Analytics (free tier) |

This should be a **single Next.js project**, not a full-stack app — no backend/database needed. All content is either hardcoded from the "Personal Content" section above or pulled from a local JSON/TS config file for easy editing.

---

## 3. Site Structure / Sections

Single-page scrolling site with smooth-scroll navigation. Sections, in order:

### 3.1 Navbar
- Fixed/sticky top navbar, transparent → solid on scroll
- Links: Home, About, Projects, Skills, Contact (smooth-scroll anchor links)
- Resume/CV download button (prominent, top-right)
- Dark mode toggle (optional but nice)
- Mobile: hamburger menu

### 3.2 Hero Section
- Name (large, bold)
- Title/tagline
- Short 1-2 line intro
- **Photo:** none provided yet — use a clean initials-based avatar ("MS") or a subtle abstract/gradient visual instead. Swap in a real photo later.
- CTA buttons: "View Projects" (scrolls to projects), "Contact Me" / "Download CV"
- Optional: subtle animated background, gradient, or typing-effect tagline
- Social icons (GitHub, LinkedIn, Email) — small, unobtrusive

### 3.3 About Section
- Short expanded bio, education, and (optionally) leadership/activities folded in as highlights

### 3.4 Skills Section
- Grouped by category (Languages, Frontend, Backend, Database, DevOps & Tools, UI/UX & Design), shown as badge/pill groups

### 3.5 Projects Section (most important — spend the most care here)
- Feature **Job Application Tracker** and **Durdans Hospital LIMS** as the two featured/large cards
- **Inkora** and **Battery Vitals** as smaller/secondary cards
- Each card: name, description, tech stack pills, highlight badge where available, GitHub/demo links (omit demo button if not deployed), status tag (Ongoing/Completed)

### 3.6 Contact Section
- Email, phone, LinkedIn, GitHub — direct links
- Optional simple contact form (mailto fallback is fine given the time limit)

### 3.7 Footer
- Small copyright/name line, social icons repeated

**Responsiveness:** must look good on mobile — test at 375px, 768px, 1440px widths
**Performance:** optimize images (`next/image`), lazy-load below-the-fold content, aim for a good Lighthouse score

---

## 4. Project Structure (Next.js App Router)

```
portfolio/
├── app/
│   ├── layout.tsx              # root layout, font setup, metadata
│   ├── page.tsx                 # single-page site composing all sections
│   ├── globals.css
│   └── favicon.ico
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── ProjectCard.tsx
│       ├── SkillBadge.tsx
│       ├── Button.tsx
│       └── SectionHeading.tsx
├── data/
│   ├── profile.ts               # name, bio, contact links, education
│   ├── skills.ts                # skills grouped by category
│   └── projects.ts              # array of project objects
├── public/
│   ├── resume.pdf
│   └── (project screenshots / og-image / favicon assets)
├── lib/
│   └── utils.ts
├── next.config.js
├── tailwind.config.ts
└── package.json
```

Keeping all content in `data/*.ts` files (not hardcoded inside components) makes it trivial to update projects/skills later without touching component code.

---

## 5. Content Data Shape

```typescript
// data/profile.ts
export const profile = {
  name: "Minothma Sithumini",
  title: "Software Engineering Intern | Full-Stack Developer",
  bio: "IT undergraduate at the University of Moratuwa with hands-on experience in full-stack development, building end-to-end web applications using Next.js, React, Spring Boot, and NestJS. Skilled in designing RESTful APIs, relational database systems, and secure authentication workflows.",
  location: "Ratnapura, Sri Lanka",
  email: "minothmasithumini@gmail.com",
  phone: "+94 71 931 9477",
  github: "https://github.com/Minothma",
  linkedin: "https://linkedin.com/in/minothma",
  resumeUrl: "/resume.pdf",
  photoUrl: null, // [PLACEHOLDER — /profile-photo.jpg, or null to use initials avatar "MS"]
  education: [
    {
      degree: "B.Sc. (Hons) in Information Technology and Management",
      institution: "University of Moratuwa",
      period: "2024 – Present",
      note: "CGPA: 3.47/4.00",
    },
  ],
};

// data/skills.ts
export const skills = [
  { category: "Languages", items: ["Java", "C", "Python", "JavaScript", "TypeScript", "PHP", "SQL"] },
  { category: "Frontend", items: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"] },
  { category: "Backend", items: ["Spring Boot", "RESTful APIs"] },
  { category: "Database", items: ["PostgreSQL", "MySQL"] },
  { category: "DevOps & Tools", items: ["Docker", "Git", "Postman"] },
  { category: "UI/UX & Design", items: ["Figma", "GIMP"] },
];

// data/projects.ts
export const projects = [
  {
    name: "Job Application Tracker",
    description: "End-to-end application lifecycle tracking platform with a drag-and-drop Kanban board, multi-version resume management (AWS S3 presigned uploads), interview scheduling, and real-time analytics dashboard.",
    stack: ["Next.js", "TypeScript", "NestJS", "PostgreSQL", "Prisma", "Flyway", "AWS S3", "Docker"],
    github: null, // [PLACEHOLDER]
    demo: null,
    status: "Completed",
    highlight: "Drag-and-drop Kanban + S3 resume versioning",
    featured: true,
  },
  {
    name: "Durdans Hospital LIMS",
    description: "Enterprise laboratory management system with automated sample verification, real-time QC (Westgard rules), Keycloak RBAC, and live TAT dashboards with full specimen traceability.",
    stack: ["Next.js", "React", "TypeScript", "Spring Boot", "PostgreSQL", "Keycloak"],
    github: null, // [PLACEHOLDER — team repo, confirm owner]
    demo: null,
    status: "Ongoing",
    highlight: "Real-time QC engine with full audit traceability",
    featured: true,
  },
  {
    name: "Inkora",
    description: "Full-stack blogging platform with authentication, rich-text publishing, draft auto-save, real-time AJAX search, and an admin moderation dashboard.",
    stack: ["PHP", "MySQL", "JavaScript", "HTML", "CSS", "Bootstrap", "AJAX"],
    github: null, // [PLACEHOLDER]
    status: "Completed",
    featured: false,
  },
  {
    name: "Battery Vitals",
    description: "Automated Li-Po battery charge/discharge cycling with ESP32, temperature monitoring, thermal protection, and SOH analysis via charge–discharge curve evaluation.",
    stack: ["Python", "ESP32", "Embedded Systems"],
    github: null, // [PLACEHOLDER]
    status: "Completed",
    featured: false,
  },
];
```

---

## 6. Build Order / Milestones

1. **Project bootstrap** — `create-next-app` with TypeScript + Tailwind + App Router
2. **Data layer** — create `data/profile.ts`, `skills.ts`, `projects.ts` with the content above
3. **Layout & theming** — root layout, font setup, color tokens in `tailwind.config.ts`, dark theme base
4. **Navbar + Footer**
5. **Hero section**
6. **About section**
7. **Skills section**
8. **Projects section** (spend the most care here)
9. **Contact section**
10. **Animations pass** — Framer Motion scroll-reveal and hover states
11. **Responsive pass** — verify mobile/tablet layout
12. **SEO & metadata** — `metadata` in `layout.tsx`, favicon
13. **Performance pass** — image optimization, Lighthouse check
14. **Deploy to Vercel**

---

## 7. Deployment

- Push to GitHub, connect repo to **Vercel** (free tier is sufficient)
- Add the live Vercel URL to CV and GitHub profile README once deployed

---

## 8. Notes for the AI Assistant

- Do not fabricate personal details, project descriptions, or metrics not provided above — leave clear `[PLACEHOLDER]` comments for missing GitHub repo links and the photo.
- Prioritize the **Projects section** quality — this is what recruiters read closely.
- Keep the design restrained and professional over flashy.
- Ensure the site builds and deploys cleanly on Vercel with zero config beyond standard Next.js defaults.
