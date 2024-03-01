import React from "react";
import {
  Box,
  IconButton,
  Stack,
  Typography,
  Icon,
  Paper,
  Grid,
  useMediaQuery,
  createTheme,
  Button,
  ThemeProvider,
} from "@mui/material";

import FilmClubDisplayGrid from "../components/FilmClubDisplayGrid";
import FilmClubTheme from "../Themes/FilmClubTheme";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Film Clubs",
};
const FilmClubs = () => {
  return (
    <ThemeProvider theme={FilmClubTheme}>
      <Grid
        container
        spacing={1}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid
          item
          xs={12}
          md={12}
          justifyContent={"center"}
          alignItems={"center"}
        ></Grid>
        <Grid item xs={12}>
          <FilmClubDisplayGrid />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default FilmClubs;
