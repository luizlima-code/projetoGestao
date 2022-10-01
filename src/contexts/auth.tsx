import React, { useState, useContext } from 'react';
import { apiDefault } from '../Services/api';

interface AuthContextData {
  token: string;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = React.createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: AuthProviderProps): React.ReactElement => {
  const [token, setToken] = useState('');


  const signIn = (body: any) => {
    const response = apiDefault.post(`/planner/auth/login`, body);
    localStorage.setItem(
      "@Token",
      JSON.stringify({
        token: response,
      }))
    setToken(token);
  };

  return (
    <AuthContext.Provider value={{ token }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextData {
  return useContext(AuthContext);
}