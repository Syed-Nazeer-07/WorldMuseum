# World Museum 🌍⏳

**The Interactive Museum of Earth & World Atlas**

World Museum is a full-screen, editorial-style React experience exploring Earth's deep history, the evolution of life, human civilizations, and modern space exploration. A separate 2026 World Atlas collection adds regional destination guides, landmarks, cuisine, cultural context, and sample itineraries.

The interface takes inspiration from contemporary product-museum design: a restrained palette, serif editorial headlines, a three-card cover-flow stage, adaptive exhibit colors, glass-like specimen plaques, a precision ruler, and compact archive-story panels.

> **Current source:** `terra_4_5b_museum (2).tsx`  
> The uploaded TSX contains both the React component and the dataset inline. It is a single component file, not a complete project repository; package manifests and build configuration are not included.

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
