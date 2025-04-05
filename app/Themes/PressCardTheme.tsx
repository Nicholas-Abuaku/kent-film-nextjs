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
      fontWeight: 'bold',
    },

    caption:{
      fontSize:'0.9rem'
    },

    h6:{
      color:'#1d3fae',
      fontWeight:'900'
    }
  },
});
PressCardTheme = responsiveFontSizes(PressCardTheme);
export default PressCardTheme;
