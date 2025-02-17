import React from "react";
import ReactDOM from "react-dom";
import App from "./App.tsx";
import "./index.css";

import "@fontsource/outfit";
import "@fontsource/roboto";
import { ScrollProvider } from "./components/ScrollContext.tsx";

const root = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <ScrollProvider>
      <App />
    </ScrollProvider>
  </React.StrictMode>,
  root
);
