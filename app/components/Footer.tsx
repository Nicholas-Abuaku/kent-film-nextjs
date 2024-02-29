"use client";
import React from "react";
import {
  Typography,
  useTheme,
  useMediaQuery,
  ThemeProvider,
  createTheme,
  Grid,
} from "@mui/material";
import SocialMediaLinks from "./SocialMediaLinks";
const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      marginTop={4}
      position={"sticky"}
    >
      <Grid item xs={12}>
        <SocialMediaLinks />
      </Grid>
      <Grid item xs={12}>
        {isMobile ? (
          <Typography textAlign={"center"} variant="caption" component={"h4"}>
            COPYRIGHT © 2024 KENT FILM FOUNDATION - ALL RIGHTS RESERVED.
          </Typography>
        ) : (
          <Typography variant="h6" textAlign={"center"} component={"h4"}>
            COPYRIGHT © 2024 KENT FILM FOUNDATION - ALL RIGHTS RESERVED.
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default Footer;
