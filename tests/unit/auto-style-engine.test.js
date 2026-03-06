const test = require('node:test');
const assert = require('node:assert/strict');
const {
  autoStyleEngine,
  normalizeHex,
  pickPrimaryAccent,
  decideDensity,
  buildIndustryPolicy,
  computeContentStats,
  getIndustryColorFallback
} = require('../../auto-style-engine');

test('normalizes short and long hex values', () => {
  assert.equal(normalizeHex('#ABC'), '#aabbcc');
  assert.equal(normalizeHex('00ff99'), '#00ff99');
  assert.equal(normalizeHex('invalid'), null);
});

test('selects different primary/accent colors from logo palette', () => {
  const result = pickPrimaryAccent(['#1e3a5f', '#ca8a04', '#ffffff'], 'anwalt');

  assert.equal(result.primary, '#1e3a5f');
  assert.equal(result.accent, '#ca8a04');
  assert.notEqual(result.primary, result.accent);
});

test('falls back to industry palette when no usable logo colors exist', () => {
  const settings = autoStyleEngine({}, { industryKey: 'it', logoColors: [] });
  const fallback = getIndustryColorFallback('it');

  assert.equal(settings.primaryColor, fallback.primary);
  assert.equal(settings.accentColor, fallback.accent);
});

test('keeps explicit user color stack untouched', () => {
  const settings = {
    useColorStack: true,
    colorStack: ['#111111', '#222222'],
    primaryColor: '#000000',
    accentColor: '#ffffff'
  };

  const result = autoStyleEngine(settings, {
    industryKey: 'treuhand',
    logoColors: ['#ff0000', '#00ff00']
  });

  assert.deepEqual(result.colorStack, ['#111111', '#222222']);
  assert.equal(result.useColorStack, true);
  assert.equal(result.primaryColor, '#000000');
  assert.equal(result.accentColor, '#ffffff');
});

test('respects locks for preset and effects', () => {
  const result = autoStyleEngine(
    { stylePreset: 'editorial', darkMode: false, fxOrbs: false },
    {
      industryKey: 'it',
      locks: { preset: true, fx: true }
    }
  );

  assert.equal(result.stylePreset, 'editorial');
  assert.equal(result.darkMode, false);
  assert.equal(result.fxOrbs, false);
});

test('computes density as compact for content-heavy pages', () => {
  const density = decideDensity(
    {
      servicesCount: 6,
      benefitsCount: 4,
      faqCount: 3,
      hasProofTable: true,
      hasProcess: true,
      heroSubtitleLength: 80,
      avgTextLength: 100
    },
    'treuhand',
    'balanced'
  );

  assert.equal(density, 'compact');
});

test('computes content statistics from component payloads', () => {
  const stats = computeContentStats({
    services: { items: [{}, {}] },
    benefits: { items: [{}, {}, {}] },
    faq: { items: [{}, {}] },
    testimonials: { items: [{}] },
    proofTable: { enabled: true },
    process: { enabled: true },
    gallery: { enabled: false },
    hero: { subtitle: 'Kurzbeschreibung' }
  });

  assert.equal(stats.servicesCount, 2);
  assert.equal(stats.benefitsCount, 3);
  assert.equal(stats.faqCount, 2);
  assert.equal(stats.testimonialsCount, 1);
  assert.equal(stats.hasProofTable, true);
  assert.equal(stats.hasProcess, true);
});

test('builds industry policy with aggressiveness override', () => {
  const policy = buildIndustryPolicy('treuhand', 'bold');

  assert.equal(policy.preset, 'glass');
  assert.equal(policy.fx.orbs, true);
  assert.equal(policy.fx.grain, true);
});
