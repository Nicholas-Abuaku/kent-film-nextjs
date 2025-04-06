"use client";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { Noto_Sans } from "next/font/google";

const inter = Noto_Sans({
  subsets: ["latin"],
  weight: ["500"],
});
let PartnerTheme = createTheme({
  typography: {
    fontFamily: `${inter.style.fontFamily}`,

    h5: {
      fontSize: 23,
    },
    h4: {
      fontSize: 36,
      fontWeight:'700',
      
    },
  },
});

PartnerTheme = responsiveFontSizes(PartnerTheme);
PartnerTheme.typography.caption["@media (max-width:600px)"] = {
  fontSize: "0.6rem",
};
PartnerTheme.typography.body1["@media (max-width:600px)"] = {
  fontSize: "0.7rem",
};
export default PartnerTheme;
