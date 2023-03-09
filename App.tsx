import { StatusBar } from 'react-native';
import { NativeBaseProvider } from "native-base";
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';

import { THEME } from './src/themes';
import { LoadingScreen } from '@components/LoadingScreen';
import { Routes } from '@routes/index';

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular});

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor="transparent" 
        translucent 
      />

      {fontsLoaded ? <Routes /> : <LoadingScreen/>}
    </NativeBaseProvider>
  );
}