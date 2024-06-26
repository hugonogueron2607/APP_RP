import React from 'react';
import { Searchbar } from 'react-native-paper';
import { useHomeStore } from '../store/home-store';
import { CustomIcon } from './shared/CustomIcon';
import { globalStyle } from '../styles/globalStyle';

export const SearchBar = () => {
  const text = useHomeStore(state => state.text);
  const buscar = useHomeStore(state => state.search);

  return (
    <Searchbar
      placeholder="Buscar un elemento"
      icon={() => CustomIcon({ name: 'search' })}
      clearIcon={() => CustomIcon({ name: 'close-circle-outline' })}
      onChangeText={(texto: string) => buscar(texto)}
      elevation={1}
      value={text}
      style={globalStyle.searchBar}
    />
  );
};
