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

LatestScreeningTheme.typography.body1["@media (max-width:1024px)"] = {
  fontSize: "1.5rem",
};
LatestScreeningTheme.typography.body1["@media (max-width:768px)"] = {
  fontSize: "1rem",
};
LatestScreeningTheme.typography.body1["@media (max-width:360px)"] = {
  fontSize: "1rem",
};

export default LatestScreeningTheme;
