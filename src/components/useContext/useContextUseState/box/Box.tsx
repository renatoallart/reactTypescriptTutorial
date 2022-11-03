import React from "react";
import { useThemeContext } from "./ThemeProvider";

export function Box() {
  const { primary, secondary } = useThemeContext();
  return (
    <div style={{ backgroundColor: primary.main, color: primary.text }}>
      Box
    </div>
  );
}
