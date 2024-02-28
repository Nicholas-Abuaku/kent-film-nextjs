import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let PressCardTheme = createTheme({
  typography: {
    subtitle1: {
      fontFamily: "'Open Sans', arial, sans-serif",
      color: "white",
    },
  },
});
PressCardTheme = responsiveFontSizes(PressCardTheme);
export default PressCardTheme;
