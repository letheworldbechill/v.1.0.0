# Smooth Builder MVP – Status-Check (12 Features)

Stand: 2026-03-06

## Gesamtstatus: ~52% fertig

Die Architektur ist solide. Design-Token-System und Static-Export sind fast production-ready.
Die grössten Lücken liegen im Business-Value-Layer (Kontaktformular, SEO, City-Pages).

---

## Feature-Übersicht

| # | Feature | Status | Bereit |
|---|---------|--------|--------|
| 1 | Industry Site Generator | Teilweise | ~60% |
| 2 | High-Converting Template System | Teilweise | ~50% |
| 3 | Brand Customization (Design Tokens) | Fast fertig | ~85% |
| 4 | Services Section Generator | Fertig | ~80% |
| 5 | Trust Elements Generator | Grösstenteils | ~70% |
| 6 | Built-in Contact Form | Kritische Lücke | ~30% |
| 7 | SEO Structure Generator | Lückenhaft | ~25% |
| 8 | Legal Compliance Generator | Grösstenteils | ~75% |
| 9 | Static Website Export | Fast fertig | ~90% |
| 10 | Instant Hosting | Nicht vorhanden | 0% |
| 11 | Programmatic SEO Pages | Nicht vorhanden | 0% |
| 12 | Simple Editor (Content Only) | Teilweise | ~65% |

---

## Detail-Analyse

### 1. Industry Site Generator (~60%)

**Vorhanden:**
- 9 Industry Templates (Treuhand, Anwalt, IT/SaaS, Fitness, Gastro, KMU, Handwerker, Arzt, Restaurant, Immobilien, Coiffeur)
- Company Name, Services, Farben konfigurierbar
- Auto Style Engine leitet Preset/Font/Density aus Branche ab

**Fehlt:**
- Geführter Onboarding-Wizard ("Website in 3 Minuten")
- Explizite Stadt-Auswahl als Input-Feld
- Logo-Upload als Teil des Wizards
- Kontaktdaten-Eingabe im ersten Schritt

### 2. High-Converting Template System (~50%)

**Vorhanden:**
- Mehrere Industry-Templates mit Hero, Trust, Services, Testimonials, CTA, Footer
- 5 Style Presets (signature, swiss, editorial, glass, luxe)

**Fehlt:**
- Fokus auf 3 conversion-optimierte Meta-Templates:
  - Professional Services
  - Local Business
  - SaaS Startup
- Aktuell branchenspezifisch statt conversion-optimiert

### 3. Brand Customization / Design Tokens (~85%)

**Vorhanden:**
- `generateTokensCSS()` mit vollständigen CSS Custom Properties
- `--c-brand-primary`, `--c-brand-accent`, `--font-body`, `--font-display`
- `--radius-sm/md/lg/xl`, `--sp-1` bis `--sp-7` (8px Fibonacci)
- `auto-style-engine.js` für branchenbasierte Auto-Konfiguration
- 6 Font Stacks, 3 Density Modes, Dark Mode Support

**Fehlt:**
- Logo-Upload als Design-Token-Trigger (Farben aus Logo extrahieren → UI)

### 4. Services Section Generator (~80%)

**Vorhanden:**
- User gibt Services ein → Builder generiert Karten-Grid
- `generateServicesHTML()` mit responsive 3-Spalten-Layout
- Icon/Emoji + Titel + Beschreibung pro Service
- In allen Templates integriert

**Fehlt:**
- Nichts Wesentliches – funktioniert

### 5. Trust Elements Generator (~70%)

**Vorhanden:**
- Trust Bar (Stats: "500+ Kunden", "25+ Jahre")
- Testimonials (Quote + Author + Role, 1→3 Spalten)
- Authority Strip (Zertifikate, Badges)
- Proof Table (Vergleichstabelle)

**Fehlt:**
- Client-Logos-Sektion (Markenlogos in Reihe)
- Dedizierte "Jahre Erfahrung"-Counter-Komponente

### 6. Built-in Contact Form (~30%) ⚠️ KRITISCH

**Vorhanden:**
- CTA-Sektion mit Telefon/Email (klickbare Links)

**Fehlt:**
- Echtes Kontaktformular (Name, Email, Phone, Message)
- Form-Submission-Backend (Email, Webhook, API)
- Formspree/Netlify Forms Integration
- Validierung (Client-side)
- Spam-Schutz (Honeypot/reCAPTCHA)

### 7. SEO Structure Generator (~25%)

**Vorhanden:**
- `<meta name="description">` wird generiert
- `<title>` wird gesetzt
- `<meta name="viewport">` korrekt

**Fehlt:**
- OpenGraph-Tags (`og:title`, `og:description`, `og:image`)
- Twitter Card Tags
- Canonical URLs (`<link rel="canonical">`)
- `sitemap.xml` Generator
- `robots.txt` Generator
- JSON-LD Structured Data (LocalBusiness Schema)
- Heading-Hierarchie-Validierung (H1 → H2 → H3)

### 8. Legal Compliance Generator (~75%)

**Vorhanden:**
- `generateImpressumHTML()` – Impressum-Seite
- `generateDatenschutzHTML()` – Datenschutz-Seite
- Cookie-Banner mit Consent-Management
- GA4/Matomo erst nach Consent (Script-Parking)
- DSG/DSGVO-konform

**Fehlt:**
- Dynamischere Inhalte basierend auf Company-Inputs
- Branchenspezifische Datenschutz-Klauseln
- Cookie-Kategorien (funktional, statistisch, marketing)

### 9. Static Website Export (~90%)

**Vorhanden:**
- `exportProductionZip()` mit JSZip
- Struktur: `index.html`, `css/tokens.css`, `css/components.css`, `js/main.js`, `assets/`
- Multi-Page-Export (3-Seiten: +Leistungen, Über uns / 5-Seiten: +Kontakt, FAQ)
- Impressum + Datenschutz als separate HTML-Dateien
- Asset-Extraktion (data-URLs → Dateien)
- Backup-JSON für Re-Import
- Export-Validator (Preflight-Checks)

**Fehlt:**
- Nichts Wesentliches – fast production-ready

### 10. Instant Hosting (0%)

**Vorhanden:**
- Nichts

**Fehlt:**
- Cloudflare Pages API Integration
- Netlify Deploy API
- Vercel Deploy API
- 1-Click-Deploy Button
- Custom Domain Setup

### 11. Programmatic SEO Pages (0%)

**Vorhanden:**
- Nichts (Multi-Page ≠ Programmatic SEO)

**Fehlt:**
- Stadt + Service Kombinations-Generator
- Template: `/buchhaltung-zuerich`, `/buchhaltung-bern`, `/buchhaltung-basel`
- Bulk-Page-Generation aus Daten
- Unique Content pro Kombination
- Internal Linking zwischen City-Pages

### 12. Simple Editor / Content Only (~65%)

**Vorhanden:**
- Sidebar-Editor für alle Komponenten
- Text-Inputs, Textareas, Color Pickers, Selects
- Repeatable Lists (Services, Testimonials, FAQ)
- Drag-and-Drop Reihenfolge
- Undo/Redo (30 Steps)
- Component Toggle (ein/aus)
- Image Picker

**Fehlt:**
- Dedizierter "Content-Only"-Modus (Layout gesperrt)
- Inline-Editing in der Vorschau
- Vereinfachte Ansicht ohne technische Optionen

---

## Priorisierte Roadmap

### Phase 1: Business-Value (Woche 1–2)
1. **Kontaktformular** – Ohne Lead-Capture kein Business-Value
2. **SEO Generator** – sitemap.xml, OG-Tags, robots.txt, JSON-LD
3. **Onboarding-Wizard** – Geführter 3-Minuten-Flow

### Phase 2: Killer-Features (Woche 2–3)
4. **Programmatic SEO Pages** – Stadt+Service City-Pages
5. **3 Conversion-Templates** – Professional Services / Local Business / SaaS

### Phase 3: Distribution (Woche 3–4)
6. **Instant Hosting** – Netlify/Vercel 1-Click-Deploy
7. **Content-Only Editor Mode** – Vereinfachte Ansicht

### Phase 4: Polish (Woche 4–5)
8. **Trust Elements erweitern** – Client-Logos, Erfahrungs-Counter
9. **Legal Compliance verbessern** – Dynamischere Inhalte
10. **Logo-Upload → Design Tokens** – Farben aus Logo extrahieren

---

## Was NICHT gebaut werden soll (jetzt)

- Drag-and-Drop Layout Builder
- Animation Editor
- Plugin Marketplace
- CMS Editor
- Component Designer
- Blog/E-Commerce
- TypeScript Migration
- Build Pipeline (Vite/Webpack)
