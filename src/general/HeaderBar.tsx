import { AppBar, Box, Toolbar } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";

type Props = {
    left?: React.ReactNode;
    right?: React.ReactNode;
    children?: React.ReactNode;
};

class HeaderBar extends React.Component<Props> {
    render(): React.ReactNode {
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
                            <Grid xs={0.75} mt={"auto"} mb={"auto"} display={"flex"} flexDirection={"row"}>
                                {this.props.left}
                                <Box ml={"auto"} height={"100%"} width={1}></Box>
                            </Grid>
                            <Grid xs={10.5} mt={"auto"} mb={"auto"}>
                                {this.props.children}
                            </Grid>
                            <Grid xs={0.75} mt={"auto"} mb={"auto"} display={"flex"} flexDirection={"row"}>
                                <Box ml={"auto"} height={"100%"} width={1}></Box>
                                {this.props.right}
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <Box pt={"var(--header-height)"} />
            </React.Fragment>
        );
    }
}
export default HeaderBar;
