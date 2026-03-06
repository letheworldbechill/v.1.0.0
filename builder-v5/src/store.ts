/**
 * Smooth Builder v5 - Store
 *
 * State Machine: VIEW ↔ EDIT ↔ UTILITY (all reversible)
 * Quality Gates: INT-06, INT-09, ACC-03
 */
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { BuilderState, Project, BuilderElement, INITIAL_PROJECT, ElementType } from './types';

interface State {
  // State Machine (nur 3 erlaubte States)
  state: BuilderState;

  // Projekt
  project: Project;

  // Aktuell ausgewähltes Element (für EDIT)
  selectedId: string | null;

  // History für Undo (INT-09)
  history: Project[];
  historyIndex: number;
}

interface Actions {
  // State Transitions (alle reversibel - INT-06)
  toView: () => void;
  toEdit: (id: string) => void;
  toUtility: () => void;

  // Element-Bearbeitung
  updateElement: (id: string, content: Partial<BuilderElement['content']>) => void;
  updateBusinessName: (name: string) => void;
  updateContact: (contact: Partial<Project['contact']>) => void;
  addElement: (type: ElementType) => void;
  removeElement: (id: string) => void;
  moveElement: (id: string, direction: 'up' | 'down') => void;

  // Theme
  toggleTheme: () => void;

  // History
  undo: () => void;

  // Reset
  resetProject: () => void;
}

const MAX_HISTORY = 20;

export const useStore = create<State & Actions>()(
  persist(
    (set, get) => {
      // Snapshot current project into undo history
      const pushHistory = () => {
        const { project, history, historyIndex } = get();
        const newHistory = [...history.slice(0, historyIndex + 1), JSON.parse(JSON.stringify(project))];
        if (newHistory.length > MAX_HISTORY) newHistory.shift();
        return { history: newHistory, historyIndex: newHistory.length - 1 };
      };

      return {
        // Initial State
        state: 'VIEW',
        project: INITIAL_PROJECT,
        selectedId: null,
        history: [],
        historyIndex: -1,

        // === State Transitions (alle reversibel) ===

        toView: () => set({ state: 'VIEW', selectedId: null }),

        toEdit: (id) => set({ state: 'EDIT', selectedId: id }),

        toUtility: () => set({ state: 'UTILITY', selectedId: null }),

        // === Element Operations ===

        updateElement: (id, content) => {
          const { project } = get();
          set({
            ...pushHistory(),
            project: {
              ...project,
              elements: project.elements.map(el =>
                el.id === id ? { ...el, content: { ...el.content, ...content } as Record<string, string> } : el
              ),
            },
          });
        },

        updateBusinessName: (name) => {
          const { project } = get();
          set({
            ...pushHistory(),
            project: { ...project, businessName: name },
          });
        },

        updateContact: (contact) => {
          const { project } = get();
          set({
            ...pushHistory(),
            project: { ...project, contact: { ...project.contact, ...contact } },
          });
        },

        addElement: (type) => {
          const { project } = get();
          const historyUpdate = pushHistory();

          const newElement: BuilderElement = {
            id: `${type}-${Date.now()}`,
            type,
            content: getDefaultContent(type),
            order: project.elements.length,
          };

          // Insert before footer
          const footerIndex = project.elements.findIndex(el => el.type === 'footer');
          const elements = [...project.elements];
          if (footerIndex >= 0) {
            elements.splice(footerIndex, 0, newElement);
          } else {
            elements.push(newElement);
          }

          set({
            ...historyUpdate,
            project: {
              ...project,
              elements: elements.map((el, i) => ({ ...el, order: i })),
            },
            state: 'EDIT',
            selectedId: newElement.id,
          });
        },

        removeElement: (id) => {
          const { project } = get();
          const element = project.elements.find(el => el.id === id);

          // Prevent removing hero, contact, footer
          if (element && ['hero', 'contact', 'footer'].includes(element.type)) return;

          set({
            ...pushHistory(),
            project: {
              ...project,
              elements: project.elements.filter(el => el.id !== id),
            },
            state: 'VIEW',
            selectedId: null,
          });
        },

        moveElement: (id, direction) => {
          const { project } = get();
          const elements = [...project.elements];
          const index = elements.findIndex(el => el.id === id);
          if (index === -1) return;

          const newIndex = direction === 'up' ? index - 1 : index + 1;
          if (newIndex < 0 || newIndex >= elements.length) return;

          // Don't move past hero or footer
          if (elements[newIndex].type === 'hero' || elements[newIndex].type === 'footer') return;
          if (elements[index].type === 'hero' || elements[index].type === 'footer') return;

          [elements[index], elements[newIndex]] = [elements[newIndex], elements[index]];

          set({
            ...pushHistory(),
            project: {
              ...project,
              elements: elements.map((el, i) => ({ ...el, order: i })),
            },
          });
        },

        // === Theme ===

        toggleTheme: () => {
          const { project } = get();
          set({ project: { ...project, theme: project.theme === 'light' ? 'dark' : 'light' } });
        },

        // === History (INT-09: Undo) ===

        undo: () => {
          const { history, historyIndex } = get();
          if (historyIndex < 0) return;

          set({
            project: history[historyIndex],
            historyIndex: historyIndex - 1,
          });
        },

        // === Reset (saves history so undo works) ===

        resetProject: () => {
          set({
            ...pushHistory(),
            project: INITIAL_PROJECT,
            state: 'VIEW',
            selectedId: null,
          });
        },
      };
    },
    {
      name: 'smooth-builder-v5',
      partialize: (state) => ({ project: state.project }),
    }
  )
);

// Helper
function getDefaultContent(type: ElementType): Record<string, string> {
  switch (type) {
    case 'hero': return { title: 'Neue Sektion', subtitle: '' };
    case 'text': return { heading: 'Überschrift', body: 'Text hier...' };
    case 'contact': return { heading: 'Kontakt' };
    case 'footer': return { text: `© ${new Date().getFullYear()}` };
  }
}
