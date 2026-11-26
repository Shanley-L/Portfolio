// ✏️ Configuration générale (projets : projects.js · expériences et formation : experiences.js)
const CONFIG = {
  username: "Shanley-L",
  displayName: "Shanley Léon",
  tagline: "Développeur Full-Stack / DevOps · 42 Paris",
  bio: "En dernière année à 42 Paris (RNCP niveau 7). Je conçois des applications web complètes, du backend au déploiement, et je travaille avec des LLM auto-hébergés.",
  email: "",                                         // optionnel : affiche un bouton « Me contacter »
  linkedin: "https://www.linkedin.com/in/shanleon",
  cv: "cv/CV-Shanley-LEON.pdf"                       // CV public, sans téléphone ni email (laisser vide pour masquer le bouton)
};

// ✏️ Compétences, groupées par domaine (source : CV)
const SKILLS = [
  { group: "Full-stack", items: ["Python", "FastAPI", "Flask", "TypeScript", "JavaScript", "React", "Redux", "Node.js", "NestJS", "Express", "TailwindCSS", "API REST", "WebSockets"] },
  { group: "DevOps et conteneurs", items: ["Linux", "Shell / Bash", "Docker", "Docker Compose", "Kubernetes (K3s / K3d)", "Argo CD", "GitLab CI/CD", "Nginx", "TLS"] },
  { group: "Données", items: ["PostgreSQL", "SQL", "Prisma", "MySQL", "MariaDB", "MongoDB", "Redis", "InfluxDB"] },
  { group: "IA et automatisation", items: ["vLLM", "RAG", "Open WebUI", "Airflow", "Développement avec agents IA (Claude Code)"] },
  { group: "Cloud et supervision", items: ["AWS S3", "AWS Lambda", "AWS Cognito", "Grafana"] },
  { group: "Sécurité", items: ["OAuth", "2FA", "Rôles et permissions", "Gestion des secrets", "Validation des entrées"] },
  { group: "Qualité et méthodes", items: ["Pytest", "Playwright", "Cypress", "Tests unitaires / E2E", "Git / GitHub", "Agile / Scrum", "Jira", "Confluence"] }
];
