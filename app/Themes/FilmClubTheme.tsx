"use client";
import { createTheme } from "@mui/material/styles";
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["500"],
});
const FilmClubTheme = createTheme({
  typography: {
    fontFamily: `${notoSans.style.fontFamily}`,
  },
});

export default FilmClubTheme;
