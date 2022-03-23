import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';


import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme';

import { FontAwesome5 } from '@expo/vector-icons';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';


import { RestaurantContextProvider } from './src/services/restaurants.context'
import { LocationContextProvider } from './src/services/location/location.context';
import { Navigation } from './src/infrastructure/navigation/index';

export default function App() {

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
    Lato_700Bold
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <LocationContextProvider>
        <RestaurantContextProvider>
          <Navigation />
        </RestaurantContextProvider>
      </LocationContextProvider>
      <ExpoStatusBar style="auto" />
    </ThemeProvider> 
  );
}


