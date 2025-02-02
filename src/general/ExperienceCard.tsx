import React from "react";
import { Card, CardActions, CardContent, CardMedia, Stack } from "@mui/material";
import { SkillChip } from "./SkillChip";

type Props = {
    children?: React.ReactNode;
    actionNodes?: React.ReactNode;
    image?: string;
    imageTitle?: string;
    skills: string[];
};

class ExperienceCard extends React.Component<Props> {
    static defaultProps = {
        skills: [],
    };

    render() {
        return (
            <Card variant="outlined" sx={{ display: "flex", flexDirection: "column", width: 380 }}>
                {this.props.image != null ? (
                    <CardMedia sx={{ height: 150 }} image={this.props.image} title={this.props.imageTitle} />
                ) : (
                    ""
                )}
                <CardContent sx={{ textAlign: "left", flexGrow: 1 }}>
                    {this.props.children}
                    <Stack direction={"row"} flexWrap={"wrap"} spacing={1} useFlexGap>
                        {this.props.skills.map((value, i) => (
                            <SkillChip key={i} label={value} />
                        ))}
                    </Stack>
                </CardContent>
                <CardActions>{this.props.actionNodes}</CardActions>
            </Card>
        );
    }
}

export default ExperienceCard;
