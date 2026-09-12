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
    tagline: "Career Lifecycle Management Platform with Real-Time Kanban & AWS S3 Presigned Uploads",
    role: "Lead Full-Stack Developer",
    teamContext: "Individual Full-Stack Project",
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
    githubUrl: "https://github.com/Minothma/JobTracker",
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
      repoNote: "Open Source · github.com/Minothma/JobTracker",
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
