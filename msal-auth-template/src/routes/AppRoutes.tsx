import { Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from "../auth/PrivateRoute";
import { Home, Login, NotFound, Protected, RedirectHandler } from "@/pages";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route
                path="/protected"
                element={
                    <PrivateRoute>
                        <Protected />
                    </PrivateRoute>
                }
            />
            <Route path="/tppsstudio" element={<RedirectHandler />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

