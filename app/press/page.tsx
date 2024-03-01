import React from "react";
import {
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
  ThemeProvider,
} from "@mui/material";
import PressCardGrid from "../components/PressCardGrid";
import PressTheme from "../Themes/PressTheme";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Press",
};
function Press() {
  return (
    <ThemeProvider theme={PressTheme}>
      <Grid container justifyContent={"center"} alignItems={"center"}>
        <Grid item md={12} xs={12} marginBottom={0}>
          <Typography variant="h3" textAlign={"center"} component={"h2"}>
            Media & Press
          </Typography>
          <Typography variant="h6" textAlign={"center"} component={"h2"}>
            Kent Film Foundation Press and Media Coverage
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <PressCardGrid />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Press;
