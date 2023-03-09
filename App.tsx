import { StatusBar, Text } from 'react-native';
import { NativeBaseProvider, Box } from "native-base";
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';

import { THEME } from './src/themes';
import { LoadingScreen } from '@components/LoadingScreen'

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular});

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor="transparent" 
        translucent 
      />

      {fontsLoaded ? <Text>Hello</Text> : <LoadingScreen/>}
    </NativeBaseProvider>
  );
}