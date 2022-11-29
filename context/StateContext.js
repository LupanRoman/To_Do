import { createContext, useState } from 'react';

const StateContext = createContext();

export function ContextProvider({ children }) {
  const DrawerArr = [];

  const addDrawer = () => {
    const userInput = document.getElementById('userInput').value;
    DrawerArr.push({
      title: userInput,
      id: Math.random(1, 5),
      content: [],
    });
    console.log(DrawerArr)
  };
  return <StateContext.Provider 
  value={{
    DrawerArr,
    addDrawer,
  }}>
  {children}</StateContext.Provider>;
}

export default StateContext;
