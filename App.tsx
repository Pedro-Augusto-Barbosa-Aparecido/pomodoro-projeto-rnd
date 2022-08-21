import { NativeBaseProvider, StatusBar } from 'native-base';
import React from 'react';
import { THEME } from './src/styles/theme';

import { useFonts, Roboto_700Bold, Roboto_400Regular } from "@expo-google-fonts/roboto";
import { Loader } from './src/components/Spinner';
import { Home } from './src/screens/Home';
import { Routes } from './src/screens/Routes';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar 
        barStyle='light-content'
        backgroundColor="transparent"
        translucent
      />
      { fontsLoaded ? <Routes /> : <Loader /> }
    </NativeBaseProvider>
  );
}
