"use client";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { Noto_Sans } from "next/font/google";

const inter = Noto_Sans({
  subsets: ["latin"],
  weight: ["300"],
});
let AboutTheme = createTheme({
  typography: {
    fontFamily: `${inter.style.fontFamily}`,

    h5: {
      fontSize: 23,
    },
    h4: {
      fontSize: 36,
      fontFamily: "'Playfair Display', Georgia, serif",
    },
  },
});

AboutTheme = responsiveFontSizes(AboutTheme);
AboutTheme.typography.caption["@media (max-width:600px)"] = {
  fontSize: "0.6rem",
};
AboutTheme.typography.body1["@media (max-width:600px)"] = {
  fontSize: "0.7rem",
};
export default AboutTheme;
