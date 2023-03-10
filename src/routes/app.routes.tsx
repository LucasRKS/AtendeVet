import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from "@screens/Home";
import { PetRecord } from "@screens/PetRecord";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  return(
    <Navigator>
      <Screen name='home' component={Home}/>
      <Screen name='petRecord' component={PetRecord} />
    </Navigator>
  )
}