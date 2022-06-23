import React from 'react';

export interface Autenticacao_ContextType {
  email: any;
  password: any;
  signin: (email: string, password: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

export let Autenticacao_Context = React.createContext<Autenticacao_ContextType>(
  null!
);

export function useAutenticacao() {
  return React.useContext(Autenticacao_Context);
}
