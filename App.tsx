import React from 'react';
import AppLoading from 'expo-app-loading';
import WellcomePage from './src/pages/Wellcome';
import ConfirmationPage from './src/pages/Confirmation';
import UserIdentificationPage from './src/pages/UserIdentification';
import {useFonts, Jost_400Regular, Jost_600SemiBold} from '@expo-google-fonts/jost';

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_600SemiBold,
    Jost_400Regular,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <ConfirmationPage />
  );
}
