import React from "react";
import Logo from "general/Logo/Logo";

import HeaderBar from "general/HeaderBar";
import Grid from "@mui/material/Unstable_Grid2";
import { Link, NavigateFunction } from "react-router-dom";
import { IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import HomeIcon from "@mui/icons-material/Home";
import { withNavigate } from "general/NavigationWrapper";

type Props = {
    showBackButton: boolean;
    navigate: NavigateFunction;
};

class BlogHeader extends React.Component<Props> {
    render() {
        const urlParts = window.location.pathname.split("/");
        const currentPage = urlParts.pop() || urlParts.pop();

        return (
            <HeaderBar>
                <Grid container mr={"auto"} ml={"auto"} width={"100%"} height={"100%"}>
                    <Grid xs={2} mt={"auto"} mb={"auto"}>
                        {currentPage !== "blog" ? (
                            /*<IconButton onClick={() => this.props.navigate(-1)} sx={{ mr: "auto" }}></IconButton>*/
                            <IconButton component={Link} to={"/blog"} sx={{ mr: "auto" }}>
                                <ArrowBackIosNewIcon />
                            </IconButton>
                        ) : (
                            ""
                        )}
                    </Grid>
                    <Grid xs={8} mt={"auto"} mb={"auto"}>
                        <Link to={"/"} className="NoDecoration">
                            <Logo />
                        </Link>
                    </Grid>
                    <Grid xs={2} mt={"auto"} mb={"auto"}>
                        <IconButton component={Link} to={"/"} sx={{ mr: "auto" }}>
                            <HomeIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </HeaderBar>
        );
    }
}

export default withNavigate(BlogHeader);
