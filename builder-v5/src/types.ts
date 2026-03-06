/**
 * Smooth Builder v5 - Types
 * 
 * Quality Gates:
 * - PIS-01: Single primary surface
 * - INT-06: Reversible state transitions
 * - ACC-01: No user accounts
 */

// State Machine - NUR diese 3 States erlaubt (State Transition Playbook)
export type BuilderState = 'VIEW' | 'EDIT' | 'UTILITY';

// Element-Typen die auf der Surface bearbeitet werden
export type ElementType = 'hero' | 'text' | 'contact' | 'footer';

// Ein bearbeitbares Element
export interface BuilderElement {
  id: string;
  type: ElementType;
  content: Record<string, string>;
  order: number;
}

// Theme
export type ThemeMode = 'light' | 'dark';

// Projekt
export interface Project {
  businessName: string;
  elements: BuilderElement[];
  theme: ThemeMode;
  contact: {
    phone?: string;
    email?: string;
    address?: string;
  };
}

// Default Elemente
export const DEFAULT_ELEMENTS: BuilderElement[] = [
  {
    id: 'hero-1',
    type: 'hero',
    content: { title: 'Willkommen', subtitle: 'Tippen zum Bearbeiten' },
    order: 0,
  },
  {
    id: 'text-1',
    type: 'text',
    content: { heading: 'Über uns', body: 'Beschreiben Sie Ihr Unternehmen.' },
    order: 1,
  },
  {
    id: 'contact-1',
    type: 'contact',
    content: { heading: 'Kontakt' },
    order: 2,
  },
  {
    id: 'footer-1',
    type: 'footer',
    content: { text: `© ${new Date().getFullYear()}` },
    order: 3,
  },
];

// Initial Project
export const INITIAL_PROJECT: Project = {
  businessName: '',
  elements: DEFAULT_ELEMENTS,
  theme: 'light',
  contact: {},
};
