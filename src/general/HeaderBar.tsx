import { AppBar, Box, Toolbar } from "@mui/material";
import React from "react";

const HeaderBar = (props: any) => (
    <React.Fragment>
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
            <Toolbar sx={{ height: "var(--header-height)" }} {...props}></Toolbar>
        </AppBar>
        <Box pt={"var(--header-height)"} />
    </React.Fragment>
);

export default HeaderBar;
