import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { build1600RetinaUrl } from '../src/lib/wikipedia';
import {
  getActiveSpecs,
  formatSequenceBadge,
  getCenterSlideStyle,
  getSideLeftSlideStyle,
  getSideRightSlideStyle
} from '../src/lib/timeline';
import { filterTimelineMilestones, filterAtlasGuides } from '../src/lib/formatting';
import { timelineMilestones } from '../src/data/milestones';
import { atlasGuides } from '../src/data/atlasNodes';

describe('Library Utilities Tests', () => {
  describe('Wikipedia Retina URL Builder', () => {
    test('Upgrades standard Wikimedia thumbnail to 1600px', () => {
      const response = {
        thumbnail: {
          source: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Aurora_Australis.jpg/320px-Aurora_Australis.jpg'
        }
      };
      const url = build1600RetinaUrl(response);
      assert.equal(
        url,
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Aurora_Australis.jpg/1600px-Aurora_Australis.jpg'
      );
    });

    test('Falls back to originalimage when thumbnail has no /thumb/', () => {
      const response = {
        originalimage: {
          source: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Aurora_Australis.jpg'
        }
      };
      const url = build1600RetinaUrl(response);
      assert.equal(url, 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Aurora_Australis.jpg');
    });

    test('Returns null for missing or invalid images', () => {
      assert.equal(build1600RetinaUrl({}), null);
    });
  });

  describe('Timeline Calculations and Specs', () => {
    test('Extracts historical telemetry specs for timeline milestones', () => {
      const milestone = timelineMilestones[0];
      const variant = milestone.subExhibits[0];
      const specs = getActiveSpecs(milestone, variant, false);

      assert.equal(specs.length, 4);
      assert.equal(specs[0].label, 'SURFACE TEMP');
      assert.equal(specs[1].label, 'ATMOSPHERE O₂');
      assert.equal(specs[2].label, 'DAY LENGTH');
      assert.equal(specs[3].label, 'DOMINANT SYSTEM / LIFE');
      assert.ok(specs[0].value.includes('Magma Ocean') || specs[0].value.includes('magma'));
    });

    test('Extracts tourism specs for atlas destinations', () => {
      const atlasNode = atlasGuides[0];
      const destination = atlasNode.subExhibits[0];
      const specs = getActiveSpecs(atlasNode, destination, true);

      assert.equal(specs.length, 4);
      assert.equal(specs[0].label, 'SIGNATURE CUISINE');
      assert.equal(specs[1].label, 'ICONIC LANDMARK');
      assert.equal(specs[2].label, 'AVG FLIGHT / BEST SEASON');
      assert.equal(specs[3].label, 'CULTURAL HIGHLIGHT');
    });

    test('Formats sequence badges accurately for timeline and atlas', () => {
      const badge1 = formatSequenceBadge(timelineMilestones[0], timelineMilestones, atlasGuides, false);
      assert.equal(badge1, '1 of 42');

      const badgeAtlas = formatSequenceBadge(atlasGuides[0], timelineMilestones, atlasGuides, true);
      assert.equal(badgeAtlas, 'Atlas 1 of 5');
    });

    test('Calculates cover flow slide styles correctly', () => {
      const centerIdle = getCenterSlideStyle('idle', { x: 2, y: -3, glareX: 50, glareY: 50 });
      assert.ok(centerIdle.transform?.toString().includes('rotateX(2deg)'));
      assert.equal(centerIdle.opacity, 1);

      const centerEnterRight = getCenterSlideStyle('enter-from-right', { x: 0, y: 0, glareX: 50, glareY: 50 });
      assert.ok(centerEnterRight.transform?.toString().includes('translateX(72px)'));

      const sideLeft = getSideLeftSlideStyle('idle');
      assert.equal(sideLeft.opacity, 0.42);

      const sideRight = getSideRightSlideStyle('idle');
      assert.equal(sideRight.opacity, 0.42);
    });
  });

  describe('Search and Filtering', () => {
    test('Filters timeline milestones by search query', () => {
      const results = filterTimelineMilestones(timelineMilestones, 'ALL', 'theia');
      assert.ok(results.length >= 1);
      assert.equal(results[0].id, 'birth-of-terra');
    });

    test('Filters timeline milestones by era', () => {
      const primordial = filterTimelineMilestones(timelineMilestones, 'Primordial', '');
      assert.ok(primordial.length >= 1);
      assert.ok(primordial.every((m) => m.eraFilter === 'Primordial'));
    });

    test('Filters atlas guides by country search', () => {
      const results = filterAtlasGuides(atlasGuides, 'ALL', 'Japan');
      assert.ok(results.length >= 1);
      assert.equal(results[0].id, 'atlas-east-asia');
    });
  });
});
