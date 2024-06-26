import { View, Image } from 'react-native';
import React from 'react';
import { globalStyle } from '../styles/globalStyle';
import { useHomeStore } from '../store/home-store';

export const Images = () => {
  const element = useHomeStore(state => state.element);
  return element ? (
    <View style={globalStyle.images}>
      {element.Etiqueta.includes('GHS01') ? (
        <Image
          style={globalStyle.image}
          source={require('../../../vendor/GHS01.png')}
        />
      ) : null}
      {element.Etiqueta.includes('GHS02') ? (
        <Image
          style={globalStyle.image}
          source={require('../../../vendor/GHS02.png')}
        />
      ) : null}
      {element.Etiqueta.includes('GHS03') ? (
        <Image
          style={globalStyle.image}
          source={require('../../../vendor/GHS03.png')}
        />
      ) : null}
      {element.Etiqueta.includes('GHS04') ? (
        <Image
          style={globalStyle.image}
          source={require('../../../vendor/GHS04.png')}
        />
      ) : null}
      {element.Etiqueta.includes('GHS05') ? (
        <Image
          style={globalStyle.image}
          source={require('../../../vendor/GHS05.png')}
        />
      ) : null}
      {element.Etiqueta.includes('GHS06') ? (
        <Image
          style={globalStyle.image}
          source={require('../../../vendor/GHS06.png')}
        />
      ) : null}
      {element.Etiqueta.includes('GHS07') ? (
        <Image
          style={globalStyle.image}
          source={require('../../../vendor/GHS07.png')}
        />
      ) : null}
      {element.Etiqueta.includes('GHS08') ? (
        <Image
          style={globalStyle.image}
          source={require('../../../vendor/GHS08.png')}
        />
      ) : null}
      {element.Etiqueta.includes('GHS09') ? (
        <Image
          style={globalStyle.image}
          source={require('../../../vendor/GHS09.png')}
        />
      ) : null}
    </View>
  ) : null;
};
