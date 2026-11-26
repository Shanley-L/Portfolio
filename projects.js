// ✏️ Contenu du portfolio : un objet par projet, dans l'ordre d'affichage.
//
// repo      : nom exact du dépôt GitHub (sert aux liens et aux étoiles)
// title     : nom affiché
// type      : "ecole" (sujet 42), "hackathon" ou "perso"
// featured  : true = grande carte dans « Projets phares »
// status    : "Terminé", "En cours"…   score : note 42 (ex. "125/100")
// team      : true si réalisé en groupe
// summary   : résumé en une ou deux phrases
// features  : fonctionnalités clés (3 à 5 max)
// stack     : technologies
//
// Un dépôt absent de cette liste n'est pas affiché.

const PROJECTS = [
  // ───────────── Projets phares ─────────────
  {
    repo: "music-room", title: "Music Room", type: "ecole", featured: true,
    team: true,
    summary: "Application mobile de playlists collaboratives, réalisée en partenariat avec Deezer : les utilisateurs votent en direct pour les morceaux et partagent le contrôle de la lecture.",
    features: [
      "Vote en temps réel sur la file de lecture (Socket.IO)",
      "Playlists partagées et délégation du contrôle d'un appareil",
      "API REST documentée (Swagger), validation Zod, rate limiting",
      "Cache Redis et tests de charge (k6, autocannon)"
    ],
    stack: ["React Native", "Expo", "TypeScript", "Node.js", "Express", "Prisma", "PostgreSQL", "Redis", "Docker"]
  },
  {
    repo: "Ft_Transcendence", title: "Transcendence", type: "ecole", featured: true,
    status: "Terminé", score: "96/100", team: true,
    summary: "Projet final du tronc commun 42 : un site de Pong multijoueur en temps réel avec chat, profils et authentification sécurisée.",
    features: [
      "Parties de Pong en temps réel via WebSockets, rendu 3D (Three.js)",
      "Connexion OAuth 42 / GitHub et double authentification (TOTP + QR code)",
      "Chat, amis et profils joueurs",
      "Déploiement complet avec Docker Compose"
    ],
    stack: ["NestJS", "TypeScript", "React", "Three.js", "Prisma", "PostgreSQL", "Tailwind", "Docker"]
  },
  {
    repo: "HyperTube", title: "HyperTube", type: "ecole", featured: true,
    status: "En cours",
    summary: "Plateforme de streaming vidéo qui recherche des films sur plusieurs sources et les lit pendant leur téléchargement en BitTorrent.",
    features: [
      "Recherche multi-sources (Jackett, OMDb, TMDb)",
      "Streaming pendant le téléchargement torrent, conversion FFmpeg",
      "Sous-titres automatiques (OpenSubtitles)",
      "OAuth 42 / Google / GitHub et API REST protégée par JWT"
    ],
    stack: ["Node.js", "Express", "React", "Vite", "PostgreSQL", "FFmpeg", "Docker"]
  },
  {
    repo: "Matcha", title: "Matcha", type: "ecole", featured: true,
    status: "En cours",
    summary: "Site de rencontre complet : profils, suggestions selon la localisation et les centres d'intérêt, likes réciproques et messagerie instantanée.",
    features: [
      "Inscription avec vérification par email et réinitialisation du mot de passe",
      "Suggestions et filtres (âge, distance, tags, popularité)",
      "Chat et notifications en temps réel (Flask-SocketIO)",
      "Protection contre les injections SQL et le XSS"
    ],
    stack: ["Python", "Flask", "React", "Redux", "MUI", "MySQL", "Nginx", "Docker"]
  },
  {
    repo: "mistralHackaton2026", title: "Monaco Cultural Agent", type: "hackathon", featured: true,
    status: "Prototype",
    summary: "Agent conversationnel IA créé pour le hackathon Mistral AI 2026 : il répond aux questions sur les événements culturels de Monaco à partir de données réelles.",
    features: [
      "Réponses fondées sur des données collectées (pas d'hallucination)",
      "Entrée vocale (Mistral Voxtral) et réponses lues à voix haute (ElevenLabs)",
      "Choix du modèle : Mistral, NVIDIA NIM ou LLM local",
      "Peut tourner entièrement sur site (testé sur NVIDIA DGX Spark)"
    ],
    stack: ["Python", "FastAPI", "Mistral AI", "vLLM", "ElevenLabs"]
  },
  {
    repo: "Inception-of-things", title: "Inception of Things", type: "ecole", featured: true,
    team: true,
    summary: "Mise en place d'une infrastructure Kubernetes minimale avec déploiement continu GitOps.",
    features: [
      "Cluster K3s sur machines virtuelles Vagrant",
      "Applications et Ingress déployés sur K3s",
      "Cluster K3d et déploiement automatique avec Argo CD",
      "Bonus : GitLab auto-hébergé dans le cluster"
    ],
    stack: ["Kubernetes", "K3s", "K3d", "Argo CD", "GitLab CI", "Vagrant", "Shell"]
  },
  {
    repo: "leaffliction", title: "Leaffliction", type: "ecole", featured: true,
    status: "Terminé",
    summary: "Vision par ordinateur : détection de maladies sur des feuilles de pommier et de vigne (8 classes) avec un réseau de neurones convolutif.",
    features: [
      "Analyse de la répartition du jeu de données (graphiques)",
      "Augmentation et équilibrage des données (rotation, flou, distorsion…)",
      "Segmentation de la feuille avec PlantCV",
      "CNN PyTorch : 99,93 % de précision sur 1 447 images de validation"
    ],
    stack: ["Python", "PyTorch", "OpenCV", "PlantCV", "scikit-learn"]
  },
  {
    repo: "Learn2Slither", title: "Learn2Slither", type: "ecole", featured: true,
    status: "Terminé",
    summary: "Un serpent qui apprend seul à jouer au Snake par apprentissage par renforcement, en ne voyant que les cases alignées avec sa tête.",
    features: [
      "Agent Q-learning entraîné sur des centaines de parties",
      "Sauvegarde et chargement des modèles entraînés",
      "Affichage Pygame, mode pas à pas et menu de réglages (bonus)",
      "Plateau configurable de 3×3 à 40×40"
    ],
    stack: ["Python", "Pygame", "Pytest"]
  },

  // ───────────── Autres projets web ─────────────
  {
    repo: "Red-tetris", title: "Red Tetris", type: "ecole",
    status: "En cours",
    summary: "Tetris multijoueur en réseau, en JavaScript full stack et programmation fonctionnelle.",
    features: [
      "Parties multijoueurs en temps réel (Socket.IO)",
      "Logique de jeu côté serveur, interface React",
      "Tests unitaires avec Jest et Testing Library"
    ],
    stack: ["JavaScript", "React", "Node.js", "Express", "Socket.IO", "SQLite", "Jest"]
  },
  {
    repo: "Camagru_v2", title: "Camagru", type: "ecole", team: true,
    summary: "Mini réseau social de photo-montages : prise de photo à la webcam, ajout d'autocollants et galerie publique. Version refaite avec un serveur Python (une première version en Node.js existe dans le dépôt Camagru).",
    features: [
      "Capture webcam ou import d'image, avec superposition d'autocollants",
      "Galerie publique avec likes et commentaires",
      "Comptes utilisateurs avec confirmation par email"
    ],
    stack: ["Python", "JavaScript", "HTML/CSS", "Docker"]
  },
  {
    repo: "Matcha-Analytics", title: "Matcha Analytics", type: "perso",
    summary: "API d'analyse des interactions dans une application de rencontre (vues, likes, matchs, messages), créée pour apprendre Spring Boot.",
    features: [
      "API REST de statistiques par utilisateur et par type d'interaction",
      "Persistance JPA et requêtes personnalisées",
      "Tableau de bord React"
    ],
    stack: ["Java", "Spring Boot", "JPA", "MariaDB", "React", "Docker"]
  },
  {
    repo: "Inception", title: "Inception", type: "ecole",
    status: "Terminé", score: "100/100",
    summary: "Infrastructure Docker écrite entièrement à la main : chaque service a sa propre image, sans image toute faite.",
    features: [
      "NGINX en TLS comme seul point d'entrée",
      "WordPress + PHP-FPM et base MariaDB dans des conteneurs séparés",
      "Volumes persistants et réseau Docker dédié"
    ],
    stack: ["Docker", "Docker Compose", "NGINX", "MariaDB", "WordPress"]
  }
];

// Dépôts volontairement non affichés :
//  - Shanley-L          : README du profil GitHub
//  - Camagru            : première version, remplacée par Camagru_v2
//  - IOT-Jim-Shan-Manu  : dépôt annexe d'Inception of Things (un seul fichier)
//  - ytm-bridge         : dépôt de test
//  - projets du tronc commun 42 antérieurs à Transcendence (libft, Minishell, Cub3D…), sauf Inception
//  - python, Cpp, nvim-init : modules d'apprentissage / configuration perso
