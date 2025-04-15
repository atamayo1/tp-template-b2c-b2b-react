import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.scss";
import AuthProvider from "./auth/AuthProvider";
import AppWithRouter from "./AppWithRouter";
import { ErrorBoundary } from "react-error-boundary";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<p>Authentication error occurred.</p>}>
      <AuthProvider>
        <AppWithRouter />
      </AuthProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
