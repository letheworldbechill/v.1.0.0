const test = require('node:test');
const assert = require('node:assert/strict');
const { buildPage, buildDocument } = require('../../core/generator');
const { purgeCSS, extractUsedClasses } = require('../../core/purge');
const { renderSection } = require('../../core/sections');

test('renderSection returns hero markup and escapes html', () => {
  const html = renderSection({
    type: 'hero',
    data: { title: '<script>alert(1)</script>', text: 'Safe', ctaPrimary: 'Start' }
  });

  assert.ok(html.includes('&lt;script&gt;alert(1)&lt;/script&gt;'));
  assert.ok(html.includes('btn btn-primary'));
});

test('buildPage renders known sections only', () => {
  const pageHtml = buildPage({
    sections: [
      { type: 'hero', data: { title: 'Hallo', text: 'World' } },
      { type: 'doesNotExist', data: {} },
      { type: 'cta', data: { title: 'Los gehts', text: 'Jetzt', button: 'Starten' } }
    ]
  });

  assert.ok(pageHtml.includes('<section class="hero">'));
  assert.ok(pageHtml.includes('<div class="cta stack">'));
  assert.equal(pageHtml.includes('doesNotExist'), false);
});

test('extractUsedClasses finds classes from generated html', () => {
  const html = '<div class="hero stack"><a class="btn btn-primary"></a></div>';
  const used = extractUsedClasses(html);

  assert.equal(used.has('hero'), true);
  assert.equal(used.has('btn-primary'), true);
  assert.equal(used.has('missing'), false);
});

test('purgeCSS removes unused class selectors and keeps global rules', () => {
  const html = '<section class="hero"><a class="btn btn-primary">Go</a></section>';
  const css = `
:root { --primary: #000; }
body { margin: 0; }
.hero { padding: 12px; }
.btn { padding: 10px; }
.btn-primary { background: red; }
.fx-orbs { filter: blur(20px); }
`;

  const output = purgeCSS(html, css);

  assert.ok(output.includes(':root'));
  assert.ok(output.includes('body'));
  assert.ok(output.includes('.hero'));
  assert.ok(output.includes('.btn-primary'));
  assert.equal(output.includes('.fx-orbs'), false);
});

test('buildDocument returns minified html and purged css', () => {
  const page = {
    sections: [
      { type: 'header', data: { brand: 'Ultra Builder' } },
      { type: 'hero', data: { title: 'Fast Sales', text: 'Ultra-light output', ctaPrimary: 'Start' } },
      { type: 'footer', data: { text: '© 2026' } }
    ]
  };

  const css = `
.header { position: sticky; }
.hero { padding: 40px; }
.footer { padding: 20px; }
.unused { display: none; }
`;

  const doc = buildDocument({ page, css, title: 'Ultra Test' });

  assert.ok(doc.html.startsWith('<!doctype html>'));
  assert.ok(doc.html.includes('<title>Ultra Test</title>'));
  assert.ok(doc.css.includes('.hero'));
  assert.equal(doc.css.includes('.unused'), false);
});
