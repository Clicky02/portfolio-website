import React from "react";
import FolderImage from "./FolderImage/FolderImage";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import ScrollLinkButton from "../../general/ScrollLink";

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
