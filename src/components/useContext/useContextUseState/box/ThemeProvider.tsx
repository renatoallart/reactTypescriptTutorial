import { createContext, ReactNode, useContext } from "react";
import { theme } from "./Theme";

const ThemeContext = createContext(theme);

export function useThemeContext() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}
