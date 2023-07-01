import "./App.css";

import Header from "./modules/Header/Header";
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Home from "./modules/Home/Home";

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
            dark: "#00befd",
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
    },
    typography: {
        fontFamily: ["inter", "droidSerif"].join(","),
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
            <ThemeProvider theme={lightTheme}>
                <CssBaseline />
                <Header></Header>
                <Home></Home>
                <Box id="section1" sx={{ height: "150vh" }} />
                <Box id="section2" sx={{ height: "150vh" }} />
                <Box id="section3" sx={{ height: "150vh" }} />
            </ThemeProvider>
        </div>
    );
}

export default App;
