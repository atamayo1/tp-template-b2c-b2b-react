import { Typography, Container } from "@mui/material";

export const Home = () => {
    return (
        <Container>
            <Typography variant="h4" mt={4}>
                Página privada: Home - Only for authenticated users
            </Typography>
        </Container>
    );
};
