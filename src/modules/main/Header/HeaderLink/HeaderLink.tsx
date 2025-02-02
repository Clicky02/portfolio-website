import React from "react";
import "./HeaderLink.css";
import { ScrollLinkBase } from "general/ScrollLink";
import { Box } from "@mui/material";

type HeaderLinkProperties = {
    children?: React.ReactNode;
    to: string;
};

export function HeaderLink(props: HeaderLinkProperties) {
    return (
        <Box mt="auto" mb="auto">
            <ScrollLinkBase className={"HeaderLinkHolder"} activeClass="active" to={props.to}>
                <div className="HeaderLinkText">{props.children}</div>
                <div className="HeaderLinkUnderline" />
            </ScrollLinkBase>
        </Box>
    );
}
