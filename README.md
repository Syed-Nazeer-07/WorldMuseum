# World Museum 🌍

### An interactive journey through Earth's deep time — ending in a living world atlas.

World Museum is a full-screen, editorial-style React experience that explores **4.54 billion years of Earth's planetary and biological history**, from the formation of the early Earth to human civilization and space exploration. The journey culminates in a contemporary **2026 World Atlas** featuring regional destination guides, landmarks, cuisine, and cultural highlights.

Built around a museum-inspired interface, World Museum combines chronological storytelling, immersive exhibit cards, image-rich exploration, and a searchable catalog in one interactive experience.

---

## ✨ Highlights

- **47 curated exhibits** — 42 chronological milestones and 5 World Atlas regional guides.
- **Cover-flow exhibit stage** — browse previous, current, and next exhibits with interactive card movement.
- **Era-aware visual themes** — interface colors adapt to the selected geological or historical era.
- **Interactive exhibit variants** — explore alternate views and sub-exhibits with on-screen controls or number keys `1`, `2`, and `3`.
- **Deep-time timeline** — navigate the collection with a precision ruler and a dedicated `2026 AD · PRESENT` endpoint.
- **Time-lapse playback** — automatically advance through the exhibit sequence.
- **Archive story panels** — read exhibit overviews, milestone lists, itineraries, and curatorial notes.
- **Searchable exhibit catalog** — search the collection and filter exhibits by era.
- **Responsive navigation controls** — use the keyboard, pointer, wheel, or touch-friendly controls.
- **Wikipedia image integration** — retrieve candidate exhibit imagery, cache responses for the current session, and preload nearby exhibits.

## 🧭 Explore the collection

| Collection | Exhibits | What you'll discover |
|---|---:|---|
| Deep-Time Archive | 42 | Earth's formation, geological eras, the evolution of life, major transitions, human history, and space exploration |
| 2026 World Atlas | 5 | Regional guides covering East Asia, South Asia, Europe & the Mediterranean, the Americas, and the Middle East & Africa |
| **Complete catalog** | **47** | Both collections in one searchable experience |

The interface organizes the experience into six top-level themes:

- Primordial
- Paleozoic
- Mesozoic
- Cenozoic
- Humanity
- 2026 World Explorer

The Atlas guides are presented as a contemporary collection rather than as geological timeline events.

## 🕹️ Controls

| Action | Control |
|---|---|
| Previous exhibit | `←` Left Arrow, backward wheel/trackpad movement, or previous-card control |
| Next exhibit | `→` Right Arrow, forward wheel/trackpad movement, or next-card control |
| Change exhibit variant | Select an on-screen variant or press `1`, `2`, or `3` |
| Open an exhibit story or destination guide | Use the primary exhibit action |
| Open the full catalog | Select **All Exhibits** |
| Search exhibits | Type in the catalog search field |
| Filter by era | Select an era filter in the catalog |
| Open the World Atlas | Select `2026 AD · PRESENT` on the timeline |
| Close a modal | Press `Esc`, use the close control, or select the backdrop |
| Start or pause time-lapse | Select **Time-Lapse** |
| Restart the journey | Select **Restart Journey** when available |

Time-lapse advances at approximately **2-second intervals** in the described implementation. It can pause while a modal is open and stops at the end of the sequence.

## 🧰 Technology

The project is built with a modern React and TypeScript toolchain.

- **React** — component-based UI and state management
- **TypeScript** — typed application code and data models
- **Vite** — development server and production bundling
- **Tailwind CSS** — utility-first styling
- **Lucide React** — interface icons
- **Wikipedia REST API** — exhibit image and summary retrieval
- **CSS transitions** — interface motion and visual transitions

## 🚀 Getting started

### Requirements

- Node.js `20` or newer
- npm `10` or newer

Use a current supported Node.js LTS release where possible.

### 1. Clone the repository

```bash
git clone https://github.com/Syed-Nazeer-07/WorldMuseum.git
cd WorldMuseum
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Vite will print the local development URL in the terminal. Open that URL in your browser.

### 4. Check the project

Run the checks available in the project:

```bash
npm run typecheck
npm test
npm run build
```

To preview a production build locally:

```bash
npm run preview
```

> **Note:** These commands assume the corresponding scripts are defined in `package.json`. If a command is unavailable, inspect the `scripts` section and use the scripts provided by the checked-out version.

## 🗂️ Project structure

The application is organized by responsibility so interface components, data, shared utilities, and tests can evolve independently.

```text
WorldMuseum/
├── public/
│   └── images/                 # Public static assets
├── src/
│   ├── app/
│   │   ├── App.tsx             # Application orchestrator
│   │   └── providers.tsx        # Application providers
│   ├── components/
│   │   ├── layout/              # Museum shell and navigation
│   │   ├── museum/              # Exhibit stage, timeline, catalog
│   │   ├── archive/              # Stories and exhibit metadata
│   │   ├── atlas/                # World Atlas and destination guides
│   │   └── ui/                   # Reusable interface primitives
│   ├── hooks/                    # Navigation, time-lapse, and image hooks
│   ├── data/                     # Exhibit data, Atlas entries, source metadata
│   ├── lib/                      # Image, timeline, and formatting utilities
│   ├── types/                    # Shared TypeScript types
│   ├── styles/
│   │   └── globals.css           # Global styles and utilities
│   └── main.tsx                  # React entry point
├── tests/                        # Data integrity and utility tests
├── index.html                    # HTML document shell
├── package.json                  # Scripts and dependencies
├── tsconfig.json                 # TypeScript configuration
├── vite.config.ts                # Vite configuration
├── tailwind.config.js            # Tailwind configuration
├── postcss.config.js             # PostCSS configuration
├── .env.example                  # Example environment configuration
└── README.md
```

## 🖼️ Image loading

Exhibit imagery is retrieved using the Wikipedia REST summary API and candidate image URLs. The image pipeline can cache responses during the current page session, attempt a higher-resolution Wikimedia rendition, and preload imagery for nearby exhibits.

Image availability depends on the source article, available image files, network connectivity, and the requested rendition. A fallback visual is used when an image is loading or cannot be displayed.

If you reuse Wikimedia or other third-party images, **verify the license and attribution requirements for each individual image**. The presence of an image on Wikipedia does not automatically mean it is unrestricted for reuse.

## 🔬 Editorial and scientific conventions

World Museum is an educational and interpretive experience, not a precision scientific instrument.

- **Dates are display anchors.** Geological and evolutionary transitions often span long periods; a displayed date should not imply that a process happened instantaneously.
- **Timeline spacing is visual.** Unless explicitly documented otherwise, positions on the ruler should not be interpreted as proportional measurements of elapsed time.
- **Deep-time estimates are approximate.** Temperature, atmospheric composition, day length, and other reconstructions depend on evidence, models, and uncertainty.
- **Distinguish evidence from hypotheses.** Present active research questions and leading explanations with appropriate qualifications.
- **Keep contemporary information current.** Travel conditions, access rules, opening hours, and other destination details can change.
- **Maintain source records.** Where possible, connect scientific and historical claims to reputable references and keep image licensing information separate from claim citations.

## ♿ Accessibility and quality checks

The experience includes keyboard navigation and modal close controls. Before release, test the complete interface across desktop, tablet, and mobile sizes.

Recommended checks:

- Confirm visible focus states and logical keyboard focus order.
- Ensure dialogs restore focus appropriately when closed.
- Verify sufficient text contrast across all era themes.
- Test the catalog and modals at high zoom.
- Respect the `prefers-reduced-motion` setting for transitions and automatic playback.
- Ensure interactive cards and controls work with both keyboard and pointer input.
- Test image failure states and slow or unavailable network connections.

## 🛣️ Potential next steps

Possible future improvements include:

1. Expand the source registry with linked references for scientific and historical claims.
2. Add visible image credits and license details where required.
3. Strengthen reduced-motion support and keyboard/screen-reader announcements.
4. Expand automated coverage for data integrity, navigation, filtering, dialogs, and accessibility.
5. Review contemporary Atlas content periodically against official sources.

These are potential improvements, not claims that every item is already implemented.

---

## 📌 Project status

World Museum is a React/TypeScript front-end project combining a deep-time exhibit archive with a contemporary World Atlas. Use the development and build commands above to run and validate the local checkout, and verify the current scripts and test coverage before deployment.

**Repository:** [Syed-Nazeer-07/WorldMuseum](https://github.com/Syed-Nazeer-07/WorldMuseum)

---

<p align="center">
  <em>Explore Earth's past. Discover the world we share.</em>
</p>
