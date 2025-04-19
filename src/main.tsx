import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";

import "@fontsource/outfit";
import "@fontsource/roboto";
import App from "./App.tsx";
import { ScrollProvider } from "./components/ScrollContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollProvider>
        <App />
      </ScrollProvider>
    </BrowserRouter>
  </React.StrictMode>
);
