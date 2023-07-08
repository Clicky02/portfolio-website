import React from "react";

import { Box, Card, CardContent, Container, Divider, Typography } from "@mui/material";
import { withParams } from "general/NavigationWrapper";
import { Params } from "react-router-dom";
import pages from "./PageList";
import BlogChips from "./Chips/BlogChips";
import { MuiMarkdown } from "mui-markdown";

type Props = {
    params: Readonly<Params<string>>;
};

class BlogRenderer extends React.Component<Props> {
    render(): React.ReactNode {
        const pageId = this.props.params["page"];
        const page = pages.find((value) => value.id === pageId);

        if (page === undefined) {
            return (
                <Container maxWidth="sm">
                    <Typography variant="body2" mt={4} mb={4} align="left">
                        {"Could not find page " + pageId}
                    </Typography>
                </Container>
            );
        }

        return (
            <Container maxWidth="md">
                <Box pt={4} />
                <Card elevation={3} sx={{ textAlign: "left" }}>
                    <CardContent>
                        <Typography variant="h2">{page.title}</Typography>
                        <Typography variant="subtitle1" color={"text.secondary"} display="inline">
                            {page.author} - {page.date}
                        </Typography>
                        <Box pt={1} pb={1}>
                            <BlogChips tags={page.tags} />
                        </Box>
                        <Divider sx={{ mt: 1, mb: 2 }} />
                        <MuiMarkdown>{page.content}</MuiMarkdown>
                    </CardContent>
                </Card>
            </Container>
        );
    }
}

export default withParams(BlogRenderer);
