export interface ProjectWriteUp {
  overview: string;
  architecture: string[];
  hardParts: string[];
  stackBreakdown: { category: string; tools: string }[];
  repoNote?: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  badge: string; // e.g. "GROUP PROJECT   AUG 2025 — AUG 2026"
  statusTag: "ONGOING" | "COMPLETED" | "IN PROGRESS";
  category: "Full-Stack" | "Enterprise & Healthcare" | "Embedded & IoT";
  description: string;
  highlights: string[];
  stack: string[];
  writeUp: ProjectWriteUp;
  githubUrl?: string | null;
  demoUrl?: string | null;
}

export const projectsData: ProjectItem[] = [
  {
    id: "durdans-lims",
    name: "Durdans Hospital LIMS",
    badge: "2ND-YEAR GROUP PROJECT   AUG 2025 — AUG 2026",
    statusTag: "ONGOING",
    category: "Enterprise & Healthcare",
    description:
      "Enterprise laboratory management system covering clinical specimen reception, accessioning, MLT result validation, and quality control with automated tube-cap recognition and real-time Westgard QC evaluation.",
    highlights: [
      "Built end-to-end laboratory modules: Sample Reception, Accessioning, MLT Result Entry, and Quality Control.",
      "Developed automated sample verification with tube-cap recognition, rejection workflows, and priority triage (STAT/Urgent/Routine).",
      "Implemented real-time result validation with dynamic reference ranges, delta-checks, and Westgard QC rules.",
      "Integrated Keycloak RBAC and PostgreSQL audit logs for secure APIs and complete specimen traceability.",
      "Designed responsive real-time lab dashboards with live Turnaround Time (TAT) tracking and panic test alerts.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Spring Boot", "PostgreSQL", "Keycloak", "Westgard QC"],
    githubUrl: null, // [PLACEHOLDER — team project]
    demoUrl: null,
    writeUp: {
      overview:
        "Durdans Hospital LIMS is an enterprise-scale clinical laboratory information management system designed to eliminate specimen handling bottlenecks, prevent clinical errors, and enforce rigorous ISO-aligned quality control standards.",
      architecture: [
        "Spring Boot RESTful micro-architecture with Keycloak Single Sign-On (SSO) and fine-grained Role-Based Access Control.",
        "Automated specimen classification pipeline with tube-cap color matching, barcode reprints, and STAT priority triage.",
        "Clinical verification engine calculating longitudinal delta-checks, demographic reference ranges, and multi-rule Westgard QC algorithms.",
        "PostgreSQL audit logging recording immutable specimen lifecycle timestamps from accessioning to final MLT approval.",
        "Next.js frontend with live Turnaround Time (TAT) tracking monitors and instant clinical alert banners.",
      ],
      hardParts: [
        "Architecting multi-rule Westgard QC algorithms that compute mean, standard deviation, and rule violations across historical control batches in real time.",
        "Guaranteeing zero specimen loss and strict audit compliance under high-throughput concurrent intake hours.",
      ],
      stackBreakdown: [
        { category: "Frontend Tier", tools: "Next.js (App Router), React, TypeScript, Tailwind CSS" },
        { category: "Backend Tier", tools: "Spring Boot, Java 21, Spring Security, Keycloak RBAC" },
        { category: "Database & Audit", tools: "PostgreSQL, Hibernate/JPA, Envers Audit Logging" },
        { category: "Clinical Protocols", tools: "Westgard Multi-Rule QC, Longitudinal Delta-Checks" },
      ],
      repoNote: "2nd-Year Group Project (Faculty of IT, University of Moratuwa).",
    },
  },
  {
    id: "job-tracker",
    name: "Job Application Tracker",
    badge: "INDIVIDUAL PROJECT   AUG 2026 — SEP 2026",
    statusTag: "COMPLETED",
    category: "Full-Stack",
    description:
      "End-to-end career lifecycle management platform featuring an interactive drag-and-drop Kanban board, multi-version resume management via direct AWS S3 presigned uploads, and containerized NestJS REST APIs.",
    highlights: [
      "Interactive drag-and-drop Kanban board managing stages from Applied to Interview, Offer, and Rejection.",
      "Multi-version resume management with direct AWS S3 presigned uploads, interview scheduling, and activity notes timeline.",
      "Architected modular RESTful APIs in NestJS with JWT authentication (access & refresh tokens).",
      "Integrated Flyway database migrations with Prisma ORM and containerized the setup using Docker.",
      "Responsive analytics dashboard providing real-time application metrics and progress tracking.",
    ],
    stack: ["Next.js", "React", "TypeScript", "NestJS", "PostgreSQL", "Prisma", "Flyway", "AWS S3", "Docker"],
    githubUrl: null, // [PLACEHOLDER]
    demoUrl: null,
    writeUp: {
      overview:
        "An end-to-end application lifecycle platform built to streamline internship and job hunting pipelines with real-time stage transitions, direct cloud storage, and detailed application timeline analytics.",
      architecture: [
        "Modular NestJS backend implementing JWT auth with access tokens and rotating refresh tokens stored securely in HTTP-only cookies.",
        "Direct-to-S3 presigned URL generation allowing clients to upload large PDF resume files directly to AWS S3 without loading the Node.js server.",
        "Prisma ORM paired with Flyway migration scripts to guarantee structured database schema version control.",
        "Multi-container Docker Compose environment encompassing frontend, NestJS backend, and PostgreSQL database.",
      ],
      hardParts: [
        "Managing optimistic UI updates for Kanban column reordering while maintaining strict synchronization with PostgreSQL state.",
        "Generating time-limited AWS S3 presigned URLs with exact content-type validation and metadata tagging.",
      ],
      stackBreakdown: [
        { category: "Client Tier", tools: "Next.js, React, TypeScript, Tailwind CSS, dnd-kit" },
        { category: "Server Tier", tools: "NestJS, TypeScript, JWT, Passport.js" },
        { category: "Data & Storage", tools: "PostgreSQL, Prisma ORM, Flyway, AWS S3" },
        { category: "DevOps", tools: "Docker, Docker Compose" },
      ],
      repoNote: "Individual project repository available on request.",
    },
  },
  {
    id: "inkora",
    name: "Inkora Content Platform",
    badge: "PERSONAL PROJECT   DEC 2025 — JAN 2026",
    statusTag: "COMPLETED",
    category: "Full-Stack",
    description:
      "Full-stack blogging platform with user authentication, rich-text publishing, draft auto-saving, real-time AJAX search, and an admin moderation dashboard with CSRF and SQL injection defense.",
    highlights: [
      "Full-stack publishing platform with user authentication and complete CRUD functionality.",
      "Rich-text editor with draft auto-saving and clean, SEO-friendly URL slugs.",
      "Real-time AJAX live search, multi-type reaction system, and dynamic comment threads.",
      "Strengthened security with CSRF tokens, session hardening, and PDO prepared statements.",
      "Comprehensive Admin Dashboard for moderation, user management, and article analytics.",
    ],
    stack: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Bootstrap", "AJAX"],
    githubUrl: null, // [PLACEHOLDER]
    demoUrl: null,
    writeUp: {
      overview:
        "A full-stack content publishing engine built from foundational web standards, focusing on high security, interactive engagement features, and sub-second page performance.",
      architecture: [
        "Custom MVC structure with centralized router handling friendly URL rewrites and parameter sanitation.",
        "Debounced AJAX search engine querying full-text MySQL indexes with instant UI rendering.",
        "Security subsystem enforcing CSRF tokens on mutating requests and PDO prepared statements preventing SQL injections.",
        "Admin control center for editorial reviews, comment moderation, and engagement metrics.",
      ],
      hardParts: [
        "Designing an asynchronous draft autosave mechanism that preserves rich markup without colliding with active user typing.",
      ],
      stackBreakdown: [
        { category: "Backend", tools: "PHP 8, PDO, Session Security" },
        { category: "Database", tools: "MySQL (Relational Schema & Full-Text Indexes)" },
        { category: "Frontend", tools: "JavaScript (ES6), AJAX, Bootstrap 5, CSS3" },
      ],
      repoNote: "Personal project repository available on request.",
    },
  },
  {
    id: "battery-vitals",
    name: "Battery Vitals Testbed",
    badge: "1ST-YEAR GROUP PROJECT   AUG 2024 — AUG 2025",
    statusTag: "COMPLETED",
    category: "Embedded & IoT",
    description:
      "Automated charging, resting, and discharging testbed for Li-Po batteries using ESP32, relay switching, DS18B20 thermal monitoring, and a Python pipeline for State of Health (SOH) curve evaluation.",
    highlights: [
      "Automated charging, resting, and discharging cycles for Li-Po batteries using ESP32 and relay switching.",
      "Integrated TP4056, TP5100, and IP2312 charging modules with configurable discharge loads.",
      "Real-time temperature monitoring and fan-based thermal protection using DS18B20 digital sensors.",
      "Contributed to State of Health (SOH) analysis through Python charge-discharge curve evaluation.",
    ],
    stack: ["Python", "ESP32", "Embedded Systems", "Sensors", "C"],
    githubUrl: null, // [PLACEHOLDER]
    demoUrl: null,
    writeUp: {
      overview:
        "An automated hardware-software testbed engineered to evaluate Li-Po battery degradation patterns and thermal safety over repeated charge-discharge lifecycles.",
      architecture: [
        "ESP32 firmware controlling multi-module charging circuits (TP4056/TP5100/IP2312) and relay switching matrices.",
        "Continuous thermal protection loop reading DS18B20 1-wire sensors with automated cooling fan speed modulation.",
        "Python telemetry ingestion script plotting voltage-time discharge profiles and calculating battery capacity fade.",
      ],
      hardParts: [
        "Managing voltage calibration under active current loads and preventing relay inductive kickback spikes on the ESP32 GPIOs.",
      ],
      stackBreakdown: [
        { category: "Firmware", tools: "C / C++, Arduino / ESP-IDF Framework" },
        { category: "Hardware", tools: "ESP32, TP4056, TP5100, IP2312, DS18B20, Relays" },
        { category: "Data Analysis", tools: "Python, Matplotlib, NumPy" },
      ],
      repoNote: "1st-Year Hardware Group Project (University of Moratuwa).",
    },
  },
];
