// CountdownContext.js
import React, { createContext, useContext, useState } from "react";

const CountdownContext = createContext();

export const CountdownProvider = ({ children }) => {
  const [countdownTime, setCountdownTime] = useState(60);

  return (
    <CountdownContext.Provider value={{ countdownTime, setCountdownTime }}>
      {children}
    </CountdownContext.Provider>
  );
};

export const useCountdownContext = () => useContext(CountdownContext);
