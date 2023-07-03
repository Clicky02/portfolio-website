import React from "react";
import Home from "./Home/Home";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Footer from "./Footer/Footer";
import MainHeader from "./Header/MainHeader";

function Main() {
    return (
        <React.Fragment>
            <MainHeader></MainHeader>
            <Home></Home>
            <Experience></Experience>
            <Projects></Projects>
            <Skills></Skills>
            <Footer></Footer>
        </React.Fragment>
    );
}

export default Main;
