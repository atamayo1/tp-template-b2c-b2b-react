import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components";
import { AppRoutes } from "./routes";
import { useIsAuthenticated } from "@azure/msal-react";

function AppWithRouter() {
  const isAuthenticated = useIsAuthenticated();

  return (
    <BrowserRouter>
      {isAuthenticated && <Navbar />}
      <AppRoutes />
    </BrowserRouter>
  );
}

export default AppWithRouter;
