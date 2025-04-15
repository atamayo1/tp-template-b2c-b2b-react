import { useIsAuthenticated } from "@azure/msal-react";
import { Navigate } from "react-router-dom";
import { CircularProgress, Container, Typography } from "@mui/material";

export const RedirectHandler = () => {
    const isAuthenticated = useIsAuthenticated();

    return isAuthenticated ? (
        <Navigate to="/protected" />
    ) : (
        <Container sx={{ textAlign: "center", mt: 10 }}>
            <CircularProgress />
            <Typography variant="h6" mt={2}>
                Processing authentication...
            </Typography>
        </Container>
    );
};

