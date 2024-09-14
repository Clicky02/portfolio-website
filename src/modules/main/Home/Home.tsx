import React from "react";
import FolderImage from "./FolderImage/FolderImage";
import { Box, Button, Container, IconButton, Stack, Typography } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { withIsSmaller } from "general/BreakpointWrapper";
import ResumePDF from "./assets/Fultz_Gareth_Resume_Fall2024.pdf";

type Props = {
    isSmall: boolean;
};

class Home extends React.Component<Props> {
    render() {
        const logoSize = this.props.isSmall ? 300 : 400;
        const padding = 2;

        return (
            <Box minHeight={"calc(100vh - var(--header-height))"} display={"flex"} alignItems={"center"} id={"home"}>
                <Container>
                    <Stack
                        flexDirection={"row"}
                        justifyContent={"space-around"}
                        flexWrap={"wrap-reverse"}
                        pl={padding + 1}
                        pr={padding}
                    >
                        <Stack direction={"column"} alignItems={"flex-start"} gap={2} maxWidth={"sm"} mt="auto" mb="auto">
                            <Box>
                                <Typography variant="subtitle1" color={"primary"} fontWeight={"bold"} textAlign={"left"}>
                                    Hello! I'm
                                </Typography>
                                <Typography variant="h1" textAlign={"left"}>
                                    Gareth Fultz
                                </Typography>
                            </Box>
                            <Typography variant="body1" textAlign={"left"}>
                                I'm a fourth year computer science student attending the University of Cincinnati. I made this
                                website as a portfolio to showcase some of the cool things I've worked on.
                            </Typography>
                            <Stack direction={"row"} spacing={1}>
                                <IconButton color="primary" href="https://github.com/Clicky02" target="_blank">
                                    <GitHubIcon></GitHubIcon>
                                </IconButton>
                                <IconButton color="primary" href="https://www.linkedin.com/in/gareth-fultz/" target="_blank">
                                    <LinkedInIcon></LinkedInIcon>
                                </IconButton>
                                <Button sx={{ ml: 1 }} startIcon={<DescriptionIcon />} href={ResumePDF} target="_blank">
                                    Resume
                                </Button>
                            </Stack>
                        </Stack>
                        <Box
                            display="flex"
                            maxWidth={logoSize + "px"}
                            maxHeight={logoSize * 0.9 + "px"}
                            flexBasis={logoSize + "px"}
                        >
                            <FolderImage width={logoSize} height={logoSize} />
                        </Box>
                    </Stack>
                </Container>
            </Box>
        );
    }
}

export default withIsSmaller("sm")(Home);
