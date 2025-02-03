import { Box, Container, CssBaseline, FormControlLabel, Stack, Switch, ThemeProvider, Typography } from "@mui/material";
import { resumeTheme } from "./Theme";
import { ResumeRenderer } from "./Renderer";
import { Block, Category, DateRange, DocType, ListEntry, Resume, Val } from "./components";
import { activity, award, education, project, work } from "./creationUtils";
import { useEffect, useState } from "react";
import "./Resume.css";

const resume: Resume = {
    name: "Gareth Fultz",
    info: [
        ListEntry(
            undefined,
            [Val("Cincinnati, OH"), Val("(937) 581-1438"), Val("fultzgc@mail.uc.edu")],
            "\u00A0\u00A0|\u00A0\u00A0"
        ),
        ListEntry(
            undefined,
            [Val("linkedin.com/in/gareth-fultz"), Val("garethfultz.com"), Val("github.com/Clicky02")],
            "\u00A0\u00A0|\u00A0\u00A0"
        ),
    ],
    sections: [
        Category("Education", [
            education("University of Cincinnati", "Bachelor of Science", "Computer Science", new Date(2025, 4), 4.0, [
                Val("Cloud Computing"),
                Val("Operating Systems"),
                Val("Security Vulnerability Assessment"),
                Val("AI Principles"),
                Val("Parallel Computing"),
                Val("Data Structures", DocType.Full),
                Val("Intelligent Systems", DocType.Full),
                Val("Computer Networks"),
                Val("Advanced Software Engineering"),
                Val("Database Design and Development"),
                Val("Algorithms", DocType.Full),
                Val("Technical Writing", DocType.Full),
                Val("Calculus", DocType.Full),
                Val("Linear Algebra", DocType.Full),
                Val("Python Programming", DocType.Full),
                Val("Information Security and Assurance", DocType.Full),
            ]),
            education("University of Cincinnati", "Master of Engineering", "Computer Science", new Date(2025, 4), 4.0, [
                Val("Deep Learning"),
                Val("Advanced Algorithms"),
                Val("Software QA"),
                Val("Distributed Systems"),
                Val("Database Theory"),
                Val("Intelligent Data Analysis"),
                Val("Requirements Engineering"),
                Val("Project Management & Leadership"),
            ]),
        ]),
        Category("Skills", [
            Block(undefined, undefined, [
                ListEntry("Programming Languages", [
                    Val("C#"),
                    Val("Rust"),
                    Val("TypeScript"),
                    Val("JavaScript"),
                    Val("Python"),
                    Val("Java"),
                    Val("C++"),
                ]),
                ListEntry("Programming Skills", [
                    Val("Virtual Server Management"),
                    Val("XR/3D Programming"),
                    Val("Unity", DocType.Full),
                    Val("Unreal", DocType.Full),
                    Val("Web Development"),
                    Val("React"),
                    Val("Vue.js"),
                    Val("Git"),
                    Val("Docker"),
                    Val("Postgres"),
                    Val("MySQL"),
                    Val("AWS"),
                    Val("Machine Learning"),
                    Val("PyTorch"),
                ]),
                ListEntry(
                    "Other",
                    [
                        Val("Time Management"),
                        Val("Communication"),
                        Val("Collaboration"),
                        Val("Adaptability"),
                        Val("Problem Solving"),
                    ],
                    ", ",
                    DocType.Full
                ),
            ]),
        ]),
        Category("Work Experience", [
            work("SRC", "Software-Engineer Co-op", DateRange(new Date(2024, 0), new Date(2024, 7)), [
                Val(
                    "Developed an application for demonstrating and debugging arbitrary algorithms and algorithm chains, utilizing React and Quart (a Flask-like web server library for Python)."
                ),
                Val(
                    "Designed and built a Rust library for reading and writing a file type which supports multiple data sizes and formats."
                ),
                Val("Delivered the technical solution to various operational groups for production use."),
            ]),
            work("Kinetic Vision", "Software-Engineer Co-op", DateRange(new Date(2021, 7), new Date(2023, 11)), [
                Val("Utilized game engines and cutting-edge technology to create interactive VR, Web, and 2D experiences."),
                Val(
                    "Designed and implemented a framework for multi-user, co-located Mixed Reality applications, now utilized in multiple commercial applications."
                ),
                Val("Created a library of tools to facilitate development of VR hand-tracking applications."),
                Val("Contributed to and collaborated with diverse, multidisciplinary teams in a fast-paced environment."),
            ]),
            work(
                "Air Force Research Laboratory",
                "Wright Scholar Research Assistant",
                DateRange(new Date(2019, 5), new Date(2021, 7), true),
                [
                    Val(
                        "Worked on a toolkit to assist in designing aerospace vehicles using augmented reality and virtual reality."
                    ),
                    Val(
                        "Developed features involving model analysis, multidimensional data visualization, and using real time sensor data to visualize objects in a virtual setting."
                    ),
                    Val(
                        "Wrote an add-on application allowing users to load a 3D object and deconstruct it in a virtual environment.",
                        DocType.Full
                    ),
                    Val("Diagnosed and fixed issues in a large open-source library using debugging tools."),
                ]
            ),
        ]),
        Category("Projects", [
            project("Masters Capstone Project", DateRange(new Date(2025, 0), new Date(2025, 3)), [
                Val("Designing a custom programming language and compiler in Rust, targeting LLVM for multi-platform support."),
            ]),
            project("Senior Design Project", DateRange(new Date(2024, 7), new Date(2025, 3)), [
                Val(
                    "Collaborating to develop an application for creating and training PyTorch neural networks with a node-based interface."
                ),
            ]),
            project("Portfolio Website", DateRange(new Date(2023, 5), new Date(2023, 6)), [
                Val("Used React and Material UI to create a website for showcasing technical skills and experience."),
            ]),
            project(
                "VR Game Development",
                DateRange(new Date(2021, 6), new Date(2022, 7)),
                [
                    Val(
                        "Utilized Unreal Engine and C++ programming to design and create a Virtual Reality game for Oculus headsets."
                    ),
                ],
                DocType.Full
            ),
            project("Honors Modeling II Project", DateRange(new Date(2021, 0), new Date(2021, 3)), [
                Val(
                    "Collaborated to create a python program to analyze multiple companies’ logos using computer vision libraries."
                ),
            ]),
        ]),

        Category("Activities", [
            activity("ACM", "Member", DateRange(new Date(2022, 7))),
            activity("Bearcat Coders", "Volunteer", DateRange(new Date(2022, 7), new Date(2024, 11))),
            activity("IEEE", "Member", DateRange(new Date(2020, 10))),
            activity("Cross-Country", "Captain", DateRange(new Date(2019, 6), new Date(2020, 11)), DocType.Full),
            activity("National Honor Society", "Member", DateRange(new Date(2018, 0), new Date(2020, 4)), DocType.Full),
            activity("Spanish Honor Society", "Member", DateRange(new Date(2018, 0), new Date(2020, 4)), DocType.Full),
        ]),

        Category("Awards & Honors", [
            award("Tau Beta Pi Member", "Engineering Honor Society", DateRange(new Date(2024, 10))),
            award("CS Student of the Year Nominee", undefined, new Date(2023, 4), DocType.Full),
            award("Cincinnatus Scholarship", "For Academic Excellence", DateRange(new Date(2021, 7))),
            award("Mantei/Mae Award", "For Academic Excellence", [new Date(2022, 3), new Date(2023, 3), new Date(2024, 3)]),
            award("High School Valedictorian", undefined, new Date(2020, 4)),
            award("National Merit Scholarship Finalist/Recipient", undefined, new Date(2020, 4)),
            award("Middletown Community Foundation Scholarship", "For Academics and Service", new Date(2020, 7), DocType.Full),
        ]),
    ],
    // footer: "Seeking a Full-Time Position starting in Summer 2025",
};

export function ResumePage() {
    let [full, setFull] = useState(false);

    useEffect(() => {
        document.title = "Gareth's Resume";
    });

    return (
        <ThemeProvider theme={resumeTheme}>
            <CssBaseline />
            <Container maxWidth={false} sx={{ display: "flex", flexDirection: "column", maxWidth: "8in", height: "100vh" }}>
                <Box
                    sx={{
                        "@media print": { display: "none" },
                        borderBottom: "solid 1px #d0d7de",
                        borderImage:
                            "linear-gradient( 90deg, rgba(255, 255, 255, 1) 0%, rgba(208, 215, 222, 1) 14%, rgba(208, 215, 222, 1) 86%, rgba(255, 255, 255, 1) 100%) 1 1",
                    }}
                >
                    <Stack direction={"row"} justifyContent={"space-around"} alignItems={"center"}>
                        <Typography variant="h3" textAlign={"center"}>
                            Resume Renderer
                        </Typography>
                        <FormControlLabel
                            control={<Switch value={full} onChange={(_evt, val) => setFull(val)} />}
                            label="Full Resume"
                        />
                    </Stack>
                </Box>
                <ResumeRenderer resume={resume} docType={full ? DocType.Full : DocType.Short} />
            </Container>
        </ThemeProvider>
    );
}
