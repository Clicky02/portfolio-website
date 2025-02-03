import { createTheme } from "@mui/material";

export const resumeTheme = createTheme({
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
        fontFamily: ["Times New Roman", "serif"].join(","),
        h1: { fontSize: "20pt", fontWeight: "bold" },
        h2: { fontSize: "12pt", textAlign: "left", textTransform: "uppercase", fontWeight: "bold" },
        h3: { fontSize: "10pt", lineHeight: 1.2 },
        h4: { fontSize: "10pt", fontStyle: "italic", lineHeight: 1.2 },
        h5: { fontSize: "10pt" },
        h6: { fontSize: "10pt" },
        subtitle1: {
            fontSize: "10pt",
        },
        body1: { fontSize: "10pt", lineHeight: 1.2, textAlign: "justify" },
        body2: { fontSize: "10pt", lineHeight: 1.2, fontStyle: "italic" },
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
        MuiContainer: {
            styleOverrides: {
                root: {
                    "@media print": {
                        margin: 0,
                        padding: 0,
                        maxWidth: 10000,
                    },
                },
            },
        },
    },
});
