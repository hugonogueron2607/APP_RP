import React from 'react';
import { List, Surface } from 'react-native-paper';
import { globalStyle } from '../styles/globalStyle';
import sustancias from '../../db/datos.json';
import { useHomeStore } from '../store/home-store';

export const SearchResult = () => {
  const texto = useHomeStore(state => state.text);
  const isSearching = useHomeStore(state => state.isSearching);
  const selectElement = useHomeStore(state => state.selectElement);

  const resultado = sustancias.filter(sustancia => {
    if (
      sustancia.Nombre.toLowerCase().includes(texto.toLowerCase()) ||
      sustancia.NumeroUN.toLowerCase().includes(texto.toLowerCase()) ||
      sustancia.NumeroCas.toLowerCase().includes(texto.toLowerCase())
    )
      return sustancia;
  });

  return isSearching ? (
    <Surface mode="flat" style={globalStyle.results} elevation={4}>
      {resultado.length > 0 ? (
        resultado.map((sustancia, i) => (
          <List.Item
            key={i}
            title={sustancia.Nombre}
            onPress={() => selectElement(sustancia)}
          />
        ))
      ) : (
        <List.Item title="Sin resultados" />
      )}
    </Surface>
  ) : null;
};
