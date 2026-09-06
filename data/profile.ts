export interface ProfileData {
  name: string;
  firstName: string;
  lastName: string;
  title: string;
  tagline: string;
  heroPitch: {
    prefix: string;
    highlights: string[];
    suffix: string;
  };
  aboutStory: string[];
  location: string;
  email: string;
  phone: string;
  phoneFormatted: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  statusBadge: string;
  specCard: {
    focus: string;
    core: string;
    reading: string;
    gpa: string;
    based: string;
    status: string;
    batch: string;
  };
  metrics: {
    gpa: string;
    gpaScale: string;
    projectsCount: string;
    techCount: string;
    certCount: string;
  };
}

export const profile: ProfileData = {
  name: "Minothma Sithumini",
  firstName: "Minothma",
  lastName: "Sithumini",
  title: "Software Engineering Intern",
  tagline: "Software Engineering Intern | Full-Stack Developer",
  statusBadge: "OPEN TO SOFTWARE ENGINEERING INTERNSHIPS",
  heroPitch: {
    prefix: "I build the parts of an application that demand precision: ",
    highlights: [
      "automated QC verification engines",
      "secure auth pipelines",
      "resilient RESTful APIs",
    ],
    suffix:
      " that keep working when clinical and enterprise data gets complex. Second-year IT undergraduate at the University of Moratuwa.",
  },
  aboutStory: [
    "I'm an IT undergraduate at the University of Moratuwa with hands-on experience in full-stack engineering, designing robust multi-tier architectures rather than just sitting exams. My work gravitates towards full-stack development — building secure RESTful APIs, structuring relational database schemas, and writing reliable authentication workflows.",
    "On Durdans Hospital LIMS, I co-engineered an automated sample accessioning and real-time QC verification engine with Westgard rules, dynamic delta-checks, Keycloak RBAC, and tube-cap classification. On Job Application Tracker, I architected a modular NestJS backend with JWT auth tokens, AWS S3 presigned upload pipelines for multi-version resumes, and an interactive Kanban board with Docker containerization.",
    "Outside the editor, I serve as Director of IT for the Rotaract Club of Alumni of University of Moratuwa, and contribute to technical student chapters including IEEE RAS and IEEE ComSoc. I'm actively seeking a Software Engineering Internship to contribute to production-grade architectures alongside senior engineers.",
  ],
  location: "Ratnapura, Sri Lanka",
  email: "minothmasithumini@gmail.com",
  phone: "+94 71 931 9477",
  phoneFormatted: "+94719319477",
  github: "https://github.com/Minothma",
  linkedin: "https://linkedin.com/in/minothma",
  resumeUrl: "/resume.pdf",
  specCard: {
    focus: "Full-stack, backend & distributed systems",
    core: "Next.js · Spring Boot · NestJS · PostgreSQL",
    reading: "B.Sc. (Hons) IT & Management",
    gpa: "3.47 / 4.00",
    based: "Ratnapura, Sri Lanka",
    status: "Available — 2026",
    batch: "BATCH 23",
  },
  metrics: {
    gpa: "3.47",
    gpaScale: "/ 4.00",
    projectsCount: "4+",
    techCount: "16+",
    certCount: "7",
  },
};
