import React from "react";
import { Container, IconButton, Stack, Typography } from "@mui/material";
import SectionBox from "general/SectionBox";
import ExperienceCard from "general/ExperienceCard";
import { Project } from "./project";

type ProjectsProps = {
    projects: Project[];
};

export function Projects({ projects }: ProjectsProps) {
    return (
        <SectionBox id={"projects"}>
            <Container maxWidth={"xl"}>
                <Stack ml="auto" mr="auto" direction={"column"} gap={2}>
                    <Typography variant="h2" mb={3}>
                        Projects
                    </Typography>
                    <Stack flexDirection={"row"} justifyContent={"center"} gap={3} flexWrap={"wrap"}>
                        {projects.map((project, index) => (
                            <ExperienceCard
                                key={index}
                                skills={project.skills}
                                actionNodes={
                                    <React.Fragment>
                                        {project.links.map((link, linkIndex) => (
                                            <IconButton key={linkIndex} color="primary" href={link.href} target="_blank">
                                                {link.icon}
                                            </IconButton>
                                        ))}
                                    </React.Fragment>
                                }
                            >
                                <Typography variant="h3">{project.title}</Typography>
                                <Typography variant="subtitle1" color={"text.secondary"} mb={2}>
                                    {project.subtitle}
                                </Typography>
                                <Typography variant="body1" mb={2}>
                                    {project.description}
                                </Typography>
                            </ExperienceCard>
                        ))}
                    </Stack>
                </Stack>
            </Container>
        </SectionBox>
    );
}
