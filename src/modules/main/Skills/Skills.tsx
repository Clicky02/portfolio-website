import { Container, Paper, Stack, Typography } from "@mui/material";
import SectionBox from "general/SectionBox";

const SkillCard = (props: any) => (
    <Paper
        variant="outlined"
        sx={{ paddingTop: 1, paddingBottom: 1, paddingLeft: 2, paddingRight: 2, borderRadius: 3, borderColor: "#bdbdbd" }}
        {...props}
    />
);

interface SkillsProps {
    skills: string[];
}

export function Skills({ skills }: SkillsProps) {
    return (
        <SectionBox id={"skills"}>
            <Container maxWidth={"xl"}>
                <Stack ml="auto" mr="auto" direction={"column"} justifyContent={"center"} alignItems={"center"} gap={2}>
                    <Typography variant="h2" mb={3}>
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
