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
=======
# World Museum 🌍⏳

**The Interactive Museum of Earth & World Atlas**

World Museum is a full-screen, editorial-style React experience exploring Earth's deep history, the evolution of life, human civilizations, and modern space exploration. A separate 2026 World Atlas collection adds regional destination guides, landmarks, cuisine, cultural context, and sample itineraries.

The interface takes inspiration from contemporary product-museum design: a restrained palette, serif editorial headlines, a three-card cover-flow stage, adaptive exhibit colors, glass-like specimen plaques, a precision ruler, and compact archive-story panels.



## Contents

- [Features](#features)
- [Technology](#technology)
- [Exhibit collection](#exhibit-collection)
- [Getting started](#getting-started)
- [Controls](#controls)
- [Image loading and fallbacks](#image-loading-and-fallbacks)
- [Data model](#data-model)
- [Scientific and editorial conventions](#scientific-and-editorial-conventions)
- [Known implementation gaps](#known-implementation-gaps)
- [Accessibility and responsive behavior](#accessibility-and-responsive-behavior)
- [Suggested next steps](#suggested-next-steps)

## Features

- **42 chronological exhibits** spanning early Earth, ancient life, major evolutionary transitions, extinction events, civilization, and space exploration.
- **5 World Atlas guides** grouped separately from the chronology, each with three sub-exhibit variants.
- **141 sub-exhibit plates** across the 47 total exhibit records.
- **Adaptive era themes** for Primordial, Paleozoic, Mesozoic, Cenozoic, Humanity, and 2026 World Explorer.
- **Cover-flow navigation** with previous/current/next exhibit cards, pointer-based 3D tilt, specular-style glare, and cubic-bezier CSS transitions.
- **Wikipedia REST image retrieval** using article titles from each sub-exhibit, response caching, neighbor-image preloading, and image URL fallbacks.
- **Archive story modal** with narrative overview, milestones or travel itinerary, and a curator note.
- **All-exhibits catalog** with text search and era filtering, showing chronological exhibits and atlas guides in separate groups.
- **Precision timeline ruler** with clickable chronological nodes and a separate `2026 AD · PRESENT` endpoint that opens the atlas collection.
- **Time-lapse playback** that advances automatically through the combined exhibit sequence.
- **Keyboard and wheel navigation** for browsing the collection without using the timeline controls.

## Technology

- **React** — component rendering, hooks, state, memoization, and effects.
- **Tailwind CSS** — layout and visual utility classes.
- **Lucide React** — interface icons.
- **CSS transitions** — smooth movement, theme changes, fades, and cubic-bezier easing.
- **Wikipedia REST API** — summary metadata and candidate exhibit images.

The current TSX uses CSS/Tailwind transitions directly. **Framer Motion is not used by this source file.**

## Exhibit collection

The component keeps the chronology and travel guides as distinct data groups:

| Collection | Count | Purpose |
|---|---:|---|
| Chronological archive | 42 | Earth formation, geological and evolutionary history, human history, and space exploration |
| World Atlas | 5 | Regional destination guides for the 2026 World Explorer |
| Total catalog | 47 | Both collections, presented in one searchable catalog |
| Sub-exhibit variants | 141 | Three selectable plates per record |

The six top-level era filters are `Primordial`, `Paleozoic`, `Mesozoic`, `Cenozoic`, `Humanity`, and `2026 World Explorer`.

Atlas guide records use the same broad display structure as timeline exhibits, but are marked `collectionType: "world-atlas"` and `isTimelineEvent: false`. This keeps travel guides out of the 42-node historical ruler even though they are included in the complete catalog.

## Getting started

### Requirements

- Node.js and npm
- A React project with a working build tool (the steps below use Vite)
- Tailwind CSS configured to scan your component files
- Network access for live Wikipedia image retrieval (the rest of the interface can render without successful image requests)

### 1. Create a React + TypeScript app

```bash
npm create vite@latest world-museum -- --template react-ts
cd world-museum
npm install
npm install lucide-react
```

Configure Tailwind CSS using the installation instructions for the Tailwind version you choose. Ensure that the configuration scans `index.html` and files under `src/**/*.{js,ts,jsx,tsx}`, and that the generated Tailwind stylesheet is imported by the application entry point.

### 2. Add the component

Copy the uploaded component into the project as:

```text
src/WorldMuseum.tsx
```

The source currently exports the app as the default export. Render it from `src/App.tsx`:

```tsx
import WorldMuseum from './WorldMuseum';

export default function App() {
  return <WorldMuseum />;
}
```

### 3. Start the development server

```bash
npm run dev
```

Use the local URL printed by Vite. To create a production build:

```bash
npm run build
npm run preview
```

These commands assume the standard Vite scripts remain in `package.json`. The uploaded TSX file does not provide a package manifest, Tailwind configuration, lockfile, or test suite.

### Optional typography setup

The component references `Inter`, `Playfair Display`, and `Instrument Serif` by font-family name, but it does not load font files itself. To reproduce the intended typography consistently, load your licensed/self-hosted font files or add a suitable font provider in the app's HTML/CSS. System serif and sans-serif fallbacks are specified in the component.

## Controls

| Action | How |
|---|---|
| Go to the previous exhibit | Left arrow key, scroll/trackpad backward, or select the left preview card on wide layouts |
| Go to the next exhibit | Right arrow key, scroll/trackpad forward, or select the right preview card on wide layouts |
| Select a variant | Click one of the three sub-exhibit pills, or press `1`, `2`, or `3` |
| Open an archive story / country guide | Activate the primary CTA in the spec dock |
| Open the complete catalog | Click **All Exhibits** |
| Search the catalog | Type in the catalog search field; results match titles, dates/classifications, and variant labels |
| Filter catalog by era | Select an era pill inside the catalog |
| Open the World Atlas | Click `2026 AD · PRESENT` at the ruler's right endpoint |
| Close an open modal | Press `Escape`, click its close button, or click its backdrop |
| Restart | Use **Restart Journey** when at the end of the exhibit sequence |
| Time-lapse | Click **Time-Lapse** to start or pause automatic advancement |

### Time-lapse behavior

In the current implementation, time-lapse advances every **2 seconds**. It runs through the combined 47-record sequence (chronological exhibits followed by atlas guides), pauses its interval while either modal is open, and stops at the final record. This is the behavior implemented in the uploaded TSX; it is not a four-second, chronology-only playback mode.

## Image loading and fallbacks

The exhibit image component calls the Wikipedia REST summary endpoint for each variant's `articleTitle`:

```text
https://en.wikipedia.org/api/rest_v1/page/summary/{encodeURIComponent(articleTitle)}
```

The loader:

1. Requests the article summary and reads `originalimage.source` or `thumbnail.source` when available.
2. Attempts to promote a Wikimedia thumbnail URL to a 1600-pixel rendition.
3. Keeps responses in an in-memory cache for the current page session.
4. Preloads image candidates for the active exhibit and nearby records.
5. Tries the original image and thumbnail URL when the promoted image URL fails.
6. Uses an animated neutral gradient while an image is loading or unavailable.

**Image availability is not guaranteed.** Article titles can redirect, pages can lack images, Wikimedia may not provide a requested rendition, and a browser may be offline. The current component shows the neutral loading/fallback surface in these cases; it does **not** yet draw a bespoke procedural SVG scene when all remote image options fail.

For accessibility and production use, keep useful `alt` text, show attribution and licensing details for reused images, and consider a persistent image-error state so visitors can distinguish a missing image from a loading image.

## Data model

The dataset is embedded in `terraMuseumData` within the TSX file. The app derives its display groups as follows:

```tsx
const timelineMilestones = terraMuseumData.milestones.filter(
  (item) => item.isTimelineEvent === true
);

const atlasGuides = terraMuseumData.milestones.filter(
  (item) => item.collectionType === 'world-atlas'
);

const allExhibits = [...timelineMilestones, ...atlasGuides];
```

### Main record fields

| Field | Purpose |
|---|---|
| `id` | Stable record identifier used by React keys and navigation |
| `sequence` | Chronological sequence number for timeline items |
| `dateLabel`, `eyebrow`, `dateValue` | Human-readable date, editorial label, and signed ordering coordinate |
| `timelinePosition`, `rulerShort` | Ordinal timeline display position and compact ruler text |
| `era`, `eraFilter`, `classification` | Era grouping and editorial classification |
| `title`, `subtitle`, `curatorQuote` | Main exhibit editorial content |
| `palette`, `fallbackType`, `visualCue` | Visual theme and illustration guidance |
| `telemetry` | Historical context for temperature, atmospheric oxygen, day length, and dominant system/life |
| `story.overview` | Narrative paragraphs for the archive story modal |
| `story.milestones` | Bullets used in the geological/evolutionary story section |
| `story.curatorNote` | Interpretive note shown in the modal |
| `subExhibits` | Three selectable variants with article title, caption, alt text, and micro-story |
| `confidenceNote` | Record-level uncertainty or qualification note |
| `sourceIds` | Source identifiers associated with the record |
| `collectionType`, `isTimelineEvent` | Collection membership and timeline inclusion flag |
| `atlasPosition` | Order within the five-guide World Atlas collection |

Atlas variants additionally use travel-oriented fields such as `specs`, `itinerary`, `curatorNote`, palette, and region labels. Their exact optional fields can differ by variant, so UI code should use safe access and sensible defaults.

The schema version is recorded as `2.0.0` inside the embedded data. If the data is later moved to a standalone JSON/TS module, update the import in the component and keep the record identifiers stable to avoid breaking navigation.

## Scientific and editorial conventions

The interface is educational and interpretive, not a precision scientific instrument. Preserve these conventions when changing the data:

- **Dates are anchors.** Deep-time labels are rounded display dates; many geological and evolutionary transitions span long intervals rather than occurring in a single year.
- **BCE labels are presentational.** Signed `dateValue` coordinates are ordering keys, not a full historical calendar arithmetic system. Do not use them as exact astronomical year numbering.
- **Timeline placement is ordinal.** `timelinePosition` is used for visual spacing and does not encode elapsed time proportionally. A logarithmic or otherwise explicitly labeled scale would be required for a quantitative timescale.
- **Telemetry is approximate.** Deep-time temperature, oxygen, and day-length values depend on proxies or models. Keep their detail and confidence notes available rather than showing a short value as exact measurement.
- **Hypotheses should be identified as hypotheses.** For example, the Moon-forming impact is a leading explanation, and the details of early environments and the origin of life remain active research subjects.
- **Do not label the Anthropocene as a formally ratified geological epoch.** It can be presented as an environmental-history or curatorial theme.
- **Travel details change.** Flight duration estimates, entry requirements, opening hours, local access, weather, and best-season guidance should be checked against current official information before being relied on for a trip.
- **Image rights need verification.** A photo appearing on Wikipedia is not automatically public domain. Check the specific image page's license, attribution requirements, and any other reuse conditions.

The current data attaches `sourceIds` to records, but the TSX does not provide a complete, user-facing bibliography registry for those IDs. Before presenting the site as a formal reference work, add a maintained source registry with titles, publishers, URLs, access dates, and specific claim-to-source relationships.

## Known implementation gaps

The following are **not implemented by the current uploaded TSX**, even though they may be useful future improvements:

- Ambient era audio or a Web Audio API chime. The current header has **Time-Lapse** and **All Exhibits** controls, but no audio toggle; the story modal has no chime button.
- Framer Motion animations. Current transitions use CSS and Tailwind utilities.
- Bespoke procedural SVG artwork when Wikipedia imagery is unavailable. The fallback is currently a neutral animated gradient surface.
- A complete image-license attribution UI or linked bibliography for every `sourceId`.
- Automated unit, integration, end-to-end, and accessibility tests in the supplied file.
- Dedicated reduced-motion handling for users who prefer less animation.

## Accessibility and responsive behavior

The component includes labels on key navigation buttons, keyboard navigation, modal close controls, and smaller-screen previous/next controls. The main museum shell is deliberately fixed to the viewport (`h-screen` and `overflow-hidden`), while modal and catalog content use their own scrollable regions.

Recommended checks before release:

- Test at common laptop, tablet, and mobile viewport sizes; the fixed-height layout can become cramped on short screens or at high zoom.
- Verify keyboard focus order, visible focus states, focus restoration after dialogs close, and screen-reader announcements when the active exhibit changes.
- Add `prefers-reduced-motion` handling for transitions and auto-advancement.
- Review text contrast in each era theme and ensure the catalog and modal remain usable at 200% zoom.
- Ensure interactive cards with `role="button"` consistently support both `Enter` and `Space` and have visible focus indicators.

## Suggested next steps

1. **Extract the data** from the TSX into a dedicated `terraMuseumData.ts` or `terra_museum_data.json` module so scientific review does not require editing UI code.
2. **Add a source registry** and show concise citations in archive stories, including image author/license attribution separately from historical claim sources.
3. **Replace the neutral-only image fallback** with curated, locally bundled SVG illustrations for high-priority exhibits; keep remote images as an enhancement rather than the only rich visual source.
4. **Clarify the time-lapse scope**: decide whether it should traverse only the 42 timeline exhibits or the entire 47-record collection, and set the interval to the intended duration.
5. **Separate the timeline from the atlas in navigation state** so users can browse destinations without implying that they are geological events.
6. **Add tests and CI** for record counts, unique IDs, three variants per record, date ordering, missing image metadata, catalog filtering, keyboard interactions, and modal behavior.
7. **Check factual updates periodically**, especially current travel guidance and any exhibits that rely on active scientific research.

---

## Project status

The provided TSX is a feature-rich front-end component with an embedded dataset and live Wikipedia image requests. This README describes the implementation visible in that file. Setup, production readiness, image attribution, scientific sourcing, accessibility, and build/test coverage should be verified in the surrounding project before deployment.
