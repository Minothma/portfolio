export interface SkillCategory {
  category: string;
  description: string;
  items: string[];
  icon: string;
}

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    description: "Core programming & scripting languages",
    items: ["Java 21", "TypeScript", "JavaScript", "Python", "C", "PHP", "SQL"],
    icon: "Code2",
  },
  {
    category: "Frontend",
    description: "Modern client-side web frameworks & styling",
    items: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "Axios"],
    icon: "Layout",
  },
  {
    category: "Backend & Microservices",
    description: "Enterprise server frameworks, messaging & security",
    items: ["Spring Boot 3", "Java 21", "NestJS", "Apache Kafka", "Keycloak OIDC", "RESTful APIs", "JWT Auth"],
    icon: "Server",
  },
  {
    category: "Databases & Migrations",
    description: "Relational modeling, versioned migrations & query design",
    items: ["PostgreSQL", "MySQL", "Liquibase", "Prisma ORM", "Flyway", "Hibernate / JPA"],
    icon: "Database",
  },
  {
    category: "DevOps, Cloud & IaC",
    description: "Cloud infrastructure, containers & CI/CD pipelines",
    items: ["AWS (VPC, EC2, RDS, S3, ECR)", "Terraform (IaC)", "Docker", "GitHub Actions CI/CD", "Git", "Postman"],
    icon: "Terminal",
  },
  {
    category: "Testing & Observability",
    description: "Automated test suites & distributed monitoring",
    items: ["JUnit 5", "Testcontainers", "k6 Load Testing", "Prometheus", "Grafana", "OpenTelemetry"],
    icon: "ShieldCheck",
  },
  {
    category: "Architecture & Standards",
    description: "Software engineering standards, compliance & design patterns",
    items: [
      "ISO 15189 Quality Gate",
      "CLSI C28-A3 Reference Intervals",
      "Westgard Multi-Rules QC",
      "Transactional Outbox Pattern",
      "Data Structures & Algorithms",
      "OOP & SOLID",
    ],
    icon: "Cpu",
  },
];

export const marqueeTechList = [
  "Next.js 15",
  "React",
  "TypeScript",
  "Spring Boot 3",
  "Java 21",
  "Apache Kafka",
  "PostgreSQL",
  "Keycloak OIDC",
  "Liquibase",
  "AWS",
  "Terraform",
  "Docker",
  "NestJS",
  "Prometheus",
  "Grafana",
  "Prisma",
  "Python",
  "Tailwind CSS",
  "GitHub Actions",
  "Testcontainers",
];
