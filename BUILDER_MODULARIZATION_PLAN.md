# Builder Modularization Plan

## Ziel
`index.html` ist aktuell ein Monolith (Styles, Konfiguration, Generatoren, State, React UI, Export). Sinnvoll ist ein **schrittweises Splitten nach fachlichen Grenzen** statt "alles auf einmal".

## Empfohlene Zielstruktur

```txt
src/
  config/
    templates.js
    defaults.js
    icons.js
    presets.js
  generators/
    tokens.js
    css.js
    html.js
    js.js
    legal.js
    multipage.js
  export/
    zip.js
    assets.js
  state/
    history.js
    storage.js
  ui/
    app.jsx
    components/
      TemplatesModal.jsx
      SettingsPanel.jsx
      EditorPanel.jsx
      PreviewPane.jsx
  utils/
    escape.js
    colors.js
    filename.js
```

## Warum genau diese Aufteilung?

1. **Config isolieren**
   - `industryTemplates`, `defaultSettings`, `createDefaultComponents` ändern sich oft bei Produktentscheidungen.
   - Diese Daten sollen unabhängig von Generator-/UI-Code versioniert werden.

2. **Generatoren trennen**
   - Tokens/CSS/HTML/JS/Legal/MultiPage sind reine Transformationslogik.
   - Gut testbar über Input/Output ohne Browser.

3. **Export kapseln**
   - ZIP + Asset-Extraktion ist Infrastruktur-Code.
   - Verhindert, dass UI-Komponenten direkten Dateisystem-/Blob-Code kennen.

4. **UI als letzte Schicht**
   - React-Komponenten konsumieren nur klar definierte APIs (`buildSite`, `exportZip`, `applyTemplate`).

## Konkrete Reihenfolge (risikoarm)

### Phase 1 – Read-only Extraktion (ohne Verhaltensänderung)
- `config/templates.js`: nur `industryTemplates` exportieren.
- `config/defaults.js`: `defaultSettings`, `createDefaultComponents`, `defaultComponentOrder`.
- In `index.html` nur Import + Weiterverwendung.

### Phase 2 – Pure Functions isolieren
- `utils/escape.js` (`esc`, `escapeHtml`).
- `generators/html.js` (inkl. Component-Generatoren).
- `generators/multipage.js` (`getPagePackageCount`, `generateMultiPageFiles`).

### Phase 3 – Export Pipeline
- `export/assets.js`: dataURL-Extraktion.
- `export/zip.js`: `exportProductionZip`, `generateReadme`.

### Phase 4 – UI Split
- Start mit `TemplatesModal` und `SettingsPanel`.
- Danach Toolbar/Editor/Preview in eigene Komponenten.

## "Definition of Done" pro Phase
- Keine Änderung am erzeugten Export bei gleichem Input (Snapshot-Vergleich der Dateien).
- Keine Änderung an LocalStorage-Format.
- Keine UI-Regression im Template-Apply-Flow.

## Technische Leitplanken
- Erst **ES Modules** (native `<script type="module">`) einführen.
- Dann optional Build-Step (Vite) ergänzen, falls JSX/TS gewünscht.
- Für jede extrahierte Funktion: 1 minimaler Testfall mit fixem Input/Output.

## Startpunkt im aktuellen Monolith (Referenz)
- Konfiguration/Template-Bereich: `index.html` ab `INDUSTRY TEMPLATES`.
- Defaults: `DEFAULT SETTINGS` + `createDefaultComponents`.
- Generatoren: `TOKENS GENERATOR`, `CSS GENERATOR`, `JS GENERATOR`, `HTML GENERATOR`.
- Export: `ZIP EXPORTER` mit `exportProductionZip`.
- UI: `EDITOR COMPONENTS`, `TemplatesModal`, `MAIN APP`.

## Empfehlung für den nächsten PR
1. Nur **Phase 1** umsetzen.
2. Keine Features mitliefern.
3. PR klein halten (rein strukturell, 0 funktionale Änderungen).
