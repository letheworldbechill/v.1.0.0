/**
 * BottomPanel - THUMB ZONE CONTROLS
 * 
 * Quality Gates:
 * - MOB-01: Thumb-reachable (bottom of screen)
 * - INT-04: Thumb-zone optimized
 * - INT-07: No modal dialogs
 * - UI-02: No menus required
 */
import React from 'react';
import { useStore } from '../store';
import { Editor } from './Editor';
import { Utility } from './Utility';

export const BottomPanel: React.FC = () => {
  const { state, toUtility, toView } = useStore();

  return (
    <section 
      id="bottom-panel"
      className="bottom-panel"
      data-state={state}
      aria-label={
        state === 'VIEW' ? 'Aktionen' : 
        state === 'EDIT' ? 'Element bearbeiten' : 
        'Einstellungen'
      }
    >
      {/* VIEW State: Nur Utility-Trigger */}
      {state === 'VIEW' && (
        <div className="panel-view">
          <button 
            className="panel-action"
            onClick={toUtility}
            aria-label="Einstellungen öffnen"
          >
            <span className="action-icon">⚙️</span>
            <span>Einstellungen & Export</span>
          </button>
        </div>
      )}

      {/* EDIT State: Element-Editor */}
      {state === 'EDIT' && <Editor />}

      {/* UTILITY State: Theme, Export, etc. */}
      {state === 'UTILITY' && <Utility />}

      {/* Back Button - immer sichtbar ausser in VIEW */}
      {state !== 'VIEW' && (
        <button 
          className="panel-back"
          onClick={toView}
          aria-label="Zurück zur Ansicht"
        >
          ← Fertig
        </button>
      )}
    </section>
  );
};
