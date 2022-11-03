import React from "react";
import ReactDOM from "react-dom/client";
import { AppProps } from "./AppProps";
import { AppUseContext } from "./AppUseContext";
import { AppUseReducer } from "./AppUseReducer";
import { AppUseState } from "./AppUseState";
import { Ref } from "./components/useRef/Ref";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <AppProps /> */}
    {/* <AppUseState /> */}
    {/* <AppUseReducer /> */}
    {/* <AppUseContext /> */}
    <Ref />
  </React.StrictMode>
);
