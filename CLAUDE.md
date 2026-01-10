# Claude Code - Propulse Website

## Project Overview

Site vitrine pour Propulse, un logiciel SaaS de gestion de reseaux d'affaires et clubs business.

**Stack**: Jekyll (Ruby static site generator)
**URL Production**: https://www.propulse.business
**Application**: https://app.propulse.business

## Project Structure

```
propulse-website/
├── _config.yml          # Configuration Jekyll
├── _data/               # Donnees structurees
│   ├── navigation.yml   # Liens header/footer centralises
│   ├── features.yml     # Fonctionnalites produit
│   ├── faq.yml          # Questions frequentes
│   └── team.yml         # Membres equipe
├── _includes/           # Partials reutilisables
│   ├── head.html        # Meta tags, SEO, fonts, styles
│   ├── header.html      # Navigation principale + mobile
│   ├── footer.html      # Pied de page
│   ├── schema-article.html  # JSON-LD pour articles
│   └── icons.html       # SVG icons
├── _layouts/            # Templates de pages
│   ├── default.html     # Layout de base
│   ├── article.html     # Layout articles de blog
│   └── page.html        # Layout pages statiques
├── _site/               # Build output (ne pas editer)
├── assets/              # Assets statiques
│   ├── logos/           # Logos Propulse
│   ├── team/            # Photos equipe
│   └── images/          # Screenshots, og-image.svg
├── css/                 # Styles CSS
├── js/                  # JavaScript
├── blog/                # Articles de blog (source)
└── index.html           # Page d'accueil
```

## Key Files

### Data Files (_data/)

- **navigation.yml**: Centralise tous les liens de navigation
  - `main`: Liens header principaux
  - `cta`: Boutons CTA header
  - `footer_product`, `footer_resources`, `footer_legal`: Colonnes footer
  - `social`: Reseaux sociaux

### Partials (_includes/)

- **head.html**: Meta SEO, Open Graph, Twitter Cards, preload fonts. Variables:
  - `page.title`, `page.description`, `page.canonical`
  - `page.og_type` (default: 'website')
  - `page.og_image` (default: og-image.png)
  - `page.schema` (JSON-LD custom)
  - `page.date_published`, `page.date_modified` (pour articles)

- **header.html**: Navigation dynamique depuis `site.data.navigation`
  - Support `page.header_scrolled` pour le style scroll

- **footer.html**: Liens dynamiques depuis `site.data.navigation`
  - Copyright avec annee dynamique

- **schema-article.html**: JSON-LD automatique pour layout article

### Layouts (_layouts/)

- **default.html**: Layout de base, inclut head, header, footer
- **article.html**: Extends default, ajoute header article + CTA box
- **page.html**: Extends default, pour pages statiques

## Front Matter Variables

### Pour les articles de blog

```yaml
---
layout: article
title: "Titre de l'article"
description: "Description SEO"
canonical: "https://www.propulse.business/blog/slug"
og_type: article
date_published: "2024-01-15"
date_modified: "2024-01-20"
cta_title: "Titre du CTA"
cta_description: "Description du CTA"
---
```

### Pour les pages standards

```yaml
---
layout: page
title: "Titre de la page"
description: "Description SEO"
canonical: "https://www.propulse.business/page-slug"
header_scrolled: true
---
```

## Commands

```bash
# Installation
bundle install

# Development server
bundle exec jekyll serve

# Build production
bundle exec jekyll build

# Build avec drafts
bundle exec jekyll serve --drafts
```

## SEO Implementation

- Sitemap: `/sitemap.xml`
- Robots: `/robots.txt`
- Schema.org JSON-LD automatique pour articles
- Open Graph et Twitter Cards (image 1200x630)
- URLs canoniques
- Preload fonts critiques
- Cache-busting CSS (`main.css?v=1.0`)

## Performance

- Preload des fonts Inter et Plus Jakarta Sans
- `loading="lazy"` sur images non-critiques
- `loading="eager"` sur logo header
- CSS versioning pour cache-busting

## Brand Colors

- Primary: `#391952` (violet fonce)
- Accent: Bleu/Cyan pour CTAs
- Text: Noir/Gris fonce
- Background: Blanc, gris clair

## Ajouter un lien de navigation

Modifier `_data/navigation.yml` - le header et footer se mettent a jour automatiquement.

## Important Notes

1. Le dossier `_site/` est genere automatiquement - ne jamais editer directement
2. Les modifications doivent etre faites dans les fichiers source puis rebuild
3. Les images doivent etre optimisees avant upload
4. Convertir `og-image.svg` en PNG 1200x630 pour production
5. Toujours verifier le SEO apres ajout d'un nouvel article
