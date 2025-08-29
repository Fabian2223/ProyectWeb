import { create } from 'zustand';
import * as samples from '@/data/samples';
import type { LegoComponent } from '@/types/lego';

interface LibraryState {
  components: LegoComponent[];
  loadSamples: () => void;
  getById: (id: string) => LegoComponent | undefined;
}

export const useLibrary = create<LibraryState>((set, get) => ({
  components: [],
  loadSamples: () => set({ components: Object.values(samples) as unknown as LegoComponent[] }),
  getById: (id) => get().components.find(c => c.id === id),
}));
