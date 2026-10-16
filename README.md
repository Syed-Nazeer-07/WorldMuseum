# World Museum

### Interactive Deep-Time Museum & 2026 World Atlas

World Museum is an immersive, full-screen web experience exploring **4.54 billion years of Earth's planetary and biological history** — from the formation of the early Earth through the evolution of life, human civilization, and space exploration — before arriving at a contemporary **2026 World Atlas**.

The project combines an editorial museum interface, chronological exhibit navigation, curated stories, image-rich exploration, and regional destination guides in a single React application.

> **Project status:** World Museum is an interactive front-end project. Build and test commands should be run against the current checkout, and scientific claims, image licenses, accessibility, and real-world destination information should be reviewed before production use.

<p align="center">
  <a href="https://github.com/Syed-Nazeer-07/WorldMuseum">
    <img src="https://img.shields.io/badge/GitHub-World%20Museum-181717?style=for-the-badge&logo=github" alt="GitHub repository">
  </a>
  <img src="https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-Strict-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Vite-7+-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/Tailwind%20CSS-Utility--First-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Collection-47%20Exhibits-C9A46A?style=for-the-badge" alt="47 exhibits">
</p>

---

## Contents

- [Overview](#overview)
- [Key capabilities](#key-capabilities)
- [Explore the collection](#explore-the-collection)
- [Application controls](#application-controls)
- [Architecture](#architecture)
- [Technology stack](#technology-stack)
- [Repository structure](#repository-structure)
- [Getting started](#getting-started)
- [Development and testing](#development-and-testing)
- [Image loading and attribution](#image-loading-and-attribution)
- [Data model](#data-model)
- [Scientific and editorial conventions](#scientific-and-editorial-conventions)
- [Accessibility and responsive design](#accessibility-and-responsive-design)
- [Known limitations](#known-limitations)
- [Roadmap](#roadmap)
- [Contributing](#contributing)

---

## Overview

World Museum presents Earth's history as a curated, navigable sequence rather than a conventional article or static timeline. Visitors can move between exhibits, explore alternate visual variants, open deeper editorial stories, and browse the complete collection from a searchable catalog.

At the present-day endpoint, the experience transitions from planetary history into a World Atlas with destination guides and cultural highlights.

### Experience flow

```text
                 World Museum
                      |
          +-----------+-----------+
          |                       |
          v                       v
   Deep-Time Archive        2026 World Atlas
      42 exhibits              5 guides
          |                       |
          v                       v
  Geological and life       Regions, landmarks,
  history, humanity,        cuisine and culture
  space exploration               |
          |                       |
          +-----------+-----------+
                      |
                      v
             Complete Catalog
```

## Key capabilities

### Immersive exhibit navigation

- **Cover-flow exhibit stage** with previous, current, and next cards.
- Pointer-driven perspective tilt and glare effects on exhibit cards.
- Era-aware visual themes that adapt the interface to the selected collection.
- Smooth CSS transitions for card movement and theme changes.
- A full-screen editorial layout with compact exhibit metadata and calls to action.

### Deep-time timeline

- Precision ruler with selectable chronological milestones.
- Six top-level filters: Primordial, Paleozoic, Mesozoic, Cenozoic, Humanity, and 2026 World Explorer.
- Dedicated `2026 AD · PRESENT` endpoint for entering the World Atlas.
- Keyboard and wheel-based exhibit navigation.
- Time-lapse playback through the combined exhibit sequence.

### Exhibit stories and catalog

- Archive story panels with narrative overviews, milestone lists, and curatorial notes.
- World Atlas destination guides with travel-oriented information and itineraries.
- Searchable catalog covering all 47 records.
- Era filtering to help visitors navigate the archive.
- Three selectable sub-exhibit variants per record in the described data model.

### Image retrieval

- Wikipedia REST summary lookup for candidate exhibit imagery.
- Image URL handling that can attempt a higher-resolution Wikimedia rendition.
- In-memory response caching for the current page session.
- Preloading for the active exhibit and nearby records.
- Fallback visuals when imagery is loading or unavailable.

---

## Explore the collection

| Collection | Records | Focus |
|---|---:|---|
| **Deep-Time Archive** | 42 | Earth's formation, geological history, evolution, major transitions, humanity, and space exploration |
| **2026 World Atlas** | 5 | Regional destination guides and cultural highlights |
| **Complete collection** | **47** | Both collections in one catalog |
| Sub-exhibit variants | 141 | Three selectable variants per record in the described data model |

### The six themes

| Theme | Curatorial focus |
|---|---|
| **Primordial** | Early Earth, planetary formation, and the foundations of life |
| **Paleozoic** | Major evolutionary transitions and ancient ecosystems |
| **Mesozoic** | Dinosaurs, changing ecosystems, and mass extinction |
| **Cenozoic** | Mammals, changing climates, and human origins |
| **Humanity** | Human history, civilization, and space exploration |
| **2026 World Explorer** | Contemporary regions, landmarks, cuisine, and living culture |

The Atlas is a separate contemporary collection. Its records are included in the full catalog but should not be interpreted as geological timeline events.

---

## Application controls

| Action | Control |
|---|---|
| Previous exhibit | `←` Left Arrow or previous navigation control |
| Next exhibit | `→` Right Arrow or next navigation control |
| Change sub-exhibit | Select a variant pill or press `1`, `2`, or `3` |
| Navigate with a wheel/trackpad | Scroll in the supported direction |
| Open an exhibit story or destination guide | Use the primary exhibit action |
| Open the full collection | Select **All Exhibits** |
| Search the catalog | Type into the catalog search field |
| Filter by era | Select an era filter in the catalog |
| Open the World Atlas | Select `2026 AD · PRESENT` on the timeline |
| Close a modal | Press `Esc`, use the close control, or select the backdrop |
| Start or pause time-lapse | Select **Time-Lapse** |
| Restart the journey | Select **Restart Journey** when available |

### Time-lapse behavior

The described implementation advances at approximately **two-second intervals** through the combined 47-record sequence. Playback pauses while a modal is open and stops at the final record. Confirm the behavior in the current checkout if the implementation has changed.

---

## Architecture

The application separates page composition, exhibit presentation, archive content, Atlas content, navigation hooks, data, and shared utilities.

```text
                         React Application
                                |
              +-----------------+-----------------+
              |                 |                 |
              v                 v                 v
           Layout           Collections        Shared UI
              |                 |                 |
              v           +-----+-----+           v
          Navigation       |           |      Modal / Pill /
                           v           v      Icon Button
                       Deep-Time     World Atlas
                       Exhibits      Destination Guides
                           |           |
                           +-----+-----+
                                 |
                                 v
                         Exhibit Data Model
                                 |
                  +--------------+--------------+
                  |                             |
                  v                             v
           Timeline / Catalog             Image Utilities
                                                |
                                                v
                                      Wikipedia REST API
```

### Main responsibilities

- **Application layer:** assembles the museum interface and shared providers.
- **Layout components:** provide the full-screen shell, top bar, and era navigation.
- **Museum components:** render the exhibit stage, sub-exhibit variants, metadata dock, timeline, and catalog.
- **Archive components:** present deeper stories, metadata, and milestone lists.
- **Atlas components:** render regional guide navigation and destination details.
- **Hooks:** manage navigation, time-lapse, and image retrieval behavior.
- **Data modules:** define milestones, Atlas entries, display conventions, and source metadata.
- **Utility modules:** handle image URLs, timeline presentation, and formatting.
- **Tests:** check selected data-integrity and utility behaviors where test coverage is configured.

---

## Technology stack

### Frontend

- **React** — component-based UI and state management
- **TypeScript** — typed components and data structures
- **Vite** — local development server and production bundling
- **Tailwind CSS** — utility-first styling
- **Lucide React** — interface icons
- **CSS transitions** — card movement, fades, and theme transitions

### Content and imagery

- **Wikipedia REST API** — article summary and candidate image retrieval
- **Wikimedia-hosted media** — possible source for exhibit imagery, subject to individual image availability and licensing
- **Local exhibit data** — chronological milestones, Atlas guides, captions, stories, and display metadata

The described interface uses CSS and Tailwind transitions directly; Framer Motion should not be assumed to be part of the implementation unless it is added to the current project dependencies and source.

---

## Repository structure

The project is organised by application responsibility. The following is a guide to the described structure; the files in your current checkout are authoritative.

```text
WorldMuseum/
├── public/
│   └── images/                    # Public static assets
├── src/
│   ├── app/
│   │   ├── App.tsx                # Main application orchestrator
│   │   └── providers.tsx          # Application providers
│   ├── components/
│   │   ├── layout/                # Museum shell and navigation
│   │   ├── museum/                # Exhibit stage, timeline, and catalog
│   │   ├── archive/               # Stories and exhibit metadata
│   │   ├── atlas/                 # World Atlas and destination guides
│   │   └── ui/                    # Reusable UI primitives
│   ├── hooks/                     # Navigation, time-lapse, and image hooks
│   ├── data/                      # Milestones, Atlas records, and source data
│   ├── lib/                       # Timeline, image, and formatting utilities
│   ├── types/                     # Shared TypeScript types
│   ├── styles/
│   │   └── globals.css            # Global styles and utilities
│   └── main.tsx                   # React entry point
├── tests/                         # Data-integrity and utility tests
├── index.html                     # HTML document shell
├── package.json                   # Scripts and dependencies
├── package-lock.json              # npm dependency lockfile
├── tsconfig.json                  # TypeScript configuration
├── vite.config.ts                 # Vite configuration
├── tailwind.config.js             # Tailwind configuration
├── postcss.config.js              # PostCSS configuration
├── .gitignore                     # Git exclusions
├── .env.example                   # Example environment configuration
└── README.md
```

---

## Getting started

### Prerequisites

- **Node.js:** version 20 or newer is a reasonable baseline for the described setup.
- **npm:** use the version compatible with the installed Node.js release and project lockfile.
- **Git:** required to clone the repository.

Use the versions and scripts defined by the current project configuration if they differ from these general recommendations.

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

Open the local URL printed by Vite in your terminal.

### 4. Build for production

```bash
npm run build
```

Vite writes the production output to `dist/` when configured with the standard build setup.

### 5. Preview the production build

```bash
npm run preview
```

---

## Development and testing

Run the commands supported by the current `package.json`.

### TypeScript check

```bash
npm run typecheck
```

### Automated tests

```bash
npm test
```

### Production build

```bash
npm run build
```

> **Script note:** `typecheck`, `test`, and `build` depend on the scripts defined in `package.json`. If a command is unavailable, inspect the `scripts` section rather than assuming the script exists. A successful build or unit test run does not independently validate scientific accuracy, image licensing, accessibility, or the behavior of every interaction.

---

## Image loading and attribution

The exhibit image pipeline requests article summaries from the Wikipedia REST API and uses available image URLs when provided.

The described flow is:

1. Request an article summary for the selected sub-exhibit.
2. Read an available original image or thumbnail URL.
3. Attempt a higher-resolution Wikimedia rendition where supported.
4. Cache responses in memory for the current page session.
5. Preload imagery for the active exhibit and nearby records.
6. Use a fallback visual while an image loads or when a candidate cannot be displayed.

### Important considerations

- Image availability depends on the article, source files, network conditions, and requested rendition.
- A higher-resolution URL is not guaranteed to exist or load.
- Wikipedia and Wikimedia images are **not automatically free of reuse restrictions**.
- Verify each image's license and attribution requirements before production use.
- Consider displaying image credits and providing a clear missing-image state.

---

## Data model

The described collection contains two related groups:

- **Timeline exhibits:** records marked as chronological events.
- **World Atlas guides:** contemporary destination records kept separate from geological chronology.

The full catalog combines both groups for search and browsing, while the timeline should continue to represent chronological events only.

### Core record concepts

| Field or concept | Purpose |
|---|---|
| `id` | Stable record identity for rendering and navigation |
| `sequence` | Ordering key for chronological records |
| `dateLabel` / `dateValue` | Display date and ordering coordinate |
| `era` / `eraFilter` | Era classification and filtering |
| `title` / `subtitle` | Editorial exhibit content |
| `palette` | Theme information for the interface |
| `telemetry` | Approximate historical or planetary context |
| `story` | Overview, milestones, and curatorial note |
| `subExhibits` | Alternate exhibit variants and image metadata |
| `sourceIds` | References associated with a record |
| `collectionType` | Distinguishes Atlas records from timeline records |
| `isTimelineEvent` | Indicates whether a record belongs on the timeline |

Exact field names and optional properties should be verified against the current TypeScript definitions and data modules.

---

## Scientific and editorial conventions

World Museum is an educational and interpretive experience, not a precision scientific instrument.

- **Dates are anchors.** Geological and evolutionary changes often span long intervals; a single displayed date is a curatorial reference point.
- **Timeline spacing is visual.** Do not interpret ordinal ruler positions as proportional elapsed time unless the scale explicitly supports that interpretation.
- **Deep-time values are estimates.** Temperature, atmospheric composition, day length, and similar reconstructions depend on evidence and models.
- **Qualify hypotheses.** Distinguish well-established evidence from active research questions and leading explanations.
- **Keep source references traceable.** Connect scientific and historical claims to reputable sources where possible.
- **Review contemporary information.** Travel details and access requirements change and should be checked against current official sources.
- **Treat the Anthropocene carefully.** Do not describe it as a formally ratified geological epoch without appropriate qualification.

A record-level source identifier is useful, but a formal reference experience should also maintain a readable source registry with titles, publishers, URLs, and claim-to-source relationships.

---

## Accessibility and responsive design

The described interface includes keyboard navigation and modal close controls. A full release review should also cover:

- Visible keyboard focus and logical focus order.
- Dialog focus management and focus restoration.
- Sufficient text contrast across all era themes.
- Usability at common desktop, tablet, and mobile sizes.
- Catalog and modal behavior at high zoom.
- Support for `prefers-reduced-motion`.
- Screen-reader announcements when the active exhibit changes.
- Consistent keyboard behavior for interactive cards and controls.

The museum shell uses a full-screen layout. Test short viewports and high zoom carefully so content remains accessible and controls do not become cramped.

---

## Known limitations

The following areas should be verified in the current implementation and tested before production release:

- **Remote imagery:** image retrieval can fail because of missing article images, network issues, or unavailable renditions.
- **Image licensing:** third-party image reuse requires individual license and attribution review.
- **Scientific sourcing:** a formal educational reference experience benefits from a maintained, user-facing bibliography.
- **Accessibility:** keyboard support alone does not establish complete screen-reader, focus-management, or reduced-motion compliance.
- **Responsive behavior:** fixed-height layouts may need extra attention on short screens and at high zoom.
- **Test coverage:** passing selected unit tests does not establish end-to-end correctness for every interaction or device.

Features not present in the current source should be treated as future work, not advertised as implemented.

---

## Roadmap

Potential future improvements include:

### Research and content

- Add a maintained source registry with direct references for scientific and historical claims.
- Display image attribution and license details where required.
- Review deep-time descriptions and confidence notes periodically.
- Validate Atlas guidance against current official sources.

### Experience and accessibility

- Improve reduced-motion behavior and time-lapse preferences.
- Strengthen focus management and screen-reader announcements.
- Test layouts across small screens and high zoom.
- Refine missing-image feedback and loading states.

### Engineering quality

- Expand automated tests for record integrity, unique IDs, chronological ordering, and catalog filtering.
- Add integration tests for keyboard navigation, modals, and timeline interactions.
- Add repeatable checks to the development workflow or CI.
- Keep the Atlas navigation model distinct from geological chronology.

---

## Contributing

Contributions are welcome when they preserve the experience's content integrity and interaction model.

Before submitting a change:

1. Keep TypeScript types and data records consistent.
2. Preserve stable record IDs and collection distinctions.
3. Verify chronological ordering when changing timeline data.
4. Check image source, license, and attribution requirements.
5. Test affected interactions with keyboard and pointer input.
6. Run the relevant type checks, tests, and production build available in the repository.
7. Document what changed and what was actually verified.

Never commit `.env` files, credentials, private assets, or other secrets.

---

## Repository

**GitHub:** [Syed-Nazeer-07/WorldMuseum](https://github.com/Syed-Nazeer-07/WorldMuseum)

---

<p align="center">
  <strong>World Museum</strong><br>
  <em>Explore Earth's past. Discover the world we share.</em>
</p>
