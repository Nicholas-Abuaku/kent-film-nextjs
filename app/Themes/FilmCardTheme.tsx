import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let FilmCardTheme = createTheme({
  typography: {
    h6: {
      fontFamily: "'Open Sans', arial, sans-serif",
      fontSize: 19,
    },
    subtitle1: {
      fontSize: 17,
    },
  },
});

FilmCardTheme = responsiveFontSizes(FilmCardTheme);
export default FilmCardTheme;
