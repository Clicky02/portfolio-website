import React from "react";

import { Box, Card, CardContent, Container, Divider, Typography } from "@mui/material";
import { withParams } from "general/NavigationWrapper";
import { Link, Params } from "react-router-dom";
import pages, { BlogPage } from "./PageList";
import BlogChips from "./Chips/BlogChips";
import { MuiMarkdown, getOverrides } from "mui-markdown";
import BlogList from "./BlogList";

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

type Props = {
    params: Readonly<Params<string>>;
};

type State = {
    page: BlogPage | undefined;
    content: string;
};

class BlogRenderer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        const pageId = this.props.params["page"];
        const page = pages.find((value) => value.id === pageId);

        this.state = {
            page: page,
            content: "Loading...",
        };

        if (page !== undefined) {
            this.tryLoadPage(page);
        }
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
        const pageId = this.props.params["page"];

        if (pageId === prevProps.params["page"]) {
            return;
        }

        const page = pages.find((value) => value.id === pageId);
        this.setState({
            page: page,
            content: "Loading...",
        });

        if (page !== undefined) {
            this.tryLoadPage(page);
        }
    }

    tryLoadPage(page: BlogPage) {
        fetch(BLOG_PAGE_DIRECTORY + page.location)
            .then((response) => {
                response
                    .text()
                    .then((rawContent) => {
                        // Remove frontmatter
                        const content = rawContent.split("---").slice(2).join("---");
                        this.setState({ content: content });
                    })
                    .catch(() => {
                        this.setState({ page: undefined });
                    });
            })
            .catch(() => {
                this.setState({ page: undefined });
            });
    }

    render(): React.ReactNode {
        if (this.state.page === undefined) {
            return (
                <Container maxWidth="sm">
                    <Typography variant="body2" mt={4} mb={4} align="left">
                        {"Could not find page " + this.props.params["page"]}
                    </Typography>
                </Container>
            );
        }

        return (
            <Container maxWidth="md">
                <Box pt={4} />
                <Card elevation={3} sx={{ textAlign: "left" }}>
                    <CardContent>
                        <Typography variant="h2">{this.state.page.title}</Typography>
                        <Typography variant="subtitle1" color={"text.secondary"} display="inline">
                            {this.state.page.author} -{" "}
                            {this.state.page.date?.toLocaleDateString("en-us", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                            })}
                        </Typography>
                        <Box pt={1} pb={1}>
                            <BlogChips tags={this.state.page.tags} />
                        </Box>
                        <Divider sx={{ mt: 1, mb: 2 }} />
                        <MuiMarkdown overrides={{ ...getOverrides(), ...markdownOverrides }}>{this.state.content}</MuiMarkdown>
                    </CardContent>
                </Card>
            </Container>
        );
    }
}

export default withParams(BlogRenderer);
