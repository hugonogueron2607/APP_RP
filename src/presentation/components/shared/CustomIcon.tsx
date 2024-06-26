import Icon from 'react-native-vector-icons/Ionicons';

import React from 'react';
import { CustomIconProps } from '../interfaces';

export const CustomIcon = ({ name, size, color }: CustomIconProps) => {
  return (
    <Icon name={name} size={size ? size : 20} color={color ? color : 'black'} />
  );
};
