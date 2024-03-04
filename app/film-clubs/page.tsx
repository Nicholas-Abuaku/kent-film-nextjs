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

  description:
    "Join Kent Film Foundation's Free Youth Film Clubs at Ramsgate Community Cinema - Mondays, 6-8pm.",
  openGraph: {
    title:
      "Unlock Your Creativity with Kent Film Foundation's Free Youth Film Clubs | Explore Wildlife Filmmaking and More! Mondays, 6-8pm at Ramsgate Community Cinema",
    description:
      "Join Kent Film Foundation's Free Youth Film Clubs at Ramsgate Community Cinema - Mondays, 6-8pm.",
    type: "website",
    url: "http://localhost:3000/film-clubs",
  },
  twitter: {
    title: "Kent Film Foundation",
    description:
      "Explore films at Ramsgate Community Cinema. Check this month's screenings, enjoy events, and connect on social media. Your cinematic journey begins here!",
  },
  alternates: {
    canonical: `https://kentfilmfoundation.netlify.app/film-clubs`,
  },
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
