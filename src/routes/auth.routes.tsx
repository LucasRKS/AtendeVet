import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from '@screens/Login';

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return  (
    <Navigator initialRouteName='login' screenOptions={{ headerShown: false }}>
      <Screen name="login" component={Login} />
    </Navigator>
  )
}