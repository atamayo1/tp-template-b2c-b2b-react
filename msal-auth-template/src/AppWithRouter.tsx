import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components";
import { AppRoutes } from "./routes";

function AppWithRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default AppWithRouter;
