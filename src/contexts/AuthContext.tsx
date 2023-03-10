import { createContext, ReactNode } from "react";

import { UserDTO } from "@dtos/UserDTO";

export type AuthContextDataProps = {
  user: UserDTO;
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

type AuthContextProviderProps = {
  children: ReactNode;
}

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  return(
    <AuthContext.Provider value={{
      user:
        {accessToken: '00979403995', email: 'lucasrogerioskl@gmail.com', perfil: '123456'}
    }}>
      {children}
    </AuthContext.Provider>
  );
}