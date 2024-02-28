"use client";
import React from "react";
import {
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import PressCardGrid from "../components/PressCardGrid";

function Press() {
  const textTheme = createTheme();
  const isMobile = useMediaQuery(textTheme.breakpoints.down("md"));
  return (
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
  );
}

export default Press;
