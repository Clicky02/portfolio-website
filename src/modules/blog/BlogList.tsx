import React from "react";
import { Card, Divider, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import pages from "./PageList";
import { useNavigate } from "react-router-dom";
import BlogChips from "./Chips/BlogChips";
import PushPinIcon from "@mui/icons-material/PushPin";

type Props = {
    filterTags: string[] | string;
};

export function BlogList({ filterTags = [] }: Props) {
    const navigate = useNavigate();

    if (typeof filterTags === "string") {
        filterTags = filterTags.split(" ");
    }

    const pagesInList = pages.filter((value) => {
        for (const tag of filterTags) {
            if (tag[0] === "#") {
                if (tag.slice(1) !== value.id) {
                    return false;
                } else {
                    return true;
                }
            } else {
                if (value.tags.indexOf(tag) === -1) {
                    return false;
                }
            }
        }

        return true;
    });

    return (
        <Card elevation={3}>
            <List>
                {pagesInList.map((value, i) => (
                    <React.Fragment key={i}>
                        <ListItem>
                            <ListItemButton role={undefined} onClick={() => navigate("/blog/" + value.id)}>
                                <ListItemText
                                    primary={
                                        <React.Fragment>
                                            {value.isPinned ? (
                                                <PushPinIcon sx={{ fontSize: "0.9em", marginRight: 1 }} color="primary" />
                                            ) : (
                                                ""
                                            )}
                                            <Typography sx={{ display: "inline" }} variant="body1" fontWeight={500}>
                                                {value.title}
                                            </Typography>
                                            {" - "}
                                            <Typography sx={{ display: "inline" }} variant="body2">
                                                {value.date?.toLocaleDateString("en-us", {
                                                    year: "numeric",
                                                    month: "short",
                                                    day: "numeric",
                                                })}
                                            </Typography>
                                        </React.Fragment>
                                    }
                                />
                                <BlogChips tags={value.tags} />
                            </ListItemButton>
                        </ListItem>
                        {i + 1 !== pagesInList.length ? <Divider variant="middle" /> : ""}
                    </React.Fragment>
                ))}
            </List>
        </Card>
    );
}
