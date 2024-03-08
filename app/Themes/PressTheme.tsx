"use client";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { Noto_Sans } from "next/font/google";

const inter = Noto_Sans({
  subsets: ["latin"],
  weight: ["500"],
});
let PressTheme = createTheme({
  typography: {
    h3: {
      fontFamily: `${inter.style.fontFamily}`,
      color: "#198754",
      fontSize: 50,
    },
    h6: {
      fontFamily: `${inter.style.fontFamily}`,
    },
  },
});
PressTheme = responsiveFontSizes(PressTheme);
export default PressTheme;
