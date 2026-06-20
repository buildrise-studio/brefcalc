# BrefCalc — Site de présentation

Landing page React (Vite) pour présenter l'application BrefCalc et permettre
le téléchargement de l'APK Android.

## Lancer en local

```bash
npm install
npm run dev
```

Le site est servi sur http://localhost:5173

## Ajouter le fichier APK

Place ton fichier `.apk` ici, en le nommant exactement `brefcalc.apk` :

```
public/apk/brefcalc.apk
```

Le bouton de téléchargement de la section "Télécharger" (`src/components/Download.jsx`)
pointe déjà vers `/apk/brefcalc.apk` — aucune autre modification n'est nécessaire,
il suffit de déposer le fichier au bon endroit puis de redéployer.

Si tu préfères héberger l'APK ailleurs (Google Drive, GitHub Releases, etc. — car
les fichiers volumineux ne sont pas idéaux sur Vercel gratuit au-delà de quelques
dizaines de Mo), remplace simplement la valeur de `href` dans
`src/components/Download.jsx` par l'URL externe.

## Déployer sur Vercel

### Option A — via le site web Vercel (le plus simple)

1. Pousse ce projet sur un repo GitHub/GitLab/Bitbucket.
2. Va sur https://vercel.com/new et importe le repo.
3. Vercel détecte automatiquement Vite : laisse les réglages par défaut
   (Build command: `npm run build`, Output directory: `dist`).
4. Clique sur "Deploy".

### Option B — via la CLI Vercel

```bash
npm install -g vercel
vercel login
vercel
```

Suis les invites (choisis le dossier du projet, accepte les réglages détectés).
Pour mettre en production directement :

```bash
vercel --prod
```

## Structure du projet

```
src/
  components/
    Header.jsx          en-tête + navigation
    Hero.jsx             section d'accueil avec la fiche de calcul animée
    Features.jsx         grille des fonctionnalités
    HowItWorks.jsx        les 4 étapes du calcul
    ReportSection.jsx     section sur le rapport PDF généré
    Download.jsx          bouton de téléchargement de l'APK
    Footer.jsx             pied de page / contact
  App.jsx
  main.jsx
  index.css              design tokens (couleurs, typo) + styles globaux
public/
  logo-brefcalc.png       logo affiché sur le site
  apk/brefcalc.apk        ⬅️ à ajouter manuellement
```

## Personnalisation rapide

- **Couleurs / typographie** : variables CSS en haut de `src/index.css` (`:root`).
- **Textes des sections** : directement dans chaque fichier `.jsx` (tableaux `FEATURES`,
  `STEPS`, etc.), pas de CMS, tout est statique.
- **Coordonnées de contact** : `src/components/Footer.jsx`.
