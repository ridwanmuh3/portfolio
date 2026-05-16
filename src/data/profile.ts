export const profile = {
  name: "Ridwan Muhammad Raihan",
  role: "Software Engineer",
  location: "Tasikmalaya, Indonesia",
  summary:
    "I build web applications, backend services, and document security systems with clear architecture, stable performance, and usable interfaces.",
  about:
    "I work across product flow, data structure, API design, interface implementation, and deployment. My technical interests include backend systems, cryptography, post-quantum signatures, and Web3 development on Ethereum and Solana.",
  focusAreas: ["Frontend", "Backend", "Cryptography", "Web3"],
  email: "ridwanmuhraihan@gmail.com",
  githubUrl: "https://github.com/ridwanmuh3",
  linkedinUrl: "https://www.linkedin.com/in/ridwan-muhammad-raihan-0b22a1249",
} as const;

export const highlights = [
  { value: "3+", label: "web products shipped" },
  { value: "2026", label: "active security research" },
  { value: "Fullstack", label: "frontend to deployment" },
] as const;

export const services = [
  {
    title: "Web Application",
    description:
      "Dashboards, internal tools, and web systems with clear flows, predictable state, and responsive interfaces.",
  },
  {
    title: "Backend & API",
    description:
      "REST APIs, authentication, database schemas, audit logs, and maintainable service deployment.",
  },
  {
    title: "Security-Oriented Systems",
    description:
      "Document verification, hashing, digital signatures, secure QR flows, and practical cryptography integration.",
  },
] as const;

export const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "Nuxt", "TypeScript", "TailwindCSS", "TanStack Query", "Accessibility"],
  },
  {
    title: "Backend",
    skills: ["Golang", "Fiber", "Echo", "REST API", "PostgreSQL", "Supabase"],
  },
  {
    title: "Platform",
    skills: ["Docker", "Caddy", "Netlify", "Hostinger", "GitHub", "Git"],
  },
  {
    title: "Security",
    skills: [
      "JSON Web Token",
      "Digital Signature",
      "tlock-js",
      "Timelock Encryption",
      "ML-DSA",
      "Falcon",
    ],
  },
] as const;
