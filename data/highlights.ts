export interface EducationItem {
  year: string;
  degree: string;
  institution: string;
  meta: string;
  details?: string;
}

export interface LeadershipItem {
  year: string;
  role: string;
  organization: string;
  description?: string;
}

export interface CertificationItem {
  year: string;
  title: string;
  issuer: string;
  status?: string;
}

export interface ReferenceItem {
  name: string;
  title: string;
  organization: string;
  email: string;
  phone: string;
}

export const educationHistory: EducationItem[] = [
  {
    year: "2024 — PRESENT",
    degree: "B.Sc. (Hons) in Information Technology and Management",
    institution: "University of Moratuwa, Sri Lanka · Faculty of IT, Batch 23",
    meta: "CGPA: 3.47 / 4.00 · Second year",
    details: "Hands-on engineering curriculum covering Data Structures & Algorithms, Enterprise Systems, and Relational Database Architecture.",
  },
  {
    year: "2022",
    degree: "G.C.E. Advanced Level — Physical Science Stream",
    institution: "Sumana Balika Vidyalaya, Ratnapura",
    meta: "Combined Maths: A · Chemistry: B · Physics: C · Z-score: 1.2516",
    details: "Ranked among top physical science performers in the district with distinction in Combined Mathematics.",
  },
];

export const leadershipHistory: LeadershipItem[] = [
  {
    year: "2026 / 2027",
    role: "Director of IT",
    organization: "Rotaract Club of Alumni of University of Moratuwa (Term 26/27)",
    description: "Spearheading digital infrastructure, web development, and tech workflows for alumni community projects.",
  },
  {
    year: "2025 / 2026",
    role: "Editorial Committee Member",
    organization: "IEEE RAS Student Branch Chapter, University of Moratuwa (Term 25/26)",
    description: "Authoring editorial documentation and technical content for robotics student chapter publications.",
  },
  {
    year: "2025 / 2026",
    role: "Committee Member",
    organization: "IEEE Communications Society Student Branch Chapter, University of Moratuwa (Term 25/26)",
    description: "Supporting community communications and knowledge-sharing workshops across the university.",
  },
  {
    year: "2025",
    role: "Finance Committee Member",
    organization: "HackElite 2.0 — IEEE WIE Student Branch Affinity Group, UoM",
    description: "Coordinating budget allocation and sponsorship logistics for the flagship hackathon.",
  },
  {
    year: "2025",
    role: "Editorial Committee Member",
    organization: "Rise Up Mora 2025 — IEEE Student Branch, University of Moratuwa",
    description: "Contributing to promotional literature, branding, and event documentation.",
  },
  {
    year: "2025",
    role: "Committee Member",
    organization: "Cancer Awareness Campaign 2025 & Hand in Hand Sub-Project",
    description: "Volunteering for healthcare awareness and community health outreach programs.",
  },
];

export const certificationsList: CertificationItem[] = [
  { year: "Expected 2027", title: "AI/ML & Data Science Bootcamp", issuer: "Peritus Research", status: "In Progress" },
  { year: "May 2025", title: "Cloud Essentials", issuer: "IBM", status: "Verified" },
  { year: "Mar 2025", title: "Python for Data Science", issuer: "IBM", status: "Verified" },
  { year: "Mar 2025", title: "SQL and Relational Databases 101", issuer: "IBM", status: "Verified" },
  { year: "Apr 2025", title: "SQL (Advanced)", issuer: "HackerRank", status: "Verified" },
  { year: "Feb 2025", title: "Web Design for Beginners", issuer: "University of Moratuwa", status: "Verified" },
  { year: "Feb 2025", title: "Python for Beginners", issuer: "University of Moratuwa", status: "Verified" },
];

export const referencesList: ReferenceItem[] = [
  {
    name: "Mr. B.H. Sudantha",
    title: "Former Dean & Senior Lecturer",
    organization: "Faculty of IT, University of Moratuwa",
    email: "sudanthabh@uom.lk",
    phone: "+94 76 927 1676",
  },
  {
    name: "Mr. P.A. Dasith Niwanthaka",
    title: "Software Engineer",
    organization: "Codegen International Pvt Ltd",
    email: "niwanthaka77@gmail.com",
    phone: "+94 70 396 9096",
  },
];
