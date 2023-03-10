import { createContext, ReactNode, useState } from "react";

import { api } from '@services/api';
import { UserDTO } from "@dtos/UserDTO";

export type AuthContextDataProps = {
  user: UserDTO;
  signIn: (document: string, password: string) => void;
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

type AuthContextProviderProps = {
  children: ReactNode;
}

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<UserDTO>({});

  async function signIn(document: string, password: string) {
    const { data } = await api.post('/client', {document});
    console.log(data);
    setUser({accessToken: '', email: '', perfil: ''});
  }

  return(
    <AuthContext.Provider value={{ user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}