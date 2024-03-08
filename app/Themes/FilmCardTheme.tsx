"use client";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["200"],
});
let FilmCardTheme = createTheme({
  typography: {
    h6: {
      fontFamily: `${notoSans.style.fontFamily}`,
      fontSize: 19,
    },
    subtitle1: {
      fontFamily: `${notoSans.style.fontFamily}`,
      fontSize: 17,
    },
  },
});

FilmCardTheme = responsiveFontSizes(FilmCardTheme);
export default FilmCardTheme;
