"use client";
import { createTheme, responsiveFontSizes } from "@mui/material";
let theme = createTheme();
let LatestScreeningTheme = createTheme(theme, {
  typography: {
    fontFamily: "'Open Sans', arial, sans-serif",
  },
  palette: {
    primary: {
      main: "#FFFFFF", // Set a different primary color
    },
  },
});

LatestScreeningTheme = responsiveFontSizes(LatestScreeningTheme);
export default LatestScreeningTheme;
