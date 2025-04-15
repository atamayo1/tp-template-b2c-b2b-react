import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components";
import { AppRoutes } from "./routes";
import { useMsal } from "@azure/msal-react";

function AppWithRouter() {
  const { accounts } = useMsal();

  const isAuthenticated = accounts.length > 0;

  return (
    <BrowserRouter>
      {isAuthenticated && <Navbar />}
      <AppRoutes />
    </BrowserRouter>
  );
}

export default AppWithRouter;
