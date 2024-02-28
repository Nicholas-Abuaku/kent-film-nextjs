"use client";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let ContactTheme = createTheme({
  typography: {
    h6: {},
  },
});

ContactTheme = responsiveFontSizes(ContactTheme);
export default ContactTheme;
