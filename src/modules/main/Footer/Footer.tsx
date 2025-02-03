import { Box, Container, IconButton, Link, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useIsSmaller } from "general/BreakpointWrapper";

export function Footer() {
    const isSmall = useIsSmaller("md");

    return (
        <Box
            sx={{
                borderTop: "solid 1px #d0d7de",
                borderImage:
                    "linear-gradient( 90deg, rgba(255, 255, 255, 1) 0%, rgba(208, 215, 222, 1) 14%, rgba(208, 215, 222, 1) 86%, rgba(255, 255, 255, 1) 100%) 1 1",
            }}
            mt={3}
            pt={3}
            pb={3}
            display={"flex"}
            alignItems={"center"}
        >
            <Stack direction={"column"} width="100%">
                <Container maxWidth={"md"}>
                    <Grid container spacing={2}>
                        <Grid size={{ sm: 0, md: 4 }} textAlign={"left"} display={isSmall ? "none" : undefined}>
                            <Typography variant="h5">Located</Typography>
                            <Typography variant="body2">Cincinnati, OH</Typography>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 12, md: 4 }}>
                            <IconButton color="primary" href="https://github.com/Clicky02" target="_blank">
                                <GitHubIcon></GitHubIcon>
                            </IconButton>
                            <IconButton color="primary" href="https://www.linkedin.com/in/gareth-fultz/" target="_blank">
                                <LinkedInIcon></LinkedInIcon>
                            </IconButton>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 12, md: 4 }} textAlign={isSmall ? undefined : "right"}>
                            <Typography variant="h5">Contact Me</Typography>
                            <Typography>
                                <Link variant="body2" href="mailto: garethfultz@gmail.com">
                                    garethfultz@gmail.com
                                </Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>

                <Box mt={2}>
                    <Typography variant="body2">Created by Gareth Fultz © 2025</Typography>
                </Box>
            </Stack>
        </Box>
    );
}
