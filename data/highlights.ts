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
  category?: "Cloud & DevOps" | "AI / ML & Data Science" | "Databases & Backend" | "Programming & Web" | "All";
  verifyUrl?: string;
  verificationCode?: string;
  skills?: string[];
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
  {
    year: "2018",
    degree: "G.C.E. Ordinary Level Examination",
    institution: "Sumana Balika Vidyalaya, Ratnapura",
    meta: "8 A's, 1 B (Distinction Profile)",
    details: "Excellent academic foundation with 8 Distinctions (A grades) including Mathematics, Science, and English.",
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
  {
    year: "May 2025",
    title: "Cloud Essentials",
    issuer: "IBM",
    category: "Cloud & DevOps",
    verifyUrl: "https://www.credly.com/badges/8e9d4fd7-ce51-4207-8a83-101791dd6be2",
    skills: ["Cloud Computing", "IaaS / PaaS / SaaS", "Cloud Security"],
    status: "Credly Badge",
  },
  {
    year: "May 2025",
    title: "Introduction to Cloud (CC0101EN)",
    issuer: "IBM / Cognitive Class",
    category: "Cloud & DevOps",
    verifyUrl: "https://courses.cognitiveclass.ai/certificates/8938568a53da4f7c96e16c85f338d217",
    skills: ["Cloud Architecture", "Hybrid Cloud", "Cloud Storage"],
    status: "Verified Certificate",
  },
  {
    year: "Mar 2025",
    title: "Python for Data Science",
    issuer: "IBM",
    category: "AI / ML & Data Science",
    verifyUrl: "https://www.credly.com/badges/a8ea2fd3-15c5-4e87-888a-901221507702",
    skills: ["Python", "Data Science", "Pandas", "NumPy"],
    status: "Credly Badge",
  },
  {
    year: "Mar 2025",
    title: "Python 101 for Data Science (PY0101EN)",
    issuer: "IBM / Cognitive Class",
    category: "AI / ML & Data Science",
    verifyUrl: "https://courses.cognitiveclass.ai/certificates/894eb296615c4f23a52f96fdf73d8eef",
    skills: ["Python", "Data Analysis", "Algorithms"],
    status: "Verified Certificate",
  },
  {
    year: "Mar 2025",
    title: "SQL and Relational Databases 101 (DB0101EN)",
    issuer: "IBM / Cognitive Class",
    category: "Databases & Backend",
    verifyUrl: "https://courses.cognitiveclass.ai/certificates/b7cda0bda8fd4e7f84a3c870a52348dc",
    skills: ["SQL", "Relational Databases", "Schema Design"],
    status: "Verified Certificate",
  },
  {
    year: "Apr 2025",
    title: "SQL (Advanced)",
    issuer: "HackerRank",
    category: "Databases & Backend",
    skills: ["Advanced SQL", "Complex Joins", "Aggregations"],
    status: "Verified",
  },
  {
    year: "Feb 2025",
    title: "Python for Beginners",
    issuer: "University of Moratuwa (CODL)",
    category: "Programming & Web",
    verifyUrl: "https://open.uom.lk/lms/mod/customcert/verify_certificate.php?code=I4JR3gc9Wb",
    verificationCode: "I4JR3gc9Wb",
    skills: ["Python", "Algorithms", "Dept. of CSE"],
    status: "Verified",
  },
  {
    year: "Feb 2025",
    title: "Web Design for Beginners",
    issuer: "University of Moratuwa (CODL)",
    category: "Programming & Web",
    verifyUrl: "https://open.uom.lk/lms/mod/customcert/verify_certificate.php?code=rEWM10jISt",
    verificationCode: "rEWM10jISt",
    skills: ["HTML5", "CSS3", "Responsive UI", "Faculty of IT"],
    status: "Verified",
  },
  {
    year: "Expected 2027",
    title: "AI/ML & Data Science Bootcamp",
    issuer: "Peritus Research",
    category: "AI / ML & Data Science",
    skills: ["Machine Learning", "Data Science", "Deep Learning"],
    status: "In Progress",
  },
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
