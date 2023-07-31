import { Box, Chip, Container, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import React, { ReactNode } from "react";
import BlogList from "./BlogList";
import { BlogTags } from "./PageList";

function getStyleForTagOption(name: string, selected: readonly string[]) {
    return {
        fontWeight: selected.indexOf(name) === -1 ? "unset" : "bold",
    };
}

type State = {
    tags: string[];
};

class BlogHome extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);

        const windowUrl = window.location.search;
        const params = new URLSearchParams(windowUrl);

        let tags: string[] = [];

        if (params.has("tag")) {
            const searchTags = params.getAll("tag");
            for (const tag of searchTags) {
                if (BlogTags.indexOf(tag) !== -1 && tags.indexOf(tag) === -1) {
                    tags.push(tag);
                }
            }
        }

        this.state = {
            tags: tags,
        };
    }

    render(): React.ReactNode {
        return (
            <Container maxWidth="md">
                <Typography variant="h2" m={4} mb={2} fontWeight={300} align="left">
                    Pages
                </Typography>

                {/* Dropdown for tags */}
                <FormControl fullWidth>
                    <InputLabel id="search-tags-label">Filter Tags</InputLabel>
                    <Select
                        labelId="search-tags-label"
                        id="search-tags"
                        multiple
                        value={this.state.tags}
                        label="Filter Tags"
                        onChange={this.handleTagsChange.bind(this)}
                        renderValue={(selected) => (
                            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                                {selected.map((value) => (
                                    <Chip key={value} label={value} />
                                ))}
                            </Box>
                        )}
                    >
                        {BlogTags.map((value) => (
                            <MenuItem key={value} value={value} style={getStyleForTagOption(value, this.state.tags)}>
                                {value}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <Box pb={2}></Box>

                <BlogList filterTags={this.state.tags} />
            </Container>
        );
    }

    handleTagsChange(event: SelectChangeEvent<string[]>, child: ReactNode): void {
        if (typeof event.target.value === "string") {
            this.setState({ tags: [event.target.value] });
        } else {
            this.setState({ tags: event.target.value });
        }
    }
}

export default BlogHome;
