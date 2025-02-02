import React, { useEffect, useState } from "react";

import { Box, Card, CardContent, Container, Divider, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import pages, { BlogPage } from "./PageList";
import BlogChips from "./Chips/BlogChips";
import { MuiMarkdown, getOverrides } from "mui-markdown";
import { BlogList } from "./BlogList";

const BLOG_PAGE_DIRECTORY = "assets\\blog\\pages\\";

const ReferencesFooter = (props: any) => {
    return (
        <React.Fragment>
            <Divider sx={{ mt: 1, mb: 1, fontSize: 13 }}> References </Divider>
            <Box fontSize={13} {...props}></Box>
        </React.Fragment>
    );
};

const NoSuperSciptLink = (props: any) => {
    if (props.children !== undefined && props.children.type === "sup") {
        return <sup>{props.children.props.children}</sup>;
    }
    return <Link to={props.href} {...props} />;
};

const markdownOverrides = {
    p: {
        props: {
            mb: 1,
        },
    },
    BlogList: {
        component: BlogList,
    },
    footer: {
        component: ReferencesFooter,
    },
    a: {
        component: NoSuperSciptLink,
    },
};

export function BlogRenderer() {
    const params = useParams();

    const pageId = params["page"];
    const [page, setPage] = useState<BlogPage | undefined>(undefined);
    const [content, setContent] = useState<string>("Loading...");

    useEffect(() => {
        setPage(pages.find((value) => value.id === pageId));
    }, [pageId, setPage]);

    useEffect(() => {
        if (page !== undefined) {
            fetch(BLOG_PAGE_DIRECTORY + page.location)
                .then((response) => {
                    response
                        .text()
                        .then((rawContent) => setContent(rawContent.split("---").slice(2).join("---")))
                        .catch(() => setPage(undefined));
                })
                .catch(() => setPage(undefined));
        }
    }, [page, setPage, setContent]);

    if (page === undefined) {
        return (
            <Container maxWidth="sm">
                <Typography variant="body2" mt={4} mb={4} align="left">
                    {"Could not find page " + params["page"]}
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
                        {page.author} -{" "}
                        {page.date?.toLocaleDateString("en-us", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                        })}
                    </Typography>
                    <Box pt={1} pb={1}>
                        <BlogChips tags={page.tags} />
                    </Box>
                    <Divider sx={{ mt: 1, mb: 2 }} />
                    <MuiMarkdown overrides={{ ...getOverrides(), ...markdownOverrides }}>{content}</MuiMarkdown>
                </CardContent>
            </Card>
        </Container>
    );
}
