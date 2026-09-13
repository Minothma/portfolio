export interface ScreenshotItem {
  url: string;
  title: string;
  caption: string;
}

export interface ProjectContributionSection {
  title: string;
  points: string[];
  screenshots?: ScreenshotItem[];
}

export interface ProjectWriteUp {
  overview: string;
  tagline?: string;
  role?: string;
  teamContext?: string;
  complianceStandards?: string[];
  contributions?: ProjectContributionSection[];
  architecture: string[];
  hardParts: string[];
  stackBreakdown: { category: string; tools: string }[];
  repoNote?: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  badge: string; // e.g. "2ND-YEAR GROUP PROJECT · COMPLETED"
  statusTag: "ONGOING" | "COMPLETED" | "IN PROGRESS";
  category: "Full-Stack" | "Enterprise & Healthcare" | "Embedded & IoT";
  tagline?: string;
  role?: string;
  teamContext?: string;
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
    badge: "2ND-YEAR GROUP PROJECT · COMPLETED",
    statusTag: "COMPLETED",
    category: "Enterprise & Healthcare",
    tagline:
      "Enterprise Laboratory Management ERP for Durdans Hospital Laboratories (with IFS Sri Lanka & University of Moratuwa)",
    role: "Full-Stack Developer & Lead Technical Documenter",
    teamContext: "5-Member Engineering Team · University of Moratuwa, IFS Sri Lanka & Durdans Hospital PLC",
    description:
      "Full-stack healthcare enterprise ERP developed to digitize and automate clinical laboratory diagnostic workflows across 100+ hospital branches in Sri Lanka.",
    highlights: [
      "Built sample reception & pre-analytical accessioning worklists with 3-tier priority triage (STAT, Urgent, Normal) and 5-point quality verification.",
      "Engineered zero-duplication barcode reprint engine and MLT diagnostic result-entry interface with biological reference range auto-flagging.",
    ],
    stack: [
      "Next.js 15",
      "Java 21 / Spring Boot 3",
      "PostgreSQL",
      "Apache Kafka",
      "Keycloak OIDC",
      "Liquibase",
    ],
    githubUrl: "https://github.com/Minothma/durdans-lims",
    demoUrl: null,
    writeUp: {
      tagline:
        "Durdans LIMS · 2nd-Year Enterprise Project in collaboration with IFS Sri Lanka, Durdans Hospital PLC & University of Moratuwa",
      role: "Full-Stack Developer (Sample Lifecycle, MLT Processing & Lead Technical Documenter)",
      teamContext: "5 Members (University of Moratuwa, IFS Sri Lanka, Durdans Hospital PLC)",
      complianceStandards: [
        "ISO 15189 Quality Verification",
        "Clinical Sample Traceability",
        "Role-Based Access Control (RBAC)",
      ],
      overview:
        "Durdans LIMS is an enterprise web application designed to digitize and centralize laboratory operations across Durdans Hospital's network of over 100 branches in Sri Lanka. Built in collaboration with IFS Sri Lanka and Durdans Hospital PLC as our 2nd-year software engineering project, the platform unifies multi-branch laboratory operations, prevents reporting delays, enforces multi-role access control, and maintains full specimen traceability across the 8-phase clinical pipeline.",
      contributions: [
        {
          title: "01. Sample Reception & Pre-Analytical Accessioning Workflow",
          points: [
            "Reception Worklists: Built dedicated worklists enabling reception staff to manage incoming samples with rich metadata (Patient, Sample ID, Test, Priority, Status).",
            "Multi-Criteria Search & Filter: Implemented fast lookups by test type, laboratory department, priority (STAT, Urgent, Normal), and sample status.",
            "Pre-Analytical Verification Gate: Developed checks for specimen integrity, tube-type matching, and collection validity, with standardized rejection reasons and recollection alerts.",
          ],
          screenshots: [
            {
              url: "/projects/durdans/durdan6.png",
              title: "Accessioning Priority Worklist",
              caption: "Multi-branch sample reception dashboard with STAT (4), Urgent (11), and Normal (34) priority triage queues.",
            },
            {
              url: "/projects/durdans/durdan7.png",
              title: "Specimen Chain-of-Custody",
              caption: "Comprehensive specimen metadata view with barcode, tube container type (EDTA Purple), collector audit, and patient details.",
            },
            {
              url: "/projects/durdans/durdan8.png",
              title: "Pre-Analytical Quality Verification Gate",
              caption: "5-point quality validation: Barcode integrity, correct container, volume sufficiency, specimen condition, and collection window check.",
            },
            {
              url: "/projects/durdans/durdan9.png",
              title: "Quality Verification Completed (5/5)",
              caption: "Verified accessioning record passed through the pre-analytical gate, ready for analysis queue dispatch.",
            },
          ],
        },
        {
          title: "02. Zero-Duplication Barcode Reprinting & Audit Exporter",
          points: [
            "Zero-Duplication Barcode Reprint Engine: Allowed staff to locate existing samples and reprint damaged thermal labels without creating duplicate database records, preserving unbroken sample traceability.",
            "Accessioning Log Excel Export: Implemented direct export of accessioning records to Excel for daily operational tracking, branch reporting, and compliance audits.",
          ],
          screenshots: [
            {
              url: "/projects/durdans/durdan10.png",
              title: "Zero-Duplication Barcode Reprint Engine",
              caption: "Instant sample lookup by barcode or order number with live thermal label preview and zero duplicate database writes.",
            },
            {
              url: "/projects/durdans/durdan11.png",
              title: "Accessioning Audit Trail & Excel Exporter",
              caption: "Complete audit log of reception actions (81 actions, 68 accepted, 13 rejected) with one-click export to Excel for compliance.",
            },
          ],
        },
        {
          title: "03. MLT Processing & Result-Entry Engine",
          points: [
            "Technician Worklists: Developed structured MLT worklists organizing pending diagnostic tests by processing status and analyzer selection.",
            "Reference Range & Critical Auto-Flagging: Evaluated test values against normal biological reference ranges, automatically flagging abnormal or critical values.",
            "Dual-Action State Machine: Built 'Save Draft' for in-progress tests alongside 'Submit for Technical Verification' to lock records against unauthorized modification before supervisor review.",
          ],
          screenshots: [
            {
              url: "/projects/durdans/durdan12.png",
              title: "MLT Testing Sample Worklist",
              caption: "Technician diagnostic queue categorized by pending tests, STAT priority, and analyzer status.",
            },
            {
              url: "/projects/durdans/durdan13.png",
              title: "Result Entry & Auto-Flagging Engine",
              caption: "Result input with biological reference range comparison, automatic High/Critical flags, delta checks, analyzer selection, and verification submission state machine.",
            },
          ],
        },
        {
          title: "04. Quality Control (QC) & Laboratory Equipment Telemetry",
          points: [
            "QC Run Tracking: Implemented recording and monitoring of daily Quality Control (QC) batch runs.",
            "Instrument Status Monitoring: Tracked laboratory analyzer availability, operational statuses, and live test volume metrics directly from the database.",
          ],
          screenshots: [
            {
              url: "/projects/durdans/durdan14.png",
              title: "Quality Control (QC) Dashboard",
              caption: "Daily QC run recording with Westgard rules verification for analyzers (Cobas c501) and analytes (HbA1c).",
            },
            {
              url: "/projects/durdans/durdan15.png",
              title: "Live Laboratory Instrument Telemetry",
              caption: "Real-time connectivity and QC operational status monitoring for laboratory analyzers (VITEK 2, Cobas c501, Cobas e411, Sysmex XN-1000).",
            },
          ],
        },
        {
          title: "05. Architecture Modeling & Lead Technical Documentation",
          points: [
            "UML Workflow Modeling: Designed comprehensive UML Activity Diagrams and Class Diagrams defining the complete sample lifecycle, accessioning decision gates, and MLT result processing.",
            "System Architecture Specification: Contributed to end-to-end architectural documentation, API contracts, and integration workflows.",
          ],
        },
      ],
      architecture: [
        "Spring Boot 3 (Java 21) RESTful backend with Keycloak role-based access control across clinical staff roles and branch scopes.",
        "Apache Kafka event messaging with Transactional Outbox pattern for reliable status updates and async notifications.",
        "Automated pre-analytical checks with tube-type validation, barcode reprinting, and STAT emergency triage.",
        "Validation engine computing real-time reference ranges, critical alerts, and QC batch statistics.",
        "Liquibase database schema migrations managing normalized PostgreSQL audit logs and clinical tables.",
        "Next.js 15 App Router frontend with real-time TAT monitors and responsive dashboard layouts.",
        "Containerized deployment with Docker and automated GitHub Actions CI/CD workflows.",
      ],
      hardParts: [
        "Ensuring zero-duplication sample integrity in PostgreSQL when reprinting damaged thermal barcode labels under high-throughput reception.",
        "Building real-time reference range evaluation and abnormal flag calculation with low query latency across multi-test panels.",
        "Maintaining strict state synchronization between MLT result entry, draft saving, and supervisor technical verification handoff.",
      ],
      stackBreakdown: [
        { category: "Frontend", tools: "Next.js 15 (App Router), React, TypeScript, Tailwind CSS, Axios" },
        { category: "Backend", tools: "Java 21, Spring Boot 3, Spring Data JPA, Hibernate, RESTful APIs" },
        { category: "Auth & Security", tools: "Keycloak OAuth2 / OIDC (Multi-Role & Branch-Scoped RBAC)" },
        { category: "Messaging & Events", tools: "Apache Kafka (Transactional Outbox Pattern)" },
        { category: "Database", tools: "PostgreSQL, Liquibase (Version-Controlled Migrations)" },
        { category: "Project Management", tools: "Agile Scrum (Jira, 2-Week Sprints), Git / GitHub" },
        { category: "Testing & Quality", tools: "JUnit 5, Testcontainers (144 Automated Tests)" },
        { category: "Cloud & DevOps", tools: "AWS (EC2, S3), Terraform, Docker, GitHub Actions CI/CD" },
      ],
      repoNote: "Enterprise Project · Durdans Hospital PLC, IFS Sri Lanka & University of Moratuwa",
    },
  },
  {
    id: "job-tracker",
    name: "Job Application Tracker",
    badge: "INDIVIDUAL PROJECT · COMPLETED",
    statusTag: "COMPLETED",
    category: "Full-Stack",
    tagline:
      "Cloud-Native Career Lifecycle Platform with Optimistic Kanban, Direct AWS S3 Vault & NestJS Micro-Architecture",
    role: "Full-Stack Software Engineer (End-to-End Ownership)",
    teamContext: "Individual Software Engineering Project",
    description:
      "End-to-end career lifecycle platform featuring an interactive drag-and-drop Kanban workflow, direct-to-S3 versioned resume uploads, and containerized NestJS REST APIs.",
    highlights: [
      "Interactive drag-and-drop Kanban board (@dnd-kit) across 5 pipeline stages with instant optimistic UI updates and server-error rollback resilience.",
      "Direct-to-S3 presigned binary upload architecture bypassing application servers to eliminate memory bottlenecks and Node.js event-loop blocking.",
      "Stateless dual-token JWT authentication (15-min Access / 7-day Refresh) featuring automatic silent 401 interceptor replay and user-scoped data isolation.",
      "Database governance pairing Flyway immutable raw SQL DDL migrations with Prisma type-safe query execution and custom PostgreSQL ENUMs.",
      "Multi-stage Alpine Docker containerization (>60% image reduction) with non-root security hardening and healthcheck orchestration.",
    ],
    stack: [
      "Next.js 14",
      "React 18",
      "NestJS",
      "TypeScript",
      "PostgreSQL 15",
      "Prisma ORM",
      "Flyway",
      "AWS S3",
      "Docker",
    ],
    githubUrl: "https://github.com/Minothma/JobTracker",
    demoUrl: null,
    writeUp: {
      tagline:
        "JobTracker · Enterprise-Grade Career Pipeline Management & Direct-to-Cloud S3 Resume Vault",
      role: "Lead Full-Stack Developer (Sole Architecture, Implementation & DevOps)",
      teamContext: "Individual Full-Stack Project",
      complianceStandards: [
        "Stateless Dual-Token Auth",
        "Direct-to-Cloud S3 Streaming",
        "Deterministic Flyway DDL",
        "Non-Root Docker Hardening",
      ],
      overview:
        "JobTracker is a decoupled, cloud-native career lifecycle management platform designed to replace static spreadsheets with an interactive drag-and-drop Kanban board, a direct-to-S3 versioned resume vault, structured multi-round interview tracking, and contextual communication notes. Architected with Next.js 14 App Router on the client and NestJS with PostgreSQL on the backend, it strictly isolates multi-tenant user data, guarantees zero schema drift via Flyway migrations, and optimizes server throughput using presigned S3 binary transfers.",
      contributions: [
        {
          title: "01. Optimistic Kanban Pipeline with Automatic Rollback State Machine",
          points: [
            "5-Stage Application Pipeline: Managed career workflows across APPLIED ➔ INTERVIEW ➔ OFFER ➔ REJECTED ➔ WITHDRAWN states using @dnd-kit/core and @dnd-kit/sortable with collision detection algorithms.",
            "Instant Optimistic Updates: Engineered immediate UI state transitions on drag-and-drop interactions without blocking the client on server round-trips.",
            "Failure Resilience & State Rollback: Dispatched asynchronous PATCH /applications/:id updates in the background; on network drop or server failure, the UI automatically snaps the card back to its previous column and alerts the user via toast notifications.",
          ],
          screenshots: [
            {
              url: "/projects/jobtracker-banner.jpg",
              title: "Interactive Kanban Pipeline & AWS S3 Resume Vault",
              caption:
                "Dynamic 5-stage Kanban board with optimistic drag-and-drop state transitions, direct-to-S3 presigned upload dropzone, and dual-token JWT security.",
            },
          ],
        },
        {
          title: "02. Direct-to-S3 Presigned URL Upload Architecture",
          points: [
            "Zero-Server-Load Storage Pipeline: Eliminated multi-megabyte PDF payload memory pressure and Node.js event-loop blocking by completely bypassing the backend server for binary file transfers.",
            "Time-Limited Presigned Authorization: NestJS generates time-limited (15-minute TTL) AWS S3 Presigned PUT URLs via @aws-sdk/s3-request-presigner with strict content-type validation.",
            "Direct Browser Streaming & Version Vault: Client streams versioned PDF resumes directly to S3 bucket storage via standard browser fetch PUT, subsequently persisting file metadata (s3_key, version_label, mime_type) in PostgreSQL.",
          ],
        },
        {
          title: "03. Stateless Dual-Token Authentication & Silent 401 Refresh Interceptor",
          points: [
            "Dual-Token JWT Security: Implemented 15-minute short-lived Access Tokens and 7-day Refresh Tokens with cryptographic salted hashing (bcryptjs 10 rounds).",
            "Transparent 401 Interceptor: Configured an Axios/Fetch HTTP interceptor that catches 401 Unauthorized responses, queues pending requests, silently calls /auth/refresh to rotate tokens, and replays failed requests seamlessly without user logout.",
            "Multi-Tenant User Scoping: Enforced strict data isolation across all controllers using a custom @CurrentUser() decorator and Prisma queries bounded by user_id to prevent cross-tenant data leakage.",
          ],
        },
        {
          title: "04. Database Governance & Hybrid Migration Layer (Flyway + Prisma)",
          points: [
            "Deterministic DDL Governance: Designated Flyway as the single source of truth for immutable, version-controlled raw SQL DDL migrations (db/migrations/V1__init.sql), eliminating ORM migration drift.",
            "Custom PostgreSQL Types & Cascades: Modeled relational schemas with custom PostgreSQL ENUMs (ApplicationStatus, Outcome), composite foreign-key indexes, and cascading delete constraints.",
            "Type-Safe Prisma Query Engine: Introspected the live Flyway-managed schema via prisma db pull and generated type-safe TypeScript query clients without allowing Prisma to alter table schemas.",
          ],
        },
        {
          title: "05. Multi-Stage Docker Containerization & Security Hardening",
          points: [
            "Lean Multi-Stage Builds: Crafted multi-stage Dockerfiles for both Next.js and NestJS, separating build dependencies from Alpine Linux runtime environments to slash final image sizes by >60%.",
            "Non-Root Hardening: Configured runtime containers to execute exclusively under unprivileged system users (node and nextjs) rather than root, minimizing host attack vectors.",
            "Single-Command Orchestration: Composed the entire ecosystem (Next.js client, NestJS API, PostgreSQL 15, Flyway runner) into a unified docker-compose.yml with automated healthcheck dependencies.",
          ],
        },
      ],
      architecture: [
        "Decoupled three-tier architecture: Next.js 14 App Router client, NestJS modular REST API gateway, and PostgreSQL 15 relational database.",
        "Amazon S3 direct cloud streaming for binary resume storage via AWS SDK v3 presigned URLs, keeping the Node.js API server 100% lightweight and stateless.",
        "Passport.js and Passport-JWT authentication pipeline with silent token rotation and DTO runtime validation using class-validator (whitelist: true, forbidNonWhitelisted: true).",
        "Deterministic database version control with Flyway raw SQL migrations paired with Prisma ORM for compile-time type safety.",
        "Multi-stage Docker Compose orchestration with isolated bridge networking, healthchecks, and non-root security hardening.",
        "100% automated test suite passing across Jest unit tests and Supertest HTTP-level end-to-end (E2E) integration suites.",
      ],
      hardParts: [
        "Architectural Trade-Off: Opted for Flyway raw SQL DDL migrations over Prisma Migrate to avoid unpredictable schema locks, maintain custom PostgreSQL ENUMs, and guarantee zero schema drift across CI/CD environments while retaining Prisma strictly for type-safe query generation.",
        "Server Bottleneck Prevention: Avoided multipart form-data uploads through NestJS to prevent Node.js buffer memory spikes and event-loop lag; solved by brokering 15-minute AWS S3 presigned PUT URLs for direct browser-to-cloud streaming.",
        "Cross-Platform Alpine Incompatibility: Replaced native C++ bcrypt (which fails with ERR_DLOPEN_FAILED in Alpine Linux Docker builds on Windows hosts) with pure-JS bcryptjs, preserving 10-salt-round cryptographic security without native compilation overhead.",
        "Optimistic State Synchronization: Implemented optimistic drag-and-drop state transitions with automatic rollback resilience, ensuring the UI reverts card positions and alerts users if network errors occur during background PATCH requests.",
      ],
      stackBreakdown: [
        {
          category: "Frontend Client",
          tools:
            "Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS, Lucide Icons",
        },
        {
          category: "State & Drag-and-Drop",
          tools:
            "@dnd-kit/core, @dnd-kit/sortable, @dnd-kit/utilities, Optimistic UI State Machine",
        },
        {
          category: "Backend & API Gateway",
          tools:
            "NestJS, Node.js, Express, TypeScript, RESTful Micro-Architecture",
        },
        {
          category: "Auth & Security",
          tools:
            "Passport.js, Passport-JWT, Dual-Token (Access & Refresh), bcryptjs, Class-Validator DTOs",
        },
        {
          category: "Database & ORM",
          tools:
            "PostgreSQL 15, Prisma ORM (Type-Safe Query Layer), Custom ENUMs",
        },
        {
          category: "Schema Governance",
          tools:
            "Flyway Migration Engine (Immutable Versioned Raw SQL DDL)",
        },
        {
          category: "Cloud & Storage",
          tools: "AWS S3, AWS SDK v3 (@aws-sdk/s3-request-presigner)",
        },
        {
          category: "DevOps & Containers",
          tools:
            "Docker, Docker Compose, Multi-Stage Alpine Builds, Non-Root Users",
        },
        {
          category: "Testing & Quality",
          tools:
            "Jest, Supertest (Unit & End-to-End E2E Integration Suites - 100% Pass Rate)",
        },
      ],
      repoNote: "Open Source Engineering Case Study · github.com/Minothma/JobTracker",
    },
  },
  {
    id: "inkora",
    name: "Inkora Content Platform",
    badge: "PERSONAL PROJECT · COMPLETED",
    statusTag: "COMPLETED",
    category: "Full-Stack",
    tagline:
      "Modern Full-Stack Content Management & Publishing Engine with OWASP Hardening & 5-Type Reaction UX",
    role: "Full-Stack Developer (Sole Architecture, Implementation & Cloud Deployment)",
    teamContext: "Personal Full-Stack Engineering Project",
    description:
      "Enterprise-grade content management and publishing platform with TinyMCE rich-text authoring, dynamic reader engagement tools, and multi-layer OWASP defensive hardening.",
    highlights: [
      "Modular PHP 8 / MySQL MVC-inspired architecture delivering sub-second page loads with zero bloated framework dependencies.",
      "Rich-text publishing workflow powered by TinyMCE 6 with draft auto-saving and real-time SEO clean URL slug generation.",
      "Dynamic reader retention engine featuring 5-type emotion reactions (Like, Love, Wow, Sad, Angry), threaded comment hierarchy, and scroll-depth progress tracking.",
      "Defensive security subsystem enforcing 100% parameterized PDO prepared statements, per-session CSRF token validation, and XSS HTML-entity escaping.",
      "Comprehensive Admin Command Center with real-time analytics, user RBAC management, and editorial content moderation.",
    ],
    stack: [
      "PHP 8.0+",
      "MySQL 8.0",
      "PDO",
      "JavaScript (ES6+)",
      "Bootstrap 5.3",
      "TinyMCE 6",
      "Apache",
      "Bcrypt",
    ],
    githubUrl: "https://github.com/Minothma/inkora-blog-application",
    demoUrl: "http://inkora-app.infinityfreeapp.com/",
    writeUp: {
      tagline:
        "Inkora · Modern Full-Stack Content Management & Publishing Engine with OWASP Hardening",
      role: "Full-Stack Developer (Sole Architecture, Implementation & Cloud Deployment)",
      teamContext: "Personal Full-Stack Engineering Project",
      complianceStandards: [
        "100% Parameterized PDO (SQLi Immunity)",
        "Per-Session CSRF Token Defense",
        "XSS HTML-Entity Escaping",
        "Secure File Pipeline (Anti-RCE)",
      ],
      overview:
        "Inkora is an enterprise-grade, full-stack content management and blogging platform engineered from foundational web standards without bloated dependencies. Featuring a modular PHP 8 / MySQL MVC-inspired architecture, it couples an intuitive TinyMCE rich-text authoring suite and real-time auto-slug SEO generation with dynamic reader engagement tools (5-type reaction engine, threaded discussions, reading progress indicators). The platform enforces rigorous OWASP defensive hardening, including 100% parameterized PDO prepared statements, cryptographic CSRF session tokens, strict MIME-type file verification, and role-based administrative moderation.",
      contributions: [
        {
          title: "01. Content Authoring & Publishing Engine (TinyMCE 6 Suite)",
          points: [
            "TinyMCE 6 WYSIWYG Suite: Seamless rich-text authoring environment supporting custom typography, code formatting blocks, inline media embedding, and hyperlinking.",
            "Draft vs. Publish State Machine: Writers compose and persist private drafts with instant preview capabilities before committing to public publication.",
            "Automated SEO Engine: Real-time slug generator converting post titles into human-readable, SEO-friendly clean URLs mapped via Apache rewrite rules.",
            "Smart Media Management: Multi-tier file validation checking MIME types, binary image headers, and executing cryptographic hashing to prevent file collisions.",
          ],
          screenshots: [
            {
              url: "/projects/inkora-banner.jpg",
              title: "Publishing Editor & Active Article Feed",
              caption:
                "Split-screen TinyMCE authoring environment, real-time AJAX search overlay, 5-type emotion reactions, and active security defense indicators.",
            },
          ],
        },
        {
          title: "02. Multi-Faceted Reader Engagement & 5-Type Reaction Engine",
          points: [
            "5-Type Reaction System: Interactive emotional feedback suite allowing readers to express reactions (Like, Love, Wow, Sad, Angry) with dynamic count updates.",
            "Threaded Comment Hierarchy: Contextual discussion forum per article with author avatars, parent-child reply nesting, and user attribution.",
            "Reading Progress Bar: Smooth visual scroll-depth indicator tracking reader progress in real-time across long-form content.",
            "Social Amplification: One-click social sharing buttons for LinkedIn, Twitter/X, and Facebook pre-configured with OpenGraph meta tags.",
          ],
        },
        {
          title: "03. Defensive Security Subsystem & OWASP Hardening",
          points: [
            "SQL Injection Immunity: 100% of database interactions execute through parameterized PDO prepared statements, eliminating SQLi attack vectors.",
            "XSS Neutralization: All dynamic user inputs and outputs are sanitized and HTML-entity escaped using htmlspecialchars() to neutralize stored and reflected XSS.",
            "CSRF Session Defense: Cryptographically secure, per-session tokens generated and validated on all state-changing POST requests.",
            "Anti-RCE File Pipeline: Multi-tier verification checking file extensions, MIME types, and image magic bytes, storing uploads outside executable web directories.",
          ],
        },
        {
          title: "04. Role-Based Admin Command Center & Metrics Telemetry",
          points: [
            "Operational Analytics Dashboard: Live metrics monitoring total page views, registered user growth, published articles, and active discussions.",
            "Editorial Content Moderation: Comprehensive administrative controls to review, edit, approve, or prune user submissions.",
            "User & RBAC Management: Elevated privileges enabling administrators to promote roles, manage profiles, and suspend unauthorized accounts.",
            "Comment Moderation: Dedicated spam-prevention tools maintaining community standards and conversational integrity.",
          ],
        },
        {
          title: "05. Relational Schema Architecture & Apache URL Rewriting",
          points: [
            "Normalized Database Design: Structured 7+ relational tables with primary keys, foreign key cascade rules, and B-tree indexes on frequently queried columns (slug, username, email).",
            "Front Controller Routing: Centralized Apache .htaccess rewrite engine routing friendly RESTful URLs to modular PHP controllers.",
            "Live Cloud Deployment: Production deployment on Linux/Apache with DNS configuration and persistent database backups.",
          ],
        },
      ],
      architecture: [
        "Modular PHP 8 MVC-inspired structure separating business logic, database queries, and presentation templates.",
        "PDO database abstraction layer enforcing parameterized prepared statements across all read and write queries.",
        "Centralized Apache .htaccess routing mapping clean SEO URLs to front-controller endpoints.",
        "Multi-layer input sanitization pipeline neutralizing XSS, SQLi, and CSRF attack surfaces.",
        "Normalized MySQL 8.0 schema with composite indexes and referential integrity constraints.",
        "Responsive Bootstrap 5.3 interface with vanilla JavaScript AJAX DOM updates and modern gradient aesthetics.",
      ],
      hardParts: [
        "Defensive OWASP Architecture: Guaranteed complete SQL Injection immunity across 7+ tables by enforcing 100% parameterized PDO prepared statements, coupled with per-session CSRF token validation on all state-changing endpoints.",
        "Secure Binary File Pipeline: Prevented Remote Code Execution (RCE) during avatar and header image uploads by validating magic bytes and MIME types, stripping EXIF metadata, and saving files under cryptographically hashed names.",
        "Asynchronous Draft State Persistence: Engineered asynchronous draft auto-saving without colliding with active user keystrokes in TinyMCE or corrupting HTML DOM hierarchies.",
      ],
      stackBreakdown: [
        {
          category: "Backend & Business Logic",
          tools: "PHP 8.0+, MVC Architecture, RESTful Endpoints",
        },
        {
          category: "Database & Persistence",
          tools:
            "MySQL 8.0, PDO (Parameterized Prepared Statements), B-Tree Indexing",
        },
        {
          category: "Frontend & UI",
          tools:
            "Bootstrap 5.3, Vanilla JavaScript (ES6+), Modern Gradient Styling",
        },
        {
          category: "Rich Editor & SEO",
          tools: "TinyMCE 6 WYSIWYG Suite, Automated Auto-Slug Engine",
        },
        {
          category: "Security & Auth",
          tools:
            "Bcrypt Hashing, CSRF Tokens, XSS Sanitization (htmlspecialchars)",
        },
        {
          category: "Web Server & Routing",
          tools: "Apache Server, .htaccess URL Rewriting Engine",
        },
        {
          category: "Deployment & Cloud",
          tools: "Linux Hosting (InfinityFree), DNS Management, Production Deployment",
        },
      ],
      repoNote:
        "Open Source CMS Platform · github.com/Minothma/inkora-blog-application",
    },
  },
  {
    id: "battery-vitals",
    name: "Battery Vitals Testbed",
    badge: "1ST-YEAR HARDWARE & IOT PROJECT · COMPLETED",
    statusTag: "COMPLETED",
    category: "Embedded & IoT",
    tagline:
      "Microcontroller-Based Multi-Chemistry Battery Health & IoT Telemetry Testbed (Showcased at FITExpo 2025)",
    role: "Embedded Software & Telemetry Developer (Presenter at FITExpo 2025)",
    teamContext:
      "5-Member Engineering Team · Faculty of Information Technology, University of Moratuwa (Supervised by Dean B.H. Sudantha)",
    description:
      "Automated battery health monitoring, cyclic charging/discharging testbed, and real-time IoT telemetry system supporting Li-ion 18650, Li-Po, and Lead-Acid chemistries.",
    highlights: [
      "Multi-chemistry support (Li-ion 18650 3.7V, Li-Po 3.7V, and Lead-Acid 12V) with automated Charge ➔ Rest ➔ Discharge state machines.",
      "High-precision telemetry acquisition with INA219 current monitoring, ADS1115 16-bit ADC conversion, and XL4015/XL4016 buck regulation.",
      "Empirical State of Health (SOH) evaluation calculating internal resistance and live charge–discharge decay curves.",
      "Active thermal protection incorporating DS18B20 1-Wire sensors, automated brushless cooling fan triggering, and hardware interrupt cutoffs.",
      "Dual-screen telemetry output on an integrated 16×4 character LCD and a Next.js/React web dashboard; honored with Certificate of Appreciation at FITExpo 2025.",
    ],
    stack: [
      "ESP32",
      "C++",
      "ADS1115 ADC",
      "INA219",
      "DS18B20",
      "Relay Matrix",
      "Python",
      "Next.js",
      "FITExpo 2025",
    ],
    githubUrl: "https://github.com/Minothma/BatteryVitals",
    demoUrl: null,
    writeUp: {
      tagline:
        "Battery Vitals · Microcontroller-Based Battery Health Monitoring System (Showcased & Presented at FITExpo 2025)",
      role: "Embedded Software & Telemetry Developer (Presenter at FITExpo 2025)",
      teamContext:
        "5 Members · Faculty of IT, University of Moratuwa (Supervised by Dean B.H. Sudantha & Instructors Ms. Lakdini Manchanayaka, Mr. Udeepa Sandakal)",
      complianceStandards: [
        "FITExpo 2025 Presenter & Certificate of Appreciation",
        "Multi-Chemistry (Li-ion 18650, Li-Po, Lead-Acid 12V)",
        "Active Thermal Failsafe (DS18B20 + Cooling Fan)",
        "Custom PCB & 16×4 LCD Dual-Screen Telemetry",
      ],
      overview:
        "Battery Vitals is an innovative microcontroller-based hardware testing apparatus and IoT telemetry platform developed at the Faculty of Information Technology, University of Moratuwa. Engineered to evaluate battery health, optimize usage efficiency, and ensure operational safety, the system autonomously conducts cyclic charge, rest, and discharge protocols across Li-ion 18650, Li-Po, and 12V Lead-Acid batteries. By sampling voltage, current, and temperature at sub-second intervals, Battery Vitals computes battery State of Health (SOH), internal resistance, and empirical decay curves, broadcasting telemetry simultaneously to an onboard 16×4 LCD and an interactive web dashboard. The project was showcased live and recognized with a Certificate of Appreciation at FITExpo 2025.",
      contributions: [
        {
          title: "01. Multi-Chemistry Charging & Relay State Machine",
          points: [
            "Chemistry Agnostic Architecture: Engineered dedicated charge/discharge pathways for Li-ion 18650 (3.7V), Li-Po (3.7V), and Lead-Acid (12V) batteries utilizing XL4015 and XL4016 DC-DC buck converters.",
            "Automated Cyclic State Machine: Implemented autonomous transitions across Charge ➔ Rest ➔ Discharge cycles managed through 5V 8-channel and 1-channel relay switching matrices.",
            "Dual-Rate Charging Modes: Integrated TP4056, TP5100, IP2312, and HCW M634 intelligent charging controllers supporting both fast-charge and normal-charge operational modes.",
          ],
          screenshots: [
            {
              url: "/projects/battery-vitals/battery_vitals_hardware_chassis.jpg",
              title: "Custom Battery Vitals Enclosure Unit",
              caption:
                "Engineered physical chassis featuring 16×4 LCD telemetry screen, battery bays (18650 & Li-Po), banana binding posts, cooling fan exhaust, and rocker switches.",
            },
          ],
        },
        {
          title: "02. High-Precision Analog Telemetry & Sensor Acquisition",
          points: [
            "Sub-Millivolt Precision: Paired ADS1115 16-bit I2C ADC with analog voltage detection dividers to capture ultra-precise cell voltage levels during rapid load shifts.",
            "High-Side Current Sensing: Utilized INA219 I2C current and power monitor ICs to sample instantaneous milliampere draw and compute cumulative milliamp-hours (mAh).",
            "I2C Bus Multiplexing: Synchronized multiple I2C sensors (INA219, ADS1115, LCD backpack) on the ESP32 microcontroller with non-blocking polling intervals.",
          ],
          screenshots: [
            {
              url: "/projects/battery-vitals/battery_vitals_expo_booth.jpg",
              title: "FITExpo 2025 Hardware & Circuit Schematics",
              caption:
                "Exhibition display showcasing custom PCB routing, block diagram architectures, and live hardware evaluation testbed.",
            },
          ],
        },
        {
          title: "03. State of Health (SOH) Evaluation & Curve Analytics",
          points: [
            "Calibrated Load Discharging: Applied precision power resistor banks (2.2Ω, 3.9Ω, 6.8Ω) to simulate real-world current draw during discharge cycles.",
            "Internal Resistance (IR) Calculation: Computed dynamic internal resistance by evaluating instantaneous voltage drops under stepped load transitions (ΔV / ΔI).",
            "Empirical SOH Degradation Curve: Logged voltage decay curves against nominal manufacturer capacities to score battery degradation and estimate remaining operational lifespan.",
          ],
          screenshots: [
            {
              url: "/projects/battery-vitals/battery_vitals_expo_presentation.jpg",
              title: "FITExpo 2025 Live Telemetry Presentation",
              caption:
                "Minothma Sithumini and Janani Pitawala presenting Battery Vitals alongside live SOH discharge curve charts and the official technical poster.",
            },
          ],
        },
        {
          title: "04. Active Thermal Management & Hardware Interrupt Failsafes",
          points: [
            "1-Wire Thermal Profiling: Deployed DS18B20 digital temperature sensors in direct contact with cell casings to capture thermodynamic response during high-rate charging.",
            "Automated Active Cooling: Dynamically triggered a brushless DC cooling fan and aluminum extruded heat sink upon detecting temperature increases beyond baseline thresholds.",
            "Emergency Thermal Cutoff: Programmed hardware-level emergency interrupt cutoffs that immediately isolate relay circuits if cell temperature exceeds safe thermal limits (45°C for Li-ion).",
          ],
          screenshots: [
            {
              url: "/projects/battery-vitals/battery_vitals_live_demonstration.jpg",
              title: "Live Hardware Demonstration to Evaluators",
              caption:
                "Demonstrating active thermal management, relay switching, and live battery health monitoring to faculty evaluators and industry attendees.",
            },
          ],
        },
        {
          title: "05. Dual-Interface Telemetry & FITExpo 2025 Recognition",
          points: [
            "Integrated 16×4 LCD Display: Programmed standalone on-device telemetry rendering real-time voltage, current, temperature, and SOH percentage.",
            "IoT Web Dashboard: Streamed serial and Wi-Fi telemetry to an interactive web interface for long-term data logging and curve visualization.",
            "Exhibition Presenter & Award: Selected as an official project presenter at FITExpo 2025, receiving the Certificate of Appreciation under Dean B.H. Sudantha and the Department of Microcontroller Applications.",
          ],
          screenshots: [
            {
              url: "/projects/battery-vitals/battery_vitals_fitexpo_certificate.jpg",
              title: "FITExpo 2025 Certificate of Appreciation",
              caption:
                "Official Certificate of Appreciation awarded to C.M.M.S.U. Chandrasekara for active participation and presentation of Battery Vitals at FITExpo 2025.",
            },
          ],
        },
      ],
      architecture: [
        "ESP32 dual-core microcontroller (240MHz) orchestrating sensor acquisition, relay matrix switching, and telemetry broadcasting.",
        "Multi-chemistry charging pipeline incorporating XL4015/XL4016 buck converters, TP4056, TP5100, IP2312, and HCW M634 smart modules.",
        "High-precision 16-bit analog sampling via ADS1115 ADC and INA219 I2C high-side current monitors.",
        "Precision power resistor loads (2.2Ω, 3.9Ω, 6.8Ω) for controlled discharge profiling and internal resistance calculation.",
        "DS18B20 1-Wire thermal monitoring with active fan cooling and emergency relay disconnection failsafes.",
        "Dual-screen output combining an integrated 16×4 I2C character LCD and an interactive web telemetry dashboard.",
        "Peer-reviewed and publicly demonstrated at FITExpo 2025, Faculty of Information Technology, University of Moratuwa.",
      ],
      hardParts: [
        "ADC Calibration & Voltage Drift Elimination: Compensated for non-linear ADC artifacts and voltage drops across relay contacts under fluctuating discharge currents by integrating the ADS1115 16-bit I2C converter with hardware Kelvin connections.",
        "Safe Multi-Chemistry Switching: Designed an interlocked relay state machine ensuring conflicting voltage levels (e.g. 12V Lead-Acid vs 3.7V Li-Po) can never cross-contaminate or cause reverse-polarity damage to the microcontroller.",
        "Real-Time Thermal Failsafe Response: Implemented sub-millisecond emergency thermal cutoffs preventing thermal runaway in Li-ion cells during high-current fast charging protocols.",
      ],
      stackBreakdown: [
        {
          category: "Microcontroller & Core",
          tools: "ESP32 (Dual-Core 240MHz, Wi-Fi/BLE), C++, Arduino IDE",
        },
        {
          category: "Sensing & Precision ADC",
          tools:
            "INA219 (I2C Current/Power), ADS1115 (16-Bit I2C ADC), Voltage Dividers",
        },
        {
          category: "Power & Buck Regulation",
          tools:
            "XL4015, XL4016 Buck Converters, TP4056, TP5100, IP2312, HCW M634",
        },
        {
          category: "Switching & Power Loads",
          tools:
            "5V Relay Modules (8-Channel & 1-Channel), Power Resistors (2.2Ω, 3.9Ω, 6.8Ω)",
        },
        {
          category: "Thermal Management",
          tools:
            "DS18B20 1-Wire Digital Sensor, Brushless DC Fan, Extruded Heat Sink",
        },
        {
          category: "Displays & IoT UI",
          tools: "16×4 I2C Character LCD, React/Next.js Telemetry Web Dashboard",
        },
        {
          category: "Exhibition & Honors",
          tools: "FITExpo 2025 Presenter, Certificate of Appreciation (UOM)",
        },
      ],
      repoNote:
        "Open Source Hardware & IoT Project · github.com/Minothma/BatteryVitals",
    },
  },
];
