import "./styles/app.css";
import "@total-typescript/ts-reset";
import { App } from "App";
import React, { ReactElement } from "react";
import { createRoot } from "react-dom/client";


const appContainer = document.getElementById("root");
const root = createRoot(appContainer!);

// const App = (): ReactElement => {
//   return <Router/>
// };

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
