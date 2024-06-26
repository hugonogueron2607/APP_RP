import { create } from 'zustand';
import { HomeState } from '../interfaces';

export const useHomeStore = create<HomeState>()((set, get) => ({
  text: '',
  element: undefined,
  isSearching: false,

  search(texto) {
    set({ text: texto });

    get().text.length > 0
      ? set({ isSearching: true })
      : set({ isSearching: false });
  },

  selectElement(elemento) {
    set({ isSearching: false });
    set({ text: '' });
    set({ element: elemento });
  },
}));
