import { createTheme, responsiveFontSizes } from "@mui/material";

let MoviCardGridTheme = createTheme({
  typography: {
    subtitle1: {
      fontSize: "1rem",
    },
    h6: {
      fontSize: "1.2rem",
      fontWeight: 600, // Set the desired font weight
    },
  },
});
MoviCardGridTheme = responsiveFontSizes(MoviCardGridTheme);

export default MoviCardGridTheme;
