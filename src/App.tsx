import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './presentation/routes/StackNavigator';
import { PaperProvider } from 'react-native-paper';

export const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </PaperProvider>
  );
};
