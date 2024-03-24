"use client";
import { createTheme, responsiveFontSizes } from "@mui/material";
let theme = createTheme();
let LatestScreeningTheme = createTheme(theme, {
  typography: {
    fontFamily: "'Open Sans', arial, sans-serif",
    h1: {
      fontSize: "4.5rem",
    },
    body1: {
      fontSize: "1rem",
    },
  },
  palette: {
    primary: {
      main: "#FFFFFF", // Set a different primary color
    },
  },
});

LatestScreeningTheme = responsiveFontSizes(LatestScreeningTheme);
LatestScreeningTheme.typography.body1["@media (max-width:600px)"] = {
  fontSize: "0.8rem",
};
export default LatestScreeningTheme;
