import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes";
import GlobalStyle from "./styles/globalstyles";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <MainRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
