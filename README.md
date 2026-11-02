# Arjun R — Research-Style Personal AI Portfolio

> **Academic Editorial Web Publication**  
> Inspired by arXiv preprints, NeurIPS/ICML proceedings, and IEEE publications.

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

---

## 1. Overview & Positioning

This personal portfolio is typeset as an interactive, digital academic publication for **Arjun R** — **AI Developer | Research Engineer | Software Developer** at **SRM Institute of Science and Technology** (B.Tech in Artificial Intelligence, Expected Graduation: 2027, CGPA: 8.13/10).

The site communicates the ability to:
1. **Research complex problems** (e.g., algorithmic fairness in recruitment and placement).
2. **Formulate rigorous technical architectures** (multi-agent coordination, Bayesian knowledge tracing, symbolic math verification).
3. **Build robust software systems** (legal document intelligence, executive management dashboards, microgrid simulation dispatchers).
4. **Communicate scientific findings** transparently with authentic metrics, reproducible code schemas, and verified project boundaries.

---

## 2. Visual Design System

- **Editorial Aesthetic:** Designed to evoke the reading experience of a top-tier scientific manuscript (NeurIPS, ICML, Nature Machine Intelligence).
- **Academic Palette:**
  - Background: Warm ivory / paper white (`#FAF9F6`)
  - Typography: High-contrast near-black (`#171717`) with secondary muted ink (`#666666`)
  - Accent: Deep academic blue (`#243B64`)
  - Borders: Subtle structural paper rules (`#DDDDDD`)
- **Typography:**
  - Headings & Titles: Classic academic serif (`Lora`, `Georgia`)
  - Body Content: Highly legible sans-serif (`Inter`)
  - Technical Code & Citations: Monospace (`JetBrains Mono`)
- **Layout:** Centered paper layout with responsive two-column presentation on desktop, converting cleanly to a single-column reading mode on mobile.
- **Reading Modes:** Includes dynamic reading progress indicator, dark reading mode (Nocturnal reader), print-ready stylesheet (`@media print`), and one-click BibTeX copy dialog.

---

## 3. Website Structure

The portfolio strictly adheres to the following sequential sections:

| # | Section | Content Highlights |
|---|---|---|
| **—** | **Title Page / Hero** | Academic paper title, author block, institutional affiliation, correspondence links, resume download. |
| **—** | **Abstract & Keywords** | Formal abstract statement and domain keywords (AI, Generative AI, Multi-Agent Systems, RAG, etc.). |
| **01** | **Introduction** | Academic trajectory, engineering philosophy, and compact candidate profile table. |
| **02** | **Research Contribution** *(Spotlight)* | **"Bias-Free AI-Driven Placement Automation Using Rule-Augmented Machine Learning"** (ICISC 2026). Fairlearn reduction algorithm, 1,200 candidates, 50 companies, disparity reduction from **17.9% &rarr; 2.3%**, reported hiring accuracy **92.8%**, interactive comparison chart, and manuscript link. |
| **03** | **Engineering Experience** | Structured timeline detailing internships at **KNS Law Chambers** (Property Intelligence & Compliance Audit Platform), **Grand Magnum Housing Pvt. Ltd.** (Executive Operations Dashboard), and **AIESEC in Chennai**. |
| **04** | **Selected Projects** | Three research-grade engineering case studies: <br>1. *Resilient Multi-Agent Energy Management System* (IEEE 33-bus, Pandapower, trust filter, RAG explanatory copilot).<br>2. *CONTRA – Adversarial Multi-Agent Research Engine* (Dialectical Advocate/Skeptic agents, evidence ledger).<br>3. *Sine2Times – Diagnostic Mathematics Tutor* (Prerequisite DAG, Bayesian Knowledge Tracing, SymPy). |
| **05** | **Technical Skills** | Academic taxonomy table classifying Languages, Frameworks, AI/ML domains, and Core CS Fundamentals. |
| **06** | **Education & Certifications** | SRMIST academic records + credentials from Microsoft, GitHub, Google, IIT Madras, and Udemy. |
| **07** | **Contact & Conclusion** | Research collaboration invitation, direct email, phone, location, and social links. |
| **08** | **References & Appendix** | Authentic references only, BibTeX entry, and appendix deliverables (Resume PDF, ICISC 2026 Manuscript, GitHub links). |

---

## 4. Technical Architecture

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS with custom academic palette and dark mode variables
- **Icons:** Lucide React
- **Fonts:** Next/Font Google (`Lora`, `Inter`, `JetBrains Mono`) with zero-layout-shift and local font generation
- **SEO & Metadata:**
  - Semantic HTML5 structure
  - OpenGraph & Twitter Card metadata
  - JSON-LD Structured Data (`Person` schema for rich search snippets)
  - `robots.txt` & `sitemap.xml`
- **Performance:** 100% static prerendering (`next build` generates static HTML/JS bundles with zero backend dependencies).

---

## 5. Project Directory Structure

```
arjun-research-portfolio/
├── app/
│   ├── globals.css              # Academic CSS, print stylesheet, dark mode
│   ├── icon.svg                 # Academic monogram SVG favicon
│   ├── layout.tsx               # Root layout, Google fonts, metadata, JSON-LD
│   └── page.tsx                 # Master page assembling sections
├── components/
│   ├── AbstractSection.tsx      # Formal abstract and keywords
│   ├── ArchitectureDiagram.tsx  # Interactive technical architecture figures
│   ├── BackToTop.tsx            # Floating scroll-to-top button
│   ├── CitationModal.tsx        # BibTeX citation modal with copy-to-clipboard
│   ├── ContactSection.tsx       # Conclusion and contact channels
│   ├── EducationSection.tsx     # SRMIST degree and certifications
│   ├── ExperienceSection.tsx    # KNS Law Chambers, Grand Magnum, AIESEC
│   ├── Figure.tsx               # Reusable academic figure container
│   ├── Footer.tsx               # Colophon, copyright, and institutional notice
│   ├── Hero.tsx                 # Academic paper title and author block
│   ├── IntroductionSection.tsx  # Intro text and candidate profile table
│   ├── Navbar.tsx               # Reading progress bar, jump menu, print/cite tools
│   ├── ProjectsSection.tsx      # Technical project case studies
│   ├── ReferencesSection.tsx    # Formal citations and appendix assets
│   ├── ResearchChart.tsx        # Empirical parity gap & accuracy visualization
│   ├── ResearchSection.tsx      # ICISC 2026 spotlight research contribution
│   ├── SkillsSection.tsx        # Academic competencies taxonomy table
│   └── TableOfContents.tsx      # Sticky desktop section tracking outline
├── data/
│   ├── education.ts             # Academic degree and certification records
│   ├── experience.ts            # Internship and leadership history
│   ├── profile.ts               # Personal bio, contact, and affiliation metadata
│   ├── projects.ts              # Technical case studies and architecture specs
│   ├── references.ts            # Authentic citations and appendix files
│   ├── research.ts              # ICISC 2026 paper data and metrics
│   └── skills.ts                # Verified technical skills
├── public/
│   ├── images/                  # Public image assets
│   ├── papers/                  # Research manuscripts (PDF)
│   ├── resume/                  # Curriculum Vitae (PDF)
│   ├── robots.txt               # Search engine crawl instructions
│   └── sitemap.xml              # Search engine index sitemap
├── scripts/
│   └── generate-sample-pdfs.js  # Node utility for sample PDF generation
├── next.config.mjs              # Next.js configuration
├── package.json                 # Dependencies and build scripts
├── postcss.config.mjs           # PostCSS configuration
├── tailwind.config.ts           # Academic color and typography extensions
└── tsconfig.json                # TypeScript compiler configuration
```

---

## 6. Local Setup & Development Instructions

### Prerequisites
- **Node.js:** v18.17.0 or higher (v20+ recommended)
- **npm:** v9.0.0 or higher

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/placeholder-arjunr/arjun-research-portfolio.git
   cd arjun-research-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Run static production build:**
   ```bash
   npm run build
   ```

5. **Start production server locally:**
   ```bash
   npm run start
   ```

6. **Run linter:**
   ```bash
   npm run lint
   ```

---

## 7. How to Update the Website Later

All content is cleanly decoupled into TypeScript data modules inside the `data/` directory:

1. **Update Profile & Social Links:**
   - Edit `data/profile.ts`:
     - Replace `github.url` with your real profile (e.g., `https://github.com/your-username`).
     - Replace `linkedin.url` with your real profile (e.g., `https://linkedin.com/in/your-username`).
     - Set `isPlaceholder: false`.

2. **Update Resume PDF:**
   - Replace the file at `public/resume/Arjun_R_Resume.pdf` with your updated resume PDF (keep the same filename).

3. **Update Research Paper PDF:**
   - Once the final camera-ready ICISC 2026 paper is published, replace `public/papers/Bias_Free_AI_Placement_ICISC2026.pdf` with the finalized manuscript.
   - Update `paperPdf.isAvailable` to `true` in `data/research.ts` and set any assigned DOI.

4. **Update Project Repositories:**
   - Edit `data/projects.ts` to replace placeholder repo URLs with your real GitHub repositories.

---

## 8. Deployment Guide

### Deploying to GitHub

1. **Create a new public repository** on GitHub named:
   ```
   arjun-research-portfolio
   ```
   *(Do not initialize with a README, .gitignore, or license since they are already present).*

2. **Push your local repository:**
   ```bash
   git remote add origin https://github.com/<YOUR-GITHUB-USERNAME>/arjun-research-portfolio.git
   git branch -M main
   git push -u origin main
   ```

### Deploying to Vercel (Recommended)

1. Sign in to [Vercel](https://vercel.com) using your GitHub account.
2. Click **"Add New..."** &rarr; **"Project"**.
3. Import the `arjun-research-portfolio` repository.
4. Leave Framework Preset as **Next.js** and root directory as `./`.
5. Click **"Deploy"**.
6. Vercel will automatically build and publish your portfolio with a live URL (e.g., `https://arjun-research-portfolio.vercel.app`).
7. Any future push to the `main` branch will automatically trigger an instant production deployment.

---

## 9. Verification & Integrity Checklist

- [x] Next.js 14 App Router with clean TypeScript & Tailwind CSS
- [x] Zero build warnings or errors (`npm run build` exits with code 0)
- [x] Zero ESLint warnings or errors (`npm run lint` passes)
- [x] All 8 required sections typeset in exact specified order
- [x] Research Contribution (ICISC 2026) prominently featured with 17.9% &rarr; 2.3% parity comparison
- [x] Real-time interactive architecture figures for all 3 engineering projects
- [x] Verified sample PDFs for resume and conference manuscript
- [x] Clear labeling for all placeholder links (GitHub and LinkedIn)
- [x] Strict avoidance of fabricated statistics, DOIs, awards, or fake logos
- [x] Print stylesheet support (`window.print()`)

---

*Author:* **Arjun R** ([arjunr3773@gmail.com](mailto:arjunr3773@gmail.com))  
*Affiliation:* Department of Artificial Intelligence, SRM Institute of Science and Technology, Chennai, India.

