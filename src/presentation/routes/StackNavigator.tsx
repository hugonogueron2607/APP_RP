import React from 'react';
import { HomeScreen } from '../screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SearchBar } from '../components/SearchBar';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: () => <SearchBar />,
        }}
      />
    </Stack.Navigator>
  );
};
