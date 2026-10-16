import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { timelineMilestones } from '../src/data/milestones';
import { atlasGuides } from '../src/data/atlasNodes';
import { displayConventions } from '../src/data/displayConventions';
import { sourceReferences } from '../src/data/sources';

describe('Data Integrity and Schema Tests', () => {
  test('Contains exactly 42 timeline milestones and 5 atlas guides', () => {
    assert.equal(timelineMilestones.length, 42, 'Should have exactly 42 timeline milestones');
    assert.equal(atlasGuides.length, 5, 'Should have exactly 5 world atlas guides');
    assert.equal(timelineMilestones.length + atlasGuides.length, 47, 'Total exhibits should be 47');
  });

  test('Milestones start with birth-of-terra and end with james-webb-launch', () => {
    assert.equal(timelineMilestones[0].id, 'birth-of-terra');
    assert.equal(timelineMilestones[timelineMilestones.length - 1].id, 'james-webb-launch');
  });

  test('Chronological ordering of timeline milestones is preserved', () => {
    for (let i = 0; i < timelineMilestones.length - 1; i++) {
      const current = timelineMilestones[i];
      const next = timelineMilestones[i + 1];
      assert.ok(
        (current.timelineCoordinate ?? 0) <= (next.timelineCoordinate ?? 0),
        `Timeline coordinates should be chronological: ${current.id} <= ${next.id}`
      );
    }
  });

  test('Every milestone has required metadata and valid sub-exhibits', () => {
    const all = [...timelineMilestones, ...atlasGuides];
    for (const m of all) {
      assert.ok(m.id, 'Milestone must have id');
      assert.ok(m.title, `Milestone ${m.id} must have title`);
      assert.ok(m.classification, `Milestone ${m.id} must have classification`);
      assert.ok(m.eyebrow, `Milestone ${m.id} must have eyebrow`);
      assert.ok(m.dateLabel, `Milestone ${m.id} must have dateLabel`);
      assert.ok(m.palette && m.palette.length > 0, `Milestone ${m.id} must have palette`);
      assert.ok(Array.isArray(m.subExhibits) && m.subExhibits.length >= 1, `Milestone ${m.id} must have subExhibits`);
      
      for (const sub of m.subExhibits) {
        assert.ok(sub.id, `Sub-exhibit in ${m.id} must have id`);
        assert.ok(sub.label, `Sub-exhibit in ${m.id} must have label`);
        assert.ok(sub.articleTitle, `Sub-exhibit in ${m.id} must have articleTitle`);
        assert.ok(sub.caption, `Sub-exhibit in ${m.id} must have caption`);
      }
    }
  });

  test('Atlas nodes are sequentially indexed from 1 to 5', () => {
    atlasGuides.forEach((guide, idx) => {
      assert.equal(guide.atlasPosition, idx + 1);
      assert.equal(guide.collectionType, 'world-atlas');
      assert.equal(guide.isTimelineEvent, false);
      assert.ok(guide.subExhibits.every(s => s.specs && s.specs.cuisine && s.specs.landmark));
    });
  });

  test('Display conventions and 2026 AD PRESENT marker are preserved', () => {
    assert.equal(displayConventions.currentMarker.id, 'present-day-marker');
    assert.equal(displayConventions.currentMarker.dateLabel, '2026 AD · PRESENT');
    assert.equal(displayConventions.currentMarker.timelinePosition, 1.0);
  });

  test('Source references are populated', () => {
    assert.ok(Object.keys(sourceReferences).length >= 25, 'Should contain at least 25 reference sources');
    assert.ok(sourceReferences['nasa-earth-facts']);
    assert.ok(sourceReferences['unesco-giza']);
  });
});
