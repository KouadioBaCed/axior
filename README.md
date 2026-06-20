# AXIOR — Site vitrine

Site vitrine corporate premium pour **AXIOR**, groupe multisectoriel ivoirien.
Slogan : _« L'Expert de vos projets »_.

## Stack technique

- **Next.js 14** (App Router) — rendu statique, SEO natif
- **TailwindCSS 3** — design system sur mesure (vert `#407A4B` / gris `#636462`)
- **Framer Motion** — animations UI fluides (reveal au scroll, transitions)
- **TypeScript** — typage strict
- Polices **Inter** (texte) + **Poppins** (titres) via `next/font`

## Démarrage

```bash
npm install      # installer les dépendances
npm run dev      # serveur de développement → http://localhost:3000
npm run build    # build de production
npm run start    # servir le build de production
npm run lint     # ESLint
```

## Structure

```
src/
├── app/                      # Pages (App Router)
│   ├── layout.tsx            # Layout racine : fonts, SEO, Navbar/Footer, JSON-LD
│   ├── page.tsx              # Accueil
│   ├── qui-sommes-nous/
│   ├── domaines-expertise/
│   ├── pourquoi-axior/
│   ├── valeurs/
│   ├── contact/
│   ├── sitemap.ts            # /sitemap.xml
│   ├── robots.ts             # /robots.txt
│   └── not-found.tsx         # Page 404
├── components/
│   ├── layout/               # Navbar (sticky + scroll), Footer
│   ├── sections/             # Sections de page (Hero, ExpertiseGrid, ...)
│   ├── ui/                   # Button, SectionHeading, Reveal (animations)
│   ├── seo/                  # JSON-LD (Schema.org Organization + Breadcrumb)
│   ├── icons.tsx             # Icônes SVG inline (zéro dépendance)
│   └── Logo.tsx
└── lib/
    ├── site.ts               # Coordonnées, navigation, config globale
    ├── data.ts               # Contenu : expertises, valeurs, méthodologie...
    ├── motion.ts             # Variantes d'animation Framer Motion
    └── utils.ts              # Helper `cn()`
```

## Personnalisation

- **Contenu & coordonnées** : `src/lib/site.ts` et `src/lib/data.ts`
- **Couleurs / design tokens** : `tailwind.config.ts` (palettes `brand` & `graphite`)
- **Logo** : `public/logo/Image3.jpg`

## Formulaire de contact (zéro configuration)

Les messages sont envoyés directement à **contact@axiorci.com** via
**FormSubmit.co** — sans compte, sans clé API, sans serveur.

Flux : le navigateur du visiteur envoie le formulaire directement à
FormSubmit (`ContactForm.tsx`) → boîte de réception. Validation des champs +
protection anti-spam par honeypot côté client. Aucune route serveur :
le site reste 100 % statique (déployable partout, même en hébergement statique).

L'adresse de destination provient de `email` dans `src/lib/site.ts`.

### Activation (une seule fois, inévitable)

Le **tout premier** message envoyé déclenche un email d'activation de FormSubmit
vers `contact@axiorci.com`. Ouvrez cet email et cliquez sur le bouton
**« Activate Form »**. Ensuite, tous les messages arrivent automatiquement.
Cette étape prouve une fois que vous possédez la boîte mail (obligatoire avec
n'importe quel service).

### Changer la boîte de réception

- Soit modifiez `email` dans `src/lib/site.ts`.
- Soit définissez la variable d'environnement optionnelle `CONTACT_TO_EMAIL`
  (voir `.env.example`). Aucune autre configuration n'est requise.

## SEO

- Metadata + OpenGraph + Twitter Card (`layout.tsx` et par page)
- Données structurées Schema.org (`Organization`, `BreadcrumbList`)
- `sitemap.xml` et `robots.txt` générés automatiquement
- Pensez à ajuster `siteConfig.url` dans `src/lib/site.ts` pour la prod.
