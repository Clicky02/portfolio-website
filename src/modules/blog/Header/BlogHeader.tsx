import { Logo } from "general/Logo/Logo";

import { HeaderBar } from "general/HeaderBar";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import HomeIcon from "@mui/icons-material/Home";

export function BlogHeader() {
    // const navigate = useNavigate();
    // const urlParts = window.location.pathname.split("/");
    // const currentPage = urlParts.pop() || urlParts.pop();
    const currentPage = window.location.hash.slice(1);

    return (
        <HeaderBar
            left={
                currentPage !== "blog" && currentPage !== "/blog" && currentPage !== "/blog/" ? (
                    /*<IconButton onClick={() => navigate(-1)} sx={{ mr: "auto" }}></IconButton>*/
                    <IconButton component={Link} to={"/blog"} sx={{ mr: "auto" }}>
                        <ArrowBackIosNewIcon />
                    </IconButton>
                ) : (
                    ""
                )
            }
            right={
                <IconButton component={Link} to={"/"} sx={{ mr: "auto" }} aria-label="Return Home">
                    <HomeIcon />
                </IconButton>
            }
        >
            <Link to={"/"} className="NoDecoration">
                <Logo />
            </Link>
        </HeaderBar>
    );
}
