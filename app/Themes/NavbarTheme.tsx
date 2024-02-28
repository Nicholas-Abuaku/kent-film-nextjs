import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let NavbarTheme = createTheme({});

NavbarTheme = responsiveFontSizes(NavbarTheme);
export default NavbarTheme;
