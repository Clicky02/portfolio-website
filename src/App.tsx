import "./App.css";

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Blog from "modules/blog/Blog";
import BlogHome from "modules/blog/BlogHome";
import { BlogRenderer } from "modules/blog/BlogRenderer";
import { Main } from "modules/main/Main";
import { ResumePage } from "modules/resume/Resume";
import { HashRouter, Route, Routes } from "react-router-dom";

const lightTheme = createTheme({
    palette: {
        mode: "light",
        text: {
            primary: "#000000",
            secondary: "#6D6D6D",
        },
        primary: {
            main: "#64d1ff",
            light: "#a7e3ff",
            dark: "#00befdff",
            contrastText: "#FFFFFF",
        },
        secondary: {
            main: "#6483ff",
            light: "#97a6fe",
            dark: "#004af0",
            contrastText: "#FFFFFF",
        },
        error: {
            main: "#db3633",
            light: "#e6504d",
            dark: "#bc2626",
            contrastText: "#FFFFFF",
        },
        success: {
            main: "#26bc26",
            light: "#76d170",
            dark: "#009a0a",
            contrastText: "#FFFFFF",
        },
        action: {
            hoverOpacity: 0.11,
        },
    },
    typography: {
        fontFamily: ["inter", "droidSerif"].join(","),
        h1: { fontSize: 60 },
        h2: { fontSize: 48 },
        h3: { fontSize: 34 },
        h4: { fontSize: 24 },
        h5: { fontSize: 20 },
        h6: { fontSize: 18 },
        subtitle1: {
            fontSize: 18,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.variant === "outlined" && {
                        borderWidth: 3,
                        borderRadius: 5,
                        "&:hover": { borderWidth: 3, borderRadius: 5 },
                    }),
                }),
            },
        },
    },
});

function App() {
    return (
        <div className="App">
            <HashRouter>
                <ThemeProvider theme={lightTheme}>
                    <CssBaseline />
                    <Routes>
                        <Route index element={<Main />} />
                        <Route path="blog" element={<Blog />}>
                            <Route index element={<BlogHome />} />
                            <Route path=":page" element={<BlogRenderer />} />
                        </Route>
                        <Route path="resume" element={<ResumePage />}></Route>
                    </Routes>
                </ThemeProvider>
            </HashRouter>
        </div>
    );
}

export default App;
