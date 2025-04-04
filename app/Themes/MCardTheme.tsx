"use client";
import { createTheme, responsiveFontSizes } from "@mui/material";
import { Noto_Sans } from "next/font/google";

const inter = Noto_Sans({
  subsets: ["latin"],
  weight: ["500"],
});
let MCardTheme = createTheme({
  typography: {
    
    fontFamily: `${inter.style.fontFamily}`,
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 400,
      color:'#1E2A38',
    },
    h6: {
      fontSize: "1.25rem",
      fontWeight: 500,
      color:'#1E2A38',
    },
    body1: {
      fontSize: "1rem",
      color:'#1E2A38',
    },
  },
});
MCardTheme = responsiveFontSizes(MCardTheme);
MCardTheme.typography.h5["@media (max-width:900px)"] = {
  fontSize: "0.75rem", //heading
};
MCardTheme.typography.h6["@media (max-width:900px)"] = {
  fontSize: "0.75rem",
};
MCardTheme.typography.body1["@media (max-width:900px)"] = {
  fontSize: "0.75rem",
};
MCardTheme.typography.subtitle1["@media (max-width:900px)"] = {
  fontSize: "0.75rem",
};

export default MCardTheme;
