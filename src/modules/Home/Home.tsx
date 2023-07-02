import React from "react";
import FolderImage from "./FolderImage/FolderImage";
import { Box, Button, Container, IconButton, Stack, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

class Home extends React.Component {
    render() {
        return (
            <Box
                mt={"var(--header-height)"}
                minHeight={"calc(100vh - var(--header-height))"}
                display={"flex"}
                alignItems={"center"}
                id={"home"}
            >
                <Container>
                    <Stack flexDirection={"row"} justifyContent={"space-around"} flexWrap={"wrap-reverse"}>
                        <Stack direction={"column"} alignItems={"flex-start"} gap={2} maxWidth={"sm"} mt="auto" mb="auto">
                            <Box>
                                <Typography variant="subtitle1" color={"primary"} fontWeight={"bold"} textAlign={"left"}>
                                    Hello! I'm
                                </Typography>
                                <Typography variant="h2" textAlign={"left"}>
                                    Gareth Fultz
                                </Typography>
                            </Box>
                            <Typography variant="body1" textAlign={"left"}>
                                And I'm a third year computer science student attending the University of Cincinnati. I made this
                                website as a portfolio to showcase some of the stuff I've worked on.
                            </Typography>
                            <Stack direction={"row"} spacing={1}>
                                <IconButton color="primary" href="https://github.com/Clicky02" target="_blank">
                                    <GitHubIcon></GitHubIcon>
                                </IconButton>
                                <IconButton color="primary" href="https://www.linkedin.com/in/gareth-fultz/" target="_blank">
                                    <LinkedInIcon></LinkedInIcon>
                                </IconButton>
                            </Stack>
                        </Stack>
                        <Box display="flex" maxWidth={"400px"} maxHeight={"360px"} flexBasis={"400px"}>
                            <FolderImage />
                        </Box>
                    </Stack>
                </Container>
            </Box>
        );
    }
}

export default Home;
