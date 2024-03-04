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
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

import FilmClubDisplayGrid from "../components/FilmClubDisplayGrid";
import FilmClubDisplayCard from "../components/FilmClubDisplayCard";
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
const FilmClubs = async () => {
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
        >
          <Card
            // height={"65.18vh"}
            sx={{
              backgroundColor: "#127346",
              width: "60%",
              margin: "auto",
              marginTop: "40px",
              marginBottom: "30px",
              maxWidth: "80%",
              "@media (max-width: 600px)": {
                width: "100%",
              },
            }}
            elevation={24}
          >
            <CardMedia
              component={"img"}
              height={"50%"}
              src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/Girls%20film%20club%201.jpg/:/cr=t:16.67%25,l:0%25,w:100%25,h:66.67%25/rs=w:1240,h:620,cg:true"
              alt="Free Youth Clubs Every Monday"
              title="Free Youth Clubs Every Monday"
              loading="eager"
            />
            <CardContent>
              <Stack spacing={2}>
                <Typography
                  textAlign={"center"}
                  variant="h5"
                  color={"white"}
                  component={"h2"}
                >
                  FREE YOUTH FILM CLUBS EVERY FRIDAY (term time only) 6-8pm
                </Typography>
                <Typography textAlign={"center"} color={"white"}>
                  For more information contact: kentfilmfoundation@gmail.com{" "}
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <FilmClubDisplayGrid />
      </Grid>
    </ThemeProvider>
  );
};

export default FilmClubs;
