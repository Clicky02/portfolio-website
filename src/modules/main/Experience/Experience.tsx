import React from "react";
import { Button, Container, Stack, Typography } from "@mui/material";
import KVHeadquartersImage from "./images/KVHeadquarters.jpg";
import WPAFBImage from "./images/WPAFBImage.jpg";
import SRCImage from "./images/src-building.jpg";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import SectionBox from "general/SectionBox";
import ExperienceCard from "general/ExperienceCard";

class Experience extends React.Component {
    render() {
        return (
            <SectionBox id={"experience"}>
                <Container maxWidth={"xl"}>
                    <Stack ml="auto" mr="auto" direction={"column"} gap={2}>
                        <Typography variant="h2" mb={3}>
                            Experience
                        </Typography>
                        <Stack flexDirection={"row"} justifyContent={"center"} gap={3} flexWrap={"wrap"}>
                            <ExperienceCard
                                image={SRCImage}
                                imageTitle="SRC's headquarter"
                                skills={["Typescript", "Python", "Rust", "React", "Flask"]}
                                actionNodes={
                                    <Button startIcon={<OpenInBrowserIcon />} href="https://www.srcinc.com/" target="_blank">
                                        Visit Website
                                    </Button>
                                }
                            >
                                <Typography variant="h3">SRC</Typography>
                                <Typography variant="subtitle1" color={"text.secondary"}>
                                    Software Engineer Co-op
                                </Typography>
                                <Typography variant="subtitle2" color={"text.secondary"} mb={2}>
                                    January 2024 - August 2024
                                </Typography>
                                <Typography variant="body1" mb={2}>
                                    Designed and created a tool for demonstrating and debugging arbitrary algorithms and algorithm
                                    chains. Created a Rust library for reading and writing a specific file type.
                                </Typography>
                            </ExperienceCard>

                            <ExperienceCard
                                image={KVHeadquartersImage}
                                imageTitle="Kinetic Vision's headquarter"
                                skills={["Unity", "Unreal", "C#", "C++", "Vue.js"]}
                                actionNodes={
                                    <Button startIcon={<OpenInBrowserIcon />} href="https://kinetic-vision.com/" target="_blank">
                                        Visit Website
                                    </Button>
                                }
                            >
                                <Typography variant="h3">Kinetic Vision</Typography>
                                <Typography variant="subtitle1" color={"text.secondary"}>
                                    Software Engineer Co-op
                                </Typography>
                                <Typography variant="subtitle2" color={"text.secondary"} mb={2}>
                                    August 2021 - December 2023
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
                                actionNodes={
                                    <Button startIcon={<OpenInBrowserIcon />} href="https://www.wpafb.af.mil/" target="_blank">
                                        Visit Website
                                    </Button>
                                }
                            >
                                <Typography variant="h3">Wright-Patterson Air Force Base</Typography>
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
