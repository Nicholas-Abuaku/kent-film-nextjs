"use client";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["500"],
});
let FilmCardTheme = createTheme({
 
  typography: {
    fontFamily: `${notoSans.style.fontFamily}`,
    h6: {
      fontWeight:'300',
    },
    subtitle1: {
     fontWeight:'100',
      fontSize: 17,
    },
  },
});

FilmCardTheme = responsiveFontSizes(FilmCardTheme);
export default FilmCardTheme;
