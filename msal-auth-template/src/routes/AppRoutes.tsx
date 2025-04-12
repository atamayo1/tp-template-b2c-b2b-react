import { Routes, Route } from "react-router-dom";
import PrivateRoute from "../auth/PrivateRoute";
import { Home, Login, Protected, RedirectHandler } from '../pages';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route
                path="/protected"
                element={
                    <PrivateRoute>
                        <Protected />
                    </PrivateRoute>
                }
            />
            <Route path="/redirect" element={<RedirectHandler />} />
        </Routes>
    );
};

