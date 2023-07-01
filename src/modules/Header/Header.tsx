import React from "react";
import { AppBar, Button, Grid, Stack, Toolbar, Typography } from "@mui/material";
import ScrollLinkButton from "../../general/ScrollLink";
import Logo from "./Logo/Logo";

const buttonStyle = {
    marginRight: 2,
    color: "#666",
    "&:hover": {
        color: "#000",
    },
};

class Header extends React.Component {
    render() {
        return (
            <AppBar position="fixed" color={"transparent"} sx={{ backgroundColor: "#FFF" }}>
                <Toolbar sx={{ height: "var(--header-height)" }}>
                    <Grid ml="auto" mr="auto" maxWidth={"md"} container spacing={2}>
                        <Grid item xs={1} />
                        <Grid item xs={2}>
                            <ScrollLinkButton to="home">Home</ScrollLinkButton>
                        </Grid>
                        <Grid item xs={2}>
                            <ScrollLinkButton to="section1">About</ScrollLinkButton>
                        </Grid>
                        <Grid item xs={2}>
                            <Logo />
                        </Grid>
                        <Grid item xs={2}>
                            <ScrollLinkButton to="section2">Projects</ScrollLinkButton>
                        </Grid>
                        <Grid item xs={2}>
                            <ScrollLinkButton to="section3">Contact</ScrollLinkButton>
                        </Grid>
                        <Grid item xs={1} />
                    </Grid>
                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;
