"use client";
import { createTheme, responsiveFontSizes } from "@mui/material";

let LatestScreeningTheme = createTheme({
  typography: {
    fontFamily: "'Open Sans', arial, sans-serif",
  },
  palette: {
    primary: {
      main: "#FFFF", // Set a different primary color
    },
  },
});

LatestScreeningTheme = responsiveFontSizes(LatestScreeningTheme);
export default LatestScreeningTheme;
