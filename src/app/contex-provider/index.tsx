'use client';

import React, { createContext, useContext, useState } from 'react';

export interface GlobalState {
  isLoading: boolean;
  // Add more state properties as needed
}

const ThemeContext = createContext<GlobalState | any>(undefined);

export default function ContextThemeProvider({ children }: any) {
  const [globalState, setGlobalState] = useState<GlobalState>({
    isLoading: false,
    // Initialize additional state properties here
  });

  return (
    <ThemeContext.Provider value={{ ...globalState, setGlobalState }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to access the global context
export const useGlobalContext = () => useContext(ThemeContext);
