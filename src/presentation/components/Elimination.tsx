import React from 'react';
import { Surface, Text } from 'react-native-paper';
import { globalStyle } from '../styles/globalStyle';
import { useHomeStore } from '../store/home-store';

export const Elimination = () => {
  const element = useHomeStore(state => state.element);

  return (
    <Surface style={globalStyle.title} elevation={2}>
      <Text variant="titleMedium" style={globalStyle.titleText}>
        Eliminación de derrames
      </Text>
      <Text variant="bodyMedium">
        {element ? element.Derrames : 'Sin información'}
      </Text>
    </Surface>
  );
};
