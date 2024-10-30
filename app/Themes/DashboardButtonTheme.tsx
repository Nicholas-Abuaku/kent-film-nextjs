import { createTheme, responsiveFontSizes } from "@mui/material";
import { Montagu_Slab } from "next/font/google";

const montagu = Montagu_Slab({
  subsets: ["latin"],
  weight: ["400"],
});
let DashboardButtonTheme = createTheme({
  typography: {
    fontFamily: `${montagu.style.fontFamily}`,
  },
});
DashboardButtonTheme = responsiveFontSizes(DashboardButtonTheme);
export default DashboardButtonTheme;
