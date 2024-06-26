import React from 'react';
import { ScrollView } from 'react-native';
import { globalStyle } from '../styles/globalStyle';
import {
  Classification,
  Contact,
  Effect,
  Elimination,
  Group,
  SearchResult,
  Storage,
  Title,
} from '../components';

export const HomeScreen = () => {
  return (
    <ScrollView style={globalStyle.container}>
      <SearchResult />
      <Title />
      <Group />
      <Classification />
      <Storage />
      <Elimination />
      <Contact />
      <Effect />
    </ScrollView>
  );
};
