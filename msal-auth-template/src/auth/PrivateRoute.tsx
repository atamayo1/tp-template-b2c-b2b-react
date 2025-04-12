import { ReactNode } from "react";
import { useIsAuthenticated } from "@azure/msal-react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
    children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const isAuthenticated = useIsAuthenticated();

    return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
