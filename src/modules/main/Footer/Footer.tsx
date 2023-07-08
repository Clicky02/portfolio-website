import React from "react";
import { Box, Container, IconButton, Link, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SectionBox from "general/SectionBox";
import { withIsSmaller } from "general/BreakpointWrapper";

type Props = {
    isSmall: boolean;
};

class Contact extends React.Component<Props> {
    render() {
        return (
            <SectionBox
                id={"skills"}
                sx={{
                    borderTop: "solid 1px #d0d7de",
                    borderImage:
                        "linear-gradient( 90deg, rgba(255, 255, 255, 1) 0%, rgba(208, 215, 222, 1) 14%, rgba(208, 215, 222, 1) 86%, rgba(255, 255, 255, 1) 100%) 1 1",
                }}
                mt={5}
                pt={4}
                pb={2}
            >
                <Stack direction={"column"} width="100%">
                    <Container maxWidth={"md"}>
                        <Grid container spacing={2}>
                            <Grid sm={0} md={4} textAlign={"left"} display={this.props.isSmall ? "none" : undefined}>
                                <Typography variant="h5">Located</Typography>
                                <Typography variant="body2">Cincinnati, OH</Typography>
                            </Grid>
                            <Grid xs={12} sm={12} md={4}>
                                <IconButton color="primary" href="https://github.com/Clicky02" target="_blank">
                                    <GitHubIcon></GitHubIcon>
                                </IconButton>
                                <IconButton color="primary" href="https://www.linkedin.com/in/gareth-fultz/" target="_blank">
                                    <LinkedInIcon></LinkedInIcon>
                                </IconButton>
                            </Grid>
                            <Grid xs={12} sm={12} md={4} textAlign={this.props.isSmall ? undefined : "right"}>
                                <Typography variant="h5">Contact Me</Typography>
                                <Typography>
                                    <Link variant="body2" href="mailto: garethfultz@gmail.com">
                                        garethfultz@gmail.com
                                    </Link>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Container>

                    <Box mt={4}>
                        <Typography variant="body2">Created by Gareth Fultz © 2023</Typography>
                    </Box>
                </Stack>
            </SectionBox>
        );
    }
}

export default withIsSmaller("md")(Contact);
