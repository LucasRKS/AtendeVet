import { StatusBar } from 'react-native';
import { NativeBaseProvider } from "native-base";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { Routes } from '@routes/index';

import { AuthContextProvider } from '@contexts/AuthContext';

import { THEME } from './src/themes';
import { LoadingScreen } from '@components/LoadingScreen';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar 
        barStyle="dark-content" 
        backgroundColor="transparent" 
        translucent 
      />

      <AuthContextProvider>
        {fontsLoaded ? <Routes /> : <LoadingScreen />}
      </AuthContextProvider>
    </NativeBaseProvider>
  );
}