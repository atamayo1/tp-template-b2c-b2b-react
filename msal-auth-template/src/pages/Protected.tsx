import { Typography, Container } from "@mui/material";

export const Protected = () => {
    return (
        <Container>
            <Typography variant="h4" mt={4}>
                Protected page: Only for authenticated users
            </Typography>
        </Container>
    );
};

