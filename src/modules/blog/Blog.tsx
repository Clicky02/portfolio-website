import React from "react";
import { BlogHeader } from "./Header/BlogHeader";
import { Outlet } from "react-router-dom";

function Blog() {
    return (
        <React.Fragment>
            <BlogHeader />
            <Outlet />
        </React.Fragment>
    );
}

export default Blog;
