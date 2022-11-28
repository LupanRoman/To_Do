import { createContext, useState } from 'react';

const StateContext = createContext();

export function ContextProvider({ children }) {
  return <StateContext.Provider value={{}}>{children}</StateContext.Provider>;
}

export default StateContext;
