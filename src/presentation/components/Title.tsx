import React from 'react';
import { Surface, Text } from 'react-native-paper';
import { useHomeStore } from '../store/home-store';
import { globalStyle } from '../styles/globalStyle';

export const Title = () => {
  const element = useHomeStore(state => state.element);
  return (
    <Surface style={globalStyle.title} elevation={2}>
      <Text variant="headlineLarge" style={globalStyle.titleText}>
        {element ? element.Nombre : `Sin información`}
      </Text>
    </Surface>
  );
};
