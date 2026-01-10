# Propulse Website

Site vitrine officiel de [Propulse](https://www.propulse.business), le logiciel de gestion de reseaux d'affaires.

## A propos

Propulse est un logiciel SaaS concu par des entrepreneurs, pour des entrepreneurs. Il permet de gerer efficacement les clubs business et associations professionnelles.

## Technologies

- **Jekyll** - Generateur de site statique
- **Liquid** - Templating engine
- **SCSS** - Preprocesseur CSS
- **Vanilla JS** - JavaScript sans framework

## Installation

### Prerequis

- Ruby >= 2.7
- Bundler

### Setup

```bash
# Cloner le repository
git clone https://github.com/propulse/propulse-website.git
cd propulse-website

# Installer les dependances
bundle install
```

## Developpement

```bash
# Lancer le serveur de developpement
bundle exec jekyll serve

# Le site est accessible sur http://localhost:4000
```

## Build Production

```bash
bundle exec jekyll build
```

Les fichiers sont generes dans le dossier `_site/`.

## Structure du projet

```
propulse-website/
├── _config.yml          # Configuration Jekyll
├── _includes/           # Partials (header, footer, head)
├── _layouts/            # Templates de pages
├── _site/               # Build output
├── assets/              # Images, logos
├── css/                 # Styles
├── js/                  # Scripts
├── blog/                # Articles de blog
├── index.html           # Page d'accueil
├── CLAUDE.md            # Documentation technique
└── README.md            # Ce fichier
```

## Ajouter un article de blog

1. Creer un fichier dans `blog/` avec le front matter:

```yaml
---
layout: article
title: "Titre de l'article"
description: "Description pour le SEO"
canonical: "https://www.propulse.business/blog/slug-article"
og_type: article
---
```

2. Rediger le contenu en Markdown ou HTML
3. Rebuild le site

## Deploiement

Le site est deploye automatiquement via [plateforme de deploiement].

## Contact

- Site: https://www.propulse.business
- Application: https://app.propulse.business
- Email: contact@propulse.business
- LinkedIn: [Propulse](https://linkedin.com/company/propulse)

## Licence

Tous droits reserves - Propulse
