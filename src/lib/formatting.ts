import { ExhibitMilestone } from '@/types';

/**
 * Filters timeline milestones by era category and text query.
 */
export function filterTimelineMilestones(
  milestones: ExhibitMilestone[],
  filterEra: string,
  search: string
): ExhibitMilestone[] {
  const q = search.trim().toLowerCase();
  return milestones.filter((m) => {
    const matchesEra = filterEra === 'ALL' || m.eraFilter === filterEra;
    const matchesQuery =
      !q ||
      m.title.toLowerCase().includes(q) ||
      m.dateLabel.toLowerCase().includes(q) ||
      m.classification.toLowerCase().includes(q) ||
      m.subExhibits.some((v) => v.label.toLowerCase().includes(q));
    return matchesEra && matchesQuery;
  });
}

/**
 * Filters world atlas guides by era category and text query.
 */
export function filterAtlasGuides(
  guides: ExhibitMilestone[],
  filterEra: string,
  search: string
): ExhibitMilestone[] {
  const q = search.trim().toLowerCase();
  return guides.filter((m) => {
    const matchesEra = filterEra === 'ALL' || m.eraFilter === filterEra;
    const matchesQuery =
      !q ||
      m.title.toLowerCase().includes(q) ||
      m.classification.toLowerCase().includes(q) ||
      m.subExhibits.some((v) => v.label.toLowerCase().includes(q));
    return matchesEra && matchesQuery;
  });
}

/**
 * Formats a raw number or year string into clean display format.
 */
export function formatDateLabel(label: string): string {
  if (!label) return '';
  return label.trim();
}
