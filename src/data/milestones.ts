import { ExhibitMilestone } from '@/types';

export const timelineMilestones: ExhibitMilestone[] = [
  {
    "sequence": 1,
    "id": "birth-of-terra",
    "dateLabel": "4.54B BCE",
    "dateValue": -4540000000,
    "dateUnit": "signed_timeline_coordinate",
    "displayCode": "4.5B",
    "era": "Primordial",
    "eraFilter": "Primordial",
    "classification": "Hadean Eon · Accretion & lunar cataclysm",
    "eyebrow": "4,540,000,000 BCE",
    "title": "Birth of Terra & Theia Impact",
    "subtitle": "Hadean Eon · Accretion & lunar cataclysm",
    "curatorQuote": "A world is not born finished; it is assembled, melted, struck, and remade.",
    "quoteAttribution": "Original curatorial copy; not a historical quotation.",
    "palette": [
      "#c65c39",
      "#f0a35e",
      "#261c28"
    ],
    "fallbackType": "magma",
    "visualCue": "molten globe, accretion disk, iron droplets, orbiting moon-forming debris",
    "specBarMode": "historical",
    "telemetry": {
      "surfaceTemp": {
        "label": "SURFACE TEMP",
        "value": "Global magma ocean",
        "detail": "Local temperatures far exceeded the melting point of silicate rock; no single global surface reading is defensible.",
        "confidence": "model-dependent",
        "shortValue": "Global Magma Ocean"
      },
      "atmosphereO2": {
        "label": "ATMOSPHERE O₂",
        "value": "Effectively 0%",
        "detail": "The modern oxygen-rich atmosphere did not exist.",
        "confidence": "high, qualitative",
        "shortValue": "Effectively 0% (Anoxic)"
      },
      "dayLength": {
        "label": "DAY LENGTH",
        "value": "A few hours?",
        "detail": "The earliest rotation history is model-dependent and affected by the Moon-forming impact.",
        "confidence": "low",
        "shortValue": "~5 Hours (Rapid Spin)"
      },
      "dominantSystem": {
        "label": "DOMINANT SYSTEM / LIFE",
        "value": "Melt, metal, silicate",
        "detail": "Accretion, differentiation and impact heating; no confirmed life.",
        "confidence": "high, qualitative",
        "shortValue": "Silicate Melt & Core Iron"
      }
    },
    "story": {
      "overview": [
        "About 4.54 billion years ago, dust and rock orbiting the young Sun assembled into a growing planet. Repeated collisions added mass and heat; dense metal sank inward while silicate rock formed the early mantle.",
        "In the leading giant-impact model, a roughly Mars-sized body commonly called Theia collided with proto-Earth. Debris from the encounter helped form the Moon. The impact geometry, timing and mixing of material remain active research questions."
      ],
      "sectionTitle": "GEOLOGICAL & EVOLUTIONARY MILESTONES",
      "milestones": [
        "Dust grains and planetesimals grew through repeated collisions in the young Solar System.",
        "A giant impact likely reshaped the proto-Earth–Moon system.",
        "Differentiation separated dense metal from silicate, building Earth's core and mantle."
      ],
      "curatorNote": "Theia is a useful name for a hypothesized impactor, not an object directly observed in the fossil record. Illustrations should be labeled as scientific reconstruction."
    },
    "subExhibits": [
      {
        "id": "protoplanetary-disk",
        "label": "Planetary State",
        "articleTitle": "Solar nebula",
        "fallbackType": "disk",
        "caption": "A young Sun glows inside a flattened disk of gas, dust and growing planetesimals.",
        "alt": "A young Sun glows inside a flattened disk of gas, dust and growing planetesimals.",
        "microStory": "The building blocks of planets orbited the young Sun. Accretion transformed dust and rocks into larger bodies over repeated collisions."
      },
      {
        "id": "theia-impact",
        "label": "Theia Impact",
        "articleTitle": "Giant-impact hypothesis",
        "fallbackType": "impact",
        "caption": "A hypothesized planetary collision launches hot silicate debris into orbit around proto-Earth.",
        "alt": "A hypothesized planetary collision launches hot silicate debris into orbit around proto-Earth.",
        "microStory": "The Moon-forming impact is inferred from chemistry and orbital models; no one witnessed it, and key details remain debated."
      },
      {
        "id": "hadean-magma-ocean",
        "label": "Hadean Magma Ocean",
        "articleTitle": "Lava",
        "fallbackType": "magma",
        "caption": "A molten young world radiates heat through a vapor-rich atmosphere.",
        "alt": "A molten young world radiates heat through a vapor-rich atmosphere.",
        "microStory": "Impact energy and internal heating left early Earth intensely hot. Cooling and crystallization gradually produced more persistent crust."
      }
    ],
    "confidenceNote": "Earth's age is supported by radiometric evidence from meteorites and ancient Solar System materials. Theia is a hypothesized impactor in the leading Moon-formation model, not a directly observed object.",
    "subExhibitLabels": [
      "Planetary State",
      "Theia Impact",
      "Hadean Magma Ocean"
    ],
    "subExhibitCount": 3,
    "timelineCoordinate": -4540000000,
    "timelinePosition": 0,
    "timelineLabel": "4.54B BCE",
    "approximateYearsBeforePresent": 4540002026,
    "temporalMeaning": "Approximate years before present; BCE wording is a stylized museum display convention.",
    "sourceIds": [
      "nasa-earth-facts",
      "nasa-solar-system-formation",
      "nasa-moon-origin"
    ],
    "collectionType": "timeline",
    "isTimelineEvent": true,
    "rulerShort": "4.54B"
  },
  {
    "sequence": 2,
    "id": "ancient-zircons",
    "dateLabel": "4.4B BCE",
    "dateValue": -4400000000,
    "dateUnit": "signed_timeline_coordinate",
    "displayCode": "4.4B",
    "era": "Primordial",
    "eraFilter": "Primordial",
    "classification": "Hadean Eon · Mineral clues to a cooling young planet",
    "eyebrow": "4.4B BCE",
    "title": "Ancient Zircons & the First Crust",
    "subtitle": "Hadean Eon · Mineral clues to a cooling young planet",
    "curatorQuote": "The oldest archives are not books, but crystals that survived the making of a world.",
    "quoteAttribution": "Original curatorial copy; not a historical quotation.",
    "palette": [
      "#8e9b9a",
      "#d2b58b",
      "#303c49"
    ],
    "fallbackType": "zircon",
    "visualCue": "translucent zircon crystals, ancient crust fragments and a young Earth beneath a dim Sun",
    "specBarMode": "historical",
    "telemetry": {
      "surfaceTemp": {
        "label": "SURFACE TEMP",
        "value": "Strongly model-dependent",
        "detail": "Climate reconstruction depends on greenhouse gases, solar output and geological proxies; no single global thermometer reading is defensible.",
        "confidence": "period-level qualitative summary",
        "shortValue": "Cooling Proto-Crust"
      },
      "atmosphereO2": {
        "label": "ATMOSPHERE O₂",
        "value": "Very low / anoxic",
        "detail": "Earth's surface environment had not yet developed a persistently modern oxygen-rich atmosphere.",
        "confidence": "qualitative / proxy-dependent where noted",
        "shortValue": "Very Low / Anoxic"
      },
      "dayLength": {
        "label": "DAY LENGTH",
        "value": "Shorter than today; uncertain",
        "detail": "Deep-time rotation estimates depend on tidal models and geological proxies; avoid treating a single value as settled.",
        "confidence": "approximate or model-dependent",
        "shortValue": "Shorter Than Modern"
      },
      "dominantSystem": {
        "label": "DOMINANT SYSTEM / LIFE",
        "value": "Oceans, microbes & early complexity",
        "detail": "Microbes, ocean chemistry and mineral cycles dominated the known biosphere.",
        "confidence": "period-level summary",
        "shortValue": "Detrital Zircon Crystals"
      }
    },
    "story": {
      "overview": [
        "Tiny zircon crystals found in ancient rocks preserve chemical signals from a very early Earth. Some interpretations suggest that liquid water and differentiated crust existed by about 4.4 billion years ago.",
        "Zircons are durable mineral time capsules, but they do not provide a complete landscape photograph. Their chemistry is interpreted with geological context and competing models of early crust formation."
      ],
      "sectionTitle": "GEOLOGICAL & EVOLUTIONARY MILESTONES",
      "milestones": [
        "Radiometric dating constrains the age of some ancient zircons.",
        "Isotopic chemistry can indicate interaction with liquid water and evolved crust.",
        "The Hadean landscape remains a reconstruction, not a directly observed scene."
      ],
      "curatorNote": "Distinguish the age of a mineral from the age of the rock or landscape in which it is later found. Early liquid water evidence is powerful but its interpretation continues to be refined."
    },
    "subExhibits": [
      {
        "id": "ancient-zircons-zircon-time-capsule",
        "label": "Zircon Time Capsule",
        "articleTitle": "Crystal",
        "fallbackType": "zircon-crystal",
        "caption": "A translucent zircon crystal catches light like a mineral archive.",
        "alt": "A translucent zircon crystal catches light like a mineral archive.",
        "microStory": "Zircon can retain uranium-lead isotopic information through geological change, helping scientists estimate very ancient ages."
      },
      {
        "id": "ancient-zircons-a-cooling-crust",
        "label": "A Cooling Crust",
        "articleTitle": "Jack Hills",
        "fallbackType": "early-crust",
        "caption": "Dark proto-crust fragments emerge from a hot young planet.",
        "alt": "Dark proto-crust fragments emerge from a hot young planet.",
        "microStory": "Earth's outer shell formed and was repeatedly reworked as the planet cooled, collided and differentiated."
      },
      {
        "id": "ancient-zircons-liquid-water-clues",
        "label": "Liquid Water Clues",
        "articleTitle": "Fumarole",
        "fallbackType": "hadean-water",
        "caption": "Water vapour condenses over a rugged early-Earth horizon.",
        "alt": "Water vapour condenses over a rugged early-Earth horizon.",
        "microStory": "Some ancient mineral chemistry is consistent with liquid water on an early Earth, though the precise environment remains debated."
      }
    ],
    "confidenceNote": "Some zircons are about 4.4 billion years old; interpretations of their source environment depend on geochemical models.",
    "subExhibitLabels": [
      "Zircon Time Capsule",
      "A Cooling Crust",
      "Liquid Water Clues"
    ],
    "subExhibitCount": 3,
    "timelineCoordinate": -4400000000,
    "timelinePosition": 0.023809523809523808,
    "timelineLabel": "4.4B BCE",
    "approximateYearsBeforePresent": 4400002026,
    "temporalMeaning": "Rounded chronological anchor; not a claim that every development in this exhibit began in this exact year.",
    "sourceIds": [
      "nasa-early-earth-zircons",
      "nasa-earth-facts"
    ],
    "collectionType": "timeline",
    "isTimelineEvent": true,
    "rulerShort": "4.4B"
  },
  {
    "sequence": 3,
    "id": "first-oceans",
    "dateLabel": "3.8B BCE",
    "dateValue": -3800000000,
    "dateUnit": "signed_timeline_coordinate",
    "displayCode": "3.8B",
    "era": "Primordial",
    "eraFilter": "Primordial",
    "classification": "Archean Eon · Oceans & hydrothermal chemistry",
    "eyebrow": "c. 3,800,000,000 BCE",
    "title": "First Oceans & Hydrothermal Origins",
    "subtitle": "Archean Eon · Early oceans, crust and chemical energy",
    "curatorQuote": "Water became a landscape, and rock became a chemical engine.",
    "quoteAttribution": "Original curatorial copy; not a historical quotation.",
    "palette": [
      "#133c46",
      "#2a9d9f",
      "#e7b86b"
    ],
    "fallbackType": "ocean",
    "visualCue": "dark ocean, mineral chimneys, pillow basalt, hazy volcanic horizon",
    "specBarMode": "historical",
    "telemetry": {
      "surfaceTemp": {
        "label": "SURFACE TEMP",
        "value": "Warm, variable",
        "detail": "Climate estimates depend on greenhouse gases and the faint young Sun; do not interpret as a precise thermometer reading.",
        "confidence": "model-dependent",
        "shortValue": "Warm Hydrothermal Seas"
      },
      "atmosphereO2": {
        "label": "ATMOSPHERE O₂",
        "value": "Near zero",
        "detail": "The atmosphere was largely anoxic; oxygenic photosynthesis had not yet transformed it.",
        "confidence": "high, qualitative",
        "shortValue": "Near 0% (Anoxic)"
      },
      "dayLength": {
        "label": "DAY LENGTH",
        "value": "Longer than at birth",
        "detail": "Tidal evolution lengthened Earth's day; exact value at this date is uncertain.",
        "confidence": "model-dependent",
        "shortValue": "~12–14 Hours (Est.)"
      },
      "dominantSystem": {
        "label": "DOMINANT SYSTEM / LIFE",
        "value": "Ocean chemistry & microbes?",
        "detail": "Hydrothermal systems; earliest life evidence remains debated.",
        "confidence": "active research",
        "shortValue": "Ocean Chemistry & Vents"
      }
    },
    "story": {
      "overview": [
        "As Earth cooled, water condensed and accumulated in basins; volcanic gases and impacts shaped the early atmosphere and ocean chemistry. The young Sun was fainter than today, so greenhouse gases likely played an important role in keeping liquid water possible.",
        "Hydrothermal systems supplied chemical gradients and mineral surfaces that are studied as possible settings for prebiotic chemistry. They are not proof that life began at a particular vent or at this exact date."
      ],
      "sectionTitle": "GEOLOGICAL & EVOLUTIONARY MILESTONES",
      "milestones": [
        "The crust develops while water gathers in basins.",
        "Submarine volcanism produces pillow lavas as molten rock cools under water.",
        "Hydrothermal vents create steep chemical gradients; the origin and timing of life remain under investigation."
      ],
      "curatorNote": "Separate three claims in the UI: liquid water existed early, hydrothermal settings can support rich chemistry, and the exact origin of life remains unresolved."
    },
    "subExhibits": [
      {
        "id": "hydrothermal-vent",
        "label": "Hydrothermal Vent",
        "articleTitle": "Hydrothermal vent",
        "fallbackType": "vent",
        "caption": "Mineral chimneys discharge dark plumes into a deep, newly formed ocean.",
        "alt": "Mineral chimneys discharge dark plumes into a deep, newly formed ocean.",
        "microStory": "Water circulates through hot rock, reacts with minerals and returns loaded with dissolved chemicals. Such systems are candidates for providing the energy gradients early life could exploit."
      },
      {
        "id": "archean",
        "label": "Archean Earth",
        "articleTitle": "Archean",
        "fallbackType": "archean",
        "caption": "A dark volcanic shoreline beneath a hazy, low-oxygen sky.",
        "alt": "A dark volcanic shoreline beneath a hazy, low-oxygen sky.",
        "microStory": "The Archean Eon preserves a world of evolving crust, oceans and microbial life. Its atmosphere differed radically from today's, and the rocks surviving from it are rare windows into a vanished planet."
      },
      {
        "id": "pillow-lava",
        "label": "Pillow Lava",
        "articleTitle": "Pillow lava",
        "fallbackType": "lava",
        "caption": "Rounded, overlapping basalt lobes formed as lava chilled underwater.",
        "alt": "Rounded, overlapping basalt lobes formed as lava chilled underwater.",
        "microStory": "Pillow structures form when lava erupts into water and its outer surface quenches rapidly. They are a durable geological clue that ancient lava flows occurred underwater."
      }
    ],
    "confidenceNote": "The displayed date is a rounded museum anchor, not a single proven ocean-formation date. Evidence for early liquid water reaches further back in some interpretations, while the earliest life record remains debated.",
    "subExhibitLabels": [
      "Hydrothermal Vent",
      "Archean Earth",
      "Pillow Lava"
    ],
    "subExhibitCount": 3,
    "timelineCoordinate": -3800000000,
    "timelinePosition": 0.047619047619047616,
    "timelineLabel": "3.8B BCE",
    "approximateYearsBeforePresent": 3800002026,
    "temporalMeaning": "Approximate years before present; BCE wording is a stylized museum display convention.",
    "sourceIds": [
      "nasa-early-earth-zircons",
      "ics-chart"
    ],
    "collectionType": "timeline",
    "isTimelineEvent": true,
    "rulerShort": "3.8B"
  },
  {
    "sequence": 4,
    "id": "microbial-worlds",
    "dateLabel": "3.5B BCE",
    "dateValue": -3500000000,
    "dateUnit": "signed_timeline_coordinate",
    "displayCode": "3.5B",
    "era": "Primordial",
    "eraFilter": "Primordial",
    "classification": "Archean Eon · Microbial ecosystems leave layered stone archives",
    "eyebrow": "3.5B BCE",
    "title": "Microbial Worlds & Stromatolite Reefs",
    "subtitle": "Archean Eon · Microbial ecosystems leave layered stone archives",
    "curatorQuote": "Before forests or animals, microbes were already engineering their planet.",
    "quoteAttribution": "Original curatorial copy; not a historical quotation.",
    "palette": [
      "#427d76",
      "#9dba9d",
      "#183943"
    ],
    "fallbackType": "stromatolite",
    "visualCue": "shallow Archean shoreline, layered stromatolites and microbial mats under a hazy sky",
    "specBarMode": "historical",
    "telemetry": {
      "surfaceTemp": {
        "label": "SURFACE TEMP",
        "value": "Strongly model-dependent",
        "detail": "Climate reconstruction depends on greenhouse gases, solar output and geological proxies; no single global thermometer reading is defensible.",
        "confidence": "period-level qualitative summary",
        "shortValue": "Warm Archean Seas"
      },
      "atmosphereO2": {
        "label": "ATMOSPHERE O₂",
        "value": "Very low / anoxic",
        "detail": "Earth's surface environment had not yet developed a persistently modern oxygen-rich atmosphere.",
        "confidence": "qualitative / proxy-dependent where noted",
        "shortValue": "Very Low / Anoxic"
      },
      "dayLength": {
        "label": "DAY LENGTH",
        "value": "Shorter than today; uncertain",
        "detail": "Deep-time rotation estimates depend on tidal models and geological proxies; avoid treating a single value as settled.",
        "confidence": "approximate or model-dependent",
        "shortValue": "~15 Hours (Est.)"
      },
      "dominantSystem": {
        "label": "DOMINANT SYSTEM / LIFE",
        "value": "Oceans, microbes & early complexity",
        "detail": "Microbes, ocean chemistry and mineral cycles dominated the known biosphere.",
        "confidence": "period-level summary",
        "shortValue": "Stromatolite Microbial Mats"
      }
    },
    "story": {
      "overview": [
        "Layered structures called stromatolites formed through interactions between microbial communities and sediment. Some very ancient examples are consistent with microbial ecosystems more than three billion years ago.",
        "Microbes transformed local chemistry long before animals or plants existed. Not every layered rock is biological, so scientists examine texture, chemistry and geological setting before identifying a stromatolite."
      ],
      "sectionTitle": "GEOLOGICAL & EVOLUTIONARY MILESTONES",
      "milestones": [
        "Microbial mats trapped sediment and helped build layered structures.",
        "Some ancient rocks preserve evidence consistent with early microbial life.",
        "Microbial activity influenced ocean chemistry and, later, the atmospheric oxygen story."
      ],
      "curatorNote": "Stromatolite-like shapes can form through non-biological processes. Use fossil examples with provenance and note when an interpretation is debated."
    },
    "subExhibits": [
      {
        "id": "microbial-worlds-stromatolite",
        "label": "Stromatolite",
        "articleTitle": "Hamelin Pool Marine Nature Reserve",
        "fallbackType": "stromatolite",
        "caption": "A cutaway of finely layered domes built by microbial mats.",
        "alt": "A cutaway of finely layered domes built by microbial mats.",
        "microStory": "Stromatolites record the interaction of living mats, sediment and water; some ancient examples are among the evidence used to investigate early life."
      },
      {
        "id": "microbial-worlds-microbial-mat",
        "label": "Microbial Mat",
        "articleTitle": "Microbial mat",
        "fallbackType": "microbial-mat",
        "caption": "A glossy biofilm spreads across a shallow mineral-rich shoreline.",
        "alt": "A glossy biofilm spreads across a shallow mineral-rich shoreline.",
        "microStory": "Microbial ecosystems can change sediment and chemistry even when their builders are too small to see with the naked eye."
      },
      {
        "id": "microbial-worlds-archean-shoreline",
        "label": "Archean Shoreline",
        "articleTitle": "Grand Prismatic Spring",
        "fallbackType": "archean-shoreline",
        "caption": "A hazy shoreline beneath a faint young Sun and volcanic horizon.",
        "alt": "A hazy shoreline beneath a faint young Sun and volcanic horizon.",
        "microStory": "Archean Earth was not a lifeless inferno everywhere: oceans and local environments could sustain complex chemistry and microbial ecosystems."
      }
    ],
    "confidenceNote": "The antiquity of microbial life is supported by multiple lines of evidence, but individual very old structures can be contested.",
    "subExhibitLabels": [
      "Stromatolite",
      "Microbial Mat",
      "Archean Shoreline"
    ],
    "subExhibitCount": 3,
    "timelineCoordinate": -3500000000,
    "timelinePosition": 0.07142857142857142,
    "timelineLabel": "3.5B BCE",
    "approximateYearsBeforePresent": 3500002026,
    "temporalMeaning": "Rounded chronological anchor; not a claim that every development in this exhibit began in this exact year.",
    "sourceIds": [
      "nasa-early-earth-zircons",
      "nasa-goe",
      "ics-chart"
    ],
    "collectionType": "timeline",
    "isTimelineEvent": true,
    "rulerShort": "3.5B"
  },
  {
    "sequence": 5,
    "id": "great-oxidation",
    "dateLabel": "2.4B BCE",
    "dateValue": -2400000000,
    "dateUnit": "signed_timeline_coordinate",
    "displayCode": "2.4B",
    "era": "Primordial",
    "eraFilter": "Primordial",
    "classification": "Paleoproterozoic · Oxygenation of Earth systems",
    "eyebrow": "c. 2,400,000,000 BCE",
    "title": "The Great Oxidation Event",
    "subtitle": "Paleoproterozoic · A long transition in atmosphere and oceans",
    "curatorQuote": "Life changed the atmosphere before the atmosphere could welcome complex life.",
    "quoteAttribution": "Original curatorial copy; not a historical quotation.",
    "palette": [
      "#173c51",
      "#60a89a",
      "#d3c77d"
    ],
    "fallbackType": "oxygenation",
    "visualCue": "layered microbial mats, iron-stained seafloor, oxygen bubbles, blue-green microbial textures",
    "specBarMode": "historical",
    "telemetry": {
      "surfaceTemp": {
        "label": "SURFACE TEMP",
        "value": "Climate highly variable",
        "detail": "The GOE was a chemical transition, not one single temperature event.",
        "confidence": "high, qualitative",
        "shortValue": "Variable / Huronian Ice"
      },
      "atmosphereO2": {
        "label": "ATMOSPHERE O₂",
        "value": "Sustained rise begins",
        "detail": "Oxygen accumulated unevenly and remained far below modern abundance for much of Earth history.",
        "confidence": "high, qualitative",
        "shortValue": "Sustained O₂ Rise"
      },
      "dayLength": {
        "label": "DAY LENGTH",
        "value": "~18–21 h (estimate)",
        "detail": "Rotation estimates for deep time vary by model and geological proxy.",
        "confidence": "low–moderate",
        "shortValue": "~18–21 Hours (Est.)"
      },
      "dominantSystem": {
        "label": "DOMINANT SYSTEM / LIFE",
        "value": "Cyanobacteria & iron chemistry",
        "detail": "Oxygenic photosynthesis altered oceans, rocks and atmosphere.",
        "confidence": "high, qualitative",
        "shortValue": "Photosynthetic Cyanobacteria"
      }
    },
    "story": {
      "overview": [
        "Photosynthetic microbes produced oxygen long before it accumulated persistently in the atmosphere. Early oxygen reacted with dissolved iron and other chemical sinks in oceans and rocks, leaving a record in banded iron formations and changing the conditions for life.",
        "Around 2.4 billion years ago, the Great Oxidation Event marks a major shift in Earth's surface chemistry. Oxygenation unfolded unevenly and over a long interval, with consequences for ocean chemistry, climate and later aerobic metabolism."
      ],
      "sectionTitle": "GEOLOGICAL & EVOLUTIONARY MILESTONES",
      "milestones": [
        "Cyanobacteria and other microbes contributed oxygen through photosynthesis.",
        "Oxygen reacted with dissolved iron, contributing to banded iron formations.",
        "The atmosphere and oceans changed in a drawn-out transition rather than a one-day event."
      ],
      "curatorNote": "Avoid implying that oxygenic photosynthesis, the first oxygen in any environment, and the Great Oxidation Event were simultaneous."
    },
    "subExhibits": [
      {
        "id": "stromatolite",
        "label": "Stromatolite",
        "articleTitle": "Stromatolite",
        "fallbackType": "stromatolite",
        "caption": "Layered microbial domes preserve the accretion of mineral-rich sediment.",
        "alt": "Layered microbial domes preserve the accretion of mineral-rich sediment.",
        "microStory": "Stromatolites form through interactions between microbial communities and sediments. Ancient examples are important evidence of early ecosystems, although not every layered structure is biological."
      },
      {
        "id": "banded-iron",
        "label": "Banded Iron",
        "articleTitle": "Banded iron formation",
        "fallbackType": "iron",
        "caption": "Alternating dark iron-rich and red silica-rich bands in polished rock.",
        "alt": "Alternating dark iron-rich and red silica-rich bands in polished rock.",
        "microStory": "Banded iron formations preserve changes in marine iron chemistry. Their formation involves complex interactions among seawater, oxygen, iron and hydrothermal inputs."
      },
      {
        "id": "cyanobacteria",
        "label": "Cyanobacteria",
        "articleTitle": "Cyanobacteria",
        "fallbackType": "microbe",
        "caption": "Microscopic blue-green microbial mats spread across shallow water.",
        "alt": "Microscopic blue-green microbial mats spread across shallow water.",
        "microStory": "Cyanobacteria evolved oxygenic photosynthesis, releasing oxygen as a by-product. Over geological time, this metabolism altered the atmosphere and became one of the most consequential biological innovations on Earth."
      }
    ],
    "confidenceNote": "The Great Oxidation Event is a prolonged, regionally uneven transition commonly placed around 2.4 billion years ago. Atmospheric oxygen did not jump instantly to modern levels, and earlier oxygen production likely occurred.",
    "subExhibitLabels": [
      "Stromatolite",
      "Banded Iron",
      "Cyanobacteria"
    ],
    "subExhibitCount": 3,
    "timelineCoordinate": -2400000000,
    "timelinePosition": 0.09523809523809523,
    "timelineLabel": "2.4B BCE",
    "approximateYearsBeforePresent": 2400002026,
    "temporalMeaning": "Approximate years before present; BCE wording is a stylized museum display convention.",
    "sourceIds": [
      "nasa-goe"
    ],
    "collectionType": "timeline",
    "isTimelineEvent": true,
    "rulerShort": "2.4B"
  },
  {
    "sequence": 6,
    "id": "eukaryotic-cells",
    "dateLabel": "1.8B BCE",
    "dateValue": -1800000000,
    "dateUnit": "signed_timeline_coordinate",
    "displayCode": "1.8B",
    "era": "Primordial",
    "eraFilter": "Primordial",
    "classification": "Proterozoic Eon · Cells with nuclei and internal architecture",
    "eyebrow": "1.8B BCE",
    "title": "Eukaryotic Cells: Complexity Begins",
    "subtitle": "Proterozoic Eon · Cells with nuclei and internal architecture",
    "curatorQuote": "A new kind of cell changed what life could build.",
    "quoteAttribution": "Original curatorial copy; not a historical quotation.",
    "palette": [
      "#687e9f",
      "#9cb2c7",
      "#202c42"
    ],
    "fallbackType": "eukaryote",
    "visualCue": "a luminous eukaryotic cell with nucleus, membranes and organelles floating in a dark ancient sea",
    "specBarMode": "historical",
    "telemetry": {
      "surfaceTemp": {
        "label": "SURFACE TEMP",
        "value": "Variable; major climate swings",
        "detail": "The Proterozoic included major glaciations and large changes in ocean-atmosphere chemistry.",
        "confidence": "period-level qualitative summary",
        "shortValue": "Temperate Proterozoic"
      },
      "atmosphereO2": {
        "label": "ATMOSPHERE O₂",
        "value": "Rising, not modern throughout",
        "detail": "Oxygenation occurred in stages; concentrations and ocean chemistry varied over long intervals.",
        "confidence": "qualitative / proxy-dependent where noted",
        "shortValue": "Staged O₂ Accumulation"
      },
      "dayLength": {
        "label": "DAY LENGTH",
        "value": "Shorter than today; estimate",
        "detail": "Rotation slowed over geological time, but exact values at a chosen date remain uncertain.",
        "confidence": "approximate or model-dependent",
        "shortValue": "~19–21 Hours (Est.)"
      },
      "dominantSystem": {
        "label": "DOMINANT SYSTEM / LIFE",
        "value": "Oceans, microbes & early complexity",
        "detail": "Microbes and early eukaryotes shaped marine ecosystems before familiar animal communities diversified.",
        "confidence": "period-level summary",
        "shortValue": "Nucleated Eukaryotic Cells"
      }
    },
    "story": {
      "overview": [
        "Eukaryotic cells contain a nucleus and complex internal structures. Their origin involved major evolutionary transitions, including the incorporation of bacterial ancestors that became mitochondria.",
        "The fossil and molecular records place early eukaryotes deep in the Proterozoic, but the exact timing of their origin and the sequence of early innovations remain active research topics."
      ],
      "sectionTitle": "GEOLOGICAL & EVOLUTIONARY MILESTONES",
      "milestones": [
        "A nucleus separates much of the cell's genetic material from the cytoplasm.",
        "Mitochondria trace their ancestry to bacteria incorporated by an early host lineage.",
        "Later eukaryotic evolution enabled many algae, fungi, plants and animals."
      ],
      "curatorNote": "Avoid depicting modern animal cells as literal portraits of the earliest eukaryotes; internal structures and lineages evolved over time."
    },
    "subExhibits": [
      {
        "id": "eukaryotic-cells-cell-architecture",
        "label": "Cell Architecture",
        "articleTitle": "Endoplasmic reticulum",
        "fallbackType": "eukaryotic-cell",
        "caption": "A detailed cutaway cell with a nucleus and folded internal membranes.",
        "alt": "A detailed cutaway cell with a nucleus and folded internal membranes.",
        "microStory": "Eukaryotic cells organize functions into internal compartments, supporting forms of cellular complexity absent in typical bacteria."
      },
      {
        "id": "eukaryotic-cells-mitochondrial-partnership",
        "label": "Mitochondrial Partnership",
        "articleTitle": "Endosymbiont",
        "fallbackType": "mitochondrion",
        "caption": "A mitochondrion with folded inner membranes glows inside a host cell.",
        "alt": "A mitochondrion with folded inner membranes glows inside a host cell.",
        "microStory": "Mitochondria are understood as descendants of bacteria that entered an enduring evolutionary partnership with a host cell."
      },
      {
        "id": "eukaryotic-cells-proterozoic-microbial-sea",
        "label": "Proterozoic Microbial Sea",
        "articleTitle": "Grypania",
        "fallbackType": "proterozoic-ocean",
        "caption": "A dark sea hosts microbial films and drifting early eukaryotic forms.",
        "alt": "A dark sea hosts microbial films and drifting early eukaryotic forms.",
        "microStory": "The Proterozoic was a long interval of changing oceans, atmospheric chemistry and increasingly complex microbial ecosystems."
      }
    ],
    "confidenceNote": "Broad timing is based on combined fossil, geochemical and molecular-clock evidence; estimates differ among studies.",
    "subExhibitLabels": [
      "Cell Architecture",
      "Mitochondrial Partnership",
      "Proterozoic Microbial Sea"
    ],
    "subExhibitCount": 3,
    "timelineCoordinate": -1800000000,
    "timelinePosition": 0.11904761904761904,
    "timelineLabel": "1.8B BCE",
    "approximateYearsBeforePresent": 1800002026,
    "temporalMeaning": "Rounded chronological anchor; not a claim that every development in this exhibit began in this exact year.",
    "sourceIds": [
      "ics-chart",
      "nasa-early-earth-zircons"
    ],
    "collectionType": "timeline",
    "isTimelineEvent": true,
    "rulerShort": "1.8B"
  },
  {
    "sequence": 7,
    "id": "snowball-earth",
    "dateLabel": "720M BCE",
    "dateValue": -720000000,
    "dateUnit": "signed_timeline_coordinate",
    "displayCode": "720M",
    "era": "Primordial",
    "eraFilter": "Primordial",
    "classification": "Cryogenian Period · Extreme glaciations and climate feedbacks",
    "eyebrow": "720M BCE",
    "title": "Snowball Earth: Ice Across the Tropics",
    "subtitle": "Cryogenian Period · Extreme glaciations and climate feedbacks",
    "curatorQuote": "The climate system can cross thresholds that remake an entire planet.",
    "quoteAttribution": "Original curatorial copy; not a historical quotation.",
    "palette": [
      "#8bb8d6",
      "#eff5f4",
      "#526d83"
    ],
    "fallbackType": "snowball-earth",
    "visualCue": "glacial sheets extending toward an ancient equatorial ocean, fractured sea ice and pale-blue haze",
    "specBarMode": "historical",
    "telemetry": {
      "surfaceTemp": {
        "label": "SURFACE TEMP",
        "value": "Variable; major climate swings",
        "detail": "The Proterozoic included major glaciations and large changes in ocean-atmosphere chemistry.",
        "confidence": "period-level qualitative summary",
        "shortValue": "Cryogenian Glaciation"
      },
      "atmosphereO2": {
        "label": "ATMOSPHERE O₂",
        "value": "Rising, not modern throughout",
        "detail": "Oxygenation occurred in stages; concentrations and ocean chemistry varied over long intervals.",
        "confidence": "qualitative / proxy-dependent where noted",
        "shortValue": "Rising Proterozoic O₂"
      },
      "dayLength": {
        "label": "DAY LENGTH",
        "value": "Shorter than today; estimate",
        "detail": "Rotation slowed over geological time, but exact values at a chosen date remain uncertain.",
        "confidence": "approximate or model-dependent",
        "shortValue": "~21 Hours (Est.)"
      },
      "dominantSystem": {
        "label": "DOMINANT SYSTEM / LIFE",
        "value": "Oceans, microbes & early complexity",
        "detail": "Microbes and early eukaryotes shaped marine ecosystems before familiar animal communities diversified.",
        "confidence": "period-level summary",
        "shortValue": "Sub-Glacial Microbial Refugia"
      }
    },
    "story": {
      "overview": [
        "During the Cryogenian Period, major glaciations covered large parts of the planet and may at times have approached global coverage. The Sturtian glaciation lasted an exceptionally long interval; a later Marinoan glaciation followed.",
        "Ice reflects sunlight, so expanding ice can reinforce cooling. Volcanic carbon dioxide accumulating while weathering slows is one proposed mechanism for eventual warming and deglaciation. Exact ice coverage and feedback pathways remain debated."
      ],
      "sectionTitle": "GEOLOGICAL & EVOLUTIONARY MILESTONES",
      "milestones": [
        "The Sturtian glaciation began around 717 million years ago, within this broad interval.",
        "Ice-albedo feedback can amplify cooling once ice expands.",
        "Post-glacial conditions were followed by major changes in oceans and ecosystems."
      ],
      "curatorNote": "Use 'Snowball Earth' as a family of hypotheses about severe glaciation, not as a claim that every part of the ocean was sealed by ice for the entire interval."
    },
    "subExhibits": [
      {
        "id": "snowball-earth-glacial-planet",
        "label": "Glacial Planet",
        "articleTitle": "Snowball Earth",
        "fallbackType": "cryogenian-glaciation",
        "caption": "A blue-white ice sheet sweeps across a reconstructed Cryogenian coastline.",
        "alt": "A blue-white ice sheet sweeps across a reconstructed Cryogenian coastline.",
        "microStory": "Cryogenian strata preserve evidence for extraordinary glaciations; their exact geographic extent is inferred from rocks deposited long ago."
      },
      {
        "id": "snowball-earth-cap-carbonates",
        "label": "Cap Carbonates",
        "articleTitle": "Cap carbonate",
        "fallbackType": "cap-carbonate",
        "caption": "A pale limestone layer rests above a dark glacial deposit.",
        "alt": "A pale limestone layer rests above a dark glacial deposit.",
        "microStory": "Cap carbonates appear above some glacial deposits and help constrain rapid environmental change after deglaciation."
      },
      {
        "id": "snowball-earth-climate-feedback",
        "label": "Climate Feedback",
        "articleTitle": "Sea ice",
        "fallbackType": "ice-albedo",
        "caption": "Sunlight reflects from ice into a cold, cloud-streaked sky.",
        "alt": "Sunlight reflects from ice into a cold, cloud-streaked sky.",
        "microStory": "Expanding ice reflects more sunlight, creating a feedback that can push climate toward more extensive glaciation."
      }
    ],
    "confidenceNote": "Cryogenian glaciations are well supported; the degree of equatorial ice, open water and precise global conditions remain debated.",
    "subExhibitLabels": [
      "Glacial Planet",
      "Cap Carbonates",
      "Climate Feedback"
    ],
    "subExhibitCount": 3,
    "timelineCoordinate": -720000000,
    "timelinePosition": 0.14285714285714285,
    "timelineLabel": "720M BCE",
    "approximateYearsBeforePresent": 720002026,
    "temporalMeaning": "Rounded chronological anchor; not a claim that every development in this exhibit began in this exact year.",
    "sourceIds": [
      "ics-chart"
    ],
    "collectionType": "timeline",
    "isTimelineEvent": true,
    "rulerShort": "720M"
  },
  {
    "sequence": 8,
    "id": "ediacaran-life",
    "dateLabel": "635M BCE",
    "dateValue": -635000000,
    "dateUnit": "signed_timeline_coordinate",
    "displayCode": "635M",
    "era": "Primordial",
    "eraFilter": "Primordial",
    "classification": "Ediacaran Period · Large, enigmatic organisms before the Cambrian",
    "eyebrow": "635M BCE",
    "title": "Ediacaran Life: Strange Soft-Bodied Worlds",
    "subtitle": "Ediacaran Period · Large, enigmatic organisms before the Cambrian",
    "curatorQuote": "Before shells filled the fossil record, the sea held unfamiliar experiments in form.",
    "quoteAttribution": "Original curatorial copy; not a historical quotation.",
    "palette": [
      "#6d8a79",
      "#c7b6a1",
      "#263f43"
    ],
    "fallbackType": "ediacaran",
    "visualCue": "frond-like soft-bodied organisms on a quiet seafloor with microbial mats",
    "specBarMode": "historical",
    "telemetry": {
      "surfaceTemp": {
        "label": "SURFACE TEMP",
        "value": "Variable; major climate swings",
        "detail": "The Proterozoic included major glaciations and large changes in ocean-atmosphere chemistry.",
        "confidence": "period-level qualitative summary",
        "shortValue": "Post-Glacial Thaw"
      },
      "atmosphereO2": {
        "label": "ATMOSPHERE O₂",
        "value": "Rising, not modern throughout",
        "detail": "Oxygenation occurred in stages; concentrations and ocean chemistry varied over long intervals.",
        "confidence": "qualitative / proxy-dependent where noted",
        "shortValue": "Rising Marine O₂"
      },
      "dayLength": {
        "label": "DAY LENGTH",
        "value": "Shorter than today; estimate",
        "detail": "Rotation slowed over geological time, but exact values at a chosen date remain uncertain.",
        "confidence": "approximate or model-dependent",
        "shortValue": "~21.5 Hours (Est.)"
      },
      "dominantSystem": {
        "label": "DOMINANT SYSTEM / LIFE",
        "value": "Oceans, microbes & early complexity",
        "detail": "Microbes and early eukaryotes shaped marine ecosystems before familiar animal communities diversified.",
        "confidence": "period-level summary",
        "shortValue": "Soft-Bodied Ediacaran Biota"
      }
    },
    "story": {
      "overview": [
        "After Cryogenian glaciations, Ediacaran seas hosted a range of large, soft-bodied organisms preserved in fine-grained sediments. Many have body plans unlike those of familiar modern animals.",
        "Scientists debate the relationships and lifestyles of several Ediacaran organisms. Some may be early animals, others may represent extinct branches of life, and some fossil textures remain difficult to interpret."
      ],
      "sectionTitle": "GEOLOGICAL & EVOLUTIONARY MILESTONES",
      "milestones": [
        "Soft-bodied organisms are preserved in exceptional sedimentary settings.",
        "Ediacaran communities predate the Cambrian diversification.",
        "The relationship between some Ediacaran forms and later animal groups is unresolved."
      ],
      "curatorNote": "Avoid labeling every Ediacaran fossil as an animal ancestor. The evolutionary placement of many forms remains unsettled."
    },
    "subExhibits": [
      {
        "id": "ediacaran-life-dickinsonia",
        "label": "Dickinsonia",
        "articleTitle": "Dickinsonia",
        "fallbackType": "dickinsonia",
        "caption": "An oval, ribbed organism lies on a microbial-mat seafloor.",
        "alt": "An oval, ribbed organism lies on a microbial-mat seafloor.",
        "microStory": "Dickinsonia is a famous Ediacaran fossil; its exact place on the tree of life has been debated."
      },
      {
        "id": "ediacaran-life-charnia",
        "label": "Charnia",
        "articleTitle": "Charnia",
        "fallbackType": "charnia",
        "caption": "A frond-like organism rises from a soft sediment surface.",
        "alt": "A frond-like organism rises from a soft sediment surface.",
        "microStory": "Charnia's branching frond shape is unlike most familiar animals and demonstrates the distinctiveness of Ediacaran ecosystems."
      },
      {
        "id": "ediacaran-life-ediacaran-seafloor",
        "label": "Ediacaran Seafloor",
        "articleTitle": "Ediacaran biota",
        "fallbackType": "ediacaran-seafloor",
        "caption": "A quiet seafloor is dotted with soft-bodied forms and microbial textures.",
        "alt": "A quiet seafloor is dotted with soft-bodied forms and microbial textures.",
        "microStory": "The Ediacaran fossil record captures experiments in size and body form before the Cambrian's richer record of hard parts."
      }
    ],
    "confidenceNote": "The period and fossil assemblages are established; interpretation of many taxa is an active research area.",
    "subExhibitLabels": [
      "Dickinsonia",
      "Charnia",
      "Ediacaran Seafloor"
    ],
    "subExhibitCount": 3,
    "timelineCoordinate": -635000000,
    "timelinePosition": 0.16666666666666666,
    "timelineLabel": "635M BCE",
    "approximateYearsBeforePresent": 635002026,
    "temporalMeaning": "Rounded chronological anchor; not a claim that every development in this exhibit began in this exact year.",
    "sourceIds": [
      "ics-chart",
      "smithsonian-cambrian"
    ],
    "collectionType": "timeline",
    "isTimelineEvent": true,
    "rulerShort": "635M"
  },
  {
    "sequence": 9,
    "id": "cambrian-explosion",
    "dateLabel": "541M BCE",
    "dateValue": -541000000,
    "dateUnit": "signed_timeline_coordinate",
    "displayCode": "541M",
    "era": "Paleozoic",
    "eraFilter": "Paleozoic",
    "classification": "Cambrian Period · Early animal diversification",
    "eyebrow": "541M BCE",
    "title": "The Cambrian Explosion",
    "subtitle": "Cambrian Period · Rapid diversification of animal body plans",
    "curatorQuote": "In the Cambrian seas, evolution filled the water with new forms and new ways to see.",
    "quoteAttribution": "Original curatorial copy; not a historical quotation.",
    "palette": [
      "#174b68",
      "#55a8b8",
      "#e7c88b"
    ],
    "fallbackType": "marine",
    "visualCue": "clear shallow sea, segmented trilobites, anomalocaridid silhouette, soft shale layers",
    "specBarMode": "historical",
    "telemetry": {
      "surfaceTemp": {
        "label": "SURFACE TEMP",
        "value": "Warm greenhouse world",
        "detail": "Global mean reconstructions vary; this is an era-level description, not a measured daily value.",
        "confidence": "model-dependent",
        "shortValue": "Warm Greenhouse Seas"
      },
      "atmosphereO2": {
        "label": "ATMOSPHERE O₂",
        "value": "Variable; rising over time",
        "detail": "Paleozoic oxygen changed substantially through the era.",
        "confidence": "reconstruction",
        "shortValue": "Rising Marine O₂"
      },
      "dayLength": {
        "label": "DAY LENGTH",
        "value": "~21 h (estimate)",
        "detail": "Tidal braking lengthened the day over geological time.",
        "confidence": "model-dependent",
        "shortValue": "~21 Hours (Est.)"
      },
      "dominantSystem": {
        "label": "DOMINANT SYSTEM / LIFE",
        "value": "Marine animal ecosystems",
        "detail": "Many major animal groups diversify in the fossil record.",
        "confidence": "high, qualitative",
        "shortValue": "Biomineralized Marine Animals"
      }
    },
    "story": {
      "overview": [
        "At the start of the Cambrian, roughly 541 million years ago, marine ecosystems show a striking diversification of animal forms and behaviors. Hard parts became more common in the fossil record, making shells, spines and defensive structures easier to preserve.",
        "Trilobites, anomalocaridids and many other animals occupied increasingly complex food webs. The phrase 'Cambrian explosion' describes an evolutionary radiation across geological time, not the sudden appearance of every animal group at once."
      ],
      "sectionTitle": "GEOLOGICAL & EVOLUTIONARY MILESTONES",
      "milestones": [
        "Animal body plans and ecological roles diversify through the early Cambrian.",
        "Predators such as anomalocaridids alter food-web dynamics.",
        "Trilobites and other mineralized organisms leave abundant fossil evidence."
      ],
      "curatorNote": "Use 'diversification' alongside 'explosion' so the title does not imply that evolution was instantaneous."
    },
    "subExhibits": [
      {
        "id": "anomalocaris",
        "label": "Apex Predator",
        "articleTitle": "Anomalocaris",
        "fallbackType": "anomalocaris",
        "caption": "A large anomalocaridid glides through a Cambrian sea with grasping frontal appendages.",
        "alt": "A large anomalocaridid glides through a Cambrian sea with grasping frontal appendages.",
        "microStory": "Anomalocaris and its relatives were among the most striking predators of Cambrian oceans. Their anatomy reveals an early experiment in active swimming and prey capture."
      },
      {
        "id": "trilobite",
        "label": "Fossil Armor",
        "articleTitle": "Calymene",
        "fallbackType": "trilobite",
        "caption": "An articulated trilobite fossil rests on a warm limestone slab.",
        "alt": "An articulated trilobite fossil rests on a warm limestone slab.",
        "microStory": "Trilobites were successful marine arthropods with segmented exoskeletons. Their fossils record extraordinary diversity, changing environments and repeated molts across hundreds of millions of years."
      },
      {
        "id": "burgess-shale",
        "label": "Burgess Shale",
        "articleTitle": "Burgess Shale",
        "fallbackType": "burgess",
        "caption": "A dark shale split reveals delicate outlines of soft-bodied Cambrian animals.",
        "alt": "A dark shale split reveals delicate outlines of soft-bodied Cambrian animals.",
        "microStory": "The Burgess Shale in Canada preserves rare soft-bodied fossils. Its exceptional preservation shows that Cambrian ecosystems were more varied than hard-part fossils alone would suggest."
      }
    ],
    "confidenceNote": "The Cambrian diversification spans millions of years, not a single instant. Earlier animal life and Ediacaran ecosystems preceded it; fossil preservation and geographic sampling shape the record.",
    "subExhibitLabels": [
      "Apex Predator",
      "Fossil Armor",
      "Burgess Shale"
    ],
    "subExhibitCount": 3,
    "timelineCoordinate": -541000000,
    "timelinePosition": 0.19047619047619047,
    "timelineLabel": "541M BCE",
    "approximateYearsBeforePresent": 541002026,
    "temporalMeaning": "Approximate years before present; BCE wording is a stylized museum display convention.",
    "sourceIds": [
      "ics-chart",
      "smithsonian-cambrian"
    ],
    "collectionType": "timeline",
    "isTimelineEvent": true,
    "rulerShort": "541M"
  },
  {
    "sequence": 10,
    "id": "plants-on-land",
    "dateLabel": "470M BCE",
    "dateValue": -470000000,
    "dateUnit": "signed_timeline_coordinate",
    "displayCode": "470M",
    "era": "Paleozoic",
    "eraFilter": "Paleozoic",
    "classification": "Ordovician–Silurian transition · Early land plants and terrestrial ecosystems",
    "eyebrow": "470M BCE",
    "title": "Green Frontiers: Plants Move onto Land",
    "subtitle": "Ordovician–Silurian transition · Early land plants and terrestrial ecosystems",
    "curatorQuote": "The continents became new habitats long before forests covered them.",
    "quoteAttribution": "Original curatorial copy; not a historical quotation.",
    "palette": [
      "#779565",
      "#c4a96d",
      "#34443c"
    ],
    "fallbackType": "early-plants",
    "visualCue": "small moss-like plants cling to damp rock beside a shallow Ordovician stream",
    "specBarMode": "historical",
    "telemetry": {
      "surfaceTemp": {
        "label": "SURFACE TEMP",
        "value": "Regional climates; changing CO₂",
        "detail": "Paleozoic climates varied greatly between regions and through time; this is a period-level summary, not a local reading.",
        "confidence": "period-level qualitative summary",
        "shortValue": "Warm Continental Shelves"
      },
      "atmosphereO2": {
        "label": "ATMOSPHERE O₂",
        "value": "Variable through the Paleozoic",
        "detail": "Atmospheric oxygen changed over long intervals; values should not be assigned to a species or local habitat.",
        "confidence": "qualitative / proxy-dependent where noted",
        "shortValue": "Paleozoic O₂ Shift"
      },
      "dayLength": {
        "label": "DAY LENGTH",
        "value": "Model-dependent deep-time estimate",
        "detail": "Rotation rates are reconstructed indirectly and should be shown as approximate where used.",
        "confidence": "approximate or model-dependent",
        "shortValue": "~21.5 Hours (Est.)"
      },
      "dominantSystem": {
        "label": "DOMINANT SYSTEM / LIFE",
        "value": "Plants, arthropods & vertebrate transitions",
        "detail": "The biosphere expanded from oceans into increasingly complex terrestrial ecosystems.",
        "confidence": "period-level summary",
        "shortValue": "Early Land Plants & Spores"
      }
    },
    "story": {
      "overview": [
        "Evidence from spores and fossils indicates that plant lineages began colonizing land well before tall forests. Early land plants were small and closely tied to moist environments, with adaptations that limited water loss and enabled reproduction outside open water.",
        "The move onto land was a long evolutionary process involving plants, fungi and later arthropods. It gradually altered weathering, soils, atmospheric chemistry and the habitats available to other organisms."
      ],
      "sectionTitle": "GEOLOGICAL & EVOLUTIONARY MILESTONES",
      "milestones": [
        "Early plants were small compared with later trees and forest-forming lineages.",
        "Fungi and microbial partnerships helped shape terrestrial ecosystems.",
        "Land vegetation later influenced soils, carbon cycling and continental weathering."
      ],
      "curatorNote": "The date marks an early phase of terrestrial plant evolution, not the appearance of modern grass, trees or dense forests."
    },
    "subExhibits": [
      {
        "id": "plants-on-land-early-plant-spores",
        "label": "Early Plant Spores",
        "articleTitle": "Cooksonia",
        "fallbackType": "land-plant-spores",
        "caption": "Microscopic spores float over a damp stone surface.",
        "alt": "Microscopic spores float over a damp stone surface.",
        "microStory": "Fossil spores extend evidence for plant-like life on land beyond the earliest well-preserved plant bodies."
      },
      {
        "id": "plants-on-land-moss-like-pioneers",
        "label": "Moss-Like Pioneers",
        "articleTitle": "Bryophyte",
        "fallbackType": "early-land-plants",
        "caption": "Low green plants hug wet rock beside an ancient stream.",
        "alt": "Low green plants hug wet rock beside an ancient stream.",
        "microStory": "Early land plants lacked the towering vascular architecture of later forests and remained closely associated with moisture."
      },
      {
        "id": "plants-on-land-fungal-partnerships",
        "label": "Fungal Partnerships",
        "articleTitle": "Arbuscular mycorrhiza",
        "fallbackType": "mycorrhiza",
        "caption": "Fine fungal filaments connect plant-like tissues with mineral-rich soil.",
        "alt": "Fine fungal filaments connect plant-like tissues with mineral-rich soil.",
        "microStory": "Partnerships between plants and fungi are important to terrestrial ecology and likely mattered during the early spread of life on land."
      }
    ],
    "confidenceNote": "Early land-plant evidence comes from spores and fossils; the exact timing of key innovations is refined as new material is studied.",
    "subExhibitLabels": [
      "Early Plant Spores",
      "Moss-Like Pioneers",
      "Fungal Partnerships"
    ],
    "subExhibitCount": 3,
    "timelineCoordinate": -470000000,
    "timelinePosition": 0.21428571428571427,
    "timelineLabel": "470M BCE",
    "approximateYearsBeforePresent": 470002026,
    "temporalMeaning": "Rounded chronological anchor; not a claim that every development in this exhibit began in this exact year.",
    "sourceIds": [
      "ics-chart",
      "smithsonian-cambrian"
    ],
    "collectionType": "timeline",
    "isTimelineEvent": true,
    "rulerShort": "470M"
  },
  {
    "sequence": 11,
    "id": "fins-to-limbs",
    "dateLabel": "375M BCE",
    "dateValue": -375000000,
    "dateUnit": "signed_timeline_coordinate",
    "displayCode": "375M",
    "era": "Paleozoic",
    "eraFilter": "Paleozoic",
    "classification": "Devonian Period · Transitional vertebrates and shallow-water habitats",
    "eyebrow": "375M BCE",
    "title": "From Fins to Limbs: Life Reaches the Shore",
    "subtitle": "Devonian Period · Transitional vertebrates and shallow-water habitats",
    "curatorQuote": "Evolution rarely jumps; it experiments across generations and changing habitats.",
    "quoteAttribution": "Original curatorial copy; not a historical quotation.",
    "palette": [
      "#517f80",
      "#b4a17b",
      "#283d45"
    ],
    "fallbackType": "tetrapod",
    "visualCue": "a lobe-finned vertebrate moves through a shallow floodplain channel among roots",
    "specBarMode": "historical",
    "telemetry": {
      "surfaceTemp": {
        "label": "SURFACE TEMP",
        "value": "Regional climates; changing CO₂",
        "detail": "Paleozoic climates varied greatly between regions and through time; this is a period-level summary, not a local reading.",
        "confidence": "period-level qualitative summary",
        "shortValue": "Humid Devonian Deltas"
      },
      "atmosphereO2": {
        "label": "ATMOSPHERE O₂",
        "value": "Variable through the Paleozoic",
        "detail": "Atmospheric oxygen changed over long intervals; values should not be assigned to a species or local habitat.",
        "confidence": "qualitative / proxy-dependent where noted",
        "shortValue": "Variable Paleozoic O₂"
      },
      "dayLength": {
        "label": "DAY LENGTH",
        "value": "Model-dependent deep-time estimate",
        "detail": "Rotation rates are reconstructed indirectly and should be shown as approximate where used.",
        "confidence": "approximate or model-dependent",
        "shortValue": "~22 Hours (Est.)"
      },
      "dominantSystem": {
        "label": "DOMINANT SYSTEM / LIFE",
        "value": "Plants, arthropods & vertebrate transitions",
        "detail": "The biosphere expanded from oceans into increasingly complex terrestrial ecosystems.",
        "confidence": "period-level summary",
        "shortValue": "Lobe-Finned Tetrapodomorphs"
      }
    },
    "story": {
      "overview": [
        "Devonian fossils document vertebrates with combinations of fish-like and tetrapod-like features. Forms such as Tiktaalik help illustrate how robust fins, mobile heads and other traits were assembled in shallow-water settings.",
        "The origin of limbs and terrestrial locomotion was not a single step taken by one creature. Multiple fossil lineages show a mosaic of traits, and the transition unfolded across diverse habitats over millions of years."
      ],
      "sectionTitle": "GEOLOGICAL & EVOLUTIONARY MILESTONES",
      "milestones": [
        "Lobe-finned fishes possessed internal skeletons that differ from most ray-finned fish fins.",
        "Transitional fossils preserve combinations of aquatic and tetrapod-like traits.",
        "Early tetrapods still relied heavily on water; land colonization was gradual."
      ],
      "curatorNote": "Do not depict a single named fossil as 'the first animal to walk on land'. Treat the transition as branching evolution across a sequence of forms."
    },
    "subExhibits": [
      {
        "id": "fins-to-limbs-tiktaalik",
        "label": "Tiktaalik",
        "articleTitle": "Tiktaalik",
        "fallbackType": "tiktaalik",
        "caption": "A flattened fish-like vertebrate rests in shallow water among sediment and plants.",
        "alt": "A flattened fish-like vertebrate rests in shallow water among sediment and plants.",
        "microStory": "Tiktaalik combines aquatic adaptations with features relevant to later tetrapod evolution, making it an important transitional fossil."
      },
      {
        "id": "fins-to-limbs-lobe-finned-fish",
        "label": "Lobe-Finned Fish",
        "articleTitle": "Coelacanth",
        "fallbackType": "lobe-finned-fish",
        "caption": "A lobe-finned fish shows fleshy paired fins supported by internal bones.",
        "alt": "A lobe-finned fish shows fleshy paired fins supported by internal bones.",
        "microStory": "Lobe-finned fishes provide the evolutionary context for the lineage that eventually gave rise to land vertebrates."
      },
      {
        "id": "fins-to-limbs-early-tetrapod-trackway",
        "label": "Early Tetrapod Trackway",
        "articleTitle": "Trace fossil",
        "fallbackType": "tetrapod-tracks",
        "caption": "Shallow-water tracks cross rippled sediment on an ancient shore.",
        "alt": "Shallow-water tracks cross rippled sediment on an ancient shore.",
        "microStory": "Trackways provide evidence of movement but rarely identify the exact species or full behavior that produced them."
      }
    ],
    "confidenceNote": "Transitional fossils and geological dates are well documented; reconstruction of behavior is inferential.",
    "subExhibitLabels": [
      "Tiktaalik",
      "Lobe-Finned Fish",
      "Early Tetrapod Trackway"
    ],
    "subExhibitCount": 3,
    "timelineCoordinate": -375000000,
    "timelinePosition": 0.23809523809523808,
    "timelineLabel": "375M BCE",
    "approximateYearsBeforePresent": 375002026,
    "temporalMeaning": "Rounded chronological anchor; not a claim that every development in this exhibit began in this exact year.",
    "sourceIds": [
      "ics-chart",
      "smithsonian-cambrian"
    ],
    "collectionType": "timeline",
    "isTimelineEvent": true,
    "rulerShort": "375M"
  },
  {
    "sequence": 12,
    "id": "carboniferous-forests",
    "dateLabel": "359M BCE",
    "dateValue": -359000000,
    "dateUnit": "signed_timeline_coordinate",
    "displayCode": "359M",
    "era": "Paleozoic",
    "eraFilter": "Paleozoic",
    "classification": "Carboniferous Period · Coal-forming wetlands",
    "eyebrow": "359M BCE",
    "title": "Carboniferous Giant Coal Forests",
    "subtitle": "Carboniferous Period · Wetland forests, coal and high oxygen",
    "curatorQuote": "The swamp forests of the Carboniferous locked ancient sunlight into stone.",
    "quoteAttribution": "Original curatorial copy; not a historical quotation.",
    "palette": [
      "#183f32",
      "#78965e",
      "#b7a76d"
    ],
    "fallbackType": "forest",
    "visualCue": "tree-sized lycopsids, humid swamp forests and coal-forming plant litter",
    "specBarMode": "historical",
    "telemetry": {
      "surfaceTemp": {
        "label": "SURFACE TEMP",
        "value": "Warm, humid greenhouse-to-icehouse shifts",
        "detail": "Climate differed by latitude and changed through the Carboniferous.",
        "confidence": "reconstruction",
        "shortValue": "Warm Swamp to Icehouse"
      },
      "atmosphereO2": {
        "label": "ATMOSPHERE O₂",
        "value": "Possibly above modern",
        "detail": "Some models infer elevated oxygen, but exact peaks and timing remain uncertain.",
        "confidence": "model-dependent",
        "shortValue": "Elevated Paleozoic O₂"
      },
      "dayLength": {
        "label": "DAY LENGTH",
        "value": "~22 h (estimate)",
        "detail": "Long-term rotation estimates are approximate.",
        "confidence": "model-dependent",
        "shortValue": "~22.3 Hours (Est.)"
      },
      "dominantSystem": {
        "label": "DOMINANT SYSTEM / LIFE",
        "value": "Coal-swamp forests & arthropods",
        "detail": "Vast plant biomass is buried in waterlogged environments.",
        "confidence": "high, qualitative",
        "shortValue": "Lycopsid Coal Forests & Insects"
      }
    },
    "story": {
      "overview": [
        "Vast tropical wetlands supported dense forests of tree-sized lycopsids, horsetails and ferns. Plant material accumulated in waterlogged sediments and, through burial and geological transformation, contributed to many coal deposits.",
        "Some insects and other arthropods reached sizes unusual by modern standards. High atmospheric oxygen is one proposed influence, interacting with physiology, climate and ecological opportunity rather than acting as a single simple cause."
      ],
      "sectionTitle": "GEOLOGICAL & EVOLUTIONARY MILESTONES",
      "milestones": [
        "Lepidodendron and other arborescent lycopsids dominate many swamp forests.",
        "Large insects and arthropods occupy humid terrestrial ecosystems.",
        "Buried plant matter contributes to coal seams that later become a major energy resource for humans."
      ],
      "curatorNote": "Coal-bearing strata record both ancient ecosystems and the carbon cycle. Connect this exhibit to modern fossil-fuel use without implying a direct one-to-one equivalence."
    },
    "subExhibits": [
      {
        "id": "meganeura",
        "label": "Giant Dragonfly Relative",
        "articleTitle": "Meganeura",
        "fallbackType": "meganeura",
        "caption": "A large griffinfly relative spreads veined wings above a fern-rich swamp.",
        "alt": "A large griffinfly relative spreads veined wings above a fern-rich swamp.",
        "microStory": "Meganeura was a Carboniferous griffinfly, not a modern dragonfly. Its large wingspan is often discussed alongside high Paleozoic oxygen estimates, though body size had several ecological constraints."
      },
      {
        "id": "lepidodendron",
        "label": "Scale Tree",
        "articleTitle": "Lepidodendron",
        "fallbackType": "lepidodendron",
        "caption": "A towering lycopsid trunk shows a repeating diamond pattern of leaf scars.",
        "alt": "A towering lycopsid trunk shows a repeating diamond pattern of leaf scars.",
        "microStory": "Lepidodendron and related arborescent lycopsids formed major components of tropical coal-swamp forests. Their trunks and spores left a distinctive fossil record."
      },
      {
        "id": "carboniferous",
        "label": "Coal Forest",
        "articleTitle": "Coal forest",
        "fallbackType": "coal-forest",
        "caption": "A dense, humid forest of clubmoss trees, ferns and still water.",
        "alt": "A dense, humid forest of clubmoss trees, ferns and still water.",
        "microStory": "Carboniferous forests captured solar energy in plant tissue. Under the right sedimentary conditions, buried biomass became coal over immense spans of time."
      }
    ],
    "confidenceNote": "The Carboniferous spans roughly 359–299 million years ago. Insect size was affected by several factors, including atmospheric oxygen and ecology; oxygen alone should not be presented as a complete explanation.",
    "subExhibitLabels": [
      "Giant Dragonfly Relative",
      "Scale Tree",
      "Coal Forest"
    ],
    "subExhibitCount": 3,
    "timelineCoordinate": -359000000,
    "timelinePosition": 0.2619047619047619,
    "timelineLabel": "359M BCE",
    "approximateYearsBeforePresent": 359002026,
    "temporalMeaning": "Approximate years before present; BCE wording is a stylized museum display convention.",
    "sourceIds": [
      "ics-chart",
      "smithsonian-cambrian"
    ],
    "collectionType": "timeline",
    "isTimelineEvent": true,
    "rulerShort": "359M"
  },
  {
    "sequence": 13,
    "id": "great-dying",
    "dateLabel": "252M BCE",
    "dateValue": -252000000,
    "dateUnit": "signed_timeline_coordinate",
    "displayCode": "252M",
    "era": "Paleozoic",
    "eraFilter": "Paleozoic",
    "classification": "Permian–Triassic boundary · Siberian Traps & biosphere crisis",
    "eyebrow": "252M BCE",
    "title": "Pangaea & The Great Dying",
    "subtitle": "Permian–Triassic boundary · The largest known mass extinction",
    "curatorQuote": "A connected supercontinent became the stage for Earth's most severe known extinction.",
    "quoteAttribution": "Original curatorial copy; not a historical quotation.",
    "palette": [
      "#5d392e",
      "#d36e46",
      "#e0b783"
    ],
    "fallbackType": "volcanic",
    "visualCue": "Pangaea map, flood-basalt cliffs, ash-filled sky, resilient herbivore silhouette",
    "specBarMode": "historical",
    "telemetry": {
      "surfaceTemp": {
        "label": "SURFACE TEMP",
        "value": "Rapid warming during crisis",
        "detail": "Climate and ocean temperatures changed sharply; exact local values varied.",
        "confidence": "high, qualitative",
        "shortValue": "Rapid Volcanic Warming"
      },
      "atmosphereO2": {
        "label": "ATMOSPHERE O₂",
        "value": "Changed during crisis",
        "detail": "Ocean anoxia and atmospheric composition shifts are inferred from proxies.",
        "confidence": "reconstruction",
        "shortValue": "Marine Anoxia Stress"
      },
      "dayLength": {
        "label": "DAY LENGTH",
        "value": "~23 h (estimate)",
        "detail": "Deep-time rotation estimates are approximate.",
        "confidence": "model-dependent",
        "shortValue": "~22.8 Hours (Est.)"
      },
      "dominantSystem": {
        "label": "DOMINANT SYSTEM / LIFE",
        "value": "Permian ecosystems under stress",
        "detail": "Mass extinction associated with major volcanism and cascading climate/ocean effects.",
        "confidence": "high, qualitative",
        "shortValue": "Siberian Traps & Survivors"
      }
    },
    "story": {
      "overview": [
        "Pangaea brought much of Earth's land into one supercontinent, creating vast continental interiors and coastlines with sharply differing climates. Near the Permian–Triassic boundary, immense volcanism associated with the Siberian Traps coincided with the most severe known mass extinction.",
        "Rapid carbon release and cascading environmental changes stressed marine and terrestrial ecosystems. Recovery took millions of years; lineages that survived became part of the foundations of later Mesozoic ecosystems."
      ],
      "sectionTitle": "GEOLOGICAL & EVOLUTIONARY MILESTONES",
      "milestones": [
        "Pangaea changes ocean circulation and creates vast continental interiors.",
        "Siberian Traps volcanism releases enormous volumes of lava and greenhouse gases.",
        "Marine and terrestrial ecosystems collapse; recovery and diversification take millions of years."
      ],
      "curatorNote": "Don't reduce the extinction to a single blast or to volcanism alone: emphasize duration, carbon-cycle disruption and interconnected Earth systems."
    },
    "subExhibits": [
      {
        "id": "pangaea",
        "label": "Pangaea",
        "articleTitle": "Pangaea",
        "fallbackType": "pangaea",
        "caption": "A reconstructed supercontinent sits beneath a rust-colored Permian sky.",
        "alt": "A reconstructed supercontinent sits beneath a rust-colored Permian sky.",
        "microStory": "Pangaea brought most landmasses together into one supercontinent. Its immense interior regions and surrounding ocean influenced climate, habitats and the movement of species."
      },
      {
        "id": "siberian-traps",
        "label": "Siberian Traps",
        "articleTitle": "Putorana Plateau",
        "fallbackType": "flood-basalt",
        "caption": "Vast stacked basalt flows stretch across a volcanic plateau.",
        "alt": "Vast stacked basalt flows stretch across a volcanic plateau.",
        "microStory": "The Siberian Traps are a large igneous province formed by massive eruptions around the end of the Permian. Their gases and intrusions are strongly implicated in the environmental crisis."
      },
      {
        "id": "lystrosaurus",
        "label": "Survivor Lineage",
        "articleTitle": "Lystrosaurus",
        "fallbackType": "lystrosaurus",
        "caption": "A stocky, beaked herbivore moves across a sparse post-extinction landscape.",
        "alt": "A stocky, beaked herbivore moves across a sparse post-extinction landscape.",
        "microStory": "Lystrosaurus was a dicynodont synapsid that became common in many early Triassic ecosystems. Its success illustrates how a few lineages expanded in the aftermath of the extinction."
      }
    ],
    "confidenceNote": "The end-Permian mass extinction occurred about 252 million years ago. Siberian Traps volcanism is strongly implicated; the pathways linking eruptions to warming, ocean deoxygenation, acidification and extinction remain subjects of research.",
    "subExhibitLabels": [
      "Pangaea",
      "Siberian Traps",
      "Survivor Lineage"
    ],
    "subExhibitCount": 3,
    "timelineCoordinate": -252000000,
    "timelinePosition": 0.2857142857142857,
    "timelineLabel": "252M BCE",
    "approximateYearsBeforePresent": 252002026,
    "temporalMeaning": "Approximate years before present; BCE wording is a stylized museum display convention.",
    "sourceIds": [
      "usgs-permian",
      "ics-chart"
    ],
    "collectionType": "timeline",
    "isTimelineEvent": true,
    "rulerShort": "252M"
  },
  {
    "sequence": 14,
    "id": "triassic-dawn",
    "dateLabel": "230M BCE",
    "dateValue": -230000000,
    "dateUnit": "signed_timeline_coordinate",
    "displayCode": "230M",
    "era": "Mesozoic",
    "eraFilter": "Mesozoic",
    "classification": "Triassic Period · Recovery after the Great Dying",
    "eyebrow": "230M BCE",
    "title": "Triassic Dawn: Dinosaurs & the First Mammals",
    "subtitle": "Triassic Period · Recovery after the Great Dying",
    "curatorQuote": "After collapse, evolution fills the openings left behind.",
    "quoteAttribution": "Original curatorial copy; not a historical quotation.",
    "palette": [
      "#b6784a",
      "#d4bb89",
      "#4b4236"
    ],
    "fallbackType": "triassic",
    "visualCue": "small early dinosaurs and mammaliaforms move through a dry Triassic landscape",
    "specBarMode": "historical",
    "telemetry": {
      "surfaceTemp": {
        "label": "SURFACE TEMP",
        "value": "Generally warm; regional variation",
        "detail": "Much of the Mesozoic was warm relative to recent ice-age conditions, with important regional and temporal differences.",
        "confidence": "period-level qualitative summary",
        "shortValue": "Warm Seasonally Dry"
      },
      "atmosphereO2": {
        "label": "ATMOSPHERE O₂",
        "value": "Varied through time",
        "detail": "Atmospheric oxygen was not constant; exact estimates depend on proxies and models.",
        "confidence": "qualitative / proxy-dependent where noted",
        "shortValue": "Recovering Mesozoic O₂"
      },
      "dayLength": {
        "label": "DAY LENGTH",
        "value": "Approx. 23 h; uncertain",
        "detail": "A broad paleorotation estimate only; exact day length at this date is not directly observed.",
        "confidence": "approximate or model-dependent",
        "shortValue": "~23 Hours (Est.)"
      },
      "dominantSystem": {
        "label": "DOMINANT SYSTEM / LIFE",
        "value": "Mesozoic ecosystems",
        "detail": "Dinosaurs, marine reptiles, insects, conifers and later flowering plants occupied changing Mesozoic ecosystems.",
        "confidence": "period-level summary",
        "shortValue": "Early Dinosaurs & Mammaliaforms"
      }
    },
    "story": {
      "overview": [
        "Life diversified after the end-Permian extinction, but recovery was prolonged. During the Triassic, dinosaurs arose among archosaurs, while early mammaliaforms evolved within a separate branch of the amniote family tree.",
        "The early Mesozoic was not yet the familiar world of giant Jurassic sauropods. Many dinosaurs were relatively small, ecosystems changed dramatically, and the ancestors of later dominant groups lived alongside many other reptiles."
      ],
      "sectionTitle": "GEOLOGICAL & EVOLUTIONARY MILESTONES",
      "milestones": [
        "Archosaurs diversified after the end-Permian crisis.",
        "The earliest dinosaurs appear in the Triassic fossil record.",
        "Mammaliaforms emerged as small-bodied animals with their own evolutionary trajectory."
      ],
      "curatorNote": "The oldest widely accepted evidence for mammals and mammaliaforms depends on definitions and fossils; avoid implying that modern mammals and dinosaurs appeared as fully formed groups overnight."
    },
    "subExhibits": [
      {
        "id": "triassic-dawn-early-dinosaurs",
        "label": "Early Dinosaurs",
        "articleTitle": "Herrerasaurus",
        "fallbackType": "early-dinosaur",
        "caption": "A small bipedal dinosaur crosses a seasonally dry Triassic floodplain.",
        "alt": "A small bipedal dinosaur crosses a seasonally dry Triassic floodplain.",
        "microStory": "Early dinosaurs were one part of a diverse ecosystem and did not immediately dominate all terrestrial habitats."
      },
      {
        "id": "triassic-dawn-first-mammaliaforms",
        "label": "First Mammaliaforms",
        "articleTitle": "Morganucodon",
        "fallbackType": "mammaliaform",
        "caption": "A small nocturnal mammaliaform shelters beneath roots and stones.",
        "alt": "A small nocturnal mammaliaform shelters beneath roots and stones.",
        "microStory": "Early mammaliaforms were generally small and lived alongside many reptile lineages; they were not miniature versions of modern placental mammals."
      },
      {
        "id": "triassic-dawn-post-extinction-recovery",
        "label": "Post-Extinction Recovery",
        "articleTitle": "Petrified Forest National Park",
        "fallbackType": "triassic-recovery",
        "caption": "A recovering landscape hosts mixed reptile, plant and freshwater communities.",
        "alt": "A recovering landscape hosts mixed reptile, plant and freshwater communities.",
        "microStory": "Recovery from the Great Dying took millions of years and opened ecological opportunities that later lineages would occupy."
      }
    ],
    "confidenceNote": "The Triassic Period spans about 252–201 million years ago; the node's 230M date is a rounded midpoint-style anchor.",
    "subExhibitLabels": [
      "Early Dinosaurs",
      "First Mammaliaforms",
      "Post-Extinction Recovery"
    ],
    "subExhibitCount": 3,
    "timelineCoordinate": -230000000,
    "timelinePosition": 0.30952380952380953,
    "timelineLabel": "230M BCE",
    "approximateYearsBeforePresent": 230002026,
    "temporalMeaning": "Rounded chronological anchor; not a claim that every development in this exhibit began in this exact year.",
    "sourceIds": [
      "ics-chart",
      "smithsonian-cambrian"
    ],
    "collectionType": "timeline",
    "isTimelineEvent": true,
    "rulerShort": "230M"
  },
  {
    "sequence": 15,
    "id": "jurassic-titans",
    "dateLabel": "150M BCE",
    "dateValue": -150000000,
    "dateUnit": "signed_timeline_coordinate",
    "displayCode": "150M",
    "era": "Mesozoic",
    "eraFilter": "Mesozoic",
    "classification": "Jurassic Period · Dinosaur ecosystems",
    "eyebrow": "150M BCE",
    "title": "Age of Titans: Jurassic Peak",
    "subtitle": "Late Jurassic · Giant sauropods, predators and feathered dinosaurs",
    "curatorQuote": "In warm Jurassic landscapes, size reached astonishing extremes—and feathers took flight.",
    "quoteAttribution": "Original curatorial copy; not a historical quotation.",
    "palette": [
      "#39533a",
      "#9da66c",
      "#d9bd86"
    ],
    "fallbackType": "jurassic",
    "visualCue": "sauropods, Allosaurus, conifers and a feathered theropod on a Jurassic floodplain",
    "specBarMode": "historical",
    "telemetry": {
      "surfaceTemp": {
        "label": "SURFACE TEMP",
        "value": "Generally warmer than today",
        "detail": "Jurassic climate was not uniform; regional conditions varied.",
        "confidence": "reconstruction",
        "shortValue": "Warm Greenhouse World"
      },
      "atmosphereO2": {
        "label": "ATMOSPHERE O₂",
        "value": "Near modern order; uncertain",
        "detail": "Mesozoic oxygen estimates vary with proxy and model.",
        "confidence": "model-dependent",
        "shortValue": "Near Modern Order"
      },
      "dayLength": {
        "label": "DAY LENGTH",
        "value": "~23.5 h (estimate)",
        "detail": "A rounded estimate; not a direct measurement.",
        "confidence": "model-dependent",
        "shortValue": "~23.5 Hours (Est.)"
      },
      "dominantSystem": {
        "label": "DOMINANT SYSTEM / LIFE",
        "value": "Dinosaurs, conifers & marine reptiles",
        "detail": "Large terrestrial vertebrates dominate many land ecosystems.",
        "confidence": "high, qualitative",
        "shortValue": "Sauropods, Theropods & Birds"
      }
    },
    "story": {
      "overview": [
        "Warm Jurassic landscapes supported conifer-dominated forests, cycads, ferns and rich dinosaur communities. Long-necked sauropods occupied herbivore niches while large theropods such as Allosaurus acted as predators.",
        "Archaeopteryx preserves a mosaic of dinosaur and bird-like features, illustrating that the evolution of flight and birds emerged through branching evolutionary history rather than a straight ladder."
      ],
      "sectionTitle": "GEOLOGICAL & EVOLUTIONARY MILESTONES",
      "milestones": [
        "Sauropods such as Brachiosaurus browse high vegetation with columnar limbs and long necks.",
        "Theropods such as Allosaurus occupy major predator roles.",
        "Feathered theropods and early birds illuminate the evolutionary transition toward powered flight."
      ],
      "curatorNote": "Species did not all coexist at the same time or in the same place. Use a period-level scene, and label individual fossils by their own geological formation when possible."
    },
    "subExhibits": [
      {
        "id": "brachiosaurus",
        "label": "High Browsers",
        "articleTitle": "Brachiosaurus",
        "fallbackType": "brachiosaurus",
        "caption": "A towering sauropod rises above a Jurassic conifer canopy.",
        "alt": "A towering sauropod rises above a Jurassic conifer canopy.",
        "microStory": "Brachiosaurus was a large sauropod with forelimbs longer than its hindlimbs, giving its body a distinctive upward slope. Its anatomy supported browsing high above the ground."
      },
      {
        "id": "archaeopteryx",
        "label": "Feathers in Transition",
        "articleTitle": "Archaeopteryx",
        "fallbackType": "archaeopteryx",
        "caption": "A feathered Archaeopteryx perches on a branch above a fern-rich forest.",
        "alt": "A feathered Archaeopteryx perches on a branch above a fern-rich forest.",
        "microStory": "Archaeopteryx preserves a mix of avian and non-avian dinosaur characteristics. It is a key fossil for understanding early bird evolution, though it is not necessarily the direct ancestor of modern birds."
      },
      {
        "id": "allosaurus",
        "label": "Predator of the Floodplain",
        "articleTitle": "Allosaurus",
        "fallbackType": "allosaurus",
        "caption": "A powerful theropod steps through Jurassic cycads and conifers.",
        "alt": "A powerful theropod steps through Jurassic cycads and conifers.",
        "microStory": "Allosaurus was a large Jurassic theropod and one of the best-known predators of western North America. Fossil sites preserve evidence of complex food webs and repeated predator–prey interactions."
      }
    ],
    "confidenceNote": "The Jurassic Period spans approximately 201–145 million years ago. Brachiosaurus and Allosaurus are associated with the Late Jurassic; Archaeopteryx is known from Late Jurassic deposits. The displayed 150M date is a rounded anchor.",
    "subExhibitLabels": [
      "High Browsers",
      "Feathers in Transition",
      "Predator of the Floodplain"
    ],
    "subExhibitCount": 3,
    "timelineCoordinate": -150000000,
    "timelinePosition": 0.3333333333333333,
    "timelineLabel": "150M BCE",
    "approximateYearsBeforePresent": 150002026,
    "temporalMeaning": "Approximate years before present; BCE wording is a stylized museum display convention.",
    "sourceIds": [
      "ics-chart",
      "smithsonian-cambrian"
    ],
    "collectionType": "timeline",
    "isTimelineEvent": true,
    "rulerShort": "150M"
  },
  {
    "sequence": 16,
    "id": "flowering-plant-revolution",
    "dateLabel": "130M BCE",
    "dateValue": -130000000,
    "dateUnit": "signed_timeline_coordinate",
    "displayCode": "130M",
    "era": "Mesozoic",
    "eraFilter": "Mesozoic",
    "classification": "Early Cretaceous · Angiosperms diversify among ancient ecosystems",
    "eyebrow": "130M BCE",
    "title": "The Flowering Plant Revolution",
    "subtitle": "Early Cretaceous · Angiosperms diversify among ancient ecosystems",
    "curatorQuote": "A new relationship between flowers, seeds and pollinators remade many landscapes.",
    "quoteAttribution": "Original curatorial copy; not a historical quotation.",
    "palette": [
      "#788f61",
      "#dbc18c",
      "#3f4a3c"
    ],
    "fallbackType": "angiosperm",
    "visualCue": "early flowers open among conifers, cycads and fern-rich Cretaceous undergrowth",
    "specBarMode": "historical",
    "telemetry": {
      "surfaceTemp": {
        "label": "SURFACE TEMP",
        "value": "Generally warm; regional variation",
        "detail": "Much of the Mesozoic was warm relative to recent ice-age conditions, with important regional and temporal differences.",
        "confidence": "period-level qualitative summary",
        "shortValue": "Warm Cretaceous"
      },
      "atmosphereO2": {
        "label": "ATMOSPHERE O₂",
        "value": "Varied through time",
        "detail": "Atmospheric oxygen was not constant; exact estimates depend on proxies and models.",
        "confidence": "qualitative / proxy-dependent where noted",
        "shortValue": "Near Modern Order"
      },
      "dayLength": {
        "label": "DAY LENGTH",
        "value": "Approx. 23 h; uncertain",
        "detail": "A broad paleorotation estimate only; exact day length at this date is not directly observed.",
        "confidence": "approximate or model-dependent",
        "shortValue": "~23.5 Hours (Est.)"
      },
      "dominantSystem": {
        "label": "DOMINANT SYSTEM / LIFE",
        "value": "Plants, arthropods & vertebrate transitions",
        "detail": "Dinosaurs, marine reptiles, insects, conifers and later flowering plants occupied changing Mesozoic ecosystems.",
        "confidence": "period-level summary",
        "shortValue": "Angiosperms & Pollinators"
      }
    },
    "story": {
      "overview": [
        "Flowering plants, or angiosperms, appear in the Cretaceous fossil record and later diversified into an extraordinary range of forms. Their flowers and enclosed seeds evolved within ecosystems that already included conifers, cycads, ferns and many insects.",
        "The rise of flowering plants was not a single event in which older plants disappeared. It was a long radiation involving changing plant communities and ecological relationships, including many forms of pollination and seed dispersal."
      ],
      "sectionTitle": "GEOLOGICAL & EVOLUTIONARY MILESTONES",
      "milestones": [
        "Early angiosperm fossils appear in the Cretaceous.",
        "Flowers and enclosed seeds distinguish angiosperms from many other seed plants.",
        "Over time, angiosperms became dominant in many terrestrial ecosystems."
      ],
      "curatorNote": "Depict a mixed Cretaceous flora rather than a modern meadow; most familiar grasses and modern flowering communities evolved later."
    },
    "subExhibits": [
      {
        "id": "flowering-plant-revolution-early-angiosperms",
        "label": "Early Angiosperms",
        "articleTitle": "Flowering plant",
        "fallbackType": "early-angiosperm",
        "caption": "Small early flowers emerge among ferns and conifer-like foliage.",
        "alt": "Small early flowers emerge among ferns and conifer-like foliage.",
        "microStory": "The earliest angiosperm record includes fossils unlike most conspicuous modern flowers; modern diversity accumulated later."
      },
      {
        "id": "flowering-plant-revolution-pollen-archive",
        "label": "Pollen Archive",
        "articleTitle": "Pollen",
        "fallbackType": "fossil-pollen",
        "caption": "Pollen grains are magnified like minute botanical specimens.",
        "alt": "Pollen grains are magnified like minute botanical specimens.",
        "microStory": "Fossil pollen helps reconstruct the appearance and spread of plant groups across changing environments."
      },
      {
        "id": "flowering-plant-revolution-pollination-networks",
        "label": "Pollination Networks",
        "articleTitle": "Pollinator",
        "fallbackType": "pollination",
        "caption": "An insect visits a small flower among Cretaceous leaves.",
        "alt": "An insect visits a small flower among Cretaceous leaves.",
        "microStory": "Plant-insect relationships diversified through time; not every early flower depended on the same pollination strategy as modern species."
      }
    ],
    "confidenceNote": "The Cretaceous timing and subsequent diversification are well supported; individual early fossil assignments are refined over time.",
    "subExhibitLabels": [
      "Early Angiosperms",
      "Pollen Archive",
      "Pollination Networks"
    ],
    "subExhibitCount": 3,
    "timelineCoordinate": -130000000,
    "timelinePosition": 0.35714285714285715,
    "timelineLabel": "130M BCE",
    "approximateYearsBeforePresent": 130002026,
    "temporalMeaning": "Rounded chronological anchor; not a claim that every development in this exhibit began in this exact year.",
    "sourceIds": [
      "ics-chart",
      "smithsonian-cambrian"
    ],
    "collectionType": "timeline",
    "isTimelineEvent": true,
    "rulerShort": "130M"
  },
  {
    "sequence": 17,
    "id": "chicxulub-impact",
    "dateLabel": "66M BCE",
    "dateValue": -66000000,
    "dateUnit": "signed_timeline_coordinate",
    "displayCode": "66M",
    "era": "Mesozoic",
    "eraFilter": "Mesozoic",
    "classification": "Cretaceous–Paleogene boundary · Chicxulub impact",
    "eyebrow": "66M BCE",
    "title": "Chicxulub Impact & End of Non-Avian Dinosaurs",
    "subtitle": "Cretaceous–Paleogene boundary · Impact winter and ecosystem collapse",
    "curatorQuote": "A geologically brief impact winter closed the age of non-avian dinosaurs and opened new ecological possibilities.",
    "quoteAttribution": "Original curatorial copy; not a historical quotation.",
    "palette": [
      "#453a3b",
      "#e0804e",
      "#d7b28b"
    ],
    "fallbackType": "impact",
    "visualCue": "fireball over a shallow sea, ejecta curtain, soot-dark sky, crater-ring relief",
    "specBarMode": "historical",
    "telemetry": {
      "surfaceTemp": {
        "label": "SURFACE TEMP",
        "value": "Abrupt cooling, then warming",
        "detail": "The impact caused severe short-term darkness and cooling; later climate effects were complex.",
        "confidence": "high, qualitative",
        "shortValue": "Impact Winter → Recovery"
      },
      "atmosphereO2": {
        "label": "ATMOSPHERE O₂",
        "value": "No simple global collapse",
        "detail": "The key immediate issue was sunlight-blocking dust/aerosols and ecosystem collapse, not a single O₂ percentage.",
        "confidence": "high, qualitative",
        "shortValue": "Dust & Aerosol Veil"
      },
      "dayLength": {
        "label": "DAY LENGTH",
        "value": "~23.5 h (estimate)",
        "detail": "Rounded deep-time estimate.",
        "confidence": "model-dependent",
        "shortValue": "~23.5 Hours (Est.)"
      },
      "dominantSystem": {
        "label": "DOMINANT SYSTEM / LIFE",
        "value": "Impact-disturbed ecosystems",
        "detail": "Non-avian dinosaurs and many other groups vanish at the K–Pg boundary.",
        "confidence": "high, qualitative",
        "shortValue": "K–Pg Extinction & Avian Survival"
      }
    },
    "story": {
      "overview": [
        "A large asteroid struck near what is now the Yucatán Peninsula, excavating the Chicxulub structure. Dust, sulfate aerosols and soot helped reduce sunlight, disrupting photosynthesis and food webs on a global scale.",
        "The extinction eliminated non-avian dinosaurs and many marine and terrestrial lineages, while birds, mammals and other groups survived. Ecosystems then reorganized over millions of years."
      ],
      "sectionTitle": "GEOLOGICAL & EVOLUTIONARY MILESTONES",
      "milestones": [
        "The impact excavates Chicxulub and triggers global-scale environmental effects.",
        "Photosynthesis and food webs suffer as light levels fall and climate shifts.",
        "Non-avian dinosaurs disappear; surviving lineages diversify during recovery."
      ],
      "curatorNote": "The impact is supported by converging evidence: the crater, shocked minerals, a global boundary layer rich in impact markers and the extinction pattern. Do not depict birds as extinct."
    },
    "subExhibits": [
      {
        "id": "tyrannosaurus",
        "label": "Non-avian Dinosaur",
        "articleTitle": "Tyrannosaurus",
        "fallbackType": "tyrannosaurus",
        "caption": "A large Late Cretaceous theropod reconstructed from fossil evidence.",
        "alt": "A large Late Cretaceous theropod reconstructed from fossil evidence.",
        "microStory": "Tyrannosaurus lived near the end of the Cretaceous, but the impact's victims included many lineages beyond this famous genus."
      },
      {
        "id": "chicxulub-crater",
        "label": "Impact Scar",
        "articleTitle": "Cretaceous–Paleogene boundary",
        "fallbackType": "impact-crater",
        "caption": "A conceptual cutaway of the buried Chicxulub impact structure beneath the Yucatán region.",
        "alt": "A conceptual cutaway of the buried Chicxulub impact structure beneath the Yucatán region.",
        "microStory": "The crater is one line of evidence linking a major impact to the end-Cretaceous mass extinction."
      },
      {
        "id": "triceratops",
        "label": "Cretaceous Herbivore",
        "articleTitle": "Triceratops",
        "fallbackType": "triceratops",
        "caption": "A horned ceratopsian dinosaur in a Late Cretaceous setting.",
        "alt": "A horned ceratopsian dinosaur in a Late Cretaceous setting.",
        "microStory": "Triceratops was a non-avian dinosaur that disappeared at the boundary; its fossil record helps anchor the extinction narrative."
      }
    ],
    "confidenceNote": "The impact occurred about 66 million years ago and is a principal cause of the Cretaceous–Paleogene extinction. Birds are surviving avian dinosaurs; wording should say 'non-avian dinosaurs' rather than implying all dinosaurs disappeared.",
    "subExhibitLabels": [
      "Non-avian Dinosaur",
      "Impact Scar",
      "Cretaceous Herbivore"
    ],
    "subExhibitCount": 3,
    "timelineCoordinate": -66000000,
    "timelinePosition": 0.38095238095238093,
    "timelineLabel": "66M BCE",
    "approximateYearsBeforePresent": 66002026,
    "temporalMeaning": "Approximate years before present; BCE wording is a stylized museum display convention.",
    "sourceIds": [
      "ics-chart",
      "smithsonian-cambrian"
    ],
    "collectionType": "timeline",
    "isTimelineEvent": true,
    "rulerShort": "66M"
  },
  {
    "sequence": 18,
    "id": "petm-greenhouse",
    "dateLabel": "56M BCE",
    "dateValue": -56000000,
    "dateUnit": "signed_timeline_coordinate",
    "displayCode": "56M",
    "era": "Cenozoic",
    "eraFilter": "Cenozoic",
    "classification": "Early Eocene · Rapid carbon release and global warming",
    "eyebrow": "56M BCE",
    "title": "A Greenhouse Surge: The Paleocene–Eocene Thermal Maximum",
    "subtitle": "Early Eocene · Rapid carbon release and global warming",
    "curatorQuote": "The geological record keeps evidence of climate shifts faster than many ecosystems can comfortably follow.",
    "quoteAttribution": "Original curatorial copy; not a historical quotation.",
    "palette": [
      "#c28b60",
      "#e0c497",
      "#5e6553"
    ],
    "fallbackType": "petm",
    "visualCue": "warm subtropical forest, humid sky and a stylized carbon-cycle layer",
    "specBarMode": "historical",
    "telemetry": {
      "surfaceTemp": {
        "label": "SURFACE TEMP",
        "value": "Long-term cooling with warm intervals",
        "detail": "Cenozoic climate trends include greenhouse intervals, cooling and major regional change.",
        "confidence": "period-level qualitative summary",
        "shortValue": "PETM Thermal Surge"
      },
      "atmosphereO2": {
        "label": "ATMOSPHERE O₂",
        "value": "Near broadly modern range",
        "detail": "Atmospheric oxygen was broadly comparable to modern levels; climate and ecosystems varied substantially.",
        "confidence": "qualitative / proxy-dependent where noted",
        "shortValue": "Broadly Modern (~21%)"
      },
      "dayLength": {
        "label": "DAY LENGTH",
        "value": "Near 24 h; approximate",
        "detail": "Earth's day length changes slowly and irregularly; the value is rounded.",
        "confidence": "approximate or model-dependent",
        "shortValue": "~23.8 Hours (Est.)"
      },
      "dominantSystem": {
        "label": "DOMINANT SYSTEM / LIFE",
        "value": "Mammals, birds & changing climates",
        "detail": "Mammal and bird lineages diversified as continental positions, vegetation and climate changed.",
        "confidence": "period-level summary",
        "shortValue": "Mammal & Bird Diversification"
      }
    },
    "story": {
      "overview": [
        "Around 56 million years ago, a major release of carbon into the ocean–atmosphere system drove rapid global warming during the Paleocene–Eocene Thermal Maximum. Ocean chemistry changed and many organisms shifted their ranges.",
        "The precise carbon source and sequence remain subjects of research, but the event is a key natural case study for carbon-cycle feedbacks. Its rate and circumstances differ from modern human-driven warming, even while the geological record helps scientists understand climate sensitivity."
      ],
      "sectionTitle": "GEOLOGICAL & EVOLUTIONARY MILESTONES",
      "milestones": [
        "Global temperatures rose substantially over a geologically brief interval.",
        "Ocean acidification and changes in marine ecosystems accompanied carbon release.",
        "The event provides a deep-time comparison, not a perfect analogue for today's emissions."
      ],
      "curatorNote": "Avoid claiming that the PETM and modern climate change are identical. Explain differences in carbon sources, rate, background conditions and evidence quality."
    },
    "subExhibits": [
      {
        "id": "petm-greenhouse-carbon-pulse",
        "label": "Carbon Pulse",
        "articleTitle": "Messel pit",
        "fallbackType": "petm-carbon-pulse",
        "caption": "A warm ocean and atmospheric bands visualize a rapid carbon-cycle perturbation.",
        "alt": "A warm ocean and atmospheric bands visualize a rapid carbon-cycle perturbation.",
        "microStory": "The PETM is recorded by changes in carbon isotopes and climate-sensitive fossils across many regions."
      },
      {
        "id": "petm-greenhouse-changing-ocean",
        "label": "Changing Ocean",
        "articleTitle": "Radiolaria",
        "fallbackType": "ancient-ocean-acidification",
        "caption": "Microscopic marine shells appear against a chemically altered ocean profile.",
        "alt": "Microscopic marine shells appear against a chemically altered ocean profile.",
        "microStory": "Carbon entering seawater changes carbonate chemistry and can affect organisms that build shells or skeletons."
      },
      {
        "id": "petm-greenhouse-mammal-turnover",
        "label": "Mammal Turnover",
        "articleTitle": "Eohippus",
        "fallbackType": "early-eocene-mammals",
        "caption": "Small early mammals move through warm forest vegetation.",
        "alt": "Small early mammals move through warm forest vegetation.",
        "microStory": "Mammal groups dispersed and changed through the early Cenozoic; the PETM is associated with important shifts in mammalian ecosystems."
      }
    ],
    "confidenceNote": "The event is well documented; estimates of carbon amount, source mix and precise rate vary among studies.",
    "subExhibitLabels": [
      "Carbon Pulse",
      "Changing Ocean",
      "Mammal Turnover"
    ],
    "subExhibitCount": 3,
    "timelineCoordinate": -56000000,
    "timelinePosition": 0.40476190476190477,
    "timelineLabel": "56M BCE",
    "approximateYearsBeforePresent": 56002026,
    "temporalMeaning": "Rounded chronological anchor; not a claim that every development in this exhibit began in this exact year.",
    "sourceIds": [
      "ics-chart",
      "nasa-earth-facts"
    ],
    "collectionType": "timeline",
    "isTimelineEvent": true,
    "rulerShort": "56M"
  },
  {
    "sequence": 19,
    "id": "hominin-branch",
    "dateLabel": "7M BCE",
    "dateValue": -7000000,
    "dateUnit": "signed_timeline_coordinate",
    "displayCode": "7M",
    "era": "Cenozoic",
    "eraFilter": "Cenozoic",
    "classification": "Late Miocene · Early hominins and the origins of bipedalism",
    "eyebrow": "7M BCE",
    "title": "The Hominin Branch: Walking Toward Us",
    "subtitle": "Late Miocene · Early hominins and the origins of bipedalism",
    "curatorQuote": "Our lineage began as a branch, not a destination.",
    "quoteAttribution": "Original curatorial copy; not a historical quotation.",
    "palette": [
      "#9c7958",
      "#c8b28d",
      "#38463a"
    ],
    "fallbackType": "hominin",
    "visualCue": "a mosaic forest–savanna edge with an early hominin moving between trees and open ground",
    "specBarMode": "historical",
    "telemetry": {
      "surfaceTemp": {
        "label": "SURFACE TEMP",
        "value": "Ice-age / regional climate variability",
        "detail": "Regional conditions changed across glacial cycles; there is no single global 'human temperature' for this date.",
        "confidence": "period-level qualitative summary",
        "shortValue": "Late Miocene Shifts"
      },
      "atmosphereO2": {
        "label": "ATMOSPHERE O₂",
        "value": "About 20.95% by volume",
        "detail": "Atmospheric oxygen was broadly modern.",
        "confidence": "qualitative / proxy-dependent where noted",
        "shortValue": "20.95% Modern Range"
      },
      "dayLength": {
        "label": "DAY LENGTH",
        "value": "About 24 h",
        "detail": "Rounded mean solar day; Earth's rotation varies slightly.",
        "confidence": "approximate or model-dependent",
        "shortValue": "~24 Hours"
      },
      "dominantSystem": {
        "label": "DOMINANT SYSTEM / LIFE",
        "value": "Human evolution, societies & culture",
        "detail": "Human evolution and cultural histories were branching, regional and overlapping.",
        "confidence": "period-level summary",
        "shortValue": "Early Bipedal Hominins"
      }
    },
    "story": {
      "overview": [
        "The human lineage diverged from that of chimpanzees millions of years ago, but the exact timing and earliest members remain subjects of research. Fossils such as Sahelanthropus and later early hominins provide clues to anatomy and locomotion.",
        "Bipedalism evolved in a mosaic of habitats and did not immediately replace climbing. Early hominins were not simply modern humans standing upright; they combined a range of traits suited to their environments."
      ],
      "sectionTitle": "HISTORICAL & CULTURAL MILESTONES",
      "milestones": [
        "The human and chimpanzee lineages share a common ancestor; neither living species descended from the other.",
        "Early hominin fossils are fragmentary and can be difficult to place on the family tree.",
        "Bipedal locomotion evolved over time and coexisted with climbing adaptations."
      ],
      "curatorNote": "Use 'early hominins' with a confidence qualifier. At this depth, family-tree placement of individual fossils is debated."
    },
    "subExhibits": [
      {
        "id": "hominin-branch-sahelanthropus",
        "label": "Sahelanthropus",
        "articleTitle": "Sahelanthropus",
        "fallbackType": "sahelanthropus",
        "caption": "A careful scientific reconstruction of an early hominin based on fragmentary fossil evidence.",
        "alt": "A careful scientific reconstruction of an early hominin based on fragmentary fossil evidence.",
        "microStory": "Sahelanthropus is among the fossils discussed in research on the earliest hominin lineage; its exact locomotor traits and placement remain debated."
      },
      {
        "id": "hominin-branch-bipedal-clues",
        "label": "Bipedal Clues",
        "articleTitle": "Australopithecus afarensis",
        "fallbackType": "bipedalism",
        "caption": "A comparative skeletal plate emphasizes pelvis, femur and skull-base anatomy.",
        "alt": "A comparative skeletal plate emphasizes pelvis, femur and skull-base anatomy.",
        "microStory": "Anatomical clues help researchers infer locomotion, but no single feature settles the whole evolutionary story."
      },
      {
        "id": "hominin-branch-mosaic-habitat",
        "label": "Mosaic Habitat",
        "articleTitle": "Savanna",
        "fallbackType": "late-miocene-habitat",
        "caption": "A woodland and open-ground ecotone under a seasonal sky.",
        "alt": "A woodland and open-ground ecotone under a seasonal sky.",
        "microStory": "Early hominins lived in varied environments; a simple march from forest into grassland is too reductive."
      }
    ],
    "confidenceNote": "The broad evolutionary framework is well supported; individual taxa, relationships and behaviors are debated.",
    "subExhibitLabels": [
      "Sahelanthropus",
      "Bipedal Clues",
      "Mosaic Habitat"
    ],
    "subExhibitCount": 3,
    "timelineCoordinate": -7000000,
    "timelinePosition": 0.42857142857142855,
    "timelineLabel": "7M BCE",
    "approximateYearsBeforePresent": 7002026,
    "temporalMeaning": "Rounded chronological anchor; not a claim that every development in this exhibit began in this exact year.",
    "sourceIds": [
      "smithsonian-humans"
    ],
    "collectionType": "timeline",
    "isTimelineEvent": true,
    "rulerShort": "7M"
  },
  {
    "sequence": 20,
    "id": "pleistocene-megafauna",
    "dateLabel": "2.58M BCE",
    "dateValue": -2580000,
    "dateUnit": "signed_timeline_coordinate",
    "displayCode": "2.58M",
    "era": "Cenozoic",
    "eraFilter": "Cenozoic",
    "classification": "Pleistocene Epoch · Glacial cycles & megafauna",
    "eyebrow": "c. 2,580,000 BCE",
    "title": "Pleistocene Ice Age & Megafauna",
    "subtitle": "Pleistocene Epoch · Repeated glacial and interglacial cycles",
    "curatorQuote": "The Ice Age was not one frozen moment, but a pulse of cold and thaw across a living world.",
    "quoteAttribution": "Original curatorial copy; not a historical quotation.",
    "palette": [
      "#6b7c7c",
      "#d6ded9",
      "#9b8067"
    ],
    "fallbackType": "ice",
    "visualCue": "glacier edge, woolly mammoth, saber-toothed cat, wind-shaped tundra",
    "specBarMode": "historical",
    "telemetry": {
      "surfaceTemp": {
        "label": "SURFACE TEMP",
        "value": "Global average several °C cooler at glacial peaks",
        "detail": "Exact anomaly depends on reconstruction and the specific glacial interval.",
        "confidence": "reconstruction",
        "shortValue": "Glacial–Interglacial Cycles"
      },
      "atmosphereO2": {
        "label": "ATMOSPHERE O₂",
        "value": "Close to modern (~21%)",
        "detail": "Broadly modern composition through the late Pleistocene.",
        "confidence": "high, approximate",
        "shortValue": "20.95% Modern Range"
      },
      "dayLength": {
        "label": "DAY LENGTH",
        "value": "~24 h",
        "detail": "Very close to modern day length; still slowly changing.",
        "confidence": "high, approximate",
        "shortValue": "24 Hours"
      },
      "dominantSystem": {
        "label": "DOMINANT SYSTEM / LIFE",
        "value": "Megafauna & Homo lineages",
        "detail": "Mammoths, large predators and multiple human species inhabit changing landscapes.",
        "confidence": "high, qualitative",
        "shortValue": "Steppe Megafauna & Homo"
      }
    },
    "story": {
      "overview": [
        "During the Pleistocene, repeated glacial and interglacial cycles reshaped coastlines, grasslands, forests and migration corridors. Large mammals such as mammoths and saber-toothed cats adapted to particular ecological settings, rather than belonging to one single universal 'Ice Age scene'.",
        "Human populations also evolved and dispersed during this interval. Megafaunal extinctions occurred at different times in different regions and often involved a mix of climate shifts and human pressures; no single explanation fits every species and continent."
      ],
      "sectionTitle": "GEOLOGICAL & EVOLUTIONARY MILESTONES",
      "milestones": [
        "Glacial cycles reshape coastlines, habitats and migration corridors.",
        "Mammoths and other megafauna adapt to cold and changing vegetation.",
        "Human populations create tools, art, fire-use traditions and long-distance cultural networks."
      ],
      "curatorNote": "Date the epoch boundary separately from later regional megafaunal extinctions, and avoid suggesting that every large mammal lived together."
    },
    "subExhibits": [
      {
        "id": "woolly-mammoth",
        "label": "Woolly Mammoth",
        "articleTitle": "Woolly mammoth",
        "fallbackType": "mammoth",
        "caption": "A woolly mammoth stands on a wind-scoured steppe under a pale glacial sky.",
        "alt": "A woolly mammoth stands on a wind-scoured steppe under a pale glacial sky.",
        "microStory": "Woolly mammoths were adapted to cold environments with insulating hair, fat and specialized teeth. Populations survived into the Holocene on some islands after mainland populations declined."
      },
      {
        "id": "smilodon",
        "label": "Saber-Toothed Predator",
        "articleTitle": "Smilodon",
        "fallbackType": "smilodon",
        "caption": "A Smilodon crouches among grasses and rocky outcrops.",
        "alt": "A Smilodon crouches among grasses and rocky outcrops.",
        "microStory": "Smilodon was a robust machairodont cat with elongated upper canines. It lived in the Americas and disappeared during the late Quaternary megafaunal turnover."
      },
      {
        "id": "glaciation",
        "label": "Glacial Earth",
        "articleTitle": "Glacier",
        "fallbackType": "glacier",
        "caption": "An ice sheet spills across a continent while meltwater cuts valleys below.",
        "alt": "An ice sheet spills across a continent while meltwater cuts valleys below.",
        "microStory": "Glaciation is the growth and persistence of land ice. Pleistocene ice volume changes lowered global sea level and left moraines, striations and other landforms as evidence."
      }
    ],
    "confidenceNote": "The Pleistocene begins about 2.58 million years ago and ends about 11,700 years ago. It was not one continuous global ice sheet: ice sheets advanced and retreated in repeated cycles, with regional differences.",
    "subExhibitLabels": [
      "Woolly Mammoth",
      "Saber-Toothed Predator",
      "Glacial Earth"
    ],
    "subExhibitCount": 3,
    "timelineCoordinate": -2580000,
    "timelinePosition": 0.4523809523809524,
    "timelineLabel": "2.58M BCE",
    "approximateYearsBeforePresent": 2582026,
    "temporalMeaning": "Approximate years before present; BCE wording is a stylized museum display convention.",
    "sourceIds": [
      "ics-chart",
      "smithsonian-cambrian"
    ],
    "collectionType": "timeline",
    "isTimelineEvent": true,
    "rulerShort": "2.58M"
  },
  {
    "sequence": 21,
    "id": "erectus-dispersals",
    "dateLabel": "1.9M BCE",
    "dateValue": -1900000,
    "dateUnit": "signed_timeline_coordinate",
    "displayCode": "1.9M",
    "era": "Cenozoic",
    "eraFilter": "Cenozoic",
    "classification": "Early Pleistocene · Endurance, tools and movement across regions",
    "eyebrow": "1.9M BCE",
    "title": "Homo erectus & the First Wide Dispersals",
    "subtitle": "Early Pleistocene · Endurance, tools and movement across regions",
    "curatorQuote": "Human history was mobile long before cities made maps.",
    "quoteAttribution": "Original curatorial copy; not a historical quotation.",
    "palette": [
      "#a17b57",
      "#b9a88b",
      "#485248"
    ],
    "fallbackType": "homo-erectus",
    "visualCue": "a Homo erectus reconstruction beside stone flakes and an open savanna corridor",
    "specBarMode": "historical",
    "telemetry": {
      "surfaceTemp": {
        "label": "SURFACE TEMP",
        "value": "Ice-age / regional climate variability",
        "detail": "Regional conditions changed across glacial cycles; there is no single global 'human temperature' for this date.",
        "confidence": "period-level qualitative summary",
        "shortValue": "Pleistocene Variability"
      },
      "atmosphereO2": {
        "label": "ATMOSPHERE O₂",
        "value": "About 20.95% by volume",
        "detail": "Atmospheric oxygen was broadly modern.",
        "confidence": "qualitative / proxy-dependent where noted",
        "shortValue": "20.95% Modern Range"
      },
      "dayLength": {
        "label": "DAY LENGTH",
        "value": "About 24 h",
        "detail": "Rounded mean solar day; Earth's rotation varies slightly.",
        "confidence": "approximate or model-dependent",
        "shortValue": "24 Hours"
      },
      "dominantSystem": {
        "label": "DOMINANT SYSTEM / LIFE",
        "value": "Human evolution, societies & culture",
        "detail": "Human evolution and cultural histories were branching, regional and overlapping.",
        "confidence": "period-level summary",
        "shortValue": "Homo erectus & Handaxes"
      }
    },
    "story": {
      "overview": [
        "Homo erectus and closely related populations had body proportions and locomotor adaptations associated with long-distance walking. Fossils and tools show that early humans expanded beyond Africa into parts of Eurasia.",
        "The timing, routes and causes of dispersal were not a single migration event. Populations moved, adapted and sometimes disappeared from regions, and later human lineages overlapped with other hominins."
      ],
      "sectionTitle": "HISTORICAL & CULTURAL MILESTONES",
      "milestones": [
        "Homo erectus appears in the African fossil record around 1.9 million years ago.",
        "Archaeological and fossil evidence document early occupation of parts of Eurasia.",
        "Stone tools, anatomy and environmental context help reconstruct movement and adaptation."
      ],
      "curatorNote": "Do not use a single arrow from Africa to the whole world. Show dispersals as branching, repeated movements with uncertainty."
    },
    "subExhibits": [
      {
        "id": "erectus-dispersals-homo-erectus",
        "label": "Homo erectus",
        "articleTitle": "Homo erectus",
        "fallbackType": "homo-erectus",
        "caption": "A reconstruction of Homo erectus beside a landscape of open woodland and grass.",
        "alt": "A reconstruction of Homo erectus beside a landscape of open woodland and grass.",
        "microStory": "Homo erectus had a wide geographic and temporal range; individual populations differed across that span."
      },
      {
        "id": "erectus-dispersals-acheulean-handaxe",
        "label": "Acheulean Handaxe",
        "articleTitle": "Lower Paleolithic",
        "fallbackType": "acheulean-handaxe",
        "caption": "A bifacial stone handaxe rests on a neutral specimen plinth.",
        "alt": "A bifacial stone handaxe rests on a neutral specimen plinth.",
        "microStory": "Acheulean toolmaking involved shaping stone on both sides and persisted across regions for long periods."
      },
      {
        "id": "erectus-dispersals-early-dispersal-routes",
        "label": "Early Dispersal Routes",
        "articleTitle": "Dmanisi hominins",
        "fallbackType": "early-human-dispersal",
        "caption": "A map-like terrain relief shows broad, uncertain pathways across Africa and Eurasia.",
        "alt": "A map-like terrain relief shows broad, uncertain pathways across Africa and Eurasia.",
        "microStory": "Dispersal models synthesize fossils, archaeological sites and environmental evidence; routes should be shown as hypotheses, not highways."
      }
    ],
    "confidenceNote": "The broad chronology of early dispersal is well supported; routes, taxonomy and population continuity remain debated.",
    "subExhibitLabels": [
      "Homo erectus",
      "Acheulean Handaxe",
      "Early Dispersal Routes"
    ],
    "subExhibitCount": 3,
    "timelineCoordinate": -1900000,
    "timelinePosition": 0.47619047619047616,
    "timelineLabel": "1.9M BCE",
    "approximateYearsBeforePresent": 1902026,
    "temporalMeaning": "Rounded chronological anchor; not a claim that every development in this exhibit began in this exact year.",
    "sourceIds": [
      "smithsonian-humans",
      "ics-chart"
    ],
    "collectionType": "timeline",
    "isTimelineEvent": true,
    "rulerShort": "1.9M"
  },
  {
    "sequence": 22,
    "id": "homo-sapiens-fire",
    "dateLabel": "300K BCE",
    "dateValue": -300000,
    "dateUnit": "signed_timeline_coordinate",
    "displayCode": "300K",
    "era": "Humanity",
    "eraFilter": "Humanity",
    "classification": "Middle Pleistocene · Early Homo sapiens",
    "eyebrow": "c. 300,000 BCE",
    "title": "Dawn of Homo sapiens",
    "subtitle": "Middle Pleistocene · Our species emerges in Africa",
    "curatorQuote": "A small primate learned to shape tools, tend fire, and carry knowledge between generations.",
    "quoteAttribution": "Original curatorial copy; not a historical quotation.",
    "palette": [
      "#8a654b",
      "#e4bd83",
      "#2d302d"
    ],
    "fallbackType": "human-origins",
    "visualCue": "African landscape, controlled fire, stone flakes, cave-painting pigments",
    "specBarMode": "historical",
    "telemetry": {
      "surfaceTemp": {
        "label": "SURFACE TEMP",
        "value": "Ice-age climate variability",
        "detail": "At this date, climates fluctuated; there is no single global ‘human temperature’.",
        "confidence": "high, qualitative",
        "shortValue": "Middle Pleistocene Shifts"
      },
      "atmosphereO2": {
        "label": "ATMOSPHERE O₂",
        "value": "~21%",
        "detail": "Atmospheric oxygen was broadly modern.",
        "confidence": "high, approximate",
        "shortValue": "20.95% Modern Range"
      },
      "dayLength": {
        "label": "DAY LENGTH",
        "value": "~24 h",
        "detail": "Very close to modern day length.",
        "confidence": "high, approximate",
        "shortValue": "24 Hours"
      },
      "dominantSystem": {
        "label": "DOMINANT SYSTEM / LIFE",
        "value": "Homo sapiens & stone-tool cultures",
        "detail": "Early Homo sapiens fossils date to roughly 300,000 years ago in Africa.",
        "confidence": "high, approximate",
        "shortValue": "Early Homo sapiens in Africa"
      }
    },
    "story": {
      "overview": [
        "Fossils from Africa show that Homo sapiens emerged roughly 300,000 years ago during a period of climatic variability. Our species developed within a broader human family tree, alongside other human populations with their own histories.",
        "The archaeological record documents diverse Middle Stone Age technologies and behaviors. Fire use, symbolic expression, long-distance exchange and cave art have different evidence histories; the Lascaux paintings, for example, are tens of thousands of years later than the first Homo sapiens fossils."
      ],
      "sectionTitle": "GEOLOGICAL & EVOLUTIONARY MILESTONES",
      "milestones": [
        "Early Homo sapiens fossils document the emergence of our species in Africa.",
        "Middle Stone Age technologies show flexible toolmaking across diverse environments.",
        "Later symbolic traditions and cave art should be presented as separate, younger milestones."
      ],
      "curatorNote": "Keep Lascaux for a later Upper Paleolithic art exhibit. Do not use it as an artifact from 300,000 years ago."
    },
    "subExhibits": [
      {
        "id": "early-homo-sapiens",
        "label": "Early Homo sapiens",
        "articleTitle": "Homo sapiens idaltu",
        "fallbackType": "homo-sapiens",
        "caption": "A scientifically grounded reconstruction of early Homo sapiens based on fossil anatomy.",
        "alt": "A scientifically grounded reconstruction of early Homo sapiens based on fossil anatomy.",
        "microStory": "Our species evolved in Africa around 300,000 years ago. Population histories were diverse and cannot be reduced to one isolated birthplace or one instant."
      },
      {
        "id": "middle-stone-age",
        "label": "Middle Stone Age",
        "articleTitle": "Middle Stone Age",
        "fallbackType": "stone-tools",
        "caption": "Stone points, flakes and prepared-core tools arranged as an archaeological specimen plate.",
        "alt": "Stone points, flakes and prepared-core tools arranged as an archaeological specimen plate.",
        "microStory": "Tool traditions varied across Africa and changed through time. Assemblages are evidence of technological knowledge, not a single universal toolkit."
      },
      {
        "id": "jebel-irhoud",
        "label": "Jebel Irhoud Fossils",
        "articleTitle": "Early modern human",
        "fallbackType": "fossil",
        "caption": "A fossil skull and excavation layer evoke early Homo sapiens discoveries in Morocco.",
        "alt": "A fossil skull and excavation layer evoke early Homo sapiens discoveries in Morocco.",
        "microStory": "Jebel Irhoud fossils are among the important finds that pushed evidence for early Homo sapiens deeper into the past."
      }
    ],
    "confidenceNote": "Fossils attributed to early Homo sapiens are about 300,000 years old. The evidence for controlled fire, symbolic behavior and later cave art has its own regional chronology and should not be bundled as if all occurred at this date.",
    "subExhibitLabels": [
      "Early Homo sapiens",
      "Middle Stone Age",
      "Jebel Irhoud Fossils"
    ],
    "subExhibitCount": 3,
    "timelineCoordinate": -300000,
    "timelinePosition": 0.5,
    "timelineLabel": "300K BCE",
    "temporalMeaning": "Approximate 300,000 BCE timeline marker.",
    "sourceIds": [
      "smithsonian-humans"
    ],
    "collectionType": "timeline",
    "isTimelineEvent": true,
    "approximateYearsBeforePresent": 302026,
    "rulerShort": "300K"
  },
  {
    "sequence": 23,
    "id": "symbols-networks",
    "dateLabel": "100K BCE",
    "dateValue": -100000,
    "dateUnit": "signed_timeline_coordinate",
    "displayCode": "100K",
    "era": "Humanity",
    "eraFilter": "Humanity",
    "classification": "Middle Stone Age · Material traces of symbolic and social life",
    "eyebrow": "100K BCE",
    "title": "Symbols, Pigments & Long-Distance Networks",
    "subtitle": "Middle Stone Age · Material traces of symbolic and social life",
    "curatorQuote": "Human ideas travelled through materials, gestures and shared meaning.",
    "quoteAttribution": "Original curatorial copy; not a historical quotation.",
    "palette": [
      "#a44f36",
      "#d1a27d",
      "#302722"
    ],
    "fallbackType": "ochre",
    "visualCue": "red ochre, engraved shell, stone tools and pigment on an archaeological specimen tray",
    "specBarMode": "historical",
    "telemetry": {
      "surfaceTemp": {
        "label": "SURFACE TEMP",
        "value": "Ice-age / regional climate variability",
        "detail": "Regional conditions changed across glacial cycles; there is no single global 'human temperature' for this date.",
        "confidence": "period-level qualitative summary",
        "shortValue": "Late Pleistocene Cycles"
      },
      "atmosphereO2": {
        "label": "ATMOSPHERE O₂",
        "value": "About 20.95% by volume",
        "detail": "Atmospheric oxygen was broadly modern.",
        "confidence": "qualitative / proxy-dependent where noted",
        "shortValue": "20.95% Modern Range"
      },
      "dayLength": {
        "label": "DAY LENGTH",
        "value": "About 24 h",
        "detail": "Rounded mean solar day; Earth's rotation varies slightly.",
        "confidence": "approximate or model-dependent",
        "shortValue": "24 Hours"
      },
      "dominantSystem": {
        "label": "DOMINANT SYSTEM / LIFE",
        "value": "Human evolution, societies & culture",
        "detail": "Human evolution and cultural histories were branching, regional and overlapping.",
        "confidence": "period-level summary",
        "shortValue": "Ochre Pigments & Networks"
      }
    },
    "story": {
      "overview": [
        "Across the Middle Stone Age and later periods, archaeological sites preserve pigments, ornaments and carefully made tools that inform debates about symbolic behavior and social networks. Evidence appears at different times in different places.",
        "No single artifact proves that every modern form of language, religion or identity was already present. Instead, researchers assemble multiple lines of evidence for communication, learning, exchange and changing patterns of cultural practice."
      ],
      "sectionTitle": "HISTORICAL & CULTURAL MILESTONES",
      "milestones": [
        "Ochre and engraved objects can preserve evidence of deliberate material choices.",
        "Ornaments and raw-material transport may indicate social connections beyond one camp.",
        "Symbolic behavior has a complex, regionally varied chronology."
      ],
      "curatorNote": "Do not present one date as the moment symbolism or language suddenly appeared. The archaeological record is uneven and interpretations are debated."
    },
    "subExhibits": [
      {
        "id": "symbols-networks-red-ochre",
        "label": "Red Ochre",
        "articleTitle": "Ochre",
        "fallbackType": "ochre",
        "caption": "Earth-red pigment is ground into a fine powder beside stone tools.",
        "alt": "Earth-red pigment is ground into a fine powder beside stone tools.",
        "microStory": "Ochre had many possible practical and symbolic uses; its presence alone does not reveal the meaning people assigned to it."
      },
      {
        "id": "symbols-networks-engraved-objects",
        "label": "Engraved Objects",
        "articleTitle": "Blombos Cave",
        "fallbackType": "engraved-ochre",
        "caption": "A fragment of ochre bears deliberate geometric incisions.",
        "alt": "A fragment of ochre bears deliberate geometric incisions.",
        "microStory": "Engravings can indicate planned mark-making, but the purpose and interpretation of individual marks are often uncertain."
      },
      {
        "id": "symbols-networks-exchange-networks",
        "label": "Exchange Networks",
        "articleTitle": "Chauvet Cave",
        "fallbackType": "stone-age-network",
        "caption": "Stone raw materials are linked across a stylized terrain map.",
        "alt": "Stone raw materials are linked across a stylized terrain map.",
        "microStory": "Raw-material sourcing can reveal movement and exchange over distances, while exact social relationships remain difficult to reconstruct."
      }
    ],
    "confidenceNote": "Specific artifacts are datable, but broad claims about language, cognition or social organization are inferred and contested.",
    "subExhibitLabels": [
      "Red Ochre",
      "Engraved Objects",
      "Exchange Networks"
    ],
    "subExhibitCount": 3,
    "timelineCoordinate": -100000,
    "timelinePosition": 0.5238095238095238,
    "timelineLabel": "100K BCE",
    "approximateYearsBeforePresent": 102026,
    "temporalMeaning": "Rounded chronological anchor; not a claim that every development in this exhibit began in this exact year.",
    "sourceIds": [
      "smithsonian-humans"
    ],
    "collectionType": "timeline",
    "isTimelineEvent": true,
    "rulerShort": "100K"
  },
  {
    "sequence": 24,
    "id": "holocene-dawn",
    "dateLabel": "11.7K BCE",
    "dateValue": -11700,
    "dateUnit": "signed_timeline_coordinate",
    "displayCode": "11.7K",
    "era": "Humanity",
    "eraFilter": "Humanity",
    "classification": "Holocene Epoch begins · A relatively stable climate window, regional transitions",
    "eyebrow": "11.7K BCE",
    "title": "Holocene Dawn: Farming & Settled Life",
    "subtitle": "Holocene Epoch begins · A relatively stable climate window, regional transitions",
    "curatorQuote": "A climate interval opened new possibilities; communities made many different choices.",
    "quoteAttribution": "Original curatorial copy; not a historical quotation.",
    "palette": [
      "#a4a06d",
      "#d5c49a",
      "#485746"
    ],
    "fallbackType": "holocene",
    "visualCue": "a river valley mosaic of wild grasses, early cultivation, wetlands and small settlements",
    "specBarMode": "historical",
    "telemetry": {
      "surfaceTemp": {
        "label": "SURFACE TEMP",
        "value": "Ice-age / regional climate variability",
        "detail": "Regional conditions changed across glacial cycles; there is no single global 'human temperature' for this date.",
        "confidence": "period-level qualitative summary",
        "shortValue": "Holocene Interglacial"
      },
      "atmosphereO2": {
        "label": "ATMOSPHERE O₂",
        "value": "About 20.95% by volume",
        "detail": "Atmospheric oxygen was broadly modern.",
        "confidence": "qualitative / proxy-dependent where noted",
        "shortValue": "20.95% Modern Range"
      },
      "dayLength": {
        "label": "DAY LENGTH",
        "value": "About 24 h",
        "detail": "Rounded mean solar day; Earth's rotation varies slightly.",
        "confidence": "approximate or model-dependent",
        "shortValue": "24 Hours"
      },
      "dominantSystem": {
        "label": "DOMINANT SYSTEM / LIFE",
        "value": "Human evolution, societies & culture",
        "detail": "Human evolution and cultural histories were branching, regional and overlapping.",
        "confidence": "period-level summary",
        "shortValue": "Early Farming & Villages"
      }
    },
    "story": {
      "overview": [
        "The Holocene began about 11,700 years before present as the last major glacial interval ended. In several regions, people gradually adopted cultivation, animal management and more settled lifeways, but these changes were neither simultaneous nor inevitable.",
        "Farming emerged independently in multiple centers and spread through mixtures of migration, exchange and local adaptation. For many communities, hunting, gathering, fishing and seasonal mobility continued alongside or instead of agriculture."
      ],
      "sectionTitle": "HISTORICAL & CULTURAL MILESTONES",
      "milestones": [
        "The formal Holocene boundary is defined through stratigraphic evidence at about 11.7 thousand years before present.",
        "Agriculture emerged at different times in Southwest Asia, East Asia, New Guinea, Africa and the Americas.",
        "Settled life changed diets, disease exposure, land use and population patterns in complex ways."
      ],
      "curatorNote": "Do not equate the start of the Holocene with the invention of farming. This entry intentionally describes two related but distinct processes."
    },
    "subExhibits": [
      {
        "id": "holocene-dawn-holocene-boundary",
        "label": "Holocene Boundary",
        "articleTitle": "U-shaped valley",
        "fallbackType": "holocene-boundary",
        "caption": "A retreating glacier reveals a greener valley and newly exposed shorelines.",
        "alt": "A retreating glacier reveals a greener valley and newly exposed shorelines.",
        "microStory": "The Holocene is a formal geological epoch; its beginning is not the date of one universal human invention."
      },
      {
        "id": "holocene-dawn-early-cultivation",
        "label": "Early Cultivation",
        "articleTitle": "Quern-stone",
        "fallbackType": "early-cultivation",
        "caption": "Wild grains, grinding stones and early cultivated plots sit beside a settlement.",
        "alt": "Wild grains, grinding stones and early cultivated plots sit beside a settlement.",
        "microStory": "Plant cultivation expanded at different times and places, shaped by local ecologies and human choices."
      },
      {
        "id": "holocene-dawn-settled-village",
        "label": "Settled Village",
        "articleTitle": "Çatalhöyük",
        "fallbackType": "neolithic-village",
        "caption": "Mudbrick structures and communal spaces sit near fields and water.",
        "alt": "Mudbrick structures and communal spaces sit near fields and water.",
        "microStory": "Settled communities developed varied forms of cooperation, ownership, ritual and exchange; not all were alike."
      }
    ],
    "confidenceNote": "The epoch boundary is formally defined; agricultural transitions are multiple, regional and gradual.",
    "subExhibitLabels": [
      "Holocene Boundary",
      "Early Cultivation",
      "Settled Village"
    ],
    "subExhibitCount": 3,
    "timelineCoordinate": -11700,
    "timelinePosition": 0.5476190476190477,
    "timelineLabel": "11.7K BCE",
    "approximateYearsBeforePresent": 13726,
    "temporalMeaning": "Rounded chronological anchor; not a claim that every development in this exhibit began in this exact year.",
    "sourceIds": [
      "ics-chart",
      "unesco-world-heritage"
    ],
    "collectionType": "timeline",
    "isTimelineEvent": true,
    "rulerShort": "11.7K"
  },
  {
    "sequence": 25,
    "id": "gobekli-tepe",
    "dateLabel": "c. 9600 BCE",
    "dateValue": -9600,
    "dateUnit": "signed_timeline_coordinate",
    "displayCode": "9600",
    "era": "Humanity",
    "eraFilter": "Humanity",
    "classification": "Early Neolithic · Monumental architecture in Upper Mesopotamia",
    "eyebrow": "C. 9600 BCE",
    "title": "Göbekli Tepe: Monument Before the City",
    "subtitle": "Early Neolithic · Monumental architecture in Upper Mesopotamia",
    "curatorQuote": "Monuments can gather communities before cities take their familiar form.",
    "quoteAttribution": "Original curatorial copy; not a historical quotation.",
    "palette": [
      "#b78b6a",
      "#d7c7a7",
      "#5e5549"
    ],
    "fallbackType": "gobekli-tepe",
    "visualCue": "carved T-shaped stone pillars rise from an early Neolithic enclosure in Anatolia",
    "specBarMode": "historical",
    "telemetry": {
      "surfaceTemp": {
        "label": "SURFACE TEMP",
        "value": "Ice-age / regional climate variability",
        "detail": "Regional conditions changed across glacial cycles; there is no single global 'human temperature' for this date.",
        "confidence": "period-level qualitative summary",
        "shortValue": "Early Holocene Warmth"
      },
      "atmosphereO2": {
        "label": "ATMOSPHERE O₂",
        "value": "About 20.95% by volume",
        "detail": "Atmospheric oxygen was broadly modern.",
        "confidence": "qualitative / proxy-dependent where noted",
        "shortValue": "20.95% Modern Range"
      },
      "dayLength": {
        "label": "DAY LENGTH",
        "value": "About 24 h",
        "detail": "Rounded mean solar day; Earth's rotation varies slightly.",
        "confidence": "approximate or model-dependent",
        "shortValue": "24 Hours"
      },
      "dominantSystem": {
        "label": "DOMINANT SYSTEM / LIFE",
        "value": "Human evolution, societies & culture",
        "detail": "Human evolution and cultural histories were branching, regional and overlapping.",
        "confidence": "period-level summary",
        "shortValue": "Monumental Stone Enclosures"
      }
    },
    "story": {
      "overview": [
        "Göbekli Tepe in present-day Türkiye contains monumental stone enclosures built by communities during the early Neolithic. Its carved pillars and animal imagery have transformed discussions of ritual, gathering and social coordination.",
        "The site does not prove a simple rule that religion came before agriculture everywhere. It shows that early communities organized substantial labor and meaningful spaces in ways that remain the focus of archaeological debate."
      ],
      "sectionTitle": "HISTORICAL & CULTURAL MILESTONES",
      "milestones": [
        "Large carved T-shaped pillars are central features of the enclosures.",
        "The site's chronology spans several construction phases rather than one construction day.",
        "Interpretations of its social role are debated; it should not be labeled conclusively as a 'temple' without qualification."
      ],
      "curatorNote": "Use 'monumental enclosures' or 'ritual landscape' as the default label. Avoid the simplistic claim that one site overturns all models of farming and civilization."
    },
    "subExhibits": [
      {
        "id": "gobekli-tepe-t-shaped-pillars",
        "label": "T-shaped Pillars",
        "articleTitle": "Göbekli Tepe",
        "fallbackType": "gobekli-pillars",
        "caption": "Monumental limestone pillars bear carved animal motifs.",
        "alt": "Monumental limestone pillars bear carved animal motifs.",
        "microStory": "The pillars required skilled stonework and coordinated labor; their exact symbolic meanings are not fully known."
      },
      {
        "id": "gobekli-tepe-stone-reliefs",
        "label": "Stone Reliefs",
        "articleTitle": "Urfa Man",
        "fallbackType": "gobekli-reliefs",
        "caption": "A close-up of carved animal figures on weathered limestone.",
        "alt": "A close-up of carved animal figures on weathered limestone.",
        "microStory": "Animal carvings show that early communities invested effort in imagery, but the stories attached to the images are not directly recoverable."
      },
      {
        "id": "gobekli-tepe-gathering-landscape",
        "label": "Gathering Landscape",
        "articleTitle": "Harran",
        "fallbackType": "neolithic-gathering",
        "caption": "People gather in an open enclosure amid the Anatolian uplands.",
        "alt": "People gather in an open enclosure amid the Anatolian uplands.",
        "microStory": "Archaeologists investigate whether such spaces supported gatherings, rituals, feasting or overlapping activities."
      }
    ],
    "confidenceNote": "The archaeological site and broad early Neolithic date are established; the meaning and function of the enclosures are interpreted.",
    "subExhibitLabels": [
      "T-shaped Pillars",
      "Stone Reliefs",
      "Gathering Landscape"
    ],
    "subExhibitCount": 3,
    "timelineCoordinate": -9600,
    "timelinePosition": 0.5714285714285714,
    "timelineLabel": "c. 9600 BCE",
    "approximateYearsBeforePresent": 11626,
    "temporalMeaning": "Rounded chronological anchor; not a claim that every development in this exhibit began in this exact year.",
    "sourceIds": [
      "unesco-gobekli",
      "unesco-world-heritage"
    ],
    "collectionType": "timeline",
    "isTimelineEvent": true,
    "rulerShort": "9600 BCE"
  },
  {
    "sequence": 26,
    "id": "civilization-monumental-stone",
    "dateLabel": "c. 3500 BCE",
    "dateValue": -3500,
    "dateUnit": "signed_timeline_coordinate",
    "displayCode": "3500",
    "era": "Humanity",
    "eraFilter": "Humanity",
    "classification": "Late Uruk period · Cities & early writing",
    "eyebrow": "c. 3500 BCE",
    "title": "First Cities & Writing Systems",
    "subtitle": "Late Uruk period · Urban life, administration and early writing",
    "curatorQuote": "When records became durable, memory could outlive the people who carried it.",
    "quoteAttribution": "Original curatorial copy; not a historical quotation.",
    "palette": [
      "#9b805c",
      "#dec99b",
      "#4b443b"
    ],
    "fallbackType": "ancient-city",
    "visualCue": "mudbrick city walls, clay tablet, monumental pyramid, stepped ziggurat",
    "specBarMode": "historical",
    "telemetry": {
      "surfaceTemp": {
        "label": "SURFACE TEMP",
        "value": "Holocene climate; region-specific",
        "detail": "Modern interglacial conditions, with local climate varying widely.",
        "confidence": "high, qualitative",
        "shortValue": "Holocene River Valleys"
      },
      "atmosphereO2": {
        "label": "ATMOSPHERE O₂",
        "value": "~21%",
        "detail": "Broadly modern atmospheric composition.",
        "confidence": "high, approximate",
        "shortValue": "20.95% Modern Range"
      },
      "dayLength": {
        "label": "DAY LENGTH",
        "value": "~24 h",
        "detail": "Very close to modern day length.",
        "confidence": "high, approximate",
        "shortValue": "24 Hours"
      },
      "dominantSystem": {
        "label": "DOMINANT SYSTEM / LIFE",
        "value": "Agrarian cities & early states",
        "detail": "Writing, administration, exchange networks and large-scale architecture expand in several regions.",
        "confidence": "high, qualitative",
        "shortValue": "Uruk Cities & Proto-Cuneiform"
      }
    },
    "story": {
      "overview": [
        "In southern Mesopotamia, Uruk grew into a major urban center with monumental buildings, specialist labor and far-reaching exchange. Administrative marks on clay tablets developed into cuneiform writing, initially tied strongly to accounting and institutional life.",
        "Early states also formed along the Nile and elsewhere, but there was no single global 'cradle moment'. This exhibit focuses on the emergence of cities, bureaucracy and record-keeping while later monuments receive their own accurately dated entries."
      ],
      "sectionTitle": "GEOLOGICAL & EVOLUTIONARY MILESTONES",
      "milestones": [
        "Uruk becomes a major urban center in southern Mesopotamia.",
        "Proto-cuneiform records quantities, goods and institutional transactions.",
        "Early Egyptian state formation and writing develop in a related but distinct regional history."
      ],
      "curatorNote": "The Great Pyramid of Giza belongs around the 26th century BCE; the best-known Ziggurat of Ur was built much later, around the 21st century BCE. Keep both out of a 3500 BCE display."
    },
    "subExhibits": [
      {
        "id": "uruk",
        "label": "Uruk & Urban Life",
        "articleTitle": "Eanna",
        "fallbackType": "ancient-city",
        "caption": "A layered reconstruction of mudbrick architecture, courtyards and crowded streets in ancient Uruk.",
        "alt": "A layered reconstruction of mudbrick architecture, courtyards and crowded streets in ancient Uruk.",
        "microStory": "Urbanization concentrated people, labor, food storage and religious institutions, while linking city residents to rural producers and long-distance exchange."
      },
      {
        "id": "proto-cuneiform",
        "label": "Proto-cuneiform",
        "articleTitle": "Cuneiform",
        "fallbackType": "cuneiform",
        "caption": "A clay tablet with early administrative marks pressed into wet clay.",
        "alt": "A clay tablet with early administrative marks pressed into wet clay.",
        "microStory": "Writing emerged from practical systems of counting and administration; later cuneiform became a flexible medium for literature, law and scholarship."
      },
      {
        "id": "early-egyptian-state",
        "label": "Early Egyptian State",
        "articleTitle": "Narmer Palette",
        "fallbackType": "egyptian-hieroglyphs",
        "caption": "A palette of early Egyptian symbols and Nile-valley state imagery.",
        "alt": "A palette of early Egyptian symbols and Nile-valley state imagery.",
        "microStory": "The consolidation of Egyptian kingship and the development of hieroglyphic writing follow their own chronology and archaeological record."
      }
    ],
    "confidenceNote": "Urbanization and writing developed through long regional processes. Proto-cuneiform in southern Mesopotamia is associated with late fourth-millennium BCE administration; early Egyptian writing and state formation followed a distinct trajectory.",
    "subExhibitLabels": [
      "Uruk & Urban Life",
      "Proto-cuneiform",
      "Early Egyptian State"
    ],
    "subExhibitCount": 3,
    "timelineCoordinate": -3500,
    "timelinePosition": 0.5952380952380952,
    "timelineLabel": "c. 3500 BCE",
    "temporalMeaning": "Approximate 3,100 BCE timeline marker.",
    "approximateYearsBeforePresent": 5526,
    "sourceIds": [
      "unesco-world-heritage"
    ],
    "collectionType": "timeline",
    "isTimelineEvent": true,
    "rulerShort": "3500 BCE"
  },
  {
    "sequence": 27,
    "id": "pyramid-age",
    "dateLabel": "c. 2600 BCE",
    "dateValue": -2600,
    "dateUnit": "signed_timeline_coordinate",
    "displayCode": "2600",
    "era": "Humanity",
    "eraFilter": "Humanity",
    "classification": "Old Kingdom · Royal architecture, labor and Nile Valley institutions",
    "eyebrow": "C. 2600 BCE",
    "title": "The Pyramid Age of Ancient Egypt",
    "subtitle": "Old Kingdom · Royal architecture, labor and Nile Valley institutions",
    "curatorQuote": "Stone monuments make political power visible across millennia.",
    "quoteAttribution": "Original curatorial copy; not a historical quotation.",
    "palette": [
      "#c7a16c",
      "#ead4a5",
      "#6e604d"
    ],
    "fallbackType": "pyramid",
    "visualCue": "the Great Pyramid rises above the Giza plateau with quarry stone and desert light",
    "specBarMode": "historical",
    "telemetry": {
      "surfaceTemp": {
        "label": "SURFACE TEMP",
        "value": "Ice-age / regional climate variability",
        "detail": "Regional conditions changed across glacial cycles; there is no single global 'human temperature' for this date.",
        "confidence": "period-level qualitative summary",
        "shortValue": "Arid Nile Valley"
      },
      "atmosphereO2": {
        "label": "ATMOSPHERE O₂",
        "value": "About 20.95% by volume",
        "detail": "Atmospheric oxygen was broadly modern.",
        "confidence": "qualitative / proxy-dependent where noted",
        "shortValue": "20.95% Modern Range"
      },
      "dayLength": {
        "label": "DAY LENGTH",
        "value": "About 24 h",
        "detail": "Rounded mean solar day; Earth's rotation varies slightly.",
        "confidence": "approximate or model-dependent",
        "shortValue": "24 Hours"
      },
      "dominantSystem": {
        "label": "DOMINANT SYSTEM / LIFE",
        "value": "Human evolution, societies & culture",
        "detail": "Human evolution and cultural histories were branching, regional and overlapping.",
        "confidence": "period-level summary",
        "shortValue": "Old Kingdom Pyramid State"
      }
    },
    "story": {
      "overview": [
        "During Egypt's Old Kingdom, kings commissioned major pyramid complexes that joined royal burial, ritual, logistics and skilled labor. The Great Pyramid of Khufu at Giza was built in the Fourth Dynasty, conventionally dated to the 26th century BCE.",
        "The monuments depended on organized quarrying, transport, provisioning and specialist knowledge. They were part of larger landscapes of settlements, temples, tombs and administration—not isolated structures appearing in an empty desert."
      ],
      "sectionTitle": "HISTORICAL & CULTURAL MILESTONES",
      "milestones": [
        "The Giza pyramid field belongs to the Old Kingdom, with the Great Pyramid associated with Khufu.",
        "River transport, quarrying and labor organization were essential to construction.",
        "The pyramids belong centuries after the earliest city and writing milestones in Mesopotamia."
      ],
      "curatorNote": "Avoid unsupported exact workforce totals or a single simplistic construction method. Make the difference between archaeological evidence and modern popular speculation clear."
    },
    "subExhibits": [
      {
        "id": "pyramid-age-great-pyramid-of-giza",
        "label": "Great Pyramid of Giza",
        "articleTitle": "Great Pyramid of Giza",
        "fallbackType": "pyramid",
        "caption": "The Great Pyramid stands against the Giza plateau's dry light.",
        "alt": "The Great Pyramid stands against the Giza plateau's dry light.",
        "microStory": "The Great Pyramid was built for Khufu during Egypt's Fourth Dynasty, centuries after early writing and urbanization."
      },
      {
        "id": "pyramid-age-nile-logistics",
        "label": "Nile Logistics",
        "articleTitle": "Khufu ship",
        "fallbackType": "nile-logistics",
        "caption": "A river barge and stone blocks suggest movement along the Nile corridor.",
        "alt": "A river barge and stone blocks suggest movement along the Nile corridor.",
        "microStory": "River transport, local routes and carefully organized work parties connected quarries, settlements and building sites."
      },
      {
        "id": "pyramid-age-pyramid-complex",
        "label": "Pyramid Complex",
        "articleTitle": "Great Sphinx of Giza",
        "fallbackType": "giza-complex",
        "caption": "A plan-like view layers pyramid, causeway, temple and surrounding tombs.",
        "alt": "A plan-like view layers pyramid, causeway, temple and surrounding tombs.",
        "microStory": "The pyramid was part of a wider funerary and administrative landscape, not a standalone monument."
      }
    ],
    "confidenceNote": "The Old Kingdom context and broad date are well established; reconstruction of labor logistics and some construction details remains under study.",
    "subExhibitLabels": [
      "Great Pyramid of Giza",
      "Nile Logistics",
      "Pyramid Complex"
    ],
    "subExhibitCount": 3,
    "timelineCoordinate": -2600,
    "timelinePosition": 0.6190476190476191,
    "timelineLabel": "c. 2600 BCE",
    "approximateYearsBeforePresent": 4626,
    "temporalMeaning": "Rounded chronological anchor; not a claim that every development in this exhibit began in this exact year.",
    "sourceIds": [
      "unesco-giza",
      "unesco-world-heritage"
    ],
    "collectionType": "timeline",
    "isTimelineEvent": true,
    "rulerShort": "2600 BCE"
  },
  {
    "sequence": 28,
    "id": "ziggurat-of-ur",
    "dateLabel": "c. 2100 BCE",
    "dateValue": -2100,
    "dateUnit": "signed_timeline_coordinate",
    "displayCode": "2100",
    "era": "Humanity",
    "eraFilter": "Humanity",
    "classification": "Ur III period · Monumental architecture, kingship and civic religion",
    "eyebrow": "C. 2100 BCE",
    "title": "Ziggurat of Ur: Mudbrick Monument to a City God",
    "subtitle": "Ur III period · Monumental architecture, kingship and civic religion",
    "curatorQuote": "A monument can organize a city’s skyline, labor and sacred geography at once.",
    "quoteAttribution": "Original curatorial copy; not a historical quotation.",
    "palette": [
      "#b88658",
      "#dcc29a",
      "#4b4036"
    ],
    "fallbackType": "ziggurat",
    "visualCue": "a stepped mudbrick ziggurat rises over the ancient city of Ur, with courtyards and canals at dusk",
    "specBarMode": "historical",
    "telemetry": {
      "surfaceTemp": {
        "label": "SURFACE TEMP",
        "value": "Ice-age / regional climate variability",
        "detail": "Regional conditions changed across glacial cycles; there is no single global 'human temperature' for this date.",
        "confidence": "period-level qualitative summary",
        "shortValue": "Mesopotamian Alluvium"
      },
      "atmosphereO2": {
        "label": "ATMOSPHERE O₂",
        "value": "About 20.95% by volume",
        "detail": "Atmospheric oxygen was broadly modern.",
        "confidence": "qualitative / proxy-dependent where noted",
        "shortValue": "20.95% Modern Range"
      },
      "dayLength": {
        "label": "DAY LENGTH",
        "value": "About 24 h",
        "detail": "Rounded mean solar day; Earth's rotation varies slightly.",
        "confidence": "approximate or model-dependent",
        "shortValue": "24 Hours"
      },
      "dominantSystem": {
        "label": "DOMINANT SYSTEM / LIFE",
        "value": "Human populations & cultural change",
        "detail": "Human evolution and cultural histories were branching, regional and overlapping.",
        "confidence": "period-level summary",
        "shortValue": "Ur III Mudbrick Ziggurats"
      }
    },
    "story": {
      "overview": [
        "The great ziggurat at Ur is associated with Ur-Nammu and the Ur III state in southern Mesopotamia, around the twenty-first century BCE. Its stepped mass and temple precinct formed part of a larger urban landscape tied to administration, worship and the authority of the city’s ruler.",
        "The structure was built primarily from mudbrick with baked-brick facing and bitumen used in parts of its construction. It was repaired and altered in later periods, so the ruins and modern reconstructions reflect multiple layers of history rather than one untouched building."
      ],
      "sectionTitle": "HISTORICAL & CULTURAL MILESTONES",
      "milestones": [
        "The monument is associated with Ur-Nammu and the Ur III dynasty, around the twenty-first century BCE.",
        "Mudbrick construction required organized labor, material supply and maintenance.",
        "Ur’s ziggurat belongs centuries after the earliest Uruk writing systems and after the main Giza pyramid-building phase began."
      ],
      "curatorNote": "Treat the date as an approximate anchor for the Ur III building phase. The monument was repaired over time; do not portray today's visible remains as an untouched original façade."
    },
    "subExhibits": [
      {
        "id": "ziggurat-of-ur-ziggurat-of-ur",
        "label": "Ziggurat of Ur",
        "articleTitle": "Ziggurat of Ur",
        "fallbackType": "ziggurat",
        "caption": "A tiered mudbrick platform rises above the ancient city in a museum reconstruction.",
        "alt": "A tiered mudbrick platform rises above the ancient city in a museum reconstruction.",
        "microStory": "The ziggurat was a monumental sacred structure integrated into Ur’s civic and administrative landscape."
      },
      {
        "id": "ziggurat-of-ur-ur-nammu-the-ur-iii-state",
        "label": "Ur-Nammu & the Ur III State",
        "articleTitle": "Code of Ur-Nammu",
        "fallbackType": "ur-nammu",
        "caption": "A royal inscription and mudbrick architecture evoke the Ur III dynasty.",
        "alt": "A royal inscription and mudbrick architecture evoke the Ur III dynasty.",
        "microStory": "Ur-Nammu’s reign is associated with major building projects and state organization in southern Mesopotamia."
      },
      {
        "id": "ziggurat-of-ur-mudbrick-engineering",
        "label": "Mudbrick Engineering",
        "articleTitle": "Mudbrick",
        "fallbackType": "mudbrick",
        "caption": "Sun-dried and baked bricks are arranged in a stepped architectural cross-section.",
        "alt": "Sun-dried and baked bricks are arranged in a stepped architectural cross-section.",
        "microStory": "Mudbrick was abundant but vulnerable to weathering; baked-brick facings and repeated repairs shaped the monument’s long history."
      }
    ],
    "confidenceNote": "The broad Ur III association is well established; exact construction phases, restoration history and reconstructions should be checked against archaeological references.",
    "subExhibitLabels": [
      "Ziggurat of Ur",
      "Ur-Nammu & the Ur III State",
      "Mudbrick Engineering"
    ],
    "subExhibitCount": 3,
    "timelineCoordinate": -2100,
    "timelinePosition": 0.6428571428571429,
    "timelineLabel": "c. 2100 BCE",
    "approximateYearsBeforePresent": 4126,
    "temporalMeaning": "Rounded chronological anchor; not a claim that every development in this exhibit began in this exact year.",
    "sourceIds": [
      "britannica-ur",
      "unesco-world-heritage"
    ],
    "collectionType": "timeline",
    "isTimelineEvent": true,
    "rulerShort": "2100 BCE"
  },
  {
    "sequence": 29,
    "id": "bronze-age-crisis",
    "dateLabel": "c. 1200 BCE",
    "dateValue": -1200,
    "dateUnit": "signed_timeline_coordinate",
    "displayCode": "1200",
    "era": "Humanity",
    "eraFilter": "Humanity",
    "classification": "Eastern Mediterranean · Political disruption, migration and network fragility",
    "eyebrow": "C. 1200 BCE",
    "title": "The Late Bronze Age Crisis",
    "subtitle": "Eastern Mediterranean · Political disruption, migration and network fragility",
    "curatorQuote": "Connected worlds can be resilient—and vulnerable to cascading shocks.",
    "quoteAttribution": "Original curatorial copy; not a historical quotation.",
    "palette": [
      "#9d6f4b",
      "#d4b27c",
      "#3f4345"
    ],
    "fallbackType": "bronze-age",
    "visualCue": "a Bronze Age harbor, palace storerooms and trade ships under an unsettled sky",
    "specBarMode": "historical",
    "telemetry": {
      "surfaceTemp": {
        "label": "SURFACE TEMP",
        "value": "Ice-age / regional climate variability",
        "detail": "Regional conditions changed across glacial cycles; there is no single global 'human temperature' for this date.",
        "confidence": "period-level qualitative summary",
        "shortValue": "Eastern Med. Aridity"
      },
      "atmosphereO2": {
        "label": "ATMOSPHERE O₂",
        "value": "About 20.95% by volume",
        "detail": "Atmospheric oxygen was broadly modern.",
        "confidence": "qualitative / proxy-dependent where noted",
        "shortValue": "20.95% Modern Range"
      },
      "dayLength": {
        "label": "DAY LENGTH",
        "value": "About 24 h",
        "detail": "Rounded mean solar day; Earth's rotation varies slightly.",
        "confidence": "approximate or model-dependent",
        "shortValue": "24 Hours"
      },
      "dominantSystem": {
        "label": "DOMINANT SYSTEM / LIFE",
        "value": "Human populations & cultural change",
        "detail": "Human evolution and cultural histories were branching, regional and overlapping.",
        "confidence": "period-level summary",
        "shortValue": "Bronze Age Palace Networks"
      }
    },
    "story": {
      "overview": [
        "Around the end of the second millennium BCE, several eastern Mediterranean and Near Eastern palace systems experienced destruction, political change or contraction. Trade networks, warfare, population movement and environmental stress all feature in explanations.",
        "The crisis was not one universal collapse with a single cause. Different regions experienced different trajectories, and some communities adapted or reorganized. This exhibit treats interconnected systems as a useful frame while leaving room for regional evidence."
      ],
      "sectionTitle": "HISTORICAL & CULTURAL MILESTONES",
      "milestones": [
        "Palace centers and long-distance exchange networks changed sharply in several regions.",
        "Textual records, destruction layers and settlement patterns provide different types of evidence.",
        "Climate, conflict, migration and political fragility are investigated as interacting factors."
      ],
      "curatorNote": "Avoid the monocausal story that one invading group or one drought destroyed every Bronze Age society. Emphasize uneven regional outcomes."
    },
    "subExhibits": [
      {
        "id": "bronze-age-crisis-palace-archives",
        "label": "Palace Archives",
        "articleTitle": "Linear B",
        "fallbackType": "linear-b",
        "caption": "Clay tablets and storeroom goods evoke palace administration.",
        "alt": "Clay tablets and storeroom goods evoke palace administration.",
        "microStory": "Linear B tablets record aspects of Mycenaean palace economies and provide one kind of evidence for institutional disruption."
      },
      {
        "id": "bronze-age-crisis-trade-networks",
        "label": "Trade Networks",
        "articleTitle": "Uluburun shipwreck",
        "fallbackType": "bronze-age-trade",
        "caption": "Copper ingots, ceramics and ship cargo mark an interconnected sea network.",
        "alt": "Copper ingots, ceramics and ship cargo mark an interconnected sea network.",
        "microStory": "Bronze production relied on long-distance access to copper and tin, linking distant communities through exchange."
      },
      {
        "id": "bronze-age-crisis-regional-afterlives",
        "label": "Regional Afterlives",
        "articleTitle": "Sea Peoples",
        "fallbackType": "late-bronze-age-afterlives",
        "caption": "A coastal settlement shows damage, repair and changing patterns of life.",
        "alt": "A coastal settlement shows damage, repair and changing patterns of life.",
        "microStory": "Communities experienced different outcomes after palace systems weakened; the period included continuity and adaptation as well as destruction."
      }
    ],
    "confidenceNote": "The broad period of disruption is well documented; causal weight differs by region and remains debated.",
    "subExhibitLabels": [
      "Palace Archives",
      "Trade Networks",
      "Regional Afterlives"
    ],
    "subExhibitCount": 3,
    "timelineCoordinate": -1200,
    "timelinePosition": 0.6666666666666666,
    "timelineLabel": "c. 1200 BCE",
    "approximateYearsBeforePresent": 3226,
    "temporalMeaning": "Rounded chronological anchor; not a claim that every development in this exhibit began in this exact year.",
    "sourceIds": [
      "unesco-world-heritage"
    ],
    "collectionType": "timeline",
    "isTimelineEvent": true,
    "rulerShort": "1200 BCE"
  },
  {
    "sequence": 30,
    "id": "ideas-and-empires",
    "dateLabel": "c. 500 BCE",
    "dateValue": -500,
    "dateUnit": "signed_timeline_coordinate",
    "displayCode": "500",
    "era": "Humanity",
    "eraFilter": "Humanity",
    "classification": "First millennium BCE · Philosophies, ethical traditions and imperial networks",
    "eyebrow": "C. 500 BCE",
    "title": "Ideas & Empires Across the Ancient World",
    "subtitle": "First millennium BCE · Philosophies, ethical traditions and imperial networks",
    "curatorQuote": "Ideas travel through teachers, texts, trade routes and the institutions that preserve them.",
    "quoteAttribution": "Original curatorial copy; not a historical quotation.",
    "palette": [
      "#9b7b55",
      "#d9bd92",
      "#42403b"
    ],
    "fallbackType": "ancient-world",
    "visualCue": "a map-like montage of Mediterranean, South Asian and East Asian teaching and civic spaces",
    "specBarMode": "historical",
    "telemetry": {
      "surfaceTemp": {
        "label": "SURFACE TEMP",
        "value": "Ice-age / regional climate variability",
        "detail": "Regional conditions changed across glacial cycles; there is no single global 'human temperature' for this date.",
        "confidence": "period-level qualitative summary",
        "shortValue": "First Millennium BCE"
      },
      "atmosphereO2": {
        "label": "ATMOSPHERE O₂",
        "value": "About 20.95% by volume",
        "detail": "Atmospheric oxygen was broadly modern.",
        "confidence": "qualitative / proxy-dependent where noted",
        "shortValue": "20.95% Modern Range"
      },
      "dayLength": {
        "label": "DAY LENGTH",
        "value": "About 24 h",
        "detail": "Rounded mean solar day; Earth's rotation varies slightly.",
        "confidence": "approximate or model-dependent",
        "shortValue": "24 Hours"
      },
      "dominantSystem": {
        "label": "DOMINANT SYSTEM / LIFE",
        "value": "Human populations & cultural change",
        "detail": "Human evolution and cultural histories were branching, regional and overlapping.",
        "confidence": "period-level summary",
        "shortValue": "Classical Philosophies & States"
      }
    },
    "story": {
      "overview": [
        "Across the first millennium BCE, many regions saw influential philosophical, religious and political traditions take form amid expanding states, cities and exchange networks. This is a broad comparative window, not a claim that all traditions began at once.",
        "Greek philosophy, Buddhist and Jain traditions in South Asia, Confucian and Daoist thought in China, and Persian imperial administration grew from distinct contexts. Later societies reinterpreted these traditions across centuries."
      ],
      "sectionTitle": "HISTORICAL & CULTURAL MILESTONES",
      "milestones": [
        "Intellectual movements developed within distinct languages, cities and political settings.",
        "Empires and trade routes enabled movement of people, texts, goods and practices.",
        "The date is a comparative anchor for a long span, not the birth date of every tradition listed."
      ],
      "curatorNote": "Avoid flattening multiple civilizations into one 'Axial Age' event or implying direct equivalence among their beliefs."
    },
    "subExhibits": [
      {
        "id": "ideas-and-empires-greek-philosophical-schools",
        "label": "Greek Philosophical Schools",
        "articleTitle": "The School of Athens",
        "fallbackType": "greek-philosophy",
        "caption": "A marble portico frames a small group in discussion.",
        "alt": "A marble portico frames a small group in discussion.",
        "microStory": "Greek philosophical traditions developed through debate, education and civic settings; their influence changed across Hellenistic and Roman worlds."
      },
      {
        "id": "ideas-and-empires-south-asian-traditions",
        "label": "South Asian Traditions",
        "articleTitle": "Gautama Buddha",
        "fallbackType": "south-asian-thought",
        "caption": "A stone path and early monastic architecture sit beneath a tree.",
        "alt": "A stone path and early monastic architecture sit beneath a tree.",
        "microStory": "Buddhist and Jain traditions developed in South Asian intellectual and religious contexts that long predate their later spread."
      },
      {
        "id": "ideas-and-empires-early-chinese-thought",
        "label": "Early Chinese Thought",
        "articleTitle": "Bamboo and wooden slips",
        "fallbackType": "confucian-thought",
        "caption": "A scholar's desk with bamboo slips evokes early Chinese textual culture.",
        "alt": "A scholar's desk with bamboo slips evokes early Chinese textual culture.",
        "microStory": "Confucian and Daoist traditions responded to social and political debates in early China and were interpreted in many ways by later generations."
      }
    ],
    "confidenceNote": "The named historical traditions are well documented, but the broad comparative framing is interpretive and spans different dates.",
    "subExhibitLabels": [
      "Greek Philosophical Schools",
      "South Asian Traditions",
      "Early Chinese Thought"
    ],
    "subExhibitCount": 3,
    "timelineCoordinate": -500,
    "timelinePosition": 0.6904761904761905,
    "timelineLabel": "c. 500 BCE",
    "approximateYearsBeforePresent": 2526,
    "temporalMeaning": "Rounded chronological anchor; not a claim that every development in this exhibit began in this exact year.",
    "sourceIds": [
      "unesco-silk-roads",
      "unesco-world-heritage"
    ],
    "collectionType": "timeline",
    "isTimelineEvent": true,
    "rulerShort": "500 BCE"
  },
  {
    "sequence": 31,
    "id": "silk-roads",
    "dateLabel": "c. 100 CE",
    "dateValue": 100,
    "dateUnit": "signed_timeline_coordinate",
    "displayCode": "100",
    "era": "Humanity",
    "eraFilter": "Humanity",
    "classification": "First centuries CE · Routes connecting markets, ports and cultures",
    "eyebrow": "C. 100 CE",
    "title": "Silk Roads: A Web of Eurasian Exchange",
    "subtitle": "First centuries CE · Routes connecting markets, ports and cultures",
    "curatorQuote": "No road carried history alone; the network was the story.",
    "quoteAttribution": "Original curatorial copy; not a historical quotation.",
    "palette": [
      "#a87d55",
      "#d7c095",
      "#4b5152"
    ],
    "fallbackType": "silk-road",
    "visualCue": "a caravan route passes from an oasis city to distant mountain corridors and sea lanes",
    "specBarMode": "historical",
    "telemetry": {
      "surfaceTemp": {
        "label": "SURFACE TEMP",
        "value": "Modern climate; year-dependent",
        "detail": "A global average depends on the baseline and year; it is not a complete description of local climate.",
        "confidence": "period-level qualitative summary",
        "shortValue": "Eurasian Continental"
      },
      "atmosphereO2": {
        "label": "ATMOSPHERE O₂",
        "value": "About 20.95% by volume",
        "detail": "Approximate dry-air oxygen fraction near Earth's surface.",
        "confidence": "qualitative / proxy-dependent where noted",
        "shortValue": "20.95% Modern Range"
      },
      "dayLength": {
        "label": "DAY LENGTH",
        "value": "About 24 h",
        "detail": "Mean solar day; Earth's rotation is not perfectly uniform.",
        "confidence": "approximate or model-dependent",
        "shortValue": "24 Hours"
      },
      "dominantSystem": {
        "label": "DOMINANT SYSTEM / LIFE",
        "value": "Technological civilization & planetary observation",
        "detail": "Science, industry, spaceflight and global infrastructure expanded the scale of human observation and impact.",
        "confidence": "period-level summary",
        "shortValue": "Overland & Maritime Silk Roads"
      }
    },
    "story": {
      "overview": [
        "The Silk Roads were not one continuous highway. They were changing networks of overland routes, oasis towns and maritime corridors linking communities across Eurasia and beyond. Goods travelled with people, technologies, beliefs and stories.",
        "Silk, spices, glass, metalwork, religious traditions and knowledge moved in different directions at different times. Exchange also carried disease and depended on political conditions, local intermediaries and the practical limits of transport."
      ],
      "sectionTitle": "HISTORICAL & CULTURAL MILESTONES",
      "milestones": [
        "Caravan routes linked oasis cities across Central Asia.",
        "Maritime trade connected ports around the Indian Ocean and beyond.",
        "The network changed with empires, markets, environmental conditions and technologies."
      ],
      "curatorNote": "Use a network map, not a single fixed line. The phrase 'Silk Roads' is a modern umbrella for diverse routes and periods."
    },
    "subExhibits": [
      {
        "id": "silk-roads-caravan-cities",
        "label": "Caravan Cities",
        "articleTitle": "Caravanserai",
        "fallbackType": "silk-road-caravan",
        "caption": "A caravan approaches an oasis city and its market gates.",
        "alt": "A caravan approaches an oasis city and its market gates.",
        "microStory": "Oasis towns connected travelers to water, lodging, repair, local commerce and regional political authorities."
      },
      {
        "id": "silk-roads-maritime-corridors",
        "label": "Maritime Corridors",
        "articleTitle": "Dhow",
        "fallbackType": "indian-ocean-trade",
        "caption": "Sailing vessels move between monsoon-season ports.",
        "alt": "Sailing vessels move between monsoon-season ports.",
        "microStory": "Monsoon winds helped shape seasonal Indian Ocean navigation and linked port communities across a wide region."
      },
      {
        "id": "silk-roads-objects-in-motion",
        "label": "Objects in Motion",
        "articleTitle": "Silk",
        "fallbackType": "silk-trade",
        "caption": "Silk textiles and traded objects are arranged on an archival table.",
        "alt": "Silk textiles and traded objects are arranged on an archival table.",
        "microStory": "Objects reveal contacts among distant communities, but a single artifact may have passed through many hands before reaching its final context."
      }
    ],
    "confidenceNote": "Long-distance exchange is well established; no single route map represents every century or every commodity.",
    "subExhibitLabels": [
      "Caravan Cities",
      "Maritime Corridors",
      "Objects in Motion"
    ],
    "subExhibitCount": 3,
    "timelineCoordinate": 100,
    "timelinePosition": 0.7142857142857143,
    "timelineLabel": "c. 100 CE",
    "approximateYearsBeforePresent": 1926,
    "temporalMeaning": "Rounded chronological anchor; not a claim that every development in this exhibit began in this exact year.",
    "sourceIds": [
      "unesco-silk-roads",
      "unesco-world-heritage"
    ],
    "collectionType": "timeline",
    "isTimelineEvent": true,
    "rulerShort": "100 CE"
  },
  {
    "sequence": 32,
    "id": "knowledge-web",
    "dateLabel": "c. 800 CE",
    "dateValue": 800,
    "dateUnit": "signed_timeline_coordinate",
    "displayCode": "800",
    "era": "Humanity",
    "eraFilter": "Humanity",
    "classification": "Early medieval centuries · Scholarship across connected societies",
    "eyebrow": "C. 800 CE",
    "title": "Libraries, Learning & the Medieval Knowledge Web",
    "subtitle": "Early medieval centuries · Scholarship across connected societies",
    "curatorQuote": "Knowledge survives through translation, critique, teaching and the labor of copying.",
    "quoteAttribution": "Original curatorial copy; not a historical quotation.",
    "palette": [
      "#b18b5d",
      "#e0d0aa",
      "#4a3e38"
    ],
    "fallbackType": "manuscript",
    "visualCue": "manuscripts, astronomical instruments and a library courtyard under lamplight",
    "specBarMode": "historical",
    "telemetry": {
      "surfaceTemp": {
        "label": "SURFACE TEMP",
        "value": "Modern climate; year-dependent",
        "detail": "A global average depends on the baseline and year; it is not a complete description of local climate.",
        "confidence": "period-level qualitative summary",
        "shortValue": "Medieval Climate Window"
      },
      "atmosphereO2": {
        "label": "ATMOSPHERE O₂",
        "value": "About 20.95% by volume",
        "detail": "Approximate dry-air oxygen fraction near Earth's surface.",
        "confidence": "qualitative / proxy-dependent where noted",
        "shortValue": "20.95% Modern Range"
      },
      "dayLength": {
        "label": "DAY LENGTH",
        "value": "About 24 h",
        "detail": "Mean solar day; Earth's rotation is not perfectly uniform.",
        "confidence": "approximate or model-dependent",
        "shortValue": "24 Hours"
      },
      "dominantSystem": {
        "label": "DOMINANT SYSTEM / LIFE",
        "value": "Technological civilization & planetary observation",
        "detail": "Science, industry, spaceflight and global infrastructure expanded the scale of human observation and impact.",
        "confidence": "period-level summary",
        "shortValue": "Abbasid & Global Scholarship"
      }
    },
    "story": {
      "overview": [
        "Medieval knowledge systems linked scholars, religious institutions, courts, markets and libraries across regions. In Abbasid-era Baghdad and other centers, translation and scholarship engaged with Greek, Persian, Indian and other intellectual traditions while creating new work.",
        "Learning did not belong to one city or civilization. Monasteries, madrasas, court libraries, Buddhist centers, observatories and schools preserved and transformed knowledge in distinct settings over many centuries."
      ],
      "sectionTitle": "HISTORICAL & CULTURAL MILESTONES",
      "milestones": [
        "Translation and commentary transmitted and reshaped earlier works.",
        "Astronomy, mathematics, medicine, philosophy and geography developed across many languages.",
        "Manuscripts and instruments show the material labor behind intellectual life."
      ],
      "curatorNote": "Avoid the framing that knowledge went dormant in one part of the world and was 'rediscovered' by another. Highlight multiple centers and two-way transmission."
    },
    "subExhibits": [
      {
        "id": "knowledge-web-house-of-wisdom-context",
        "label": "House of Wisdom Context",
        "articleTitle": "House of Wisdom",
        "fallbackType": "house-of-wisdom",
        "caption": "Manuscripts and instruments evoke scholarly life in Abbasid Baghdad.",
        "alt": "Manuscripts and instruments evoke scholarly life in Abbasid Baghdad.",
        "microStory": "The House of Wisdom is associated with Abbasid-era scholarship; popular descriptions should be distinguished from what sources can document about its exact organization."
      },
      {
        "id": "knowledge-web-manuscript-traditions",
        "label": "Manuscript Traditions",
        "articleTitle": "Illuminated manuscript",
        "fallbackType": "medieval-manuscript",
        "caption": "A hand-copied manuscript rests beside reed pens and pigments.",
        "alt": "A hand-copied manuscript rests beside reed pens and pigments.",
        "microStory": "Copyists, translators and commentators changed texts through selection, annotation and interpretation."
      },
      {
        "id": "knowledge-web-astronomy-mathematics",
        "label": "Astronomy & Mathematics",
        "articleTitle": "Astrolabe",
        "fallbackType": "astrolabe",
        "caption": "A brass astrolabe sits on a dark fabric plinth.",
        "alt": "A brass astrolabe sits on a dark fabric plinth.",
        "microStory": "Astronomical instruments combined mathematical models and skilled observation, supporting navigation, timekeeping and scholarly calculation."
      }
    ],
    "confidenceNote": "Broad networks and institutions are documented; each scholar, text and route has its own chronology.",
    "subExhibitLabels": [
      "House of Wisdom Context",
      "Manuscript Traditions",
      "Astronomy & Mathematics"
    ],
    "subExhibitCount": 3,
    "timelineCoordinate": 800,
    "timelinePosition": 0.7380952380952381,
    "timelineLabel": "c. 800 CE",
    "approximateYearsBeforePresent": 1226,
    "temporalMeaning": "Rounded chronological anchor; not a claim that every development in this exhibit began in this exact year.",
    "sourceIds": [
      "unesco-silk-roads",
      "unesco-world-heritage"
    ],
    "collectionType": "timeline",
    "isTimelineEvent": true,
    "rulerShort": "800 CE"
  },
  {
    "sequence": 33,
    "id": "print-revolution",
    "dateLabel": "c. 1450 CE",
    "dateValue": 1450,
    "dateUnit": "signed_timeline_coordinate",
    "displayCode": "1450",
    "era": "Humanity",
    "eraFilter": "Humanity",
    "classification": "Fifteenth century · Print cultures expand through multiple technologies",
    "eyebrow": "C. 1450 CE",
    "title": "Movable Type & the Print Revolution",
    "subtitle": "Fifteenth century · Print cultures expand through multiple technologies",
    "curatorQuote": "A technology changes history when communities build systems around it.",
    "quoteAttribution": "Original curatorial copy; not a historical quotation.",
    "palette": [
      "#a77b50",
      "#dfc9a3",
      "#483a32"
    ],
    "fallbackType": "printing-press",
    "visualCue": "a wooden printing press, metal type sorts and freshly printed sheets",
    "specBarMode": "historical",
    "telemetry": {
      "surfaceTemp": {
        "label": "SURFACE TEMP",
        "value": "Modern climate; year-dependent",
        "detail": "A global average depends on the baseline and year; it is not a complete description of local climate.",
        "confidence": "period-level qualitative summary",
        "shortValue": "15th-Century Baseline"
      },
      "atmosphereO2": {
        "label": "ATMOSPHERE O₂",
        "value": "About 20.95% by volume",
        "detail": "Approximate dry-air oxygen fraction near Earth's surface.",
        "confidence": "qualitative / proxy-dependent where noted",
        "shortValue": "20.95% Modern Range"
      },
      "dayLength": {
        "label": "DAY LENGTH",
        "value": "About 24 h",
        "detail": "Mean solar day; Earth's rotation is not perfectly uniform.",
        "confidence": "approximate or model-dependent",
        "shortValue": "24 Hours"
      },
      "dominantSystem": {
        "label": "DOMINANT SYSTEM / LIFE",
        "value": "Technological civilization & planetary observation",
        "detail": "Science, industry, spaceflight and global infrastructure expanded the scale of human observation and impact.",
        "confidence": "period-level summary",
        "shortValue": "Woodblock & Movable Metal Type"
      }
    },
    "story": {
      "overview": [
        "In fifteenth-century Europe, Gutenberg's press with movable metal type helped expand the scale and economics of book production. Printing technologies, however, had older histories in East Asia, including woodblock printing and earlier experiments with movable type.",
        "The print revolution depended on paper, skilled labor, capital, distribution networks and readers. Printing accelerated the circulation of religious, scientific, political and literary material, while its effects varied by language, region and institution."
      ],
      "sectionTitle": "HISTORICAL & CULTURAL MILESTONES",
      "milestones": [
        "Woodblock printing was practiced in East Asia long before Gutenberg's European press.",
        "Movable metal type and press mechanics changed European book production in the fifteenth century.",
        "Publishing networks grew through printers, booksellers, patrons and readers."
      ],
      "curatorNote": "Do not call Gutenberg the inventor of printing worldwide. Present his workshop as a pivotal stage in the European history of print."
    },
    "subExhibits": [
      {
        "id": "print-revolution-movable-metal-type",
        "label": "Movable Metal Type",
        "articleTitle": "Movable type",
        "fallbackType": "printing-press",
        "caption": "Metal type blocks are aligned in a composing frame beside ink and paper.",
        "alt": "Metal type blocks are aligned in a composing frame beside ink and paper.",
        "microStory": "Gutenberg's press combined technologies and practices into a scalable production system in fifteenth-century Europe."
      },
      {
        "id": "print-revolution-east-asian-print-traditions",
        "label": "East Asian Print Traditions",
        "articleTitle": "Woodblock printing",
        "fallbackType": "woodblock-printing",
        "caption": "A carved printing block and a sheet bearing inked characters.",
        "alt": "A carved printing block and a sheet bearing inked characters.",
        "microStory": "East Asian printing traditions predate the European print revolution and must remain visible in a global history."
      },
      {
        "id": "print-revolution-printed-book",
        "label": "Printed Book",
        "articleTitle": "Gutenberg Bible",
        "fallbackType": "gutenberg-bible",
        "caption": "An early printed page shows dense type and ornamental initials.",
        "alt": "An early printed page shows dense type and ornamental initials.",
        "microStory": "Printed books could be reproduced more consistently than hand-copying alone, though production still depended on extensive labor and capital."
      }
    ],
    "confidenceNote": "The technological histories are documented, although the relative impact of specific techniques varied regionally.",
    "subExhibitLabels": [
      "Movable Metal Type",
      "East Asian Print Traditions",
      "Printed Book"
    ],
    "subExhibitCount": 3,
    "timelineCoordinate": 1450,
    "timelinePosition": 0.7619047619047619,
    "timelineLabel": "c. 1450 CE",
    "approximateYearsBeforePresent": 576,
    "temporalMeaning": "Rounded chronological anchor; not a claim that every development in this exhibit began in this exact year.",
    "sourceIds": [
      "britannica-printing"
    ],
    "collectionType": "timeline",
    "isTimelineEvent": true,
    "rulerShort": "1450 CE"
  },
  {
    "sequence": 34,
    "id": "industrial-steam",
    "dateLabel": "1760 CE",
    "dateValue": 1760,
    "dateUnit": "signed_timeline_coordinate",
    "displayCode": "1760",
    "era": "Humanity",
    "eraFilter": "Humanity",
    "classification": "Industrialization · Steam power, factories & fossil fuels",
    "eyebrow": "1760 CE",
    "title": "The Industrial & Steam Revolution",
    "subtitle": "c. 1760 onward · Mechanized production, fossil energy and urban change",
    "curatorQuote": "Machines multiplied human power—and changed the atmosphere that made them possible.",
    "quoteAttribution": "Original curatorial copy; not a historical quotation.",
    "palette": [
      "#45413d",
      "#a5a49b",
      "#d6a067"
    ],
    "fallbackType": "industrial",
    "visualCue": "steam engine, cast-iron bridge, textile machinery, coal smoke",
    "specBarMode": "historical",
    "telemetry": {
      "surfaceTemp": {
        "label": "SURFACE TEMP",
        "value": "Preindustrial baseline",
        "detail": "Global warming since the 19th century was only beginning; no single year defines the baseline.",
        "confidence": "high, qualitative",
        "shortValue": "Preindustrial Baseline"
      },
      "atmosphereO2": {
        "label": "ATMOSPHERE O₂",
        "value": "~21%",
        "detail": "Oxygen remains close to its modern fraction; CO₂ begins its industrial rise.",
        "confidence": "high, approximate",
        "shortValue": "20.95% (CO₂ Rise Starts)"
      },
      "dayLength": {
        "label": "DAY LENGTH",
        "value": "24 h",
        "detail": "Modern timescale; tiny long-term variations aside.",
        "confidence": "high, approximate",
        "shortValue": "24 Hours"
      },
      "dominantSystem": {
        "label": "DOMINANT SYSTEM / LIFE",
        "value": "Steam power & coal industry",
        "detail": "Mechanized production transforms work, transport, cities and energy demand.",
        "confidence": "high, qualitative",
        "shortValue": "Steam Power & Coal Industry"
      }
    },
    "story": {
      "overview": [
        "In eighteenth-century Britain, mechanized textile production, improved steam engines, coal extraction and expanding transport networks began to transform production and work. Industrialization drew on earlier agricultural, commercial and scientific changes, and its effects spread unevenly around the world.",
        "Factories and railways increased the scale and speed of production while reshaping cities, labor relations, landscapes and energy systems. Fossil-fuel combustion later became a major driver of the modern rise in atmospheric carbon dioxide."
      ],
      "sectionTitle": "GEOLOGICAL & EVOLUTIONARY MILESTONES",
      "milestones": [
        "Improved steam engines convert heat into useful mechanical work.",
        "Textile machinery accelerates spinning and weaving.",
        "Iron production, canals, railways and factories reshape landscapes and labor systems over the following decades."
      ],
      "curatorNote": "Frame 1760 as a period marker. Include industrial labor, colonial extraction, energy, pollution and innovation rather than presenting industrialization as a single inventor's achievement."
    },
    "subExhibits": [
      {
        "id": "watt-steam-engine",
        "label": "Steam Power",
        "articleTitle": "Watt steam engine",
        "fallbackType": "steam-engine",
        "caption": "A brass-and-iron beam engine stands in a workshop of soot and window light.",
        "alt": "A brass-and-iron beam engine stands in a workshop of soot and window light.",
        "microStory": "James Watt's improvements increased the efficiency and usefulness of steam power. The diffusion of steam machinery occurred over decades and depended on coal, capital, engineering and transport networks."
      },
      {
        "id": "iron-bridge",
        "label": "Iron Bridge",
        "articleTitle": "The Iron Bridge",
        "fallbackType": "iron-bridge",
        "caption": "An early cast-iron arch bridge spans a river in the English Midlands.",
        "alt": "An early cast-iron arch bridge spans a river in the English Midlands.",
        "microStory": "The Iron Bridge at Coalbrookdale opened in 1781, after the 1760 marker. It became a landmark in the use of cast iron for major structural spans."
      },
      {
        "id": "spinning-jenny",
        "label": "Mechanized Textile",
        "articleTitle": "Industrial Revolution",
        "fallbackType": "spinning-jenny",
        "caption": "A wooden spinning jenny holds multiple spindles in a workshop interior.",
        "alt": "A wooden spinning jenny holds multiple spindles in a workshop interior.",
        "microStory": "James Hargreaves's spinning jenny helped one worker spin multiple threads simultaneously. Its effects on production, employment and labor relations were uneven and contested."
      }
    ],
    "confidenceNote": "1760 is a conventional starting marker for British industrialization, not a universal beginning date. Industrialization unfolded unevenly across regions and continued through later waves of electrification, mass production and digital technology.",
    "subExhibitLabels": [
      "Steam Power",
      "Iron Bridge",
      "Mechanized Textile"
    ],
    "subExhibitCount": 3,
    "timelineCoordinate": 1760,
    "timelinePosition": 0.7857142857142857,
    "timelineLabel": "1760 CE",
    "temporalMeaning": "1760 CE timeline marker.",
    "sourceIds": [
      "nasa-earth-facts"
    ],
    "collectionType": "timeline",
    "isTimelineEvent": true,
    "approximateYearsBeforePresent": 266,
    "rulerShort": "1760 CE"
  },
  {
    "sequence": 35,
    "id": "evolution-natural-selection",
    "dateLabel": "1859 CE",
    "dateValue": 1859,
    "dateUnit": "signed_timeline_coordinate",
    "displayCode": "1859",
    "era": "Humanity",
    "eraFilter": "Humanity",
    "classification": "Nineteenth century · A new framework for biological diversity",
    "eyebrow": "1859 CE",
    "title": "Evolution by Natural Selection",
    "subtitle": "Nineteenth century · A new framework for biological diversity",
    "curatorQuote": "A theory becomes powerful when it connects many different kinds of evidence.",
    "quoteAttribution": "Original curatorial copy; not a historical quotation.",
    "palette": [
      "#738566",
      "#d0bc91",
      "#3d4639"
    ],
    "fallbackType": "darwin",
    "visualCue": "specimen drawers, finch beaks and handwritten natural-history notebooks",
    "specBarMode": "historical",
    "telemetry": {
      "surfaceTemp": {
        "label": "SURFACE TEMP",
        "value": "Modern climate; year-dependent",
        "detail": "A global average depends on the baseline and year; it is not a complete description of local climate.",
        "confidence": "period-level qualitative summary",
        "shortValue": "19th-Century Baseline"
      },
      "atmosphereO2": {
        "label": "ATMOSPHERE O₂",
        "value": "About 20.95% by volume",
        "detail": "Approximate dry-air oxygen fraction near Earth's surface.",
        "confidence": "qualitative / proxy-dependent where noted",
        "shortValue": "20.95% Modern Range"
      },
      "dayLength": {
        "label": "DAY LENGTH",
        "value": "About 24 h",
        "detail": "Mean solar day; Earth's rotation is not perfectly uniform.",
        "confidence": "approximate or model-dependent",
        "shortValue": "24 Hours"
      },
      "dominantSystem": {
        "label": "DOMINANT SYSTEM / LIFE",
        "value": "Scientific and technological systems",
        "detail": "Science, industry, spaceflight and global infrastructure expanded the scale of human observation and impact.",
        "confidence": "period-level summary",
        "shortValue": "Natural Selection & Biology"
      }
    },
    "story": {
      "overview": [
        "Charles Darwin published On the Origin of Species in 1859, presenting evidence and argument for evolution by natural selection. The book emerged from a wider scientific culture of geology, taxonomy, breeding, travel and debate.",
        "Modern evolutionary biology incorporates genetics, molecular evidence, fossils, ecology and population studies that Darwin did not have. Evolution is a central organizing framework in biology; specific mechanisms and histories are investigated with multiple forms of evidence."
      ],
      "sectionTitle": "HISTORICAL & CULTURAL MILESTONES",
      "milestones": [
        "Darwin argued that heritable variation and differential reproduction can drive adaptation.",
        "The fossil record, comparative anatomy and biogeography informed nineteenth-century evolutionary debate.",
        "Genetics and molecular biology later added mechanisms and tests unavailable in 1859."
      ],
      "curatorNote": "Avoid presenting Darwin as the sole originator of every evolutionary idea. Distinguish the 1859 publication from the long history of evolutionary thought and the later development of genetics."
    },
    "subExhibits": [
      {
        "id": "evolution-natural-selection-origin-of-species",
        "label": "Origin of Species",
        "articleTitle": "On the Origin of Species",
        "fallbackType": "darwin-book",
        "caption": "A first-edition style book rests beside handwritten notes.",
        "alt": "A first-edition style book rests beside handwritten notes.",
        "microStory": "The 1859 book organized a broad argument from variation, selection, classification and biogeography."
      },
      {
        "id": "evolution-natural-selection-natural-variation",
        "label": "Natural Variation",
        "articleTitle": "Darwin's finches",
        "fallbackType": "natural-selection",
        "caption": "A curated series of finch-like beaks shows variation in form.",
        "alt": "A curated series of finch-like beaks shows variation in form.",
        "microStory": "Natural selection acts on heritable variation across generations; it does not mean individuals evolve by choice."
      },
      {
        "id": "evolution-natural-selection-evidence-in-nature",
        "label": "Evidence in Nature",
        "articleTitle": "Charles Darwin",
        "fallbackType": "comparative-anatomy",
        "caption": "Fossils, bones and field notes form a natural-history study tray.",
        "alt": "Fossils, bones and field notes form a natural-history study tray.",
        "microStory": "Evolutionary explanations are tested through converging evidence from fossils, anatomy, genetics and living populations."
      }
    ],
    "confidenceNote": "The publication date is exact; the exhibit is about a scientific framework that has been extensively revised and tested since.",
    "subExhibitLabels": [
      "Origin of Species",
      "Natural Variation",
      "Evidence in Nature"
    ],
    "subExhibitCount": 3,
    "timelineCoordinate": 1859,
    "timelinePosition": 0.8095238095238095,
    "timelineLabel": "1859 CE",
    "approximateYearsBeforePresent": 167,
    "temporalMeaning": "Rounded chronological anchor; not a claim that every development in this exhibit began in this exact year.",
    "sourceIds": [
      "darwin-online"
    ],
    "collectionType": "timeline",
    "isTimelineEvent": true,
    "rulerShort": "1859 CE"
  },
  {
    "sequence": 36,
    "id": "sputnik",
    "dateLabel": "1957 CE",
    "dateValue": 1957,
    "dateUnit": "signed_timeline_coordinate",
    "displayCode": "1957",
    "era": "Humanity",
    "eraFilter": "Humanity",
    "classification": "4 October 1957 · The first artificial satellite begins the Space Age",
    "eyebrow": "1957 CE",
    "title": "Sputnik: Earth Acquires an Artificial Moon",
    "subtitle": "4 October 1957 · The first artificial satellite begins the Space Age",
    "curatorQuote": "A small radio signal turned the planet into a place that could be orbited and observed.",
    "quoteAttribution": "Original curatorial copy; not a historical quotation.",
    "palette": [
      "#647c9b",
      "#d1d3d0",
      "#272d40"
    ],
    "fallbackType": "sputnik",
    "visualCue": "a polished spherical satellite with four antennae arcs above Earth's curved horizon",
    "specBarMode": "historical",
    "telemetry": {
      "surfaceTemp": {
        "label": "SURFACE TEMP",
        "value": "Modern climate; year-dependent",
        "detail": "A global average depends on the baseline and year; it is not a complete description of local climate.",
        "confidence": "period-level qualitative summary",
        "shortValue": "20th-Century Baseline"
      },
      "atmosphereO2": {
        "label": "ATMOSPHERE O₂",
        "value": "About 20.95% by volume",
        "detail": "Approximate dry-air oxygen fraction near Earth's surface.",
        "confidence": "qualitative / proxy-dependent where noted",
        "shortValue": "20.95% Modern Range"
      },
      "dayLength": {
        "label": "DAY LENGTH",
        "value": "About 24 h",
        "detail": "Mean solar day; Earth's rotation is not perfectly uniform.",
        "confidence": "approximate or model-dependent",
        "shortValue": "24 Hours"
      },
      "dominantSystem": {
        "label": "DOMINANT SYSTEM / LIFE",
        "value": "Scientific and technological systems",
        "detail": "Science, industry, spaceflight and global infrastructure expanded the scale of human observation and impact.",
        "confidence": "period-level summary",
        "shortValue": "First Artificial Satellite"
      }
    },
    "story": {
      "overview": [
        "On 4 October 1957, the Soviet Union launched Sputnik 1, the first artificial satellite. Its radio beeps and orbital track made a new kind of human presence around Earth unmistakable.",
        "Sputnik began a rapid period of satellite development, launch systems, tracking networks and geopolitical competition. Satellites later became essential to weather forecasting, communications, navigation and Earth observation."
      ],
      "sectionTitle": "HISTORICAL & CULTURAL MILESTONES",
      "milestones": [
        "Sputnik 1 was launched by the Soviet Union on 4 October 1957.",
        "The satellite orbited Earth roughly every 98 minutes.",
        "Its launch accelerated the Space Race and civil space capabilities."
      ],
      "curatorNote": "State clearly that Sputnik was the first artificial Earth satellite, not the first object ever placed in space or the first human spaceflight."
    },
    "subExhibits": [
      {
        "id": "sputnik-sputnik-1",
        "label": "Sputnik 1",
        "articleTitle": "Sputnik 1",
        "fallbackType": "sputnik",
        "caption": "A polished metal sphere carries four long antennae against deep space.",
        "alt": "A polished metal sphere carries four long antennae against deep space.",
        "microStory": "Sputnik's simple radio transmitter demonstrated satellite tracking and made the new orbital era audible to listeners."
      },
      {
        "id": "sputnik-launch-vehicle",
        "label": "Launch Vehicle",
        "articleTitle": "Vostok (rocket family)",
        "fallbackType": "r7-rocket",
        "caption": "A long rocket rises from a launch pad in the early Space Age.",
        "alt": "A long rocket rises from a launch pad in the early Space Age.",
        "microStory": "Rocket engineering adapted ballistic-missile technology to place payloads into orbit, with major political and scientific consequences."
      },
      {
        "id": "sputnik-orbital-signal",
        "label": "Orbital Signal",
        "articleTitle": "Ground station",
        "fallbackType": "orbital-signal",
        "caption": "A ground station tracks a satellite as it crosses a curved horizon.",
        "alt": "A ground station tracks a satellite as it crosses a curved horizon.",
        "microStory": "Orbital tracking depends on radio signals, precise timing and models of motion around Earth."
      }
    ],
    "confidenceNote": "Launch date and mission role are well established by historical records.",
    "subExhibitLabels": [
      "Sputnik 1",
      "Launch Vehicle",
      "Orbital Signal"
    ],
    "subExhibitCount": 3,
    "timelineCoordinate": 1957,
    "timelinePosition": 0.8333333333333334,
    "timelineLabel": "1957 CE",
    "approximateYearsBeforePresent": 69,
    "temporalMeaning": "Rounded chronological anchor; not a claim that every development in this exhibit began in this exact year.",
    "sourceIds": [
      "nasa-sputnik"
    ],
    "collectionType": "timeline",
    "isTimelineEvent": true,
    "rulerShort": "1957 CE"
  },
  {
    "sequence": 37,
    "id": "gagarin",
    "dateLabel": "1961 CE",
    "dateValue": 1961,
    "dateUnit": "signed_timeline_coordinate",
    "displayCode": "1961",
    "era": "Humanity",
    "eraFilter": "Humanity",
    "classification": "12 April 1961 · Vostok 1 and the first crewed orbital flight",
    "eyebrow": "1961 CE",
    "title": "Yuri Gagarin: First Human in Orbit",
    "subtitle": "12 April 1961 · Vostok 1 and the first crewed orbital flight",
    "curatorQuote": "For the first time, a human saw Earth from a complete orbital circuit.",
    "quoteAttribution": "Original curatorial copy; not a historical quotation.",
    "palette": [
      "#6987a4",
      "#d1d4d4",
      "#263647"
    ],
    "fallbackType": "vostok",
    "visualCue": "a spherical Vostok capsule floats above Earth's blue curvature with instrument telemetry",
    "specBarMode": "historical",
    "telemetry": {
      "surfaceTemp": {
        "label": "SURFACE TEMP",
        "value": "Modern climate; year-dependent",
        "detail": "A global average depends on the baseline and year; it is not a complete description of local climate.",
        "confidence": "period-level qualitative summary",
        "shortValue": "20th-Century Baseline"
      },
      "atmosphereO2": {
        "label": "ATMOSPHERE O₂",
        "value": "About 20.95% by volume",
        "detail": "Approximate dry-air oxygen fraction near Earth's surface.",
        "confidence": "qualitative / proxy-dependent where noted",
        "shortValue": "20.95% Modern Range"
      },
      "dayLength": {
        "label": "DAY LENGTH",
        "value": "About 24 h",
        "detail": "Mean solar day; Earth's rotation is not perfectly uniform.",
        "confidence": "approximate or model-dependent",
        "shortValue": "24 Hours"
      },
      "dominantSystem": {
        "label": "DOMINANT SYSTEM / LIFE",
        "value": "Scientific and technological systems",
        "detail": "Science, industry, spaceflight and global infrastructure expanded the scale of human observation and impact.",
        "confidence": "period-level summary",
        "shortValue": "First Crewed Orbital Flight"
      }
    },
    "story": {
      "overview": [
        "On 12 April 1961, Soviet cosmonaut Yuri Gagarin flew aboard Vostok 1 and completed one orbit of Earth. The approximately 108-minute mission marked the first human spaceflight and demonstrated that a person could survive launch, weightlessness and re-entry.",
        "Human spaceflight advanced through a sequence of high-risk test flights, life-support systems and ground-based mission operations. The accomplishment belonged to a large engineering and support network, not one individual alone."
      ],
      "sectionTitle": "HISTORICAL & CULTURAL MILESTONES",
      "milestones": [
        "Vostok 1 launched on 12 April 1961.",
        "Gagarin completed one orbit and returned to Earth.",
        "The flight advanced crewed spacecraft design and intensified the Space Race."
      ],
      "curatorNote": "Use the precise milestone 'first human in space and first human to orbit Earth'; keep the mission date distinct from later Moon landings."
    },
    "subExhibits": [
      {
        "id": "gagarin-vostok-1-capsule",
        "label": "Vostok 1 Capsule",
        "articleTitle": "Vostok (spacecraft)",
        "fallbackType": "vostok-capsule",
        "caption": "A spherical re-entry capsule is shown against a blue atmospheric rim.",
        "alt": "A spherical re-entry capsule is shown against a blue atmospheric rim.",
        "microStory": "Vostok 1 carried Gagarin on a single orbital mission using automated systems and ground support."
      },
      {
        "id": "gagarin-first-orbital-flight",
        "label": "First Orbital Flight",
        "articleTitle": "Yuri Gagarin",
        "fallbackType": "gagarin",
        "caption": "A portrait-style silhouette of a cosmonaut helmet against an orbital arc.",
        "alt": "A portrait-style silhouette of a cosmonaut helmet against an orbital arc.",
        "microStory": "Gagarin's mission was a first in human history, but it built on extensive work by engineers, technicians and test pilots."
      },
      {
        "id": "gagarin-earth-from-orbit",
        "label": "Earth from Orbit",
        "articleTitle": "Atmosphere of Earth",
        "fallbackType": "earth-from-orbit",
        "caption": "Cloud systems and the curved blue limb of Earth fill a view from orbit.",
        "alt": "Cloud systems and the curved blue limb of Earth fill a view from orbit.",
        "microStory": "The orbital perspective created new ways to study weather, geology and the atmosphere at planetary scale."
      }
    ],
    "confidenceNote": "Mission date, crew and orbit are established historical facts.",
    "subExhibitLabels": [
      "Vostok 1 Capsule",
      "First Orbital Flight",
      "Earth from Orbit"
    ],
    "subExhibitCount": 3,
    "timelineCoordinate": 1961,
    "timelinePosition": 0.8571428571428571,
    "timelineLabel": "1961 CE",
    "approximateYearsBeforePresent": 65,
    "temporalMeaning": "Rounded chronological anchor; not a claim that every development in this exhibit began in this exact year.",
    "sourceIds": [
      "nasa-gagarin"
    ],
    "collectionType": "timeline",
    "isTimelineEvent": true,
    "rulerShort": "1961 CE"
  },
  {
    "sequence": 38,
    "id": "apollo-blue-marble",
    "dateLabel": "1969 CE",
    "dateValue": 1969,
    "dateUnit": "signed_timeline_coordinate",
    "displayCode": "1969",
    "era": "Humanity",
    "eraFilter": "Humanity",
    "classification": "Space Age · Apollo 11 and the first crewed lunar landing",
    "eyebrow": "JULY 1969",
    "title": "Apollo 11: First Human Landing on the Moon",
    "subtitle": "Space Age · Crewed lunar exploration",
    "curatorQuote": "Leaving Earth made the planet itself visible as a shared and finite home.",
    "quoteAttribution": "Original curatorial copy; not a historical quotation.",
    "palette": [
      "#163d59",
      "#4d8fbd",
      "#d4e6ed"
    ],
    "fallbackType": "space",
    "visualCue": "Blue Marble Earth, Saturn V launch tower, lunar lander, black orbital field",
    "specBarMode": "historical",
    "telemetry": {
      "surfaceTemp": {
        "label": "SURFACE TEMP",
        "value": "Global mean ~14°C (approx.)",
        "detail": "A modern-climate benchmark; global mean varies by baseline and year.",
        "confidence": "approximate",
        "shortValue": "~14°C Global Mean"
      },
      "atmosphereO2": {
        "label": "ATMOSPHERE O₂",
        "value": "~20.95%",
        "detail": "Approximate dry-air oxygen fraction near the surface.",
        "confidence": "high, approximate",
        "shortValue": "20.95% Modern Range"
      },
      "dayLength": {
        "label": "DAY LENGTH",
        "value": "24 h",
        "detail": "Mean solar day; Earth's rotation is not perfectly uniform.",
        "confidence": "high, approximate",
        "shortValue": "24 Hours"
      },
      "dominantSystem": {
        "label": "DOMINANT SYSTEM / LIFE",
        "value": "Technological civilization",
        "detail": "Crewed lunar exploration and global observation expand planetary science.",
        "confidence": "high, qualitative",
        "shortValue": "Apollo 11 Lunar Landing"
      }
    },
    "story": {
      "overview": [
        "On July 20, 1969 UTC, Apollo 11's Lunar Module Eagle landed in the Sea of Tranquility. Neil Armstrong and Buzz Aldrin walked on the Moon while Michael Collins remained in lunar orbit; the mission returned samples and observations that reshaped lunar science.",
        "Apollo 11 was a technical achievement built by a large international-scale industrial and scientific system during the Cold War. Its legacy includes lunar geology, engineering practice and a new public view of Earth as one world within a larger Solar System."
      ],
      "sectionTitle": "GEOLOGICAL & EVOLUTIONARY MILESTONES",
      "milestones": [
        "Saturn V launches Apollo 11 from Kennedy Space Center.",
        "The Lunar Module lands in the Sea of Tranquility on July 20, 1969 UTC.",
        "The crew returns lunar samples and instruments to Earth."
      ],
      "curatorNote": "Keep Apollo 11, Apollo 17's Blue Marble and Voyager's Pale Blue Dot separate so each image and mission retains the correct date and context."
    },
    "subExhibits": [
      {
        "id": "apollo-11-landing",
        "label": "Mission & Landing",
        "articleTitle": "Apollo 11",
        "fallbackType": "apollo",
        "caption": "Apollo 11's lunar module and crewed landing site in the Sea of Tranquility.",
        "alt": "Apollo 11's lunar module and crewed landing site in the Sea of Tranquility.",
        "microStory": "Apollo 11 completed the first crewed lunar landing in July 1969 and returned samples for laboratory study on Earth."
      },
      {
        "id": "lunar-module-eagle",
        "label": "Lunar Module Eagle",
        "articleTitle": "Apollo Lunar Module",
        "fallbackType": "lunar-module",
        "caption": "A cutaway-style lunar module rests above a stark lunar surface.",
        "alt": "A cutaway-style lunar module rests above a stark lunar surface.",
        "microStory": "The lunar module separated descent and ascent functions, supporting landing and departure from the Moon."
      },
      {
        "id": "saturn-v",
        "label": "Saturn V Launch Vehicle",
        "articleTitle": "Saturn V",
        "fallbackType": "saturn-v",
        "caption": "The towering Saturn V launch vehicle stands in a launch-era silhouette.",
        "alt": "The towering Saturn V launch vehicle stands in a launch-era silhouette.",
        "microStory": "Saturn V delivered the Apollo spacecraft and crew toward the Moon; the system depended on vast teams, testing and mission control."
      }
    ],
    "confidenceNote": "Apollo 11 landed on the Moon in July 1969. The famous whole-Earth 'Blue Marble' photograph was taken by Apollo 17 in December 1972, and Voyager 1's 'Pale Blue Dot' image dates to 1990; these belong in separate entries.",
    "subExhibitLabels": [
      "Mission & Landing",
      "Lunar Module Eagle",
      "Saturn V Launch Vehicle"
    ],
    "subExhibitCount": 3,
    "timelineCoordinate": 1969,
    "timelinePosition": 0.8809523809523809,
    "timelineLabel": "1969 CE",
    "temporalMeaning": "1969 CE timeline marker.",
    "approximateYearsBeforePresent": 57,
    "sourceIds": [
      "nasa-apollo11"
    ],
    "collectionType": "timeline",
    "isTimelineEvent": true,
    "rulerShort": "1969 CE"
  },
  {
    "sequence": 39,
    "id": "blue-marble-1972",
    "dateLabel": "1972 CE",
    "dateValue": 1972,
    "dateUnit": "signed_timeline_coordinate",
    "displayCode": "1972",
    "era": "Humanity",
    "eraFilter": "Humanity",
    "classification": "7 December 1972 · Apollo 17 captures a whole-Earth portrait",
    "eyebrow": "1972 CE",
    "title": "The Blue Marble: Earth in One Frame",
    "subtitle": "7 December 1972 · Apollo 17 captures a whole-Earth portrait",
    "curatorQuote": "A photograph can make a planetary system feel like a single shared home.",
    "quoteAttribution": "Original curatorial copy; not a historical quotation.",
    "palette": [
      "#4b8fb6",
      "#e2e7de",
      "#253e55"
    ],
    "fallbackType": "blue-marble",
    "visualCue": "a whole-Earth view with cloud systems and Africa visible against black space",
    "specBarMode": "historical",
    "telemetry": {
      "surfaceTemp": {
        "label": "SURFACE TEMP",
        "value": "Modern climate; year-dependent",
        "detail": "A global average depends on the baseline and year; it is not a complete description of local climate.",
        "confidence": "period-level qualitative summary",
        "shortValue": "~14°C Global Mean"
      },
      "atmosphereO2": {
        "label": "ATMOSPHERE O₂",
        "value": "About 20.95% by volume",
        "detail": "Approximate dry-air oxygen fraction near Earth's surface.",
        "confidence": "qualitative / proxy-dependent where noted",
        "shortValue": "20.95% Modern Range"
      },
      "dayLength": {
        "label": "DAY LENGTH",
        "value": "About 24 h",
        "detail": "Mean solar day; Earth's rotation is not perfectly uniform.",
        "confidence": "approximate or model-dependent",
        "shortValue": "24 Hours"
      },
      "dominantSystem": {
        "label": "DOMINANT SYSTEM / LIFE",
        "value": "Scientific and technological systems",
        "detail": "Science, industry, spaceflight and global infrastructure expanded the scale of human observation and impact.",
        "confidence": "period-level summary",
        "shortValue": "Apollo 17 Whole-Earth Portrait"
      }
    },
    "story": {
      "overview": [
        "The iconic Blue Marble photograph was taken by the Apollo 17 crew on 7 December 1972 while travelling toward the Moon. It showed a fully illuminated Earth with Africa and surrounding ocean and cloud systems prominently visible.",
        "The image became a defining visual of the environmental era, but it is also a specific mission photograph with a precise origin. It should not be confused with Apollo 11's 1969 lunar landing or Voyager 1's 1990 Pale Blue Dot image."
      ],
      "sectionTitle": "HISTORICAL & CULTURAL MILESTONES",
      "milestones": [
        "Apollo 17 launched in December 1972 on the final crewed Apollo lunar mission.",
        "The famous full-disk image was captured en route to the Moon.",
        "Later satellite systems make continuous global observation possible, unlike a single astronaut photograph."
      ],
      "curatorNote": "Attribute the famous 1972 Blue Marble to Apollo 17. Image processing and framing differ among reproductions; use NASA's official image notes."
    },
    "subExhibits": [
      {
        "id": "blue-marble-1972-the-blue-marble",
        "label": "The Blue Marble",
        "articleTitle": "The Blue Marble",
        "fallbackType": "blue-marble",
        "caption": "A blue-white Earth with Africa, ocean and cloud systems floating in black space.",
        "alt": "A blue-white Earth with Africa, ocean and cloud systems floating in black space.",
        "microStory": "The 1972 photograph was captured by the Apollo 17 crew while travelling toward the Moon."
      },
      {
        "id": "blue-marble-1972-apollo-17",
        "label": "Apollo 17",
        "articleTitle": "Apollo 17",
        "fallbackType": "apollo-17",
        "caption": "The Apollo 17 spacecraft and lunar mission hardware are presented as a specimen plate.",
        "alt": "The Apollo 17 spacecraft and lunar mission hardware are presented as a specimen plate.",
        "microStory": "Apollo 17 was the final crewed lunar landing mission of the Apollo program and returned extensive lunar samples."
      },
      {
        "id": "blue-marble-1972-planetary-perspective",
        "label": "Planetary Perspective",
        "articleTitle": "Earthrise",
        "fallbackType": "earth-observation",
        "caption": "Cloud bands, oceans and continents form a planetary observation mosaic.",
        "alt": "Cloud bands, oceans and continents form a planetary observation mosaic.",
        "microStory": "The photograph became a cultural symbol, while modern satellites support repeated scientific monitoring of changing Earth systems."
      }
    ],
    "confidenceNote": "The mission and photograph date are documented by NASA.",
    "subExhibitLabels": [
      "The Blue Marble",
      "Apollo 17",
      "Planetary Perspective"
    ],
    "subExhibitCount": 3,
    "timelineCoordinate": 1972,
    "timelinePosition": 0.9047619047619048,
    "timelineLabel": "1972 CE",
    "approximateYearsBeforePresent": 54,
    "temporalMeaning": "Rounded chronological anchor; not a claim that every development in this exhibit began in this exact year.",
    "sourceIds": [
      "nasa-blue-marble"
    ],
    "collectionType": "timeline",
    "isTimelineEvent": true,
    "rulerShort": "1972 CE"
  },
  {
    "sequence": 40,
    "id": "pale-blue-dot",
    "dateLabel": "1990 CE",
    "dateValue": 1990,
    "dateUnit": "signed_timeline_coordinate",
    "displayCode": "1990",
    "era": "Humanity",
    "eraFilter": "Humanity",
    "classification": "14 February 1990 · Voyager 1 looks back from interplanetary space",
    "eyebrow": "1990 CE",
    "title": "Pale Blue Dot: Earth from the Outer Solar System",
    "subtitle": "14 February 1990 · Voyager 1 looks back from interplanetary space",
    "curatorQuote": "Distance changed the scale of the image, not the reality of the world it showed.",
    "quoteAttribution": "Original curatorial copy; not a historical quotation.",
    "palette": [
      "#333b5e",
      "#8fa9d0",
      "#171923"
    ],
    "fallbackType": "pale-blue-dot",
    "visualCue": "a dark cosmic frame with one tiny blue point crossed by faint scattered sunlight",
    "specBarMode": "historical",
    "telemetry": {
      "surfaceTemp": {
        "label": "SURFACE TEMP",
        "value": "Modern climate; year-dependent",
        "detail": "A global average depends on the baseline and year; it is not a complete description of local climate.",
        "confidence": "period-level qualitative summary",
        "shortValue": "Late 20th-Century Mean"
      },
      "atmosphereO2": {
        "label": "ATMOSPHERE O₂",
        "value": "About 20.95% by volume",
        "detail": "Approximate dry-air oxygen fraction near Earth's surface.",
        "confidence": "qualitative / proxy-dependent where noted",
        "shortValue": "20.95% Modern Range"
      },
      "dayLength": {
        "label": "DAY LENGTH",
        "value": "About 24 h",
        "detail": "Mean solar day; Earth's rotation is not perfectly uniform.",
        "confidence": "approximate or model-dependent",
        "shortValue": "24 Hours"
      },
      "dominantSystem": {
        "label": "DOMINANT SYSTEM / LIFE",
        "value": "Scientific and technological systems",
        "detail": "Science, industry, spaceflight and global infrastructure expanded the scale of human observation and impact.",
        "confidence": "period-level summary",
        "shortValue": "Voyager 1 Outer Solar System"
      }
    },
    "story": {
      "overview": [
        "On 14 February 1990, Voyager 1 turned its camera back toward the Solar System and captured Earth as a tiny point of light from billions of kilometres away. The image was part of a family portrait of planets made near the end of the spacecraft's primary planetary imaging phase.",
        "The Pale Blue Dot became a powerful symbol of planetary perspective. Scientifically, it also documents the capabilities and limits of remote imaging: Earth is visible under specific lighting and camera conditions, while many details remain unresolved at that distance."
      ],
      "sectionTitle": "HISTORICAL & CULTURAL MILESTONES",
      "milestones": [
        "Voyager 1 captured the image on 14 February 1990.",
        "Earth appears as a small pixel-scale point within a scattered sunbeam.",
        "The image is distinct from Apollo 17's Blue Marble, captured in 1972."
      ],
      "curatorNote": "The small point is a real image of Earth acquired under specific camera geometry. Do not present it as a high-resolution scientific map or confuse its date with Voyager's later heliopause crossing."
    },
    "subExhibits": [
      {
        "id": "pale-blue-dot-pale-blue-dot",
        "label": "Pale Blue Dot",
        "articleTitle": "Pale Blue Dot",
        "fallbackType": "pale-blue-dot",
        "caption": "A tiny blue point sits inside a faint band of scattered sunlight.",
        "alt": "A tiny blue point sits inside a faint band of scattered sunlight.",
        "microStory": "Voyager 1 photographed Earth in 1990 from a distance of roughly six billion kilometres."
      },
      {
        "id": "pale-blue-dot-voyager-1",
        "label": "Voyager 1",
        "articleTitle": "Voyager program",
        "fallbackType": "voyager-1",
        "caption": "A Voyager spacecraft silhouette carries its high-gain antenna and science instruments.",
        "alt": "A Voyager spacecraft silhouette carries its high-gain antenna and science instruments.",
        "microStory": "Voyager 1's extended mission continues to contribute data about the space beyond the heliosphere."
      },
      {
        "id": "pale-blue-dot-planetary-family-portrait",
        "label": "Planetary Family Portrait",
        "articleTitle": "Voyager Golden Record",
        "fallbackType": "voyager-family-portrait",
        "caption": "A dark field contains a series of distant planetary dots and image frames.",
        "alt": "A dark field contains a series of distant planetary dots and image frames.",
        "microStory": "The family portrait assembled views of several planets and placed Earth within a much larger Solar System."
      }
    ],
    "confidenceNote": "NASA documents the image date and context; the cultural meaning is interpretive.",
    "subExhibitLabels": [
      "Pale Blue Dot",
      "Voyager 1",
      "Planetary Family Portrait"
    ],
    "subExhibitCount": 3,
    "timelineCoordinate": 1990,
    "timelinePosition": 0.9285714285714286,
    "timelineLabel": "1990 CE",
    "approximateYearsBeforePresent": 36,
    "temporalMeaning": "Rounded chronological anchor; not a claim that every development in this exhibit began in this exact year.",
    "sourceIds": [
      "nasa-pale-blue-dot"
    ],
    "collectionType": "timeline",
    "isTimelineEvent": true,
    "rulerShort": "1990 CE"
  },
  {
    "sequence": 41,
    "id": "first-sunlike-exoplanet",
    "dateLabel": "1995 CE",
    "dateValue": 1995,
    "dateUnit": "signed_timeline_coordinate",
    "displayCode": "1995",
    "era": "Humanity",
    "eraFilter": "Humanity",
    "classification": "6 October 1995 · A planet confirmed around a Sun-like star",
    "eyebrow": "1995 CE",
    "title": "51 Pegasi b: The Exoplanet Era Accelerates",
    "subtitle": "6 October 1995 · A planet confirmed around a Sun-like star",
    "curatorQuote": "The first confirmed worlds around other stars were stranger than our familiar Solar System.",
    "quoteAttribution": "Original curatorial copy; not a historical quotation.",
    "palette": [
      "#5c557e",
      "#bd9aba",
      "#202439"
    ],
    "fallbackType": "exoplanet",
    "visualCue": "a hot Jupiter sweeps close to a star, with radial-velocity signal lines in the background",
    "specBarMode": "historical",
    "telemetry": {
      "surfaceTemp": {
        "label": "SURFACE TEMP",
        "value": "Modern climate; year-dependent",
        "detail": "A global average depends on the baseline and year; it is not a complete description of local climate.",
        "confidence": "period-level qualitative summary",
        "shortValue": "Late 20th-Century Mean"
      },
      "atmosphereO2": {
        "label": "ATMOSPHERE O₂",
        "value": "About 20.95% by volume",
        "detail": "Approximate dry-air oxygen fraction near Earth's surface.",
        "confidence": "qualitative / proxy-dependent where noted",
        "shortValue": "20.95% Modern Range"
      },
      "dayLength": {
        "label": "DAY LENGTH",
        "value": "About 24 h",
        "detail": "Mean solar day; Earth's rotation is not perfectly uniform.",
        "confidence": "approximate or model-dependent",
        "shortValue": "24 Hours"
      },
      "dominantSystem": {
        "label": "DOMINANT SYSTEM / LIFE",
        "value": "Scientific and technological systems",
        "detail": "Science, industry, spaceflight and global infrastructure expanded the scale of human observation and impact.",
        "confidence": "period-level summary",
        "shortValue": "51 Pegasi b Exoplanet Era"
      }
    },
    "story": {
      "overview": [
        "In 1995, Michel Mayor and Didier Queloz announced the discovery of 51 Pegasi b, a planet orbiting a Sun-like star. Its close orbit and short year challenged expectations that giant planets would occupy only distant, Jupiter-like orbits.",
        "Planets around pulsars had been reported earlier, so the careful milestone is the first widely recognized exoplanet around a normal Sun-like star. The discovery helped accelerate a field that now uses radial velocities, transits, direct imaging and other methods."
      ],
      "sectionTitle": "HISTORICAL & CULTURAL MILESTONES",
      "milestones": [
        "51 Pegasi b was announced in October 1995.",
        "Its close orbit revealed a 'hot Jupiter' unlike the Solar System's giant planets.",
        "Exoplanet research expanded rapidly through complementary detection methods."
      ],
      "curatorNote": "Do not write 'first planet outside our Solar System' without qualification: earlier planets around a pulsar were discovered in 1992. Use 'first widely recognized planet orbiting a Sun-like star'."
    },
    "subExhibits": [
      {
        "id": "first-sunlike-exoplanet-51-pegasi-b",
        "label": "51 Pegasi b",
        "articleTitle": "51 Pegasi b",
        "fallbackType": "hot-jupiter",
        "caption": "A giant planet orbits close to a yellow-white star in a compact orbit.",
        "alt": "A giant planet orbits close to a yellow-white star in a compact orbit.",
        "microStory": "51 Pegasi b revealed that giant planets can occupy very close orbits, expanding the range of known planetary systems."
      },
      {
        "id": "first-sunlike-exoplanet-radial-velocity",
        "label": "Radial Velocity",
        "articleTitle": "Astronomical spectroscopy",
        "fallbackType": "radial-velocity",
        "caption": "A spectral line shifts back and forth in a stylized stellar spectrum.",
        "alt": "A spectral line shifts back and forth in a stylized stellar spectrum.",
        "microStory": "A planet's gravity makes its star move slightly; spectroscopy can detect that periodic stellar motion."
      },
      {
        "id": "first-sunlike-exoplanet-worlds-beyond",
        "label": "Worlds Beyond",
        "articleTitle": "Planetary system",
        "fallbackType": "exoplanet",
        "caption": "A distant planetary system appears as layered points of light and orbit paths.",
        "alt": "A distant planetary system appears as layered points of light and orbit paths.",
        "microStory": "Exoplanets vary widely in size, orbit and environment. An artist's concept should be labeled as illustration, not direct photography."
      }
    ],
    "confidenceNote": "The 1995 discovery and its historical category are documented by NASA and the research literature.",
    "subExhibitLabels": [
      "51 Pegasi b",
      "Radial Velocity",
      "Worlds Beyond"
    ],
    "subExhibitCount": 3,
    "timelineCoordinate": 1995,
    "timelinePosition": 0.9523809523809523,
    "timelineLabel": "1995 CE",
    "approximateYearsBeforePresent": 31,
    "temporalMeaning": "Rounded chronological anchor; not a claim that every development in this exhibit began in this exact year.",
    "sourceIds": [
      "nasa-exoplanets"
    ],
    "collectionType": "timeline",
    "isTimelineEvent": true,
    "rulerShort": "1995 CE"
  },
  {
    "sequence": 42,
    "id": "james-webb-launch",
    "dateLabel": "2021 CE",
    "dateValue": 2021,
    "dateUnit": "signed_timeline_coordinate",
    "displayCode": "2021",
    "era": "Humanity",
    "eraFilter": "Humanity",
    "classification": "25 December 2021 · A space observatory opens a new view of the universe",
    "eyebrow": "2021 CE",
    "title": "James Webb: A New Infrared Window",
    "subtitle": "25 December 2021 · A space observatory opens a new view of the universe",
    "curatorQuote": "A new instrument changes not the universe, but the questions we can ask of it.",
    "quoteAttribution": "Original curatorial copy; not a historical quotation.",
    "palette": [
      "#c4a56b",
      "#e2d8c0",
      "#394861"
    ],
    "fallbackType": "jwst",
    "visualCue": "the gold-segmented Webb mirror and layered sunshield against deep space",
    "specBarMode": "historical",
    "telemetry": {
      "surfaceTemp": {
        "label": "SURFACE TEMP",
        "value": "Modern climate; year-dependent",
        "detail": "A global average depends on the baseline and year; it is not a complete description of local climate.",
        "confidence": "period-level qualitative summary",
        "shortValue": "21st-Century Warming"
      },
      "atmosphereO2": {
        "label": "ATMOSPHERE O₂",
        "value": "About 20.95% by volume",
        "detail": "Approximate dry-air oxygen fraction near Earth's surface.",
        "confidence": "qualitative / proxy-dependent where noted",
        "shortValue": "20.95% Modern Range"
      },
      "dayLength": {
        "label": "DAY LENGTH",
        "value": "About 24 h",
        "detail": "Mean solar day; Earth's rotation is not perfectly uniform.",
        "confidence": "approximate or model-dependent",
        "shortValue": "24 Hours"
      },
      "dominantSystem": {
        "label": "DOMINANT SYSTEM / LIFE",
        "value": "Scientific and technological systems",
        "detail": "Science, industry, spaceflight and global infrastructure expanded the scale of human observation and impact.",
        "confidence": "period-level summary",
        "shortValue": "JWST Infrared Space Astronomy"
      }
    },
    "story": {
      "overview": [
        "The James Webb Space Telescope launched on 25 December 2021 as a partnership among NASA, ESA and the Canadian Space Agency. Its large segmented mirror and infrared instruments were designed to investigate early galaxies, star formation, exoplanet atmospheres and objects in our Solar System.",
        "Webb's results depend on careful calibration, instrument performance and interpretation. Its images often combine infrared measurements and processing choices; colors in public releases may map wavelengths that human eyes cannot see directly."
      ],
      "sectionTitle": "HISTORICAL & CULTURAL MILESTONES",
      "milestones": [
        "Webb launched on an Ariane 5 rocket from Europe's Spaceport in French Guiana.",
        "The telescope uses a segmented mirror and a large sunshield to support infrared observations.",
        "Its science includes early-universe galaxies, stellar birth and exoplanet atmospheres."
      ],
      "curatorNote": "Distinguish launch in 2021 from arrival, deployment, calibration and first public science releases in 2022. Label visible-color renderings of infrared data as processed images."
    },
    "subExhibits": [
      {
        "id": "james-webb-launch-segmented-mirror",
        "label": "Segmented Mirror",
        "articleTitle": "Primary mirror",
        "fallbackType": "jwst-mirror",
        "caption": "Webb's gold-coated hexagonal mirror segments form a broad collecting surface.",
        "alt": "Webb's gold-coated hexagonal mirror segments form a broad collecting surface.",
        "microStory": "A segmented mirror folds for launch and aligns in space, enabling a large effective aperture for infrared astronomy."
      },
      {
        "id": "james-webb-launch-sunshield-thermal-control",
        "label": "Sunshield & Thermal Control",
        "articleTitle": "Ariane 5",
        "fallbackType": "jwst-sunshield",
        "caption": "A layered sunshield separates the warm spacecraft bus from the cold telescope.",
        "alt": "A layered sunshield separates the warm spacecraft bus from the cold telescope.",
        "microStory": "Infrared observations require thermal control; the five-layer sunshield helps keep the telescope cold while it operates far from Earth."
      },
      {
        "id": "james-webb-launch-first-galaxies-distant-worlds",
        "label": "First Galaxies & Distant Worlds",
        "articleTitle": "Webb's First Deep Field",
        "fallbackType": "jwst-first-images",
        "caption": "A deep field of galaxies and luminous points evokes a long exposure into cosmic history.",
        "alt": "A deep field of galaxies and luminous points evokes a long exposure into cosmic history.",
        "microStory": "Webb studies distant galaxies, star formation and planetary atmospheres; each image is data processed for a particular scientific goal."
      }
    ],
    "confidenceNote": "Launch date, partners and mission design are documented by NASA, ESA and CSA; individual scientific interpretations should link to the associated publication.",
    "subExhibitLabels": [
      "Segmented Mirror",
      "Sunshield & Thermal Control",
      "First Galaxies & Distant Worlds"
    ],
    "subExhibitCount": 3,
    "timelineCoordinate": 2021,
    "timelinePosition": 0.9761904761904762,
    "timelineLabel": "2021 CE",
    "approximateYearsBeforePresent": 5,
    "temporalMeaning": "Rounded chronological anchor; not a claim that every development in this exhibit began in this exact year.",
    "sourceIds": [
      "nasa-webb"
    ],
    "collectionType": "timeline",
    "isTimelineEvent": true,
    "rulerShort": "2021 CE"
  }
];
