"use client";
import { createTheme, responsiveFontSizes } from "@mui/material";
import { Noto_Sans } from "next/font/google";
import {} from "next/font/google";
const inter = Noto_Sans({
  subsets: ["latin"], // Specify the character subsets you need (optional)
  weight: ["500"], // Include desired font weights
});
let MCardTheme = createTheme({
  typography: {
    fontFamily: `${inter.style.fontFamily}`,
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 0,
    },
    h6: {
      fontSize: "1.25rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
    },
  },
});
MCardTheme = responsiveFontSizes(MCardTheme);
MCardTheme.typography.h5["@media (max-width:600px)"] = {
  fontSize: "0.75rem", //heading
};
MCardTheme.typography.h6["@media (max-width:600px)"] = {
  fontSize: "0.69rem",
};
MCardTheme.typography.body1["@media (max-width:600px)"] = {
  fontSize: "0.7rem",
};

export default MCardTheme;
