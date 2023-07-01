import React from "react";
import { AppBar, Box, Button, Container, Stack, Toolbar, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import ScrollLinkButton from "../../general/ScrollLink";
import Logo from "./Logo/Logo";
import HeaderLink from "./HeaderLink/HeaderLink";

const buttonStyle = {
    marginRight: 2,
    color: "#666",
    "&:hover": {
        color: "#000",
    },
};

const HeaderGridItem = (props: any) => (
    <Grid xs={2} display={"flex"} justifyContent={"center"} alignContent={"center"} {...props} />
);

class Header extends React.Component {
    render() {
        return (
            <AppBar position="fixed" color={"transparent"} sx={{ backgroundColor: "#FFF" }}>
                <Toolbar sx={{ height: "var(--header-height)" }}>
                    <Grid container mr={"auto"} ml={"auto"} width={"100%"} maxWidth={"md"} spacing={2}>
                        <Grid xs={1} />
                        <HeaderGridItem>
                            <HeaderLink to="home">Home</HeaderLink>
                        </HeaderGridItem>
                        <HeaderGridItem>
                            <HeaderLink to="experience">Experience</HeaderLink>
                        </HeaderGridItem>
                        <HeaderGridItem>
                            <Logo />
                        </HeaderGridItem>
                        <HeaderGridItem>
                            <HeaderLink to="section2">Projects</HeaderLink>
                        </HeaderGridItem>
                        <HeaderGridItem>
                            <HeaderLink to="section3">Contact</HeaderLink>
                        </HeaderGridItem>
                        <Grid xs={1} />
                    </Grid>
                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;
