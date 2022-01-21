import React, { createContext, useContext, useState } from "react";

const segEsteticaGlobalContext = createContext();

export const SegEsteticaGlobalContext = ({ children }) => {
  // Convenção: null serve pra dizer que não tem token

  const [token, setToken] = useState(null);
  const [uuidUsuario, setUuidUsuario] = useState(null);

  const data = {
    tokenDoUsuario: token, setTokenDoUsuario: setToken,
    uuidDoUsuario: uuidUsuario, setUuidDoUsuario: setUuidUsuario,
  };

  return (
    <segEsteticaGlobalContext.Provider value={data}>
      {children}
    </segEsteticaGlobalContext.Provider>
  );
};

export const useSegEsteticaContext = () => {
  const context = useContext(segEsteticaGlobalContext);

  const {
    tokenDoUsuario,
    setTokenDoUsuario,
    uuidDoUsuario,
    setUuidDoUsuario,
  } = context;

  return {
    tokenDoUsuario,
    setTokenDoUsuario,
    uuidDoUsuario,
    setUuidDoUsuario,
  };
};
