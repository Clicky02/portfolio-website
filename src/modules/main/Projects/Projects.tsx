import React from "react";
import { Container, IconButton, Stack, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SectionBox from "general/SectionBox";
import ExperienceCard from "general/ExperienceCard";

class Experience extends React.Component {
    render() {
        return (
            <SectionBox id={"projects"}>
                <Container maxWidth={"xl"}>
                    <Stack ml="auto" mr="auto" direction={"column"} gap={2}>
                        <Typography variant="h3" mb={3}>
                            Projects
                        </Typography>
                        <Stack flexDirection={"row"} justifyContent={"center"} gap={3} flexWrap={"wrap"}>
                            <ExperienceCard
                                skills={["Unreal", "C++"]}
                                actionNodes={
                                    <React.Fragment>
                                        <IconButton color="primary" href="https://github.com/Clicky02/Splintered" target="_blank">
                                            <GitHubIcon></GitHubIcon>
                                        </IconButton>
                                        <IconButton
                                            color="primary"
                                            href="https://www.youtube.com/watch?v=oA8UL58lBug"
                                            target="_blank"
                                        >
                                            <YouTubeIcon></YouTubeIcon>
                                        </IconButton>
                                    </React.Fragment>
                                }
                            >
                                <Typography variant="h4">Splintered</Typography>
                                <Typography variant="subtitle1" color={"text.secondary"} mb={2}>
                                    A VR Game
                                </Typography>
                                <Typography variant="body1" mb={2}>
                                    Throughout the 2021-2022 school year, I learned how to use Unreal Engine 5 by making a
                                    small-scale VR game. The game itself is a wave-fighter, where you fight increasingly difficult
                                    enemies using magic spells.
                                </Typography>
                            </ExperienceCard>

                            <ExperienceCard
                                skills={["Python", "OpenCV", "Excel", "Statistics"]}
                                actionNodes={
                                    <React.Fragment>
                                        <IconButton
                                            color="primary"
                                            href="https://github.com/Clicky02/LogoModelling"
                                            target="_blank"
                                        >
                                            <GitHubIcon></GitHubIcon>
                                        </IconButton>
                                        <IconButton
                                            color="primary"
                                            href="https://www.youtube.com/watch?v=zTypppMhbUg"
                                            target="_blank"
                                        >
                                            <YouTubeIcon></YouTubeIcon>
                                        </IconButton>
                                    </React.Fragment>
                                }
                            >
                                <Typography variant="h4">Logo Analysis</Typography>
                                <Typography variant="subtitle1" color={"text.secondary"} mb={2}>
                                    Models II CEAS Research
                                </Typography>
                                <Typography variant="body1" mb={2}>
                                    As a UC honor's project, I and three other students programmed a system to analyze certain
                                    features of the logos of Fortune 500 companies. We used this information to research possible
                                    trends in logo design over time.
                                </Typography>
                            </ExperienceCard>

                            <ExperienceCard
                                skills={["TypeScript", "React", "Material UI", "CSS"]}
                                actionNodes={
                                    <React.Fragment>
                                        <IconButton
                                            color="primary"
                                            href="https://github.com/Clicky02/portfolio-website"
                                            target="_blank"
                                        >
                                            <GitHubIcon></GitHubIcon>
                                        </IconButton>
                                    </React.Fragment>
                                }
                            >
                                <Typography variant="h4">Portfolio Website</Typography>
                                <Typography variant="subtitle1" color={"text.secondary"} mb={2}>
                                    You Are Here ◉
                                </Typography>
                                <Typography variant="body1" mb={2}>
                                    I created this website to improve my React ability and have a centralized location to
                                    publically present my work.
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
