import React from 'react';
import { Surface, Text } from 'react-native-paper';
import { globalStyle } from '../styles/globalStyle';
import { useHomeStore } from '../store/home-store';

export const Group = () => {
  const element = useHomeStore(state => state.element);
  return (
    <Surface style={globalStyle.group} elevation={2}>
      <Text variant="titleMedium" style={globalStyle.groupText}>
        Grupo Reactivo:{' '}
        <Text variant="titleMedium">
          {element ? element.Grupo : `Sin información`}
        </Text>
      </Text>
      <Text variant="titleMedium" style={globalStyle.groupText}>
        {'\n'}Fórmula:{' '}
        <Text variant="titleMedium">
          {element ? element.Formula : `Sin información`}
        </Text>
      </Text>
      <Text variant="titleMedium" style={globalStyle.groupText}>
        {'\n'}Número UN/NA:{' '}
        <Text variant="titleMedium">
          {element ? element.NumeroUN : `Sin información`}
        </Text>
      </Text>
      <Text variant="titleMedium" style={globalStyle.groupText}>
        {'\n'}Número CAS:{' '}
        <Text variant="titleMedium">
          {element ? element.NumeroCas : `Sin información`}
        </Text>
      </Text>
    </Surface>
  );
};
