import { useMsal } from "@azure/msal-react";
import { Button, Stack, Typography } from "@mui/material";

export const Login = () => {
    const { instance } = useMsal();

    const loginPopup = () => {
        instance.loginPopup().catch((e) => console.error(e));
    };

    const loginRedirect = () => {
        instance.loginRedirect().catch((e) => console.error(e));
    };

    return (
        <Stack spacing={2} alignItems="center" justifyContent="center" mt={5}>
            <Typography variant="h5">Sign in</Typography>
            <Button variant="contained" color="secondary" onClick={loginPopup}>
                Login with Popup
            </Button>
            <Button variant="outlined" color="secondary" onClick={loginRedirect}>
                Login with Redirect
            </Button>
        </Stack>
    );
};
