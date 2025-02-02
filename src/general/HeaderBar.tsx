import { AppBar, Box, Toolbar } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";

type Props = {
    left?: React.ReactNode;
    right?: React.ReactNode;
    children?: React.ReactNode;
};

export function HeaderBar(props: Props) {
    return (
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
                <Toolbar sx={{ height: "var(--header-height)" }}>
                    <Grid container mr={"auto"} ml={"auto"} pr={2} pl={2} width={"100%"} height={"100%"}>
                        <Grid size={0.75} mt={"auto"} mb={"auto"} display={"flex"} flexDirection={"row"}>
                            {props.left}
                            <Box ml={"auto"} height={"100%"} width={1}></Box>
                        </Grid>
                        <Grid size={10.5} mt={"auto"} mb={"auto"}>
                            {props.children}
                        </Grid>
                        <Grid size={0.75} mt={"auto"} mb={"auto"} display={"flex"} flexDirection={"row"}>
                            <Box ml={"auto"} height={"100%"} width={1}></Box>
                            {props.right}
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Box pt={"var(--header-height)"} />
        </React.Fragment>
    );
}
