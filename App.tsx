import { View, Text } from 'react-native';
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular});

  return (
    <View>
      {fontsLoaded ? <Text>Hello RN!</Text> : <View/>}
    </View>
  );
}