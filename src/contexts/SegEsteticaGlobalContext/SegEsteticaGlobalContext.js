import React, { createContext, useContext, useState } from "react";

const segEsteticaGlobalContext = createContext();

export const SegEsteticaGlobalContext = ({ children }) => {
  // Convenção: null serve pra dizer que não tem token

  const [token, setToken] = useState(null);

  const data = {
    tokenDoUsuario: token, setTokenDoUsuario: setToken,
  };

  return (
    <segEsteticaGlobalContext.Provider value={data}>
      {children}
    </segEsteticaGlobalContext.Provider>
  );
};

export const useSegEsteticaContext = () => {
  const context = useContext(segEsteticaGlobalContext);

  const { tokenDoUsuario, setTokenDoUsuario } = context;

  return {
    tokenDoUsuario, setTokenDoUsuario
  };
};
