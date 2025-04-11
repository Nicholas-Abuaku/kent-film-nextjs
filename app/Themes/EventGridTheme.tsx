"use client";
import { createTheme, responsiveFontSizes } from "@mui/material";
import { Noto_Sans } from "next/font/google";

const inter = Noto_Sans({
  subsets: ["latin"],
  weight: ["500"],
});
let EventGridTheme = createTheme({
  typography: {
    
    fontFamily: `${inter.style.fontFamily}`,
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 400,
      color:'#1E2A38',
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 500,
      color:'#1E2A38',
    },

    h4:{
      fontSize:'2.5rem'
    },

    body1: {
      fontSize: "1.5rem",
      color:'white',
    },
  },
});
EventGridTheme = responsiveFontSizes(EventGridTheme);
EventGridTheme.typography.h5["@media (max-width:900px)"] = {
  fontSize: "0.75rem", //heading
};
EventGridTheme.typography.h6["@media (max-width:900px)"] = {
  fontSize: "0.75rem",
};
EventGridTheme.typography.body1["@media (max-width:900px)"] = {
  fontSize: "0.75rem",
};
EventGridTheme.typography.subtitle1["@media (max-width:900px)"] = {
  fontSize: "0.75rem",
};

export default EventGridTheme;
