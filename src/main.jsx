import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/700.css"; // Example: adds bold weight
import "@fontsource-variable/jetbrains-mono";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
