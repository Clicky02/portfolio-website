import { Button, Container, Stack, Typography } from "@mui/material";
import { Job } from "./job";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import SectionBox from "general/SectionBox";
import ExperienceCard from "general/ExperienceCard";

export function Experience({ jobs }: { jobs: Job[] }) {
    return (
        <SectionBox id={"experience"}>
            <Container maxWidth={"xl"}>
                <Stack ml="auto" mr="auto" direction={"column"} gap={2}>
                    <Typography variant="h2" mb={3}>
                        Experience
                    </Typography>
                    <Stack flexDirection={"row"} justifyContent={"center"} gap={3} flexWrap={"wrap"}>
                        {jobs.map((job, index) => (
                            <ExperienceCard
                                key={index}
                                image={job.image}
                                imageTitle={job.imageTitle}
                                skills={job.skills}
                                actionNodes={
                                    <Button startIcon={<OpenInBrowserIcon />} href={job.website} target="_blank">
                                        Visit Website
                                    </Button>
                                }
                            >
                                <Typography variant="h3">{job.companyName}</Typography>
                                <Typography variant="subtitle1" color={"text.secondary"}>
                                    {job.position}
                                </Typography>
                                <Typography variant="subtitle2" color={"text.secondary"} mb={2}>
                                    {job.duration}
                                </Typography>
                                <Typography variant="body1" mb={2}>
                                    {job.description}
                                </Typography>
                            </ExperienceCard>
                        ))}
                    </Stack>
                </Stack>
            </Container>
        </SectionBox>
    );
}
