import React from "react";
import { Home } from "./Home/Home";
import { Experience } from "./Experience/Experience";
import { Projects } from "./Projects/Projects";
import { Skills } from "./Skills/Skills";
import { Footer } from "./Footer/Footer";
import { MainHeader } from "./Header/MainHeader";
import { Project } from "./Projects/project";
import { Job } from "./Experience/job";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import DescriptionIcon from "@mui/icons-material/Description";
import KVHeadquartersImage from "./images/KVHeadquarters.jpg";
import WPAFBImage from "./images/WPAFBImage.jpg";
import SRCImage from "./images/src-building.jpg";

const jobs: Job[] = [
    {
        image: SRCImage,
        imageTitle: "SRC's headquarter",
        companyName: "SRC",
        position: "Software Engineer Co-op",
        duration: "January 2024 - August 2024",
        description:
            "Designed and created a tool for demonstrating and debugging arbitrary algorithms and algorithm chains. Created a Rust library for reading and writing a specific file type.",
        skills: ["Typescript", "Python", "Rust", "React", "Flask"],
        website: "https://www.srcinc.com/",
    },
    {
        image: KVHeadquartersImage,
        imageTitle: "Kinetic Vision's headquarter",
        companyName: "Kinetic Vision",
        position: "Software Engineer Co-op",
        duration: "August 2021 - December 2023",
        description:
            "Utilized game engines and cutting-edge technology to create interactive AR, VR, Web, and other 3D-rendered experiences.",
        skills: ["Unity", "Unreal", "C#", "C++", "Vue.js"],
        website: "https://kinetic-vision.com/",
    },
    {
        image: WPAFBImage,
        imageTitle: "WPAFB",
        companyName: "Wright-Patterson Air Force Base",
        position: "Wright Scholar Research Assistant",
        duration: "June 2019 - August 2021",
        description: "Worked on a toolkit to assist in designing aerospace vehicles using augmented reality and virtual reality",
        skills: ["Python", "JavaScript", "A-Frame", "HTML", "CSS"],
        website: "https://www.wpafb.af.mil/",
    },
];

const projects: Project[] = [
    {
        title: "Splintered",
        subtitle: "A VR Game",
        description: `Throughout the 2021-2022 school year, I learned how to use Unreal Engine 5 by making a small-scale
                      VR game. The game itself is a wave-fighter, where you fight increasingly difficult enemies using
                      magic spells.`,
        skills: ["Unreal", "C++"],
        links: [
            { href: "https://github.com/Clicky02/Splintered", icon: <GitHubIcon /> },
            { href: "https://www.youtube.com/watch?v=oA8UL58lBug", icon: <YouTubeIcon /> },
        ],
    },
    {
        title: "Logo Analysis",
        subtitle: "Models II CEAS Research",
        description: `As a UC honor's project, I and three other students programmed a system to analyze certain
                      features of the logos of Fortune 500 companies. We used this information to research possible
                      trends in logo design over time.`,
        skills: ["Python", "OpenCV", "Excel", "Statistics"],
        links: [
            { href: "https://github.com/Clicky02/LogoModelling", icon: <GitHubIcon /> },
            { href: "https://www.youtube.com/watch?v=zTypppMhbUg", icon: <YouTubeIcon /> },
        ],
    },
    {
        title: "Portfolio Website",
        subtitle: "You Are Here ◉",
        description: `I created this website to improve my React ability and have a centralized location to publically
                      present my work. It also includes my 'Resume Renderer', which is how I create my resume.`,
        skills: ["TypeScript", "React", "Material UI", "CSS"],
        links: [
            { href: "https://github.com/Clicky02/portfolio-website", icon: <GitHubIcon /> },
            { href: "https://garethfultz.com/#resume", icon: <DescriptionIcon /> },
        ],
    },
    {
        title: "Check",
        subtitle: "Senior Design Project (In Progess)",
        description: `I and 4 other computer science students are creating a visual, node-based editor for creating and 
                    training PyTorch neural networks. Our application will allow beginners to easily start experimenting 
                    and working with neural networks.`,
        skills: ["Python", "PyTorch", "Svelte", "Flask", "Pydantic"],
        links: [{ href: "https://github.com/pyralasis/SeniorDesignProject", icon: <GitHubIcon /> }],
    },
    {
        title: "Reticulated",
        subtitle: "Graduate Capstone Project",
        description: `I am designing a custom, prototype programming language and creating a compiler for it in Rust. The 
                    language aims to be simple-to-use, vaguely similar to Python, but compiled instead of interpreted. The 
                    compiler will target LLVM to allow for optimization and multi-platform use.`,
        skills: ["Rust", "LLVM"],
        links: [{ href: "https://github.com/Clicky02/Reticulated", icon: <GitHubIcon /> }],
    },
];

const skills: string[] = [
    "C++",
    "C#",
    "Java",
    "Typescript",
    "JavaScript",
    "Python",
    "Rust",
    "Unity",
    "Unreal",
    "XR/3D Development",
    "Web Development",
    "Git",
    "HTML",
    "CSS",
    "React",
    "Vue.js",
    "Material UI",
    "Docker",
    "Algorithms",
    "Data Structures",
    "Networking",
    "Oculus SDK",
    "MySQL",
    "Postgres",
    "PyTorch",
    "Pydantic",
    "Communication",
    "Collaboration",
    "Adaptability",
    "Problem Solving",
];

export function Main() {
    return (
        <React.Fragment>
            <MainHeader></MainHeader>
            <Home></Home>
            <Experience jobs={jobs}></Experience>
            <Projects projects={projects}></Projects>
            <Skills skills={skills}></Skills>
            <Footer></Footer>
        </React.Fragment>
    );
}
