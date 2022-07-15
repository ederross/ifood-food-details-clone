import React from 'react';
import { useFonts } from '@expo-google-fonts/dm-sans';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/theme';
import FoodDetails from './src/screens/FoodDetails';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';

export default function App() {
  const [fontsLoaded] = useFonts({
    SulSansRegular: require('./assets/fonts/SulSansRegular.otf'),
    SulSansMedium: require('./assets/fonts/SulSansMedium.otf'),
    SulSansBold: require('./assets/fonts/SulSansBold.otf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <FoodDetails />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
