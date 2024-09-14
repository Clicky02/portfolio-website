import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { ScrollLinkBase } from "general/ScrollLink";
import Logo from "general/Logo/Logo";
import HeaderLink from "./HeaderLink/HeaderLink";
import { withIsSmaller } from "general/BreakpointWrapper";
import HeaderBar from "general/HeaderBar";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import ArticleIcon from "@mui/icons-material/Article";

type Props = {
    isSmall: boolean;
};

class MainHeader extends React.Component<Props> {
    render() {
        const isSmall = this.props.isSmall;

        const HeaderGridItem = (props: any) => (
            <Grid
                xs={12}
                sm={12}
                md={2.4}
                display={isSmall ? "none" : "flex"}
                justifyContent={"center"}
                alignContent={"center"}
                {...props}
            />
        );

        return (
            <HeaderBar
            // right={
            //     <IconButton component={Link} to={"/blog"} sx={{ mr: "auto" }}>
            //         <ArticleIcon />
            //     </IconButton>
            // }
            >
                <Grid container mr={"auto"} ml={"auto"} width={"100%"} maxWidth={"md"} spacing={2}>
                    <HeaderGridItem>
                        <HeaderLink to="home">Home</HeaderLink>
                    </HeaderGridItem>
                    <HeaderGridItem>
                        <HeaderLink to="experience">Experience</HeaderLink>
                    </HeaderGridItem>
                    <HeaderGridItem display={undefined}>
                        <ScrollLinkBase to="home" className="NoDecoration NoSelect">
                            <Logo />
                        </ScrollLinkBase>
                    </HeaderGridItem>
                    <HeaderGridItem>
                        <HeaderLink to="projects">Projects</HeaderLink>
                    </HeaderGridItem>
                    <HeaderGridItem>
                        <HeaderLink to="skills">Skills</HeaderLink>
                    </HeaderGridItem>
                </Grid>
            </HeaderBar>
        );
    }
}

export default withIsSmaller("md")(MainHeader);
