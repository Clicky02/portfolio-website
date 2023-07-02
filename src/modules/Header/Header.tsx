import React from "react";
import { AppBar, Box, Button, Container, Stack, Toolbar, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import ScrollLinkButton from "../../general/ScrollLink";
import Logo from "./Logo/Logo";
import HeaderLink from "./HeaderLink/HeaderLink";
import { withIsSmaller } from "../../general/BreakpointWrapper";
import { type } from "os";

const buttonStyle = {
    marginRight: 2,
    color: "#666",
    "&:hover": {
        color: "#000",
    },
};

type Props = {
    isSmall: boolean;
};

class Header extends React.Component<Props> {
    render() {
        const isSmall = this.props.isSmall;

        const HeaderGridItem = (props: any) => (
            <Grid
                xs={12}
                sm={2.4}
                display={isSmall ? "none" : "flex"}
                justifyContent={"center"}
                alignContent={"center"}
                {...props}
            />
        );

        return (
            <AppBar
                position="fixed"
                color={"transparent"}
                sx={{
                    backgroundColor: "#FFF",
                    boxShadow: "none",
                    borderBottom: "solid 1px #d0d7de",
                    borderImage:
                        "linear-gradient( 90deg, rgba(255, 255, 255, 1) 0%, rgba(208, 215, 222, 1) 14%, rgba(208, 215, 222, 1) 86%, rgba(255, 255, 255, 1) 100%) 1 1",
                }}
            >
                <Toolbar sx={{ height: "var(--header-height)" }}>
                    <Grid container mr={"auto"} ml={"auto"} width={"100%"} maxWidth={"md"} spacing={2}>
                        <HeaderGridItem>
                            <HeaderLink to="home">Home</HeaderLink>
                        </HeaderGridItem>
                        <HeaderGridItem>
                            <HeaderLink to="experience">Experience</HeaderLink>
                        </HeaderGridItem>
                        <HeaderGridItem display={undefined}>
                            <Logo />
                        </HeaderGridItem>
                        <HeaderGridItem>
                            <HeaderLink to="projects">Projects</HeaderLink>
                        </HeaderGridItem>
                        <HeaderGridItem>
                            <HeaderLink to="skills">Skills</HeaderLink>
                        </HeaderGridItem>
                    </Grid>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withIsSmaller("sm")(Header);
