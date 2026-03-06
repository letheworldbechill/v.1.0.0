/**
 * Surface - PRIMARY INTERACTION SURFACE
 * 
 * Quality Gates:
 * - PIS-01: This IS the single surface
 * - PIS-02: Always present and visible
 * - INT-01: All actions reachable (tap to edit)
 * - INT-02: Touch targets ≥ 44px
 */
import React from 'react';
import { useStore } from '../store';

export const Surface: React.FC = () => {
  const { project, selectedId, toEdit, toView } = useStore();
  const { businessName, elements, contact } = project;

  const handleSurfaceClick = (e: React.MouseEvent) => {
    // Click outside elements → back to VIEW
    if ((e.target as HTMLElement).classList.contains('surface')) {
      toView();
    }
  };

  return (
    <main 
      className="surface" 
      onClick={handleSurfaceClick}
      aria-label="Website-Vorschau"
    >
      {/* Business Name - editable */}
      <header className="surface-header">
        <button
          className={`surface-title ${selectedId === 'business-name' ? 'selected' : ''}`}
          onClick={() => toEdit('business-name')}
          aria-label="Firmenname bearbeiten"
          aria-pressed={selectedId === 'business-name'}
        >
          {businessName || 'Tippen für Firmennamen'}
        </button>
      </header>

      {/* Elements */}
      <div className="surface-content">
        {[...elements]
          .sort((a, b) => a.order - b.order)
          .map((element) => (
            <button
              key={element.id}
              className={`surface-element element-${element.type} ${selectedId === element.id ? 'selected' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                toEdit(element.id);
              }}
              aria-label={`${element.type} bearbeiten`}
              aria-pressed={selectedId === element.id}
            >
              {element.type === 'hero' && (
                <div className="element-hero">
                  <h1>{element.content.title || 'Titel'}</h1>
                  {element.content.subtitle && <p>{element.content.subtitle}</p>}
                </div>
              )}

              {element.type === 'text' && (
                <div className="element-text">
                  <h2>{element.content.heading || 'Überschrift'}</h2>
                  <p>{element.content.body || 'Text...'}</p>
                </div>
              )}

              {element.type === 'contact' && (
                <div className="element-contact">
                  <h2>{element.content.heading || 'Kontakt'}</h2>
                  {contact.phone && <p>📞 {contact.phone}</p>}
                  {contact.email && <p>✉️ {contact.email}</p>}
                  {contact.address && <p>📍 {contact.address}</p>}
                  {!contact.phone && !contact.email && !contact.address && (
                    <p className="placeholder">Kontaktdaten hinzufügen...</p>
                  )}
                </div>
              )}

              {element.type === 'footer' && (
                <footer className="element-footer">
                  <p>{element.content.text}</p>
                </footer>
              )}

              {/* Selection Ring - Visual Feedback */}
              <span className="selection-ring" aria-hidden="true" />
            </button>
          ))}
      </div>
    </main>
  );
};
