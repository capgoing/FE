import React, { createContext, useContext, useState } from "react";
import { speak as speakImpl, stop as stopImpl } from "../utils/tts";

const TTSContext = createContext();

export function useTTS() {
  return useContext(TTSContext);
}

export function TTSProvider({ children }) {
  const [shouldSpeak, setShouldSpeak] = useState(true);

  const speak = (text) => {
    if (shouldSpeak) {
      speakImpl(text);
    }
  };

  const stop = () => {
    stopImpl();
  };


  return (
    <TTSContext.Provider value={{ shouldSpeak, setShouldSpeak, speak, stop }}>
      {children}
    </TTSContext.Provider>
  );
}
