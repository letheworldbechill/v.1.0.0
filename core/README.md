# Ultra-Core Engine (Builder v5)

Dieser Ordner enthält die extrahierte Minimal-Engine für ultra-leichte Sales-Pages:

- `tokens.css`: zentrale Design Tokens
- `layout.css`: Container/Grid/Split-Layout
- `components.css`: reduzierte UI-Komponenten
- `sections.js`: Sales-Section-Templates (Hero, Trust, Features, Benefits, Testimonials, FAQ, CTA, Footer)
- `generator.js`: Page + Full Document Generator
- `purge.js`: Entfernt ungenutzte CSS-Klassen aus dem finalen Output

## Beispiel

```js
const fs = require('node:fs');
const { buildDocument } = require('./core/generator');

const css = [
  fs.readFileSync('./core/tokens.css', 'utf8'),
  fs.readFileSync('./core/layout.css', 'utf8'),
  fs.readFileSync('./core/components.css', 'utf8')
].join('\n\n');

const page = {
  sections: [
    { type: 'header', data: { brand: 'Acme' } },
    { type: 'hero', data: { title: 'Mehr Leads', text: 'Ultra-light Sales Page', ctaPrimary: 'Termin buchen' } },
    { type: 'cta', data: { title: 'Bereit?', text: 'Jetzt starten', button: 'Kontakt', href: '#kontakt' } },
    { type: 'footer', data: { text: '© Acme' } }
  ]
};

const { html } = buildDocument({ page, css, title: 'Acme Sales' });
```
