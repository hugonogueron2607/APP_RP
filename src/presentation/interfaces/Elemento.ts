export interface Elemento {
  Nombre: string;
  Formula: string;
  Grupo: string;
  NumeroCas: string;
  NumeroUN: string;
  Etiqueta: string[];
  Almacenamiento: string;
  Embalaje: string;
  Derrames: string;
  Contacto: Contacto[];
  Exposición: Exposición;
}

export interface Contacto {
  Tipo: string;
  Sintomas?: string;
  Prevencion?: string;
  Auxilios?: string;
}

export interface Exposición {
  Corta: string;
  Larga: string;
}
