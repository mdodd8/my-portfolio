# Melissa Dodd — Frontend Developer Portfolio

A single-page application showcasing 10+ years of frontend and UI/UX development experience. Features professional project case studies, live demo projects with source code, downloadable resume, and a contact section.

Live site → [melissadodd.netlify.app](https://melissadodd.netlify.app/)

## Screenshot

<img width="2533" height="1408" alt="image" src="https://github.com/user-attachments/assets/2f37332e-8d11-4bf6-84ad-bc7b06884f97" />

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Teach Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Shared Component](#shared-component)
- [Sections](#sections)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Contact](#contact)

## Overview

This portfolio is a React TypeScript single page application with smooth scroll navigation, active section URL tracking via Intersection Observer, and a mobile-first responsive layout. It is split into two project categories; professional work done at Clear Wave Software, and independent live demo projects built to showcase modern frontend architecture and tooling.

## Features


- Smooth scroll navigation with URL hash updating on scroll via Intersection Observer
- Mobile hamburger menu with dropdown nav that closes on section select
- Professional project case studies in a side drawer with prev/next navigation and keyboard support
- Live demo projects with links to deployed apps and GitHub source code
- Resume download button in the navbar
- GitHub profile link
- Responsive layout — desktop flex nav collapses to hamburger on mobile
- Two globally shared components used consistently across every section
- Contact form at the bottom of the page

## Tech Stack

| Category | Technology |
|---|---|
| Framework | React 18 |
| Language | TypeScript |
| Styling | Bootstrap 5, custom CSS, Flexbox |
| Icons | Lucide React |
| Markup | HTML5 |
| Build tool | Vite |
| Deployment | Netlify |
| Version control | Git / GitHub |


## Project Structure
 
```
src/
  assets/                        ← images, resume PDF, static files
 
  Components/
    About/                       ← about me section with bio and stats
    Contact/                     ← contact form section
    Dashboard/                   ← Hero section upon load 
    Experience/                  ← career timeline
    Projects/                    ← live demo projects with links and source code
    SectionHeader/               ← globally shared section heading component
    Skills/                      ← skills grid with categorized tags
    Tags/                        ← globally shared tag component with color theming
    Work/                        ←  professional project case studies with side drawer
 
  Data/                          ← all static data arrays (projects, skills, experience)
 
  Hooks/                         ← custom React hooks
    useActiveSection.ts          ← Intersection Observer for URL hash tracking
 
  Interfaces/                    ← TypeScript interfaces for all data shapes
 
  App.tsx                        ← root component, layout, section assembly
  App.css                        ← global layout styles
  index.css                      ← CSS custom properties, theme variables
  main.tsx                       ← React DOM entry point
```

## Shared Components

Two components are used throught the site. 

### `SectionHeader`

Renders the eyebrow label, section title, and optional subtitle that appears at the top of every section. Changing the style here updates every section simultaneously. 

```tsx
<SectionHeader
  label="Selected work"
  title="Projects that made an impact"
  subtitle="A selection of professional and independent work"
/>
```


### `Tags`

Renders a single color-coded technology tag. Each tag receives a label, text color, and background color based on its category. Used in project cards, the drawer, and the skills section.
 
```tsx
<Tags label="TypeScript" color="#0C447C" background="#E6F1FB" />
```
 
**Tag color categories:**
 
| Category | Color | Used for |
|---|---|---|
| Language | Blue | HTML, CSS, JavaScript, TypeScript |
| Framework | Purple | React, Angular, Vue, Bootstrap |
| Mobile | Teal | Ionic, mobile development |
| Design & UX | Amber | Figma, UX Design, wireframing |
| Tools & platforms | Slate | Mendix, WordPress, Git, Agile |
| Backend & APIs | Coral | Node.js, REST APIs |
 
**Props:**
 
| Prop | Type | Required | Description |
|---|---|---|---|
| `label` | `string` | yes | Tag display text |
| `color` | `string` | yes | Text color hex value |
| `background` | `string` | yes | Background color hex value |

## Sections

### About
Personal introduction, professional summary, and career stats. 

### Experience
Career timeline showing roles, responsibilities, and tenure at Clear Wave Software.
 
### Work
Selected professional work section with project cards. Clicking a card opens a side drawer with full case study detail — role, description, contribution, highlights, tech stack, and prev/next navigation. Keyboard navigation supported (Escape to close, Arrow keys to browse).
 
### Dashboard
Independent live demo projects built outside of professional work. Each card links to a live deployed demo and the GitHub source code repository.
 
### Skills
Categorized skills grid using the shared `Tags` component for consistent color coding across all technology categories.
 
### Contact
Contact form at the bottom of the page for direct outreach.

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation 

```bash
# Clone the repository
git clone https://github.com/your-username/your-portfolio-repo.git
 
# Navigate into the project
cd your-portfolio-repo
 
# Install dependencies
npm install
 
# Start the development server
npm run dev
```

The app will run at `http://localhost:5173`
 
### Build for production
 
```bash
npm run build
```

## Deployment 

Deployed via [Netlify](https://netlify.com) with continuous deployment from the `main` branch. Every push to `main` triggers an automatic build and deploy.
 
To deploy your own version:
 
1. Fork this repository
2. Connect to Netlify → New site from Git
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy

## Contact 

**Melissa Dodd**
Frontend Developer · UI/UX Engineer · Remote
 
- Email: [meldodd8@yahoo.com](mailto:meldodd8@yahoo.com)
- Portfolio: [melissadodd.netlify.app](https://melissadodd.netlify.app)
- LinkedIn: [linkedin.com/in/melissa-dodd-281971383](https://linkedin.com/in/melissa-dodd-281971383)
- GitHub: [github.com/your-username](https://github.com/your-username)





*Built with React, TypeScript, Bootstrap, and Lucide React · Deployed on Netlify*


