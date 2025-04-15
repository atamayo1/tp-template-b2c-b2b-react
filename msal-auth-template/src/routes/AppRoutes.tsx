import { Routes, Route } from "react-router-dom";
import PrivateRoute from "../auth/PrivateRoute";
import { Login, Protected, RedirectHandler } from '../pages';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route
                path="/protected"
                element={
                    <PrivateRoute>
                        <Protected />
                    </PrivateRoute>
                }
            />
            <Route path="/tppsstudio" element={<RedirectHandler />} />
        </Routes>
    );
};

