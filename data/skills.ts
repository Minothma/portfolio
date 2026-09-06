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
    description: "Modern client-side web frameworks & styling",
    items: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
    icon: "Layout",
  },
  {
    category: "Backend",
    description: "Enterprise server frameworks & RESTful services",
    items: ["Spring Boot", "NestJS", "RESTful APIs", "JWT Auth"],
    icon: "Server",
  },
  {
    category: "Databases & ORM",
    description: "Relational modeling, migrations & query design",
    items: ["PostgreSQL", "MySQL", "Prisma ORM", "Flyway"],
    icon: "Database",
  },
  {
    category: "DevOps & Cloud",
    description: "Containerization, cloud storage & version control",
    items: ["Docker", "Git", "Postman", "AWS S3"],
    icon: "Terminal",
  },
  {
    category: "UI/UX & Design",
    description: "Interface prototyping & graphic asset preparation",
    items: ["Figma", "GIMP"],
    icon: "Palette",
  },
  {
    category: "Core Concepts",
    description: "Software engineering fundamentals & paradigms",
    items: [
      "OOP",
      "Data Structures & Algorithms",
      "Authentication & Authorization",
      "Database Design",
      "RESTful API Design",
      "Agile Methodology",
    ],
    icon: "ShieldCheck",
  },
];

export const marqueeTechList = [
  "Next.js",
  "React",
  "TypeScript",
  "Spring Boot",
  "Java",
  "NestJS",
  "PostgreSQL",
  "MySQL",
  "Docker",
  "AWS S3",
  "Prisma",
  "Python",
  "Tailwind CSS",
  "Git",
  "Postman",
  "Keycloak",
  "Figma",
];
