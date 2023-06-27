import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";

const buttonStyle = {
    marginRight: 2,
    color: "#666",
    "&:hover": {
        color: "#000",
    },
};

const ScrollLinkBase = (props: any) => <ScrollLink spy smooth offset={-70} duration={500} {...props} />;

const ScrollLinkButton = (props: any) => <Button component={ScrollLinkBase} sx={buttonStyle} {...props} />;

class Header extends React.Component {
    render() {
        return (
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor: "#f5f5f5",
                }}
            >
                <Toolbar>
                    <Typography
                        variant="h6"
                        sx={{
                            flexGrow: 1,
                            color: "#333",
                        }}
                    >
                        Your Website Name
                    </Typography>
                    <ScrollLinkButton to="section1">Section 1</ScrollLinkButton>
                    <ScrollLinkButton to="section2">Section 2</ScrollLinkButton>
                    <ScrollLinkButton to="section3">Section 3</ScrollLinkButton>
                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;
