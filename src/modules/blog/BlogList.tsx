import React from "react";
import { Card, Container, Divider, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import pages from "./PageList";
import { withNavigate } from "general/NavigationWrapper";
import { NavigateFunction } from "react-router-dom";
import BlogChips from "./Chips/BlogChips";

type Props = {
    navigate: NavigateFunction;
};

class BlogList extends React.Component<Props> {
    render(): React.ReactNode {
        return (
            <Container maxWidth="md">
                <Typography variant="h2" m={4} fontWeight={300} align="left">
                    Pages
                </Typography>
                <Card elevation={3}>
                    <List>
                        {pages.map((value, i) => {
                            return (
                                <React.Fragment key={i}>
                                    <ListItem>
                                        <ListItemButton role={undefined} onClick={() => this.props.navigate(value.id)}>
                                            <ListItemText
                                                primary={
                                                    <React.Fragment>
                                                        <Typography sx={{ display: "inline" }} variant="body1" fontWeight={500}>
                                                            {value.title}
                                                        </Typography>
                                                        {" - "}
                                                        <Typography sx={{ display: "inline" }} variant="body2">
                                                            {value.date}
                                                        </Typography>
                                                    </React.Fragment>
                                                }
                                            />
                                            <BlogChips tags={value.tags} />
                                        </ListItemButton>
                                    </ListItem>
                                    {i + 1 !== pages.length ? <Divider variant="middle" /> : ""}
                                </React.Fragment>
                            );
                        })}
                    </List>
                </Card>
            </Container>
        );
    }
}

export default withNavigate(BlogList);
