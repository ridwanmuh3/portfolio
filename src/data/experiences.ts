import type { ExperienceObj } from "../types";

export const experiencesData: ExperienceObj[] = [
  {
    duration: "Mar 2026 - Present",
    title: "Research Assistant (Software Engineer)",
    url: "https://smart-secure-qrcode.netlify.app",
    place: "Siliwangi University",
    description:
      "Developed the end-to-end web application for Smart QR Secure Signature in collaboration with a university lecturer and academic peers. Implemented a high-security document authentication system, integrating a complex backend architecture featuring SHA3-256 hashing, dual ECDSA signatures, and Drand time-locked payloads with a dynamic frontend for generating secure QR redirect endpoints.",
    skills: [
      "Nuxt",
      "TailwindCSS",
      "Supabase",
      "tlock-js",
      "Timelock Encryption",
      "Digital Signature",
    ],
  },
  {
    duration: "Dec 2025 - Feb 2026",
    title: "Fullstack Web Developer",
    place: "SPPG Sinar Asri",
    description:
      "Developed SIMBA, a comprehensive budget and inventory management system. Delivered an end-to-end solution featuring kitchen supply tracking, financial monitoring, interactive data visualization, and secure user access controls with complete audit logging.",
    skills: [
      "React",
      "TailwindCSS",
      "Tanstack Query",
      "Golang (Fiber)",
      "PostgreSQL",
      "Docker",
      "Github",
      "Caddy",
      "Hostinger",
      "RESTFul API",
    ],
  },
  {
    duration: "Jun 2025 - Aug 2025",
    title: "Intern Backend Engineer",
    place: "Kantor Pertanahan Kabupaten Pangandaran",
    description:
      "Built the backend services for a Land Book Loan Application to streamline internal administrative workflows. The system provides core functionalities to securely manage user access, track available land books, and monitor all borrowing activities including loan notes and book requests.",
    skills: [
      "Golang (Echo)",
      "Supabase",
      "Docker",
      "Git",
      "Github",
      "RESTFul API",
      "JSON Web Token (JWT)",
    ],
  },
];
