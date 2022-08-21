import { NativeBaseProvider, StatusBar } from 'native-base';
import React from 'react';
import { THEME } from './src/styles/theme';

import { useFonts, Roboto_700Bold, Roboto_400Regular } from "@expo-google-fonts/roboto";
import { Loader } from './src/components/Spinner';
import { Routes } from './src/screens/Routes';
import { CounterContextProvider } from './src/context/counterContext';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar 
        barStyle='light-content'
        backgroundColor="transparent"
        translucent
      />
      <CounterContextProvider>
        { fontsLoaded ? <Routes /> : <Loader /> }
      </CounterContextProvider>
    </NativeBaseProvider>
  );
}
