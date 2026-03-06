/**
 * Utility - AUXILIARY FUNCTIONS
 * 
 * Quality Gates:
 * - INT-11: No hamburger menus (inline controls)
 * - INT-07: No modal dialogs (inline expansion)
 * - ACC-04: URL/QR access (export function)
 */
import React, { useState } from 'react';
import { useStore } from '../store';
import { Project } from '../types';

export const Utility: React.FC = () => {
  const { project, toggleTheme, resetProject, addElement } = useStore();
  const [exported, setExported] = useState(false);

  const handleExport = () => {
    const html = generateHTML(project);
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${project.businessName || 'website'}.html`;
    a.click();
    URL.revokeObjectURL(url);
    setExported(true);
    setTimeout(() => setExported(false), 2000);
  };

  const handleReset = () => {
    // No confirmation dialog (INT-07) - use undo instead
    resetProject();
  };

  return (
    <div className="utility">
      <h3 className="utility-title">Einstellungen</h3>

      {/* Theme Toggle - Direct Manipulation */}
      <div className="utility-section">
        <span>Farbschema</span>
        <button 
          className="utility-toggle"
          onClick={toggleTheme}
          aria-pressed={project.theme === 'dark'}
        >
          {project.theme === 'light' ? '☀️ Hell' : '🌙 Dunkel'}
        </button>
      </div>

      {/* Add Element */}
      <div className="utility-section">
        <span>Element hinzufügen</span>
        <button 
          className="utility-btn"
          onClick={() => addElement('text')}
        >
          + Textabschnitt
        </button>
      </div>

      {/* Export */}
      <div className="utility-section">
        <span>Website exportieren</span>
        <button 
          className="utility-btn primary"
          onClick={handleExport}
        >
          {exported ? '✓ Heruntergeladen!' : '📥 Als HTML herunterladen'}
        </button>
      </div>

      {/* Reset - with inline feedback instead of dialog */}
      <div className="utility-section">
        <span>Projekt zurücksetzen</span>
        <button 
          className="utility-btn danger"
          onClick={handleReset}
        >
          🗑️ Neu beginnen
        </button>
        <small className="utility-hint">Nutzen Sie "Rückgängig" falls versehentlich</small>
      </div>
    </div>
  );
};

// HTML Generator
function generateHTML(project: Project): string {
  const { businessName, elements, theme, contact } = project;
  
  const css = `
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { 
      font-family: system-ui, sans-serif; 
      line-height: 1.6;
      background: ${theme === 'dark' ? '#1a1a2e' : '#ffffff'};
      color: ${theme === 'dark' ? '#eaeaea' : '#1a1a2e'};
    }
    .container { max-width: 800px; margin: 0 auto; padding: 24px; }
    header { padding: 48px 0; text-align: center; }
    h1 { font-size: 2.5rem; margin-bottom: 8px; }
    h2 { font-size: 1.5rem; margin-bottom: 16px; margin-top: 48px; }
    p { margin-bottom: 16px; }
    section { padding: 24px 0; }
    footer { 
      padding: 24px 0; 
      margin-top: 48px; 
      border-top: 1px solid ${theme === 'dark' ? '#333' : '#eee'}; 
      text-align: center;
      color: ${theme === 'dark' ? '#888' : '#666'};
    }
    .contact p { margin-bottom: 8px; }
  `;

  const body = [...elements]
    .sort((a, b) => a.order - b.order)
    .map((el) => {
      if (el.type === 'hero') {
        return `
          <header>
            <h1>${escapeHTML(businessName || el.content.title || '')}</h1>
            ${el.content.subtitle ? `<p>${escapeHTML(el.content.subtitle)}</p>` : ''}
          </header>
        `;
      }
      if (el.type === 'text') {
        return `
          <section>
            <h2>${escapeHTML(el.content.heading || '')}</h2>
            <p>${escapeHTML(el.content.body || '')}</p>
          </section>
        `;
      }
      if (el.type === 'contact') {
        return `
          <section class="contact">
            <h2>${escapeHTML(el.content.heading || 'Kontakt')}</h2>
            ${contact.phone ? `<p>📞 ${escapeHTML(contact.phone)}</p>` : ''}
            ${contact.email ? `<p>✉️ <a href="mailto:${escapeHTML(contact.email)}">${escapeHTML(contact.email)}</a></p>` : ''}
            ${contact.address ? `<p>📍 ${escapeHTML(contact.address)}</p>` : ''}
          </section>
        `;
      }
      if (el.type === 'footer') {
        return `
          <footer>
            <p>${escapeHTML(el.content.text || '')}</p>
          </footer>
        `;
      }
      return '';
    })
    .join('\n');

  return `<!DOCTYPE html>
<html lang="de-CH">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHTML(businessName || 'Meine Website')}</title>
  <style>${css}</style>
</head>
<body>
  <div class="container">
    ${body}
  </div>
</body>
</html>`;
}

function escapeHTML(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
