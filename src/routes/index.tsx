import { DefaultTheme, NavigationContainer } from "@react-navigation/native"; 

import { useAuth } from "@hooks/useAuth";

import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const theme = DefaultTheme;
  const { user } = useAuth();

  return(
    <NavigationContainer theme={theme}>
      <AuthRoutes/>
    </NavigationContainer>
  );
}