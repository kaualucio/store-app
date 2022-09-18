import { StatusBar, LogBox } from 'react-native';
import React from 'react';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from '@expo-google-fonts/inter'
import { StripeProvider } from '@stripe/stripe-react-native'

import { Loading } from './src/components/Loading';
import { Background } from './src/components/Background';
import { Routes } from './src/routes';
import { CartContextProvider } from './src/context/CartContext';

LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });


  return (
    <Background>
      <StatusBar 
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <StripeProvider
        publishableKey="pk_test_51KzOgaBzJP4jgpHScuVzflWqubhb453OmYPBGojLlUBUemmPjiM4BZvx7RBPrHn1hFQyawTCw1qLRmhyIpveoslj00udNivjCY"
      >
        <CartContextProvider>
          {fontsLoaded ? <Routes /> : <Loading />}
        </CartContextProvider>
      </StripeProvider>
    </Background>
  );
}
