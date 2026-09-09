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
      "Enterprise Full-Stack Laboratory Information Management System for Durdans Hospital PLC (with IFS Sri Lanka & University of Moratuwa)",
    role: "Full-Stack Developer (Pre-Analytics, MLT Worklist & Quality Control Module)",
    teamContext: "5-Member Team · University of Moratuwa, IFS Sri Lanka & Durdans Hospital PLC",
    description:
      "Full-stack healthcare web application developed to digitize and manage the laboratory diagnostic workflow across hospital branches, supporting sample intake, automated delta-checks, and quality control verification.",
    highlights: [
      "Built a sample accessioning dashboard with priority queues (STAT, Urgent, Normal) and vacutainer container validation.",
      "Implemented reference range auto-flagging and longitudinal delta-checks (|Δ%| ≥ 40%) to catch potential sample mix-ups.",
      "Developed an internal quality control (IQC) module with Westgard multi-rules calculations (1-2s, 1-3s, 2-2s) and dynamic Z-scores.",
      "Added barcode reprinting support for damaged sample labels and Excel export for daily accessioning audit logs.",
      "Developed backend REST APIs using Spring Boot 3 with Keycloak role-based authentication and Kafka event messaging.",
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
    githubUrl: "https://github.com/Minothma/durdans-lims",
    demoUrl: null,
    writeUp: {
      tagline:
        "Durdans LIMS · 2nd-Year Enterprise Project in collaboration with IFS Sri Lanka, Durdans Hospital PLC & University of Moratuwa",
      role: "Full-Stack Developer (Sample Accessioning, Result Entry & Quality Control Lead)",
      teamContext: "5 Members (University of Moratuwa, IFS Sri Lanka, Durdans Hospital PLC)",
      complianceStandards: [
        "ISO 15189 Quality Verification",
        "CLSI C28-A3 Reference Intervals",
        "Westgard Multi-Rules Quality Control",
      ],
      overview:
        "Durdans LIMS is an enterprise web application designed to digitize the clinical laboratory diagnostic pipeline. Built in collaboration with IFS Sri Lanka and Durdans Hospital PLC as our 2nd-year software project, the system simplifies sample intake, prevents accidental sample mix-ups through automated delta-checks, and ensures diagnostic result accuracy before reports are published.",
      contributions: [
        {
          title: "1️⃣ Sample Accessioning & Intake Workflow",
          points: [
            "Accessioning Dashboard: Designed a 3-tier priority queue (STAT, Urgent, Normal) to help lab staff prioritize emergency samples and maintain Turnaround Time (TAT).",
            "Fast Search & Filtering: Implemented barcode and patient ID lookups with multi-criteria filtering by test type and department.",
            "Specimen Tracking: Tracked collection timestamps, phlebotomist information, and tube types for end-to-end sample traceability.",
          ],
        },
        {
          title: "2️⃣ Sample Quality Verification & Rejection Handling",
          points: [
            "Quality Verification Gate: Built checks for label legibility, container type matching, adequate volume (≥ 3.0 mL), and specimen integrity.",
            "Barcode Thermal Printing: Integrated one-click barcode reprinting for damaged labels without creating duplicate database entries.",
            "Sample Rejection Engine: Standardized rejection reasons (hemolyzed, clotted, mislabeled) and triggered automated recollection requests.",
            "Worklist Handoff & Audit Logs: Automated handoff into the technician worklist upon acceptance, with Excel export for daily intake audits.",
          ],
        },
        {
          title: "3️⃣ Result Entry & Reference Range Checking",
          points: [
            "Technician Worklist: Structured worklist organizing pending diagnostic tests with analyzer selection and notes.",
            "Reference Range Auto-Flagging: Evaluated test values against normal ranges, automatically highlighting abnormal or critical values.",
            "Delta-Check Algorithm (|Δ%| ≥ 40%): Calculated percentage change against a patient's historical baseline to catch unexpected result shifts and specimen mix-ups.",
            "Dual Action Workflow: Built 'Save Draft' for in-progress tests alongside 'Submit for Verification' to lock records for final supervisor approval.",
          ],
        },
        {
          title: "4️⃣ Quality Control (QC) Calculations & Telemetry",
          points: [
            "Westgard Multi-Rules: Computed 1-2s warnings and 1-3s / 2-2s statistical rejections with dynamic Z-scores (Z = (x - μ) / SD).",
            "Audit History: Enabled quick switching between today's active runs and historical control batch logs.",
            "Live Instrument Telemetry: Aggregated analyzer statuses and daily test counts directly from PostgreSQL database queries.",
            "Cross-Department Overview: Provided supervisors with a unified radar view across Collected, Accepted, Entered, and Dispatched test states.",
          ],
        },
      ],
      architecture: [
        "Spring Boot 3 (Java 21) RESTful backend with Keycloak role-based access control across clinical staff roles.",
        "Apache Kafka event messaging with Transactional Outbox pattern for reliable status updates.",
        "Automated pre-analytical checks with tube-type validation, barcode printing, and STAT emergency triage.",
        "Validation engine computing real-time delta-checks (|Δ%| ≥ 40%), reference ranges, and Westgard QC statistics.",
        "Liquibase database schema migrations managing normalized PostgreSQL audit logs.",
        "Next.js 15 App Router frontend with real-time TAT monitors and responsive dashboard layouts.",
        "Containerized deployment with Docker and automated GitHub Actions CI/CD workflows.",
      ],
      hardParts: [
        "Implementing Westgard statistical calculations (mean, standard deviation, and rule violations) across historical control batches in real time.",
        "Ensuring zero message loss during high-volume sample intake using Kafka transactional outbox patterns.",
        "Calculating delta-checks comparing current tests against historical patient baselines with low database query latency.",
      ],
      stackBreakdown: [
        { category: "Frontend", tools: "Next.js 15 (App Router), React, TypeScript, Tailwind CSS, Lucide Icons, Axios" },
        { category: "Backend", tools: "Java 21, Spring Boot 3, Spring Data JPA, Hibernate, Gradle Multi-Module" },
        { category: "Auth & Security", tools: "Keycloak OIDC (Role-Based Access Control)" },
        { category: "Messaging & Events", tools: "Apache Kafka (Transactional Outbox Pattern)" },
        { category: "Database", tools: "PostgreSQL, Liquibase (Version-Controlled Migrations)" },
        { category: "Testing", tools: "JUnit 5, Testcontainers, k6 Load Testing" },
        { category: "Cloud & DevOps", tools: "AWS, Terraform, Docker, GitHub Actions CI/CD" },
        { category: "Monitoring", tools: "Prometheus, Grafana, OpenTelemetry" },
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
