import { DisplayConventions } from '@/types';

export const displayConventions: DisplayConventions = {
  "dateLabels": "Displayed dates are rounded museum anchors; deep-time BCE notation is an interface convention. dateValue/timelineCoordinate is a signed chronological sort key, not a claim of precision.",
  "timelinePositions": "timelinePosition is ordinal. For readability, the final chronological exhibit stops just before the right edge; terraMuseumData.displayConventions.currentMarker provides a separate 2026 AD / PRESENT ruler endpoint.",
  "currentMarker": {
    "id": "present-day-marker",
    "dateLabel": "2026 AD · PRESENT",
    "dateValue": 2026,
    "timelinePosition": 1,
    "action": "open-world-atlas",
    "note": "A present-day endpoint, not a geological event. The five World Atlas nodes are a separate collection."
  },
  "collectionModel": "Render milestones where isTimelineEvent === true in the chronological cover-flow and time-lapse. Render collectionType === 'world-atlas' in the 2026 World Explorer. The catalog may show both collections, grouped by collectionType.",
  "deepTime": "For broad intervals or disputed evidence, use 'c.', 'about', 'approximately' or an interval label. Avoid a one-date presentation for processes that lasted millions of years.",
  "bceCe": "BCE and CE display labels use familiar year labels. Signed dateValue is a convenient sort coordinate and not a strict historical calendar arithmetic engine.",
  "tourismFlightTimes": "Rounded illustrative flight-time estimates in existing atlas nodes use London as a baseline; routings, nonstop service and entry requirements change. Verify live schedules and official guidance.",
  "historicalTelemetry": "Atmospheric oxygen, surface temperature and day length values are period-level context. Deep-time estimates vary by proxy and model; display the detail and confidence fields and avoid treating them as precise local measurements.",
  "wikipediaImageApi": "https://en.wikipedia.org/api/rest_v1/page/summary/{encodeURIComponent(articleTitle)}",
  "imageFallbackPolicy": "Render a procedural SVG immediately. Upgrade to originalimage.source or thumbnail.source only after validating the response, checking the URL protocol and handling a successful image load. Keep the fallback visible on errors or offline.",
  "imageUsage": "Wikipedia summaries can supply images, but image license and attribution must be checked on the source page before public reuse. Do not assume every image is public domain or Creative Commons.",
  "ambientAudio": "Generate client-side with Web Audio API; start only after explicit user interaction and include a visible mute/off state.",
  "anthropocene": "Anthropocene may be used as an environmental-history or curatorial theme, but it is not a formally ratified geological epoch. Avoid presenting it as a formal unit on the chronostratigraphic timescale."
};
