import React from "react";
import { Button, Chip, Container, Stack, Typography } from "@mui/material";
import KVHeadquartersImage from "./images/KVHeadquarters.jpg";
import WPAFBImage from "./images/WPAFBImage.jpg";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import SectionBox from "../../general/SectionBox";
import ExperienceCard from "../../general/ExperienceCard";

class Experience extends React.Component {
    render() {
        return (
            <SectionBox id={"experience"}>
                <Container>
                    <Stack ml="auto" mr="auto" direction={"column"} gap={2} maxWidth={"lg"}>
                        <Typography variant="h3" mb={3}>
                            Experience
                        </Typography>
                        <Stack flexDirection={"row"} justifyContent={"center"} gap={3} flexWrap={"wrap"}>
                            <ExperienceCard
                                image={KVHeadquartersImage}
                                imageTitle="Kinetic Vision's headquarter"
                                skills={["Unity", "Unreal", "C#", "C++", "Vue.js"]}
                                actionNodes={<Button startIcon={<OpenInBrowserIcon />}>Visit Website</Button>}
                            >
                                <Typography variant="h4">Kinetic Vision</Typography>
                                <Typography variant="subtitle1" color={"text.secondary"}>
                                    Software Engineer Co-op
                                </Typography>
                                <Typography variant="subtitle2" color={"text.secondary"} mb={2}>
                                    August 2021 - Present
                                </Typography>
                                <Typography variant="body1" mb={2}>
                                    Utilized game engines and cutting-edge technology to create interactive AR, VR, Web, and other
                                    3D-rendered experiences.
                                </Typography>
                            </ExperienceCard>

                            <ExperienceCard
                                image={WPAFBImage}
                                imageTitle="WPAFB"
                                skills={["Python", "JavaScript", "A-Frame", "HTML/CSS"]}
                                actionNodes={<Button startIcon={<OpenInBrowserIcon />}>Visit Website</Button>}
                            >
                                <Typography variant="h4">Wright-Patterson Air Force Base</Typography>
                                <Typography variant="subtitle1" color={"text.secondary"}>
                                    Wright Scholar Research Assistant
                                </Typography>
                                <Typography variant="subtitle2" color={"text.secondary"} mb={2}>
                                    June 2019 - August 2021
                                </Typography>
                                <Typography variant="body1" mb={2}>
                                    Worked on a toolkit to assist in designing aerospace vehicles using augmented reality and
                                    virtual reality
                                </Typography>
                            </ExperienceCard>
                        </Stack>
                    </Stack>
                </Container>
            </SectionBox>
        );
    }
}

export default Experience;
