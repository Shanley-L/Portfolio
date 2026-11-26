# Portfolio · Shanley Léon

Portfolio de développeur full-stack / DevOps, formé à l'école 42 Paris : expériences professionnelles, formation et projets (web, DevOps, IA).

🔗 **En ligne : https://shanley-l.github.io**

## Contenu

- **Expériences** : Navis (application SaaS multi-restaurants, assistant IA on-premise) et Alki (pipeline de données, API Python, AWS).
- **Formation** : école 42 Paris, titre RNCP niveau 7.
- **Projets** : Music Room, Transcendence, HyperTube, Matcha, Monaco Cultural Agent (hackathon Mistral AI 2026), Inception of Things, Leaffliction, Learn2Slither…
  Chaque projet affiche un résumé, ses fonctionnalités clés, sa stack et son origine (école 42, hackathon ou personnel).

## Technique

Site statique en HTML, CSS et JavaScript, sans framework ni étape de build, hébergé sur GitHub Pages.
Le contenu est écrit à la main dans des fichiers de données ; l'API publique de GitHub ajoute l'avatar, les étoiles et les liens de démo.

| Fichier | Rôle |
|---|---|
| `config.js` | Nom, titre, bio, liens de contact |
| `experiences.js` | Expériences professionnelles et formation |
| `projects.js` | Fiches des projets (résumé, fonctionnalités, stack, type) |
| `index.html`, `style.css`, `script.js` | Structure, style (thème clair / sombre automatique) et affichage |

## Lancer en local

```sh
python -m http.server 8000
# puis ouvrir http://localhost:8000
```
