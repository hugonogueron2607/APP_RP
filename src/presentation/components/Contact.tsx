import React from 'react';
import { DataTable, Surface, Text } from 'react-native-paper';
import { globalStyle } from '../styles/globalStyle';
import { useHomeStore } from '../store/home-store';

export const Contact = () => {
  const element = useHomeStore(state => state.element);

  return (
    <Surface style={globalStyle.title} elevation={2}>
      <Text variant="titleMedium" style={globalStyle.titleText}>
        Que hacer en caso de contacto directo
      </Text>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Tipo</DataTable.Title>
          <DataTable.Title>Sintomas</DataTable.Title>
          <DataTable.Title>Prevencion</DataTable.Title>
          <DataTable.Title numberOfLines={2}>Primeros Auxilios</DataTable.Title>
        </DataTable.Header>

        {element?.Contacto.map((contacto, i) => (
          <DataTable.Row key={i}>
            <DataTable.Cell>{contacto.Tipo}</DataTable.Cell>
            <DataTable.Cell>
              <Text numberOfLines={60}>{contacto.Sintomas}</Text>
            </DataTable.Cell>
            <DataTable.Cell>
              <Text numberOfLines={60}>{contacto.Prevencion}</Text>
            </DataTable.Cell>
            <DataTable.Cell>
              <Text numberOfLines={60}>{contacto.Auxilios}</Text>
            </DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </Surface>
  );
};
