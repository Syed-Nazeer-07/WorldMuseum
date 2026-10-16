# World Museum

**World Museum** is an immersive, high-performance web experience that chronicles 4.54 billion years of Earth's planetary and biological history, seamlessly culminating in a contemporary 2026 World Atlas.

---

## 🏛️ Overview

World Museum takes visitors on a tactile, chronological journey across 47 curated exhibits:
- **42 Deep-Time Planetary Milestones:** From the Hadean Eon accretion and Theia impact (4.54B BCE) through the Archean, Proterozoic, Paleozoic, Mesozoic, Cenozoic, the dawn of humanity, and space exploration.
- **5 Contemporary 2026 World Atlas Guides:** Living heritage, iconic landmarks, gastronomy, and cultural highlights spanning East Asia, South Asia, Europe & the Mediterranean, the Americas, and the Middle East & Africa.

---

## 🚀 Key Features & Interactions

- **Cover-Flow Exhibit Stage:** Apple-gallery-inspired aesthetic with dynamic light-theme ambient morphing per geological era.
- **Retina 1600px Wikipedia Visual Pipeline:** Procedural fallback, automatic upgrading to crisp 1600px Wikimedia Retina imagery, and predictive prefetching for adjacent milestones.
- **Interactive 3D Tilt & Glare:** Dynamic perspective shifts driven by pointer movements on the exhibit card.
- **Sub-Exhibit Variant Switching:** Instantly switch between planetary states, impact hypotheses, magma oceans, and regional destinations using on-screen pills or numerical keys (`1`, `2`, `3`).
- **Precision Ruler Timeline Scrubber:** 90-tick ruler scrubber with ordinal milestones, auto-centering smooth scrolling, and an interactive present-day endpoint (`2026 AD · PRESENT`).
- **Time-Lapse Mode:** 2-second automatic progression through deep time with smooth slide transitions and pause/play toggle.
- **Archive Deep-Dive Modal:** In-depth curated stories, 2-paragraph geological overviews, milestone lists, itineraries, and curatorial notes.
- **"All Exhibits" Complete Catalog:** Filter by geological era or search through all 47 exhibits by fossil, keyword, era, or destination.
- **Multi-Modal Controls:** Smooth wheel scrubbing (200ms debounced), arrow key navigation (`ArrowLeft` / `ArrowRight`), escape modal dismissal (`Esc`), and touch-friendly chevron controls.

---

## 📂 Project Architecture

```text
World Museum/
├── public/
│   └── images/               # Static public assets
│
├── src/
│   ├── app/
│   │   ├── App.tsx           # Main application orchestrator
│   │   └── providers.tsx     # Context providers wrapper
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── MuseumLayout.tsx  # Dynamic themed full-screen layout container
│   │   │   ├── TopBar.tsx        # Zone A chrome navigation bar
│   │   │   └── EraFilter.tsx     # Geological & historical era filter tabs
│   │   │
│   │   ├── museum/
│   │   │   ├── EditorialHeader.tsx   # Zone B titles, quotes, sequence badge
│   │   │   ├── SubExhibitTabs.tsx    # Sub-variant pill buttons
│   │   │   ├── ExhibitStage.tsx      # Zone C central 3D cover-flow stage
│   │   │   ├── ExhibitVisual.tsx     # 1600px Retina image plate with fallback
│   │   │   ├── SpecBar.tsx           # Zone D 4-column frosted spec dock & CTA
│   │   │   ├── TimelineScrubber.tsx  # Zone E precision ruler timeline scrubber
│   │   │   └── ExhibitCatalog.tsx    # Full-screen grid modal index
│   │   │
│   │   ├── archive/
│   │   │   ├── ArchiveStoryModal.tsx # In-depth narrative story modal
│   │   │   ├── ExhibitMetadata.tsx   # Curatorial notes & metadata box
│   │   │   └── MilestoneList.tsx     # Bulleted milestones & itineraries
│   │   │
│   │   ├── atlas/
│   │   │   ├── WorldExplorer.tsx     # Contemporary atlas explorer card
│   │   │   ├── DestinationTabs.tsx   # Regional destination navigation tabs
│   │   │   └── CountryGuide.tsx      # Destination specifications and specs
│   │   │
│   │   └── ui/
│   │       ├── Modal.tsx         # Accessible backdrop modal primitive
│   │       ├── Pill.tsx          # Reusable pill button with active indicator
│   │       └── IconButton.tsx    # Accessible icon button
│   │
│   ├── hooks/
│   │   ├── useExhibitNavigation.ts # Navigation, wheel, keyboard, tilt state
│   │   ├── useTimeLapse.ts         # Time-lapse interval & auto-advance
│   │   ├── useWikipediaImage.ts    # Wikipedia visual fetching, caching, error fallback
│   │   └── useAmbientAudio.ts      # Web Audio API ambient sound manager
│   │
│   ├── data/
│   │   ├── milestones.ts         # 42 chronological planetary milestones
│   │   ├── atlasNodes.ts         # 5 contemporary 2026 World Atlas nodes
│   │   ├── displayConventions.ts # Temporal conventions and endpoints
│   │   ├── sources.ts            # Curatorial citations & institutional references
│   │   └── index.ts              # Dataset aggregation and era themes
│   │
│   ├── lib/
│   │   ├── wikipedia.ts          # Retina 1600px URL transformer and image cache
│   │   ├── timeline.ts           # Slide transition styling and spec extraction
│   │   └── formatting.ts         # Catalog query filtering and date formatting
│   │
│   ├── types/
│   │   ├── exhibit.ts            # Exhibit, telemetry, story, theme interfaces
│   │   ├── atlas.ts              # World Atlas specifications and destination types
│   │   └── index.ts              # Aggregate type definitions
│   │
│   ├── styles/
│   │   └── globals.css           # Tailwind base styles and custom utilities
│   │
│   └── main.tsx                  # React 18 DOM root entry point
│
├── tests/
│   ├── data-integrity.test.ts    # Verification of all 47 records & chronological ordering
│   └── lib.test.ts               # Verification of Wikipedia Retina, specs, and filtering
│
├── index.html                    # HTML shell with Google Fonts
├── package.json                  # Scripts and dependencies
├── tsconfig.json                 # Strict TypeScript configuration
├── vite.config.ts                # Vite bundler configuration with path aliases
├── tailwind.config.js            # Tailwind CSS configuration
├── postcss.config.js             # PostCSS plugins
├── .gitignore                    # Git exclusions
├── .env.example                  # Environment configuration template
└── README.md                     # Project documentation
```

---

## 🛠️ Development & Build Commands

### Prerequisites
- Node.js `^20.0.0` or `^24.0.0`
- npm `^10.0.0` or `^11.0.0`

### Installation
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```
Starts Vite on [http://localhost:3000](http://localhost:3000) with instantaneous Hot Module Replacement (HMR).

### Run TypeScript Type Check
```bash
npm run typecheck
```
Executes `tsc --noEmit` with strict checks across the codebase.

### Run Automated Unit Tests
```bash
npm test
```
Executes the test suite covering data integrity, chronological order, image transformations, and filtering utilities.

### Production Build
```bash
npm run build
```
Type-checks with `tsc` and compiles optimized production bundles into `dist/`.

### Preview Production Build
```bash
npm run preview
```
Spins up a local server previewing the generated production build.

---

## 🧭 Geological & Contemporary Eras

| Era | Timeline Range | Theme Tint | Key Anchor |
| :--- | :--- | :--- | :--- |
| **Primordial** | 4.54B – 635M BCE | Warm ash & mineral pearl (`#F6F4F1`) | Birth of Terra, Moon formation, Great Oxidation |
| **Paleozoic** | 541M – 252M BCE | Mist-green ocean tint (`#F2F6F4`) | Cambrian Explosion, First Land Plants, Great Dying |
| **Mesozoic** | 230M – 66M BCE | Warm sand & amber tint (`#F7F5F0`) | Age of Dinosaurs, Archaeopteryx, Chicxulub Impact |
| **Cenozoic** | 56M – 1.9M BCE | Crisp subpolar ice tint (`#F1F5F9`) | Paleocene Thermal Maximum, Lucy (*A. afarensis*) |
| **Humanity** | 300K BCE – 2021 CE | Curatorial linen ivory (`#F9F8F6`) | *Homo sapiens*, Göbekli Tepe, Printing Press, Webb Telescope |
| **2026 World Explorer** | 2026 AD · Present | Frosted studio titanium (`#FCFCFE`) | Global World Atlas, Living Heritage & Travel Guides |

---

## 📜 Curatorial Standards & Data Integrity

- Displayed dates are rounded museum anchors; BCE notation follows conventional chronological sort keys.
- Planetary telemetry estimates (Surface Temperature, Atmospheric O₂, Day Length, Dominant Life System) are grounded in peer-reviewed scientific reconstructions and models.
- The 2026 AD marker serves as an intentional transition from deep-time planetary archives to living contemporary culture.
