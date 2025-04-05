import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { Noto_Sans } from "next/font/google";

const inter = Noto_Sans({
  subsets: ["latin"],
  weight: ["500"],
});
let PressCardTheme = createTheme({
  typography: {
    fontFamily: `${inter.style.fontFamily}`,
    subtitle1: {
      fontFamily: "'Open Sans', arial, sans-serif",
      color: "white",
    },

    body1:{
      
      color:'#2F7D3D',
    },

    body2:{
      fontSize:'1rem',
      color:'#444444'
    },
    caption:{
      fontSize:'0.9rem'
    },

    h6:{
      color:'#1F1F1F',
      fontWeight:'900',
      fontSize:'1.4rem'
    }
  },
});
PressCardTheme = responsiveFontSizes(PressCardTheme);
export default PressCardTheme;
