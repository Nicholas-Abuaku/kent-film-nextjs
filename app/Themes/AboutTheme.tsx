"use client";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let AboutTheme = createTheme({
  typography: {
    h3: {
      fontFamily: "'Open Sans', Arial, Sans-serif",
    },
    h5: {
      fontFamily: "'Open Sans', Arial, Sans-serif",
      fontSize: 23,
    },
    h4: {
      fontSize: 36,
      fontFamily: "'Playfair Display', Georgia, serif",
    },
  },
});

AboutTheme = responsiveFontSizes(AboutTheme);
export default AboutTheme;
