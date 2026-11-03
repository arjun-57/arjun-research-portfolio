# Arjun R — Forward Deployed AI Engineer (Field Reports)

> **arXiv/LaTeX-style Personal Engineering Portfolio**  
> Formatted as a two-column academic preprint for recruiters and engineers auditing real-world enterprise AI systems.

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-a11d1d?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

---

## 1. Executive Thesis

> *"I get embedded in messy real-world operations and ship AI systems people can trust. Every system I build has a layer that checks the AI."*

### Key Proof Points
- **12 & 3 Months in Remote Production:** Embedded inside legal operations (**KNS Law Chambers**) and real-estate operations (**Grand Magnum Housing**), developing tools for non-technical users.
- **Human-in-the-Loop Reviews:** AI flags anomalies and correlates duplicate titles; human practitioners make the legal determinations.
- **Table 1 (Operational Trust Layers):** Every system features an explicit verification gate:
  - **Energy MAS:** Trust-aware anomaly filter isolating False Data Injection (FDI) attacks.
  - **Contra:** Structured evidence ledger + citation scoring striking hallucinated arguments.
  - **Sine2Times:** 4-stage SymPy verification pipeline guaranteeing 100% mathematical correctness.
  - **Placement Engine (ICISC 2026):** Fairlearn reduction algorithms bounding demographic parity gap from **17.9% &rarr; 2.3%** while preserving **92.8% hiring accuracy**.
  - **KNS Property System:** Automated investigation loops flagging duplicate property titles for legal review.
- **Operational Leadership:** Progressed from General Body to OC President at **AIESEC in Chennai**, leading budgets, logistics, and exchange operations.

---

## 2. Visual Design System

- **Preprint Layout:** Two-column academic preprint on desktop (`max-w-6xl`), auto-collapsing to single-column on mobile with zero horizontal scroll.
- **Typography:** `STIX Two Text` for paper body and headings, `IBM Plex Mono` for technical labels and tables.
- **Palette:**
  - Light mode: Paper background `#fbfaf6`, ink `#1b1b1f`, accent `#a11d1d`.
  - Dark mode: Paper background `#15161a`, ink `#e6e6e8`, accent `#ff7b72`.
- **Zero Fluff:** No gradient cards, no neon glows, no emojis, no skill icon walls.

---

## 3. Directory Layout

```text
├── app/
│   ├── globals.css              # LaTeX rules, booktabs tables, print stylesheet
│   ├── icon.svg                 # Academic monogram favicon
│   ├── layout.tsx               # Root layout, Google STIX Two Text + IBM Plex Mono fonts
│   ├── page.tsx                 # Master two-column preprint page
│   └── projects/                # Dedicated case studies (/projects/[slug])
│       ├── energy-mas/page.tsx  # Resilient Multi-Agent Energy Management System
│       ├── contra/page.tsx      # Contra Adversarial Multi-Agent Research Engine
│       └── sine2times/page.tsx  # Sine2Times Diagnostic Mathematics Tutor
├── components/
│   └── fde/
│       ├── TopBar.tsx           # Sticky top bar with theme toggle & reading progress
│       ├── TitleBlock.tsx       # Title, author affiliation, boxed abstract, metrics strip
│       ├── Section1Intro.tsx    # 01. How I Work (embed, decompose, ship, verify)
│       ├── Section2FieldReports.tsx # 02. KNS Law Chambers & Grand Magnum Housing + Fig 1
│       ├── Section3Systems.tsx  # 03. Energy MAS, Contra, Sine2Times + Figs 2, 3, 4
│       ├── Section4Table1TrustLayers.tsx # 04. Table 1 (Trust Layers - Centrepiece)
│       ├── Section5Publication.tsx # 05. ICISC 2026 Paper, Eq (1), Fig 5 Bar Chart
│       ├── Section6Toolkit.tsx  # 06. Technical Toolkit table & certifications list
│       ├── Section7Leadership.tsx # 07. AIESEC in Chennai operational leadership
│       ├── Section8Contact.tsx  # 08. One-click copy email, GitHub, Resume, BibTeX
│       └── ReferencesList.tsx   # Formal bibliography
├── public/
│   ├── resume.pdf               # Downloadable CV
│   └── assets/                  # Headshot & conference figures
└── TODO.md                      # Transparent audit of pending user assets
```

---

## 4. Local Quickstart

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Test static production build
npm run build

# 4. Start production server
npm run start
```

---

## 5. Verified Code Repositories

- **Energy MAS:** [https://github.com/arjun-57/MARL](https://github.com/arjun-57/MARL)
- **Contra:** [https://github.com/arjun-57/Research-Contra](https://github.com/arjun-57/Research-Contra)
- **Sine2Times:** [https://github.com/arjun-57/Sin2Times](https://github.com/arjun-57/Sin2Times)
- **KNS Bank Auctions:** [https://github.com/arjun-57/BankEauctions](https://github.com/arjun-57/BankEauctions)
- **JobSwipe / ICISC 2026 Paper:** [https://github.com/arjun-57/JOBSWIPE](https://github.com/arjun-57/JOBSWIPE)
- **Grand Magnum Dashboard:** [https://github.com/arjun-57/GRAND-MAGNUM-AI-DASHBOARD](https://github.com/arjun-57/GRAND-MAGNUM-AI-DASHBOARD)
