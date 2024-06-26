import React from 'react';
import { View } from 'react-native';
import { Surface, Text } from 'react-native-paper';
import { globalStyle } from '../styles/globalStyle';
import { useHomeStore } from '../store/home-store';

export const Effect = () => {
  const element = useHomeStore(state => state.element);

  return (
    <View style={globalStyle.effect}>
      <Surface style={globalStyle.effects} elevation={2}>
        <Text variant="titleMedium" style={globalStyle.titleText}>
          Efectos de la exposición a corto plazo
        </Text>
        <Text variant="bodyMedium">
          {element ? element.Exposición.Corta : 'Sin información'}
        </Text>
      </Surface>
      <Surface style={globalStyle.effects} elevation={2}>
        <Text variant="titleMedium" style={globalStyle.titleText}>
          Efectos de la exposición a largo plazo
        </Text>
        <Text variant="bodyMedium">
          {element ? element.Exposición.Larga : 'Sin información'}
        </Text>
      </Surface>
    </View>
  );
};
