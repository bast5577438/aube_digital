# 🌅 aube digital — Site vitrine

Site vitrine personnel de **Bastien Vannière**, développeur web indépendant à Grenoble.  
Vitrine de mes réalisations, services et coordonnées — pensée pour décrocher des
projets freelance auprès de commerces, artisans et associations.

---

## ✨ Aperçu

> *Des sites et des outils qui tournent pour de vrai — pas des maquettes.*

Page unique présentant mon parcours, mes réalisations (Mamie Paillette, Louvat Box,
ProdLouvat, WE Maggie, Le Nez d'Or, L'Art du Choix), mes services et mes coordonnées.

**🌐 Live →** _(à compléter une fois déployé — voir "Déployer sur Vercel" ci-dessous)_

**📇 Carte de visite numérique →** `/carte/` — page mobile-first avec QR code auto-généré, bouton "Sauvegarder le contact" et liens directs (téléphone, email, LinkedIn)

---

## 🛠️ Stack technique

| Technologie | Usage |
|---|---|
| HTML5 / CSS3 | Structure & design complet (variables CSS, Grid, Flexbox) |
| JavaScript vanilla | Navigation mobile, scroll reveal (IntersectionObserver) |
| Space Grotesk + Inter | Typographie (Google Fonts) |
| Vercel | Hébergement & déploiement continu |

> Zéro framework. Zéro dépendance npm. Zéro build.  
> Un seul fichier `index.html` — léger, rapide, maintenable.

---

## 📁 Structure du projet

```
aube-digital/
├── index.html                  # Page unique tout-en-un
├── serve.js                    # Serveur local de développement
├── carte/
│   ├── index.html              # Carte de visite numérique (QR code + contact)
│   ├── bastien-vanniere.vcf    # Fiche contact téléchargeable
│   └── photo.jpg               # Photo de profil (à ajouter)
├── images/
│   ├── logo_aube_digital.png   # Logo source
│   ├── logo-mark.png           # Logo transparent — nav & favicon
│   └── bastien.jpg             # Photo — section À propos
└── README.md
```

---

## 🚀 Lancer en local

```bash
# Cloner le repo
git clone https://github.com/bast5577438/aube-digital.git
cd aube-digital

# Ouvrir directement dans le navigateur
open index.html

# Ou servir en local (recommandé)
python3 -m http.server 8000
# → http://localhost:8000
```

---

## 🌐 Déployer sur Vercel

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel

# Déploiement production
vercel --prod
```

Ou directement via **vercel.com** → Import Git Repository.

---

## ⚙️ Fonctionnalités

- **Hero direct** — accroche, stats clés et double appel à l'action
- **Réalisations** — grille de 6 projets avec tags techniques et liens démo / code source
- **Services** — 4 cartes présentant mes prestations (vitrines, boutiques, outils internes, apps collaboratives)
- **À propos** — présentation personnelle, photo et philosophie de travail
- **Contact** — accès direct par email, LinkedIn et réseaux sociaux
- **100% responsive** — mobile, tablette, desktop
- **Scroll reveal** — animations fluides à l'apparition (avec repli si JS indisponible)
- **Accessible** — `prefers-reduced-motion`, ARIA, alternatives textuelles sur les images

---

## 📄 À propos de ce dépôt

Code et design © Bastien Vannière — aube digital.  
Les projets cités dans "Réalisations" appartiennent à leurs clients respectifs ;
les liens renvoient vers les dépôts ou démos correspondants.
