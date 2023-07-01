import React from "react";
import { Button, Container, IconButton, Paper, Stack, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import SectionBox from "../../general/SectionBox";
import ExperienceCard from "../../general/ExperienceCard";

const SkillCard = (props: any) => (
    <Paper
        elevation={3}
        sx={{ paddingTop: 1, paddingBottom: 1, paddingLeft: 1.5, paddingRight: 1.5, borderRadius: 1.5 }}
        {...props}
    />
);

const skills: string[] = [
    "C++",
    "C#",
    "Java",
    "JavaScript",
    "Typescript",
    "Python",
    "Unity",
    "Unreal",
    "XR/3D Programming",
    "3D Math",
    "Web Development",
    "Git",
    "HTML",
    "CSS",
    "React",
    "Vue.js",
    "Material UI",
    "Docker",
    "Algorithms",
    "Data Structures",
    "Networking",
    "Oculus SDK",
    "MySQL",
];

class Skills extends React.Component {
    render() {
        return (
            <SectionBox id={"skills"}>
                <Container maxWidth={"xl"}>
                    <Stack ml="auto" mr="auto" direction={"column"} justifyContent={"center"} alignItems={"center"} gap={2}>
                        <Typography variant="h3" mb={3}>
                            Skills
                        </Typography>
                        <Stack direction={"row"} flexWrap={"wrap"} maxWidth={"sm"} justifyContent={"center"} gap={2}>
                            {skills.map((value, index) => (
                                <SkillCard key={index}>{value}</SkillCard>
                            ))}
                        </Stack>
                    </Stack>
                </Container>
            </SectionBox>
        );
    }
}

export default Skills;
