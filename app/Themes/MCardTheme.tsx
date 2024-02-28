"use client";
import { createTheme, responsiveFontSizes } from "@mui/material";

let MCardTheme = createTheme({
  typography: {
    fontFamily: "'NunitoSans',Helvetica,Arial,sans-serif",
    subtitle1: {
      fontSize: "1rem",
    },
    h6: {
      fontSize: "1.2rem",
      fontWeight: 600, // Set the desired font weight
    },
  },
});
MCardTheme = responsiveFontSizes(MCardTheme);
MCardTheme.typography.h5["@media (max-width:600px)"] = {
  fontSize: "0.9rem", // Adjust the font size for smaller screens
};
MCardTheme.typography.h6["@media (max-width:600px)"] = {
  fontSize: "0.9rem", // Adjust the font size for smaller screens
};

export default MCardTheme;
