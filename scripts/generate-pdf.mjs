import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import fs from "fs";
import path from "path";

async function createResume() {
  const pdfDoc = await PDFDocument.create();

  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  const PAGE_WIDTH = 595.28; // A4 width
  const PAGE_HEIGHT = 841.89; // A4 height
  const MARGIN = 40;
  const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;

  const colorPrimary = rgb(0.08, 0.1, 0.15); // near black
  const colorGray = rgb(0.35, 0.38, 0.42);
  const colorLine = rgb(0.8, 0.82, 0.85);

  // --- PAGE 1 ---
  const page1 = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
  let y = PAGE_HEIGHT - MARGIN;

  function drawText(page, text, x, currentY, size, font, color = colorPrimary) {
    page.drawText(text, { x, y: currentY, size, font, color });
  }

  function drawLine(page, currentY) {
    page.drawLine({
      start: { x: MARGIN, y: currentY },
      end: { x: PAGE_WIDTH - MARGIN, y: currentY },
      thickness: 0.75,
      color: colorLine,
    });
  }

  function drawSectionTitle(page, title, currentY) {
    drawText(page, title.toUpperCase(), MARGIN, currentY, 11, fontBold, colorPrimary);
    drawLine(page, currentY - 3);
    return currentY - 14;
  }

  // Header
  const nameText = "MINOTHMA SITHUMINI";
  const nameWidth = fontBold.widthOfTextAtSize(nameText, 20);
  drawText(page1, nameText, (PAGE_WIDTH - nameWidth) / 2, y, 20, fontBold);
  y -= 16;

  const titleText = "Software Engineering Intern";
  const titleWidth = fontRegular.widthOfTextAtSize(titleText, 12);
  drawText(page1, titleText, (PAGE_WIDTH - titleWidth) / 2, y, 12, fontRegular, colorGray);
  y -= 14;

  const contactText = "+94 71 931 9477  |  minothmasithumini@gmail.com  |  linkedin.com/in/minothma  |  github.com/Minothma";
  const contactWidth = fontRegular.widthOfTextAtSize(contactText, 8.5);
  drawText(page1, contactText, (PAGE_WIDTH - contactWidth) / 2, y, 8.5, fontRegular, colorGray);
  y -= 12;

  const locText = "Ratnapura, Sri Lanka";
  const locWidth = fontRegular.widthOfTextAtSize(locText, 8.5);
  drawText(page1, locText, (PAGE_WIDTH - locWidth) / 2, y, 8.5, fontRegular, colorGray);
  y -= 18;

  // Professional Summary
  y = drawSectionTitle(page1, "Professional Summary", y);
  const summaryLines = [
    "An IT undergraduate at the University of Moratuwa with hands-on experience in full-stack development, building end-to-end",
    "web applications using Next.js, React, Spring Boot, and NestJS. Skilled in designing RESTful APIs, relational database systems,",
    "and secure authentication workflows through academic and personal projects. Actively engaged in university leadership and",
    "volunteer initiatives, currently seeking a Software Engineering Internship to apply technical skills and contribute to real-world projects."
  ];
  for (const line of summaryLines) {
    drawText(page1, line, MARGIN, y, 8.5, fontRegular);
    y -= 11.5;
  }
  y -= 8;

  // Education
  y = drawSectionTitle(page1, "Education", y);
  
  // UoM
  drawText(page1, "B.Sc. (Hons) in Information Technology and Management (CGPA: 3.47 / 4.00)", MARGIN, y, 9, fontBold);
  const uomDate = "2024 - Present";
  drawText(page1, uomDate, PAGE_WIDTH - MARGIN - fontRegular.widthOfTextAtSize(uomDate, 9), y, 9, fontRegular, colorGray);
  y -= 12;
  drawText(page1, "University of Moratuwa, Sri Lanka", MARGIN, y, 8.5, fontOblique, colorGray);
  y -= 14;

  // A/L
  drawText(page1, "G.C.E Advanced Level", MARGIN, y, 9, fontBold);
  const alDate = "2022";
  drawText(page1, alDate, PAGE_WIDTH - MARGIN - fontRegular.widthOfTextAtSize(alDate, 9), y, 9, fontRegular, colorGray);
  y -= 12;
  drawText(page1, "Sumana Balika Vidyalaya, Ratnapura", MARGIN, y, 8.5, fontOblique, colorGray);
  y -= 12;
  drawText(page1, "- Physical Science Stream - Combined Mathematics (A), Chemistry (B), Physics (C) - Z-score: 1.2516", MARGIN + 8, y, 8, fontRegular);
  y -= 18;

  // Technical Skills
  y = drawSectionTitle(page1, "Technical Skills", y);
  const skillsData = [
    { label: "Programming Languages: ", val: "Java, C, Python, JavaScript, TypeScript, PHP, SQL" },
    { label: "Frontend Development: ", val: "HTML, CSS, React, Next.js, Tailwind CSS" },
    { label: "Backend Development: ", val: "Spring Boot, RESTful APIs, NestJS" },
    { label: "Databases: ", val: "PostgreSQL, MySQL, Prisma ORM, Flyway" },
    { label: "DevOps & Tools: ", val: "Docker, Git, Postman, AWS S3" },
    { label: "UI/UX & Design: ", val: "Figma, GIMP" },
    { label: "Concepts: ", val: "OOP, Data Structures & Algorithms, Authentication & Authorization, Database Design, RESTful API Design, Agile" },
  ];

  for (const sk of skillsData) {
    drawText(page1, sk.label, MARGIN, y, 8.5, fontBold);
    const labelW = fontBold.widthOfTextAtSize(sk.label, 8.5);
    drawText(page1, sk.val, MARGIN + labelW, y, 8.5, fontRegular);
    y -= 12;
  }
  y -= 8;

  // Projects (Page 1 Projects)
  y = drawSectionTitle(page1, "Projects", y);

  // Project 1: Durdans Hospital LIMS
  drawText(page1, "Durdans Hospital LIMS | Full-Stack Developer, 2nd-Year Group Project", MARGIN, y, 9, fontBold);
  const limsDate = "Aug 2025 - Aug 2026";
  drawText(page1, limsDate, PAGE_WIDTH - MARGIN - fontRegular.widthOfTextAtSize(limsDate, 9), y, 9, fontRegular, colorGray);
  y -= 12;

  drawText(page1, "Tech: Next.js, React, TypeScript, Spring Boot, PostgreSQL, Keycloak", MARGIN, y, 8.5, fontOblique, colorGray);
  y -= 12;

  const limsBullets = [
    "Built end-to-end laboratory modules - Sample Reception, Accessioning, MLT Result Entry, and Quality Control using Next.js and Spring Boot.",
    "Developed an automated sample verification system with tube-cap recognition, rejection workflows, barcode reprints, and priority triage.",
    "Implemented real-time result validation with dynamic reference range checks, longitudinal delta-checks, and Westgard QC rules.",
    "Integrated Keycloak RBAC and PostgreSQL audit logs to secure RESTful APIs and ensure full specimen traceability.",
    "Designed responsive, real-time lab dashboards with live Turnaround Time (TAT) tracking and instant alerts for critical/panic test results.",
  ];
  for (const b of limsBullets) {
    drawText(page1, "- " + b, MARGIN + 8, y, 8, fontRegular);
    y -= 11.5;
  }
  y -= 10;

  // Project 2: Job Application Tracker
  drawText(page1, "Job Application Tracker | Full-Stack Developer, Individual Project", MARGIN, y, 9, fontBold);
  const jobDate = "Aug 2026 - Sep 2026";
  drawText(page1, jobDate, PAGE_WIDTH - MARGIN - fontRegular.widthOfTextAtSize(jobDate, 9), y, 9, fontRegular, colorGray);
  y -= 12;

  drawText(page1, "Tech: Next.js, React, TypeScript, NestJS, PostgreSQL, Prisma, Flyway, AWS S3, Docker", MARGIN, y, 8.5, fontOblique, colorGray);
  y -= 12;

  const jobBullets = [
    "Developed an end-to-end application lifecycle tracking platform featuring an interactive drag-and-drop Kanban board to manage hiring stages.",
    "Built multi-version resume management with direct AWS S3 presigned uploads, interview scheduling, and activity notes timeline.",
    "Architected modular RESTful APIs in NestJS with JWT authentication (Access & Refresh tokens), integrated Flyway migrations with Prisma ORM.",
    "Containerized setup using Docker and designed a responsive dashboard with real-time status analytics.",
  ];
  for (const b of jobBullets) {
    drawText(page1, "- " + b, MARGIN + 8, y, 8, fontRegular);
    y -= 11.5;
  }

  // --- PAGE 2 ---
  const page2 = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
  y = PAGE_HEIGHT - MARGIN;

  // Page 2 Header (Subtle)
  drawText(page2, "MINOTHMA SITHUMINI - RESUME (PAGE 2)", MARGIN, y, 9, fontBold, colorGray);
  const p2Contact = "minothmasithumini@gmail.com  |  +94 71 931 9477";
  drawText(page2, p2Contact, PAGE_WIDTH - MARGIN - fontRegular.widthOfTextAtSize(p2Contact, 9), y, 9, fontRegular, colorGray);
  y -= 8;
  drawLine(page2, y);
  y -= 16;

  // Projects (Continued)
  y = drawSectionTitle(page2, "Projects (Continued)", y);

  // Project 3: Inkora
  drawText(page2, "Inkora | Full-Stack Developer, Personal Project", MARGIN, y, 9, fontBold);
  const inkoraDate = "Dec 2025 - Jan 2026";
  drawText(page2, inkoraDate, PAGE_WIDTH - MARGIN - fontRegular.widthOfTextAtSize(inkoraDate, 9), y, 9, fontRegular, colorGray);
  y -= 12;

  drawText(page2, "Tech: PHP, MySQL, JavaScript, HTML, CSS, Bootstrap, AJAX", MARGIN, y, 8.5, fontOblique, colorGray);
  y -= 12;

  const inkoraBullets = [
    "Built a full-stack blogging platform with user authentication and full CRUD functionality, featuring rich-text publishing and draft auto-saving.",
    "Developed interactive features including real-time AJAX search, a multi-type reaction system, and a dynamic comment section.",
    "Strengthened platform security with CSRF protection, SQL injection prevention (prepared statements), and created an Admin Dashboard.",
  ];
  for (const b of inkoraBullets) {
    drawText(page2, "- " + b, MARGIN + 8, y, 8, fontRegular);
    y -= 11.5;
  }
  y -= 12;

  // Project 4: Battery Vitals
  drawText(page2, "Battery Vitals | Embedded Systems Developer, 1st-Year Group Project", MARGIN, y, 9, fontBold);
  const bvDate = "Aug 2024 - Aug 2025";
  drawText(page2, bvDate, PAGE_WIDTH - MARGIN - fontRegular.widthOfTextAtSize(bvDate, 9), y, 9, fontRegular, colorGray);
  y -= 12;

  drawText(page2, "Tech: Python, ESP32, Embedded Systems", MARGIN, y, 8.5, fontOblique, colorGray);
  y -= 12;

  const bvBullets = [
    "Implemented automated charging, resting, and discharging cycles for Li-Po batteries using ESP32 and relay-based switching.",
    "Integrated TP4056, TP5100, and IP2312 charging modules with configurable discharge loads to generate battery cycle data.",
    "Implemented temperature monitoring and fan-based thermal protection using DS18B20, contributing to SOH analysis via curve evaluation.",
  ];
  for (const b of bvBullets) {
    drawText(page2, "- " + b, MARGIN + 8, y, 8, fontRegular);
    y -= 11.5;
  }
  y -= 14;

  // Certifications
  y = drawSectionTitle(page2, "Certifications", y);
  const certs = [
    { title: "- Cloud Essentials - IBM", date: "May 2025" },
    { title: "- Python for Data Science - IBM", date: "Mar 2025" },
    { title: "- SQL and Relational Databases 101 - IBM", date: "Mar 2025" },
    { title: "- SQL (Advanced) - HackerRank", date: "Apr 2025" },
    { title: "- Web Design for Beginners - University of Moratuwa", date: "Feb 2025" },
    { title: "- Python for Beginners - University of Moratuwa", date: "Feb 2025" },
    { title: "- Peritus Research Bootcamp - AI/ML & Data Science - Peritus Research", date: "In Progress (Exp. Feb 2027)" },
  ];
  for (const c of certs) {
    drawText(page2, c.title, MARGIN + 8, y, 8.5, fontRegular);
    drawText(page2, c.date, PAGE_WIDTH - MARGIN - fontRegular.widthOfTextAtSize(c.date, 8.5), y, 8.5, fontRegular, colorGray);
    y -= 12;
  }
  y -= 10;

  // Leadership & Activities
  y = drawSectionTitle(page2, "Leadership & Activities", y);
  const leadership = [
    "- Director of IT - Rotaract Club of Alumni of University of Moratuwa (Term 26/27)",
    "- Editorial Committee Member (Term 25/26) - IEEE RAS Student Branch Chapter, University of Moratuwa",
    "- Committee Member (Term 25/26) - IEEE Communications Society Student Branch Chapter, University of Moratuwa",
    "- Committee Member - Cancer Awareness Campaign 2025 & Hand in Hand Sub-Project, Rotaract Club of University of Moratuwa",
    "- Finance Committee Member - HackElite 2.0, IEEE WIE Student Branch Affinity Group, University of Moratuwa",
    "- Editorial Committee Member - Rise Up Mora 2025, IEEE Student Branch, University of Moratuwa",
  ];
  for (const lead of leadership) {
    drawText(page2, lead, MARGIN + 8, y, 8.5, fontRegular);
    y -= 12;
  }
  y -= 10;

  // Languages
  y = drawSectionTitle(page2, "Languages", y);
  drawText(page2, "English (Professional Working Proficiency), Sinhala (Native)", MARGIN + 8, y, 8.5, fontRegular);
  y -= 20;

  // References
  y = drawSectionTitle(page2, "References", y);
  const col1X = MARGIN + 8;
  const col2X = PAGE_WIDTH / 2 + 10;

  // Ref 1
  drawText(page2, "Mr. B.H. Sudantha", col1X, y, 9, fontBold);
  drawText(page2, "Mr. P.A. Dasith Niwanthaka", col2X, y, 9, fontBold);
  y -= 11.5;

  drawText(page2, "Former Dean & Senior Lecturer", col1X, y, 8.5, fontRegular, colorGray);
  drawText(page2, "Software Engineer", col2X, y, 8.5, fontRegular, colorGray);
  y -= 11.5;

  drawText(page2, "Faculty of IT, University of Moratuwa", col1X, y, 8.5, fontRegular, colorGray);
  drawText(page2, "Codegen International Pvt Ltd", col2X, y, 8.5, fontRegular, colorGray);
  y -= 11.5;

  drawText(page2, "Email: sudanthabh@uom.lk", col1X, y, 8, fontRegular);
  drawText(page2, "Email: niwanthaka77@gmail.com", col2X, y, 8, fontRegular);
  y -= 11;

  drawText(page2, "Phone: +94 76 927 1676", col1X, y, 8, fontRegular);
  drawText(page2, "Phone: +94 70 396 9096", col2X, y, 8, fontRegular);

  const pdfBytes = await pdfDoc.save();
  const outputPath = path.join(process.cwd(), "public", "resume.pdf");
  fs.writeFileSync(outputPath, pdfBytes);
  console.log("Successfully generated professional 2-page PDF resume at:", outputPath);
}

createResume().catch(console.error);
