import { Elemento } from './';

export interface HomeState {
  text: string;
  isSearching: boolean;
  element?: Elemento;

  search: (texto: string) => void;
  selectElement: (element: Elemento) => void;
}
