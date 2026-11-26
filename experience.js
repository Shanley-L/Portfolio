// ✏️ Expériences professionnelles, de la plus récente à la plus ancienne (source : CV).
// Chaque expérience peut contenir plusieurs missions (sous-projets).

const EXPERIENCES = [
  {
    company: "Navis", role: "Développeur full-stack", contract: "Stage",
    period: "Avril – octobre 2026",
    missions: [
      {
        name: "Application de gestion multi-restaurants",
        stack: ["FastAPI", "React", "TypeScript", "PostgreSQL", "Docker"],
        points: [
          "Sécurisation : authentification et sessions, validation des entrées, gestion des secrets, rôles et permissions, correction des failles identifiées",
          "Mise en place d'environ 2 500 tests automatisés",
          "Migration de SQLite vers PostgreSQL et bascule en production"
        ]
      },
      {
        name: "Assistant IA on-premise",
        stack: ["Open WebUI", "vLLM", "RAG", "Docker"],
        points: [
          "Script de contrôle de 791 vérifications pour valider chaque déploiement",
          "Montées de version avec releases versionnées et procédure de retour arrière",
          "Outillage d'installation conçu from scratch (Docker Compose, scripts) pour déployer simplement chez les nouveaux clients"
        ]
      }
    ]
  },
  {
    company: "Alki", role: "Développeur full-stack / Ingénieur data", contract: "Freelance",
    period: "Septembre – décembre 2025",
    missions: [
      {
        stack: ["Airflow", "AWS", "InfluxDB", "Grafana"],
        points: [
          "Pipeline de traitement, de présentation et de monitoring des données",
          "Écran de monitoring et vérification des routines qui alimentent l'algorithme de l'entreprise : temps consacré à ces tâches divisé par au moins 3"
        ]
      }
    ]
  },
  {
    company: "Alki", role: "Développeur full-stack", contract: "Stage",
    period: "Mars – septembre 2025",
    missions: [
      {
        stack: ["Python", "React", "AWS S3", "Lambda", "Cognito", "Jira", "Figma"],
        points: [
          "Développement et sécurisation d'API REST en Python",
          "Intégration de services AWS (S3, Lambda, Cognito) et fonctionnalités front-end React sur une application en production",
          "Méthode agile (sprint planning, daily meetings) avec Jira, Figma et Confluence"
        ]
      }
    ]
  }
];

// ✏️ Formation
const EDUCATION = [
  {
    school: "École 42 Paris",
    degree: "Architecture du numérique · Titre RNCP niveau 7 (niveau Master)",
    period: "Depuis 2022 · obtention prévue début 2027",
    points: [
      "Pédagogie par projets et en pair-à-pair, sans cours magistraux : chaque projet est corrigé par d'autres étudiants",
      "Tronc commun : C, C++, systèmes Unix, réseau, concurrence, conteneurs Docker, jusqu'au projet final Transcendence",
      "Approfondissements : développement web et mobile, DevOps / Kubernetes, intelligence artificielle"
    ],
    stack: ["C", "C++", "Python", "TypeScript", "Docker", "Kubernetes", "Git"]
  }
];
