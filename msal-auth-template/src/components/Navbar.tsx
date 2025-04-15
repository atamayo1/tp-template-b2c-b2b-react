import { useMsal } from "@azure/msal-react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const Navbar = () => {
    const { instance, accounts } = useMsal();
    const [username, setUsername] = useState("");

    useEffect(() => {
        if (accounts.length > 0) {
            setUsername(accounts[0].username);
        }
    }, [accounts]);

    const handleLogout = () => {
        instance.logoutRedirect();
    };

    const isAuthenticated = accounts.length > 0;

    return (
        <AppBar position="static" color="secondary">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    MSAL Auth Template
                </Typography>
                <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                    <Button color="inherit" component={Link} to="/protected">
                        Home
                    </Button>
                    <Button color="inherit" component={Link} to="/protected">
                        Protected
                    </Button>
                    {!isAuthenticated ? (
                        <Button color="inherit" component={Link} to="/login">
                            Login
                        </Button>
                    ) : (
                        <>
                            <Typography variant="body2">{username}</Typography>
                            <Button color="inherit" onClick={handleLogout}>
                                Logout
                            </Button>
                        </>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

