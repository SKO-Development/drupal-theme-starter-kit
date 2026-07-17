# Drupal Starter Theme Template

A reusable Drupal frontend theme starter built around:

- Drupal 11
- Single Directory Components
- Bootstrap 5
- Storybook
- Sass
- accessible component development

## Current compatibility

- Drupal: 11.x
- Bootstrap5 base theme: Drupal 11-compatible release

## Repository layout

The reusable Drupal theme is contained in:

`theme/`

Component source files are contained in:

`theme/components/`

## Status

Early development template. Not production ready.

# Development Guide

## Prerequisites

Before starting development ensure the following are installed:

- Ubuntu (WSL2)
- Node.js (LTS)
- npm
- Visual Studio Code
- Git

---

# Daily Development Workflow

## Open the project

Open Ubuntu (WSL) and navigate to the project.

```bash
cd ~/Sites/drupal-sdc-theme-template
code .
```

---

## Start the SCSS compiler

Open the first terminal in VS Code.

```bash
npm run css:watch
```

Leave this terminal running.

The compiler will automatically watch for changes and compile:

```
theme/scss/
```

into

```
theme/css/
```

---

## Start Storybook

Open a second terminal.

```bash
cd storybook
npm run storybook
```

Storybook will normally start on:

```
http://localhost:6007
```

Open the URL in your browser.

---

## Begin developing

While Storybook is running you can edit:

### Components

```
theme/components/
```

### SCSS

```
theme/scss/
```

### Stories

```
theme/components/**/**/*.stories.js
```

Storybook will automatically reload whenever files are saved.

---

# Full Restart After Reboot

If your computer has restarted, simply repeat the following steps.

## Terminal 1

```bash
cd ~/Sites/drupal-sdc-theme-template

npm run css:watch
```

## Terminal 2

```bash
cd ~/Sites/drupal-sdc-theme-template/storybook

npm run storybook
```

Open:

```
http://localhost:6007
```

Development can now continue.

---

# Building for Production

Before committing changes or publishing to GitHub Pages, generate a production build.

From the project root:

```bash
npm run css:build
```

Then build Storybook:

```bash
cd storybook

npm run build-storybook
```

The generated static site will be placed in:

```
storybook/storybook-static/
```

---

# Git Workflow

Check the current status.

```bash
git status
```

Stage all changes.

```bash
git add .
```

Commit changes.

```bash
git commit -m "Describe the changes"
```

Push to GitHub.

```bash
git push
```

GitHub Actions will automatically:

- Compile the SCSS
- Build Storybook
- Publish Storybook to GitHub Pages

---

# Viewing the Live Design System

Once GitHub Actions has completed successfully, the latest Storybook build will be available at:

https://sko-development.github.io/drupal-theme-starter-kit/

---

# Troubleshooting

## Storybook won't start

Clear the Storybook cache.

```bash
cd storybook

rm -rf node_modules/.cache
rm -rf node_modules/.vite

npm run storybook
```

---

## SCSS changes are not compiling

Restart the SCSS watcher.

```bash
Ctrl + C

npm run css:watch
```

---

## Updating Dependencies

Update the root project dependencies.

```bash
npm update
```

Update Storybook dependencies.

```bash
cd storybook

npm update
```

---

# Project Structure

```
drupal-theme-starter-kit
│
├── .github/                  GitHub Actions workflows
├── docs/                     Documentation
├── scripts/                  Helper scripts
├── storybook/                Storybook configuration
│
├── theme/
│   ├── components/
│   │   ├── atoms/
│   │   ├── molecules/
│   │   ├── organisms/
│   │   ├── templates/
│   │   └── pages/
│   │
│   ├── scss/
│   │   ├── abstracts/
│   │   ├── base/
│   │   ├── layout/
│   │   ├── components/
│   │   └── utilities/
│   │
│   ├── css/
│   ├── js/
│   ├── templates/
│   ├── starter_theme.info.yml
│   └── starter_theme.libraries.yml
│
├── package.json
├── package-lock.json
└── README.md
```

---

# Creating a New SDC

Every new component should follow the same structure.

```
component-name/
├── component.component.yml
├── component.twig
├── component.css
├── component.stories.js
└── README.md
```

When creating a new component:

- Create the component folder.
- Define the component schema (`.component.yml`).
- Build the Twig template.
- Add component-specific CSS.
- Create Storybook stories.
- Document the component.
- Test keyboard navigation.
- Run the Storybook Accessibility tests.
- Commit the completed component.

This ensures all components remain consistent, reusable and fully documented.

# Design Philosophy

This project aims to provide a reusable Drupal Single Directory Component (SDC) starter kit that promotes:

- Accessibility by default (WCAG 2.2 AA)
- Component-driven development
- Design system thinking
- Storybook-first development
- Separation of reusable components from project-specific implementations
- Drupal best practices
- Bootstrap compatibility
- Composer-ready distribution

Components are developed and documented in Storybook before being integrated into Drupal. Project-specific themes should consume this starter kit rather than duplicate component implementations.