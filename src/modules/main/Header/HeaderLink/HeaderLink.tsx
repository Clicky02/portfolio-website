import React from "react";
import "./HeaderLink.css";
import { ScrollLinkBase } from "general/ScrollLink";
import { Box } from "@mui/material";

type HeaderLinkProperties = {
    children?: React.ReactNode;
    to: string;
};

class HeaderLink extends React.Component<HeaderLinkProperties> {
    render() {
        return (
            <Box mt="auto" mb="auto">
                <ScrollLinkBase className={"HeaderLinkHolder"} activeClass="active" to={this.props.to}>
                    <div className="HeaderLinkText">{this.props.children}</div>
                    <div className="HeaderLinkUnderline" />
                </ScrollLinkBase>
            </Box>
        );
    }
}

export default HeaderLink;
