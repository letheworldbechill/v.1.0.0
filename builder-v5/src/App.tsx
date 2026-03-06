/**
 * Smooth Builder v5 - App
 * 
 * SINGLE PRIMARY SURFACE ARCHITECTURE
 * 
 * Quality Gates:
 * - PIS-01: Exactly one primary surface (✓ Preview IS the surface)
 * - PIS-02: Surface always present (✓ Never hidden)
 * - PIS-03: No navigation away (✓ No routes)
 * - PIS-04: No secondary canvases (✓ One surface only)
 * - MOB-01: Thumb-reachable (✓ Controls at bottom)
 * - INT-04: Thumb-zone optimized (✓ Bottom 40%)
 */
import React, { useEffect } from 'react';
import { useStore } from './store';
import { Surface } from './components/Surface';
import { BottomPanel } from './components/BottomPanel';
import './styles.css';

export const App: React.FC = () => {
  const { state, project } = useStore();

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', project.theme);
  }, [project.theme]);

  return (
    <div className="app" data-state={state}>
      {/* Skip Link - A11y MUST */}
      <a href="#bottom-panel" className="skip-link">
        Zum Editor springen
      </a>

      {/* 
        PRIMARY INTERACTION SURFACE
        
        Dies IST die einzige Oberfläche.
        Tap auf Element → EDIT state
        Keine Navigation, keine anderen Screens
      */}
      <Surface />

      {/* 
        BOTTOM PANEL (Thumb Zone - untere 40%)
        
        Kontextabhängig:
        - VIEW: "Einstellungen" Button
        - EDIT: Element-Editor
        - UTILITY: Theme/Export
        
        INT-04: Alle Interaktionen im Daumenbereich
      */}
      <BottomPanel />
    </div>
  );
};
