import React from 'react';
import { View } from 'react-native';
import { globalStyle } from '../styles/globalStyle';
import { Surface, Text } from 'react-native-paper';
import { useHomeStore } from '../store/home-store';

export const Storage = () => {
  const element = useHomeStore(state => state.element);

  return (
    <View style={globalStyle.store}>
      <Surface style={globalStyle.storage} elevation={2}>
        <Text variant="titleMedium" style={globalStyle.titleText}>
          Almacenamiento
        </Text>
        <Text variant="bodyMedium">
          {element ? element.Almacenamiento : 'Sin información'}
        </Text>
      </Surface>
      <Surface style={globalStyle.storage} elevation={2}>
        <Text variant="titleMedium" style={globalStyle.titleText}>
          Embalaje
        </Text>
        <Text variant="bodyMedium">
          {element ? element.Embalaje : 'Sin información'}
        </Text>
      </Surface>
    </View>
  );
};
