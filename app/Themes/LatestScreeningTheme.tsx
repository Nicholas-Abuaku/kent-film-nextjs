"use client";
import { createTheme, responsiveFontSizes } from "@mui/material";
import { Noto_Sans } from "next/font/google";
const inter = Noto_Sans({
  subsets: ["latin"],
  weight: ["500"],
});

let LatestScreeningTheme = createTheme( {
  typography: {
    
    fontFamily: `${inter.style.fontFamily}`,
 
    h1: {
      fontSize: "4.5rem",
      color:'#1E2A38',

    },
    body1: {
      fontSize: "1rem",
       color:'#1E2A38',
    },

    h4:{
      color:'#1E2A38',
      fontSize:'2rem'
    },
    h3:{
      color:'#1E2A38',
      fontSize:'2rem'
    }
    
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
