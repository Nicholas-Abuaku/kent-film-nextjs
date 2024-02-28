import { createTheme, responsiveFontSizes } from "@mui/material";

let MailingDialogTheme = createTheme({
  typography: {
    fontFamily: "'Open Sans', arial, sans-serif",
  },
});

MailingDialogTheme = responsiveFontSizes(MailingDialogTheme);
export default MailingDialogTheme;
