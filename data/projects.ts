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
    tagline: "Full-Stack Content Platform with Real-Time Search & Security Hardening",
    role: "Full-Stack Developer",
    teamContext: "Personal Project",
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
    githubUrl: "https://github.com/Minothma/inkora-blog-application",
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
      repoNote: "Open Source · github.com/Minothma/inkora-blog-application",
    },
  },
  {
    id: "battery-vitals",
    name: "Battery Vitals Testbed",
    badge: "1ST-YEAR GROUP PROJECT · COMPLETED",
    statusTag: "COMPLETED",
    category: "Embedded & IoT",
    tagline: "Automated Hardware Testbed & Python Telemetry Pipeline for Li-Po Batteries",
    role: "Embedded Software & Telemetry Developer",
    teamContext: "1st-Year Group Project · Faculty of IT, University of Moratuwa",
    description:
      "Automated charging, resting, and discharging testbed for Li-Po batteries using ESP32, relay switching, DS18B20 thermal monitoring, and a Python pipeline for State of Health (SOH) curve evaluation.",
    highlights: [
      "Engineered an automated charge-rest-discharge testbed with relay switching and emergency thermal cutoffs.",
      "Implemented continuous temperature tracking using the DS18B20 1-Wire protocol with high-temperature cutoffs.",
      "Developed an automated Python data collection and processing pipeline for battery telemetry.",
      "Generated discharge curves and evaluated internal resistance to determine battery State of Health (SOH).",
    ],
    stack: ["ESP32", "C++", "Python", "Matplotlib", "NumPy", "IoT Hardware"],
    githubUrl: "https://github.com/Minothma/BatteryVitals",
    demoUrl: null,
    writeUp: {
      overview:
        "An automated embedded hardware testing apparatus built to run cyclic charging and discharging protocols on Li-Po batteries, generating empirical voltage-decay curves and diagnosing battery degradation.",
      architecture: [
        "ESP32 firmware written in C++ orchestrating relay switching across Charge, Rest, and Discharge state machines.",
        "Digital thermal monitoring via DS18B20 sensor with hardware interrupt failsafes shutting off current on threshold breaches.",
        "Serial telemetry logging voltage and temperature metrics over time into Python processing scripts.",
        "State of Health (SOH) calculation engine computing internal resistance and curve deviations.",
      ],
      hardParts: [
        "Calibrating ADC readings under fluctuating load currents to eliminate thermal drift artifacts in voltage measurements.",
      ],
      stackBreakdown: [
        { category: "Firmware", tools: "ESP32, C++, FreeRTOS Tasks, Arduino Framework" },
        { category: "Hardware", tools: "DS18B20 Sensor, 4-Channel Relays, Constant Current Load" },
        { category: "Analytics", tools: "Python, NumPy, Matplotlib, Pandas" },
      ],
      repoNote: "Open Source · github.com/Minothma/BatteryVitals",
    },
  },
];
