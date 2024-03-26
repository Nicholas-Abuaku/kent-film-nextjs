import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { Noto_Sans } from "next/font/google";
const inter = Noto_Sans({
  subsets: ["latin"], // Specify the character subsets you need (optional)
  weight: ["500"], // Include desired font weights
});
let NavbarTheme = createTheme({
  typography: {
    fontFamily: `${inter.style.fontFamily}`,
  },
});

NavbarTheme.typography.body1["@media (max-width:1024px)"] = {
  fontSize: "1rem",
};
NavbarTheme.typography.h5["@media (max-width:1024px)"] = {
  fontSize: "1rem",
};
NavbarTheme = responsiveFontSizes(NavbarTheme);
export default NavbarTheme;
