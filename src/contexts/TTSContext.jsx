// src/contexts/TTSContext.js
import React, { createContext, useContext, useState } from "react";
const TTSContext = createContext();
export function useTTS() {
  return useContext(TTSContext);
}
export function TTSProvider({ children }) {
  const [shouldSpeak, setShouldSpeak] = useState(false);
  return (
    <TTSContext.Provider value={{ shouldSpeak, setShouldSpeak }}>
      {children}
    </TTSContext.Provider>
  );
}
