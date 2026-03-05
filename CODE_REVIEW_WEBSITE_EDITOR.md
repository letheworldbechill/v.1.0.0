# Code Review – Website Editor (`index.html`)

## Kurzfazit
Der Editor ist funktional umfangreich und enthält bereits sinnvolle Qualitätssicherungs-Bausteine (SafetyLayer, ExportValidator, Consent-Mechanik). Im aktuellen Stand gibt es jedoch einige Risiken bei **Security**, **Robustheit** und **Produktions-Performance**.

## Findings

### 1) [High] Externe Runtime-Dependencies ohne Subresource Integrity (SRI)
**Beobachtung**
- Kritische Laufzeit-Abhängigkeiten werden direkt von CDNs geladen (React, ReactDOM, Babel, JSZip, FileSaver), aber ohne `integrity`-Attribute.

**Risiko**
- Supply-Chain-Risiko bei kompromittiertem CDN/Transit.
- Schwer auditierbar und weniger deterministische Builds.

**Empfehlung**
- Alle externen Script-Dependencies pinnen + `integrity` + `crossorigin="anonymous"` nutzen.
- Besser: Dependencies build-time bundlen und lokal ausliefern.

---

### 2) [High] `console.error`-Hook kann bei zirkulären Objekten selbst crashen
**Beobachtung**
- Im SafetyLayer wird `console.error` überschrieben und Objekte via `JSON.stringify` serialisiert.
- Bei zirkulären Referenzen wirft `JSON.stringify` einen Fehler.

**Risiko**
- Der Error-Logger kann im Fehlerfall selbst aussteigen.
- Folgefehler/fehlende Diagnostik im produktiven Betrieb.

**Empfehlung**
- Defensive Serialisierung (`safeStringify` mit `WeakSet`) einsetzen.
- Fallback auf `String(a)` im Catch.

---

### 3) [Medium] Dynamic HTML + Inline-Handler (`innerHTML`, `onclick`) erschwert sichere CSP
**Beobachtung**
- Das Overlay wird mit `innerHTML` erzeugt und enthält Inline-`onclick`-Handler.

**Risiko**
- Strikte CSP (`script-src` ohne `unsafe-inline`) wird blockiert.
- Muster ist fehleranfälliger für DOM-Injection in künftigen Erweiterungen.

**Empfehlung**
- DOM-Elemente per `createElement` erstellen und Listener via `addEventListener` binden.
- Inline-Handler vollständig vermeiden.

---

### 4) [Medium] JSX-Transpilation im Browser (`text/babel`) in Production
**Beobachtung**
- Mehrere Script-Blöcke laufen als `type="text/babel"`, daher transpiliert der Browser zur Laufzeit.

**Risiko**
- Deutlich längere Startzeit/TTI auf schwächeren Geräten.
- Schwerer zu minifizieren/optimieren.

**Empfehlung**
- Build-Step (z. B. Vite/Webpack/esbuild) einführen.
- Produktionsoutput als vortranspiliertes, minimiertes JS ausliefern.

## Positiv aufgefallen
- SafetyLayer + ExportValidator als Guardrails sind ein guter Ansatz.
- Tracking/Consent-Logik ist strukturiert und mit Validierung kombiniert.
- Umfangreiche Accessibility- und Motion-Fallbacks im Styling vorhanden.
