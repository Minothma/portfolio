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
    items: ["Java", "TypeScript", "JavaScript", "Python", "C", "PHP", "SQL"],
    icon: "Code2",
  },
  {
    category: "Frontend",
    description: "Modern client-side web frameworks & responsive UI",
    items: ["Next.js", "React", "TypeScript", "HTML", "CSS", "Axios", "Tailwind CSS"],
    icon: "Layout",
  },
  {
    category: "Backend & APIs",
    description: "Enterprise server frameworks, messaging & secure APIs",
    items: ["Spring Boot", "NestJS", "Apache Kafka", "Keycloak OIDC", "RESTful APIs", "JWT Auth"],
    icon: "Server",
  },
  {
    category: "Databases & ORM",
    description: "Relational modeling, versioned migrations & query design",
    items: ["PostgreSQL", "MySQL", "Prisma ORM", "Hibernate / JPA", "Liquibase"],
    icon: "Database",
  },
  {
    category: "DevOps & Cloud",
    description: "Cloud infrastructure, containerization & CI/CD pipelines",
    items: ["AWS", "Docker", "GitHub Actions CI/CD", "Git", "Postman"],
    icon: "Terminal",
  },
  {
    category: "Architecture & Principles",
    description: "Software engineering standards, clean architecture & design patterns",
    items: ["OOP & SOLID", "Data Structures & Algorithms", "RESTful Architecture", "Transactional Outbox Pattern"],
    icon: "Cpu",
  },
];

export const marqueeTechList = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Spring Boot",
  "Java",
  "NestJS",
  "Apache Kafka",
  "PostgreSQL",
  "MySQL",
  "Prisma ORM",
  "AWS",
  "Docker",
  "Python",
  "PHP",
  "Tailwind CSS",
  "GitHub Actions",
  "Keycloak OIDC",
  "Liquibase",
  "Git",
  "RESTful APIs",
];
