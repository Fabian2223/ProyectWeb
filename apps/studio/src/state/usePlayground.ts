import { create } from 'zustand';

export const usePlayground = create<{
  activeHtml: string;
  activeJs?: string;
  setHtml: (s: string) => void;
  setJs: (s?: string) => void;
  mode: 'iframe' | 'sandpack';
  setMode: (m: 'iframe' | 'sandpack') => void;
  width: number;
  setWidth: (w: number) => void;
}>((set) => ({
  activeHtml: '', 
  activeJs: '', 
  setHtml: (s) => set((state) => ({ ...state, activeHtml: s })),
  setJs: (s) => set((state) => ({ ...state, activeJs: s || '' })),
  mode: 'iframe',
  setMode: (m) => set((state) => ({ ...state, mode: m })),
  width: 1000,
  setWidth: (w) => set((state) => ({ ...state, width: w })),
}));
