/**
 * Editor - CONTEXTUAL ELEMENT EDITING
 * 
 * Quality Gates:
 * - INT-02: Touch targets ≥ 44px
 * - INT-05: No hover-dependent functionality
 * - UI-03: No explicit edit mode toggle
 */
import React from 'react';
import { useStore } from '../store';

export const Editor: React.FC = () => {
  const {
    selectedId,
    project,
    updateElement,
    updateBusinessName,
    updateContact,
    removeElement,
    moveElement,
    addElement,
    historyIndex,
    undo,
  } = useStore();

  // Business Name Editor
  if (selectedId === 'business-name') {
    return (
      <div className="editor">
        <h3 className="editor-title">Firmenname</h3>
        <input
          type="text"
          className="editor-input"
          value={project.businessName}
          onChange={(e) => updateBusinessName(e.target.value)}
          placeholder="Ihr Firmenname"
          autoFocus
        />
      </div>
    );
  }

  // Find selected element
  const element = project.elements.find(el => el.id === selectedId);
  
  if (!element) {
    return (
      <div className="editor">
        <p className="editor-empty">Tippen Sie auf ein Element zum Bearbeiten</p>
        
        {/* Add Element */}
        <div className="editor-add">
          <span>Element hinzufügen:</span>
          <button onClick={() => addElement('text')} className="editor-add-btn">
            + Text
          </button>
        </div>
      </div>
    );
  }

  // Element-specific editors
  return (
    <div className="editor">
      <h3 className="editor-title">
        {element.type === 'hero' && '🏠 Hero'}
        {element.type === 'text' && '📝 Text'}
        {element.type === 'contact' && '📱 Kontakt'}
        {element.type === 'footer' && '📄 Footer'}
      </h3>

      {/* Hero Editor */}
      {element.type === 'hero' && (
        <>
          <label className="editor-label">
            Titel
            <input
              type="text"
              className="editor-input"
              value={element.content.title || ''}
              onChange={(e) => updateElement(element.id, { title: e.target.value })}
              placeholder="Hauptüberschrift"
            />
          </label>
          <label className="editor-label">
            Untertitel
            <input
              type="text"
              className="editor-input"
              value={element.content.subtitle || ''}
              onChange={(e) => updateElement(element.id, { subtitle: e.target.value })}
              placeholder="Optional"
            />
          </label>
        </>
      )}

      {/* Text Editor */}
      {element.type === 'text' && (
        <>
          <label className="editor-label">
            Überschrift
            <input
              type="text"
              className="editor-input"
              value={element.content.heading || ''}
              onChange={(e) => updateElement(element.id, { heading: e.target.value })}
            />
          </label>
          <label className="editor-label">
            Text
            <textarea
              className="editor-textarea"
              value={element.content.body || ''}
              onChange={(e) => updateElement(element.id, { body: e.target.value })}
              rows={3}
            />
          </label>
          
          {/* Actions for Text (can be deleted/moved) */}
          <div className="editor-actions">
            <button 
              onClick={() => moveElement(element.id, 'up')}
              className="editor-action"
              aria-label="Nach oben"
            >
              ↑
            </button>
            <button 
              onClick={() => moveElement(element.id, 'down')}
              className="editor-action"
              aria-label="Nach unten"
            >
              ↓
            </button>
            <button 
              onClick={() => removeElement(element.id)}
              className="editor-action danger"
              aria-label="Löschen"
            >
              🗑️
            </button>
          </div>
        </>
      )}

      {/* Contact Editor */}
      {element.type === 'contact' && (
        <>
          <label className="editor-label">
            Überschrift
            <input
              type="text"
              className="editor-input"
              value={element.content.heading || ''}
              onChange={(e) => updateElement(element.id, { heading: e.target.value })}
            />
          </label>
          <label className="editor-label">
            Telefon
            <input
              type="tel"
              className="editor-input"
              value={project.contact.phone || ''}
              onChange={(e) => updateContact({ phone: e.target.value })}
              placeholder="+41 XX XXX XX XX"
            />
          </label>
          <label className="editor-label">
            E-Mail
            <input
              type="email"
              className="editor-input"
              value={project.contact.email || ''}
              onChange={(e) => updateContact({ email: e.target.value })}
              placeholder="info@beispiel.ch"
            />
          </label>
          <label className="editor-label">
            Adresse
            <input
              type="text"
              className="editor-input"
              value={project.contact.address || ''}
              onChange={(e) => updateContact({ address: e.target.value })}
              placeholder="Musterstrasse 1, 8000 Zürich"
            />
          </label>
        </>
      )}

      {/* Footer Editor */}
      {element.type === 'footer' && (
        <label className="editor-label">
          Footer-Text
          <input
            type="text"
            className="editor-input"
            value={element.content.text || ''}
            onChange={(e) => updateElement(element.id, { text: e.target.value })}
          />
        </label>
      )}

      {/* Undo (INT-09) */}
      {historyIndex >= 0 && (
        <button onClick={undo} className="editor-undo">
          ↩️ Rückgängig
        </button>
      )}
    </div>
  );
};
