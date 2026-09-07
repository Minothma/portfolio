export interface ProjectContributionSection {
  title: string;
  points: string[];
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
      "Enterprise Full-Stack Clinical Diagnostic Platform for Durdans Hospital PLC (with IFS Sri Lanka & University of Moratuwa)",
    role: "Full-Stack Software Engineer (Pre-Analytics, MLT & IQC Lead)",
    teamContext: "5 Members · University of Moratuwa, IFS Sri Lanka & Durdans Hospital PLC",
    description:
      "Production-grade, enterprise healthcare platform digitizing and automating the end-to-end clinical diagnostic pipeline across hospital branches, enforcing strict ISO 15189, CLSI C28-A3, and Westgard Multi-Rules compliance.",
    highlights: [
      "Engineered an ISO 15189 5-point pre-analytical quality gate with dynamic container verification, CAP rejection handling, and 3-tier STAT priority triage.",
      "Implemented a Clinical Decision Support (CDS) auto-flagging engine with a Delta-Check algorithm (Δ% ≥ 40%) comparing patient baselines to prevent specimen mix-ups.",
      "Built a Westgard Multi-Rules IQC engine (1-2s warning, 1-3s and 2-2s rejections with dynamic Z-scores) and live PostgreSQL analyzer telemetry with zero mock data.",
      "Developed idempotent barcode thermal reprinting preserving unbroken chain-of-custody, and accessioning audit log Excel exports.",
      "Architected secure Spring Boot 3 & Keycloak OIDC micro-architecture with Apache Kafka transactional outbox messaging.",
    ],
    stack: [
      "Next.js 15",
      "Java 21 / Spring Boot 3",
      "PostgreSQL",
      "Apache Kafka",
      "Keycloak OIDC",
      "Liquibase",
      "Docker",
      "AWS / Terraform",
    ],
    githubUrl: "https://github.com/kalanas210/durdans-lims",
    demoUrl: null,
    writeUp: {
      tagline:
        "Durdans LIMS — Mission-Critical Laboratory Information Management System · Enterprise Full-Stack Clinical Diagnostic Platform for Durdans Hospital PLC (with IFS Sri Lanka & University of Moratuwa)",
      role: "Full-Stack Software Engineer (Pre-Analytics, MLT & IQC Lead)",
      teamContext: "5 Members (University of Moratuwa, IFS Sri Lanka, Durdans Hospital PLC)",
      complianceStandards: [
        "ISO 15189 (Medical Laboratories Quality & Competence)",
        "CLSI C28-A3 (Defining, Establishing, and Verifying Reference Intervals)",
        "Westgard Multi-Rules Quality Control (1-2s, 1-3s, 2-2s with Dynamic Z-Scores)",
      ],
      overview:
        "Durdans LIMS is a production-grade, enterprise healthcare platform designed to digitize and automate the end-to-end clinical diagnostic pipeline across hospital branches. Engineered to eliminate human diagnostic errors, the system enforces strict international laboratory compliance standards (ISO 15189, CLSI C28-A3, and Westgard Quality Multi-Rules) from patient specimen accessioning to diagnostic report dispatch.",
      contributions: [
        {
          title: "1️⃣ Pre-Analytical Specimen Accessioning & Chain-of-Custody",
          points: [
            "Sample Accessioning Dashboard: Built a 3-Tier Priority Queue (STAT, Urgent, Normal) to immediately prioritize emergency ICU specimens and prevent Turnaround Time (TAT) breaches.",
            "Dynamic Search & Filter: Enabled barcode and patient ID lookups with multi-criteria filtering by test type and clinical priority.",
            "Chain-of-Custody View: Real-time tracking of specimen collection timestamps, phlebotomist identity, container types (Gold SST, Purple EDTA, Citrate), and patient demographics for unbroken traceability.",
          ],
        },
        {
          title: "2️⃣ ISO 15189 5-Point Quality Verification Gate & CAP Rejection Engine",
          points: [
            "ISO 15189 5-Point Quality Gate: Automated verification checking: 1) Barcode legibility, 2) Correct container type, 3) Minimum volume adequacy (≥ 3.0 mL), 4) Specimen integrity (no hemolysis or clots), and 5) Collection window.",
            "Idempotent Barcode Thermal Printing: Seamless one-click barcode reprinting for damaged labels without creating duplicate database records.",
            "Standardized CAP Rejection Engine: Captures standardized CAP rejection reason codes (HEMOLYZED, CLOTTED, MISLABELED) and instantly triggers automated recollection requests to phlebotomy.",
            "Direct MLT Handoff & Audit Logs: Immediate workflow transition into the MLT worklist upon quality acceptance, with Excel export for daily accessioning audit reports.",
          ],
        },
        {
          title: "3️⃣ Analytical MLT Processing & Clinical Decision Support (CDS)",
          points: [
            "MLT Sample Worklist: Priority-ordered worklist organizing pending diagnostic tests with instrument selection (e.g., Cobas e411) and technical note attachments.",
            "CLSI C28-A3 Auto-Flagging Engine: Real-time reference range evaluation automatically classifying results into Normal (green), High (orange), and high-visibility CRITICAL HIGH panic alerts for life-threatening values.",
            "Mathematical Delta-Check Algorithm (Δ% ≥ 40%): Longitudinal variance check comparing current test values against the patient's historical baseline (|Current - Previous| / Previous × 100 ≥ 40%) to intercept pre-analytical specimen mix-ups.",
            "ISO 15189 Dual Workflow: Intermediate 'Save Draft' functionality for in-progress testing alongside 'Submit for Verification' with permanent legal record locking for supervisor approval.",
          ],
        },
        {
          title: "4️⃣ Internal Quality Control (IQC), Live Instrument Telemetry & Cross-Department Radar",
          points: [
            "Westgard Multi-Rules Engine: Mathematical evaluation of 1-2s warnings and 1-3s / 2-2s statistical rejections with dynamic Z-score computations (Z = (x - μ) / SD).",
            "Toggleable Audit History: Instant switching between Today's active analytical runs and the Full Historical Audit Trail with calendar timestamps.",
            "100% Live DB Instrument Telemetry Hub: Eliminated static mock data — analyzer operational statuses, daily test throughput counts (Tests today), and per-analyte calibration health are calculated live from PostgreSQL database aggregations with background auto-polling.",
            "Cross-Department All Worklist: Full laboratory radar enabling supervisors to monitor real-time specimen lifecycles across Collected, Accepted, Entered, and Dispatched states.",
          ],
        },
      ],
      architecture: [
        "Spring Boot 3 (Java 21) RESTful micro-architecture with Keycloak OIDC server-side authorization across 8 clinical roles.",
        "Apache Kafka event streaming with Transactional Outbox Pattern to ensure guaranteed, zero-message-loss diagnostic state changes.",
        "Automated ISO 15189 pre-analytical quality gates with multi-tube cap color recognition, barcode reprints, and STAT emergency triage.",
        "Clinical verification engine computing real-time longitudinal delta-checks (|Δ%| ≥ 40%), demographic reference ranges, and multi-rule Westgard QC algorithms.",
        "Liquibase version-controlled schema migrations managing normalized PostgreSQL audit logging and immutable specimen lifecycles.",
        "Next.js 15 (App Router) client with live Turnaround Time (TAT) tracking monitors, panic alert banners, and reactive telemetry dashboards.",
        "Infrastructure as Code (IaC) with Terraform provisioning AWS VPC, EC2, RDS, S3, and ECR with 7 GitHub Actions CI/CD automated pipelines.",
      ],
      hardParts: [
        "Architecting multi-rule Westgard QC algorithms that compute mean, standard deviation, and rule violations (1-2s, 1-3s, 2-2s) across historical control batches in real time with dynamic Z-scores.",
        "Guaranteeing zero specimen loss and strict audit compliance under high-throughput concurrent intake hours through Kafka Transactional Outbox pattern.",
        "Intercepting specimen mix-ups through mathematical longitudinal delta-checking without incurring significant PostgreSQL query latency under high load.",
      ],
      stackBreakdown: [
        { category: "Frontend Tier", tools: "Next.js 15 (App Router), React, TypeScript, Tailwind CSS, Lucide Icons, Axios" },
        { category: "Backend Tier", tools: "Java 21, Spring Boot 3, Spring Data JPA, Hibernate, Gradle Multi-Module" },
        { category: "Security & Auth", tools: "Keycloak OIDC (8 Clinical Roles RBAC Server-side Authorization)" },
        { category: "Messaging & Events", tools: "Apache Kafka (Transactional Outbox Pattern for Zero Message Loss)" },
        { category: "Database & Migrations", tools: "PostgreSQL, Liquibase (Version-controlled Schema Migrations)" },
        { category: "Testing & QA", tools: "JUnit 5, Testcontainers (Real PostgreSQL Integration Tests), k6 Load Testing" },
        { category: "Cloud & DevOps", tools: "AWS (VPC, EC2, RDS, S3, ECR), Terraform (IaC), Docker, GitHub Actions (7 CI/CD Pipelines)" },
        { category: "Observability", tools: "Prometheus, Grafana, Alertmanager, OpenTelemetry Distributed Tracing" },
      ],
      repoNote: "Enterprise Collaboration · Durdans Hospital PLC, IFS Sri Lanka & University of Moratuwa",
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
    githubUrl: null,
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
    githubUrl: null,
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
    githubUrl: null,
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
      repoNote: "1st-Year Group Project (Faculty of IT, University of Moratuwa).",
    },
  },
];
