export interface ProfileData {
  name: string;
  firstName: string;
  lastName: string;
  title: string;
  tagline: string;
  heroPitch: string;
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
  statusBadge: "OPEN TO SOFTWARE ENGINEERING INTERNSHIPS · 2026",
  heroPitch:
    "I'm an Information Technology & Management undergraduate at the University of Moratuwa. I'm passionate about full-stack web engineering, building reliable backend systems, and solving real-world software problems.",
  aboutStory: [
    "I'm an Information Technology & Management undergraduate at the University of Moratuwa (Faculty of Information Technology) with a strong foundation in full-stack web development. I enjoy building practical, well-engineered applications—from designing relational database schemas and REST APIs to creating responsive, accessible user interfaces.",
    "Through university projects and individual work, I've gained hands-on experience across modern stacks. On our enterprise project, Durdans Hospital LIMS (in collaboration with IFS Sri Lanka and Durdans Hospital PLC), I worked on sample accessioning, automated delta-check validation, and quality control modules using Spring Boot and Next.js. On my Job Application Tracker, I designed a modular NestJS backend with JWT authentication and direct AWS S3 document uploads.",
    "Beyond coding, I serve as Director of IT for the Rotaract Club of Alumni of University of Moratuwa and actively participate in IEEE student chapters. I am currently seeking a Software Engineering Internship for 2026, eager to learn from experienced engineers and contribute to production software.",
  ],
  location: "Ratnapura, Sri Lanka",
  email: "minothmasithumini@gmail.com",
  phone: "+94 71 931 9477",
  phoneFormatted: "+94719319477",
  github: "https://github.com/Minothma",
  linkedin: "https://linkedin.com/in/minothma",
  resumeUrl: "/resume.pdf",
  specCard: {
    focus: "Full-Stack Web & Backend Engineering",
    core: "Next.js · React · Spring Boot · NestJS · PostgreSQL",
    reading: "B.Sc. (Hons) in Information Technology & Management",
    gpa: "3.47 / 4.00",
    based: "Ratnapura, Sri Lanka",
    status: "Available for Internship — 2026",
    batch: "Faculty of IT · Batch 23",
  },
  metrics: {
    gpa: "3.47",
    gpaScale: "/ 4.00",
    projectsCount: "4+",
    techCount: "10+",
    certCount: "12+",
  },
};

