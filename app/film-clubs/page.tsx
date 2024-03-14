import React from "react";
import {
  Stack,
  Typography,
  Grid,
  ThemeProvider,
  Card,
  CardContent,
} from "@mui/material";
import dynamic from "next/dynamic";
import FilmClubMain from "../assets/images/FilmClubsMainimg.png";
const FilmClubDisplayCard = dynamic(
  () => import("../components/FilmClubDisplayCard"),
  { ssr: true }
);
import FilmClubTheme from "../Themes/FilmClubTheme";
import { Metadata } from "next";
import Image from "next/image";
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
    canonical: `https://kentfilmfoundation.vercel.app/film-clubs`,
  },
};
interface FilmClubInfo {
  id: number;
  heading: string;
  img_Url: string;
  description: string;
}
const FilmClubs = async () => {
  const response = await fetch(
    "https://kentfilm.up.railway.app/api/film-clubs",
    { cache: "no-cache" }
  );
  const filmClubs: FilmClubInfo[] = await response.json();
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
              width: "59.46875vw",
              height: "100%",
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
            <Image
              src={FilmClubMain.src}
              alt="Free Youth Clubs Every Monday"
              title="Free Youth Clubs Every Monday"
              loading="eager"
              width={0}
              height={0}
              sizes="100vw"
              style={{ height: "50%", width: "100%" }}
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

        {filmClubs.map((club: FilmClubInfo) => (
          <Grid item xl={3} md={4} xs={12} key={club.id}>
            <FilmClubDisplayCard
              heading={club.heading}
              description={club.description}
              img={club.img_Url}
            />
          </Grid>
        ))}
      </Grid>
    </ThemeProvider>
  );
};

export default FilmClubs;
