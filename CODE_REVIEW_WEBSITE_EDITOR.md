# Code Review – Website Editor

## Scope
- Datei: `index.html`
- Fokus: Architektur, Sicherheit, Performance, Maintainability und UX im Editor-Teil.

## Zusammenfassung (Kurzfazit)
Der Editor ist funktionsreich und deckt viele Anwendungsfälle ab. Die größte technische Schuld liegt in der monolithischen Struktur (alles in einer HTML-Datei), dem Runtime-Transpiling mit Babel im Browser und ungesicherten CDN-Abhängigkeiten ohne SRI.

## Findings

### 1) Runtime-Transpiling im Browser (High)
**Beobachtung:** JSX wird im Browser via `@babel/standalone` transpiliert.

**Risiko:**
- Längere Startzeit (insb. mobile Geräte).
- Höherer CPU-Verbrauch beim Laden.
- Schlechtere Caching-/Bundling-Strategie.

**Empfehlung:**
- Build-Schritt einführen (Vite/esbuild/Rollup).
- Vortranspiliertes JS in Produktion ausliefern.

### 2) Externe CDN-Skripte ohne Subresource Integrity (High)
**Beobachtung:** React, ReactDOM, Babel, JSZip, FileSaver werden von CDNs geladen, aber ohne `integrity`-Attribute.

**Risiko:**
- Supply-Chain-Angriffsfläche erhöht.
- Sicherheitsniveau sinkt bei kompromittierter CDN-Lieferkette.

**Empfehlung:**
- `integrity` + `crossorigin="anonymous"` ergänzen oder Artefakte selbst hosten.
- Versionen pinnen und Release-Review etablieren.

### 3) Monolithische Datei mit sehr großer Inline-Logik (Medium)
**Beobachtung:** Styles, Utilities, React-Komponenten, Init und zusätzliche Base64-Embedded-Ressourcen liegen in einer Datei.

**Risiko:**
- Hohe Änderungsrisiken (Regressionen).
- Erschwerte Reviewbarkeit/Testbarkeit.
- Größere Payload und schlechtere Wartbarkeit.

**Empfehlung:**
- Modularisieren in `styles`, `core/utils`, `editor/components`, `preview/components`.
- Optional: lazy load für selten genutzte Tools (z. B. eingebettete Generatoren).

### 4) Keyboard-Shortcuts: unvollständiger Guard (Medium, behoben)
**Beobachtung:** Shortcuts wurden nur für `INPUT`/`TEXTAREA` unterdrückt.

**Auswirkung vorher:**
- Shortcuts konnten in `SELECT` oder `contenteditable` unerwartet feuern.

**Umgesetzte Verbesserung:**
- Guard erweitert auf `SELECT`, `contenteditable` und `event.defaultPrevented`.

### 5) `dangerouslySetInnerHTML` für Icons (Low)
**Beobachtung:** SVG-Icons werden per `dangerouslySetInnerHTML` gerendert.

**Risiko:**
- Aktuell beherrschbar, solange Quellen strikt intern/konstant bleiben.
- Potenziell kritisch bei späteren dynamischen/externen SVG-Quellen.

**Empfehlung:**
- Icons als React-Komponenten oder sanitisiertes SVG-Parsing nutzen.
- Sicherheitskommentar direkt an der Stelle dokumentieren.

## Priorisierte Maßnahmen (nächste Schritte)
1. Build-Pipeline einführen und Babel-Standalone entfernen.
2. CDN-Skripte mit SRI absichern oder lokal hosten.
3. Datei modularisieren und Editor/Preview trennen.
4. Weitere Accessibility-/Keyboard-Tests automatisieren.
