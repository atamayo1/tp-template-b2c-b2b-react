import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.scss";
import AuthProvider from "./auth/AuthProvider";
import AppWithRouter from "./AppWithRouter";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <AppWithRouter />
    </AuthProvider>
  </React.StrictMode>
);
