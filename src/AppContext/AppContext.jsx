import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [dark, setDark] = useState(false);

  return (
    <AppContext.Provider value={{ dark, setDark }}>
      {children}
    </AppContext.Provider>
  );
};
