import React from 'react';
import { Surface, Text } from 'react-native-paper';
import { globalStyle } from '../styles/globalStyle';
import { Images } from './';

export const Classification = () => {
  return (
    <Surface style={globalStyle.classification} elevation={2}>
      <Text variant="titleMedium" style={globalStyle.titleText}>
        Clasificación y etiquetado
      </Text>
      <Images />
    </Surface>
  );
};
