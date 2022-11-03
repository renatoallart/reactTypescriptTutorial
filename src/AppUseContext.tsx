import React from "react";
import { Box } from "./components/useContext/box/Box";
import { ThemeProvider } from "./components/useContext/box/ThemeProvider";
import { UserConxt } from "./components/useContext/useContextUseState/user/UserConxt";

import { UserProvider } from "./components/useContext/useContextUseState/user/UserProvider";

export function AppUseContext() {
  return (
    <main>
      {/* <ThemeProvider>
        <Box />
      </ThemeProvider> */}
      <UserProvider>
        <UserConxt />
      </UserProvider>
    </main>
  );
}
