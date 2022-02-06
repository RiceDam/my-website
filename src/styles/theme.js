import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        background: {
            default: "#333333"
        },
        text: {
            primary: "#E9F1F2",
            secondary: "#3A95D6",
        },
        primary: {
            main: '#333333',
            contrastText: '#E9F1F2',
        },
        secondary: {
            main: '#3A95D6',
            contrastText: '#E9F1F2',
        },
        tertiary: {
            main: '#2FD6C2',
        }
    },
    typography: {
        h1: {
            fontFamily: ["Fira Sans", "sans-serif"].join(','),
            fontWeight: 700,
            fontSize: 48
        },
        h2: {
            fontFamily: ["Fira Code", "monospace"].join(','),
            fontWeight: 700,
            fontSize: 24
        },
        h3: {
            fontFamily: ["Fira Code", "monospace"].join(","),
            fontWeight: 600,
            fontSize: 24
        },
        body1: {
            fontFamily: ["Fira Sans", "sans-serif"].join(","),
            fontWeight: 400,
            fontSize: 18
        },
        body2: {
            fontFamily: ["Fira Code", "monospace"].join(","),
            fontWeight: 400,
            fontSize: 18
        },
        button: {
            fontFamily: ["Fira Code", "monospace"].join(","),
            fontWeight: 600,
            fontSize: 24
        }
    },
    breakpoints: {
        values: {
           mobile: 480,
           tablet: 768,
           laptop: 1024,
           desktop: 1025
        }
    }
});