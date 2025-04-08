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
    url: "https://kentfilmfoundation.co.uk/film-clubs",
  },
  twitter: {
    title: "Kent Film Foundation",
    description:
      "Explore films at Ramsgate Community Cinema. Check this month's screenings, enjoy events, and connect on social media. Your cinematic journey begins here!",
  },
  alternates: {
    canonical: `https://kentfilmfoundation.co.uk/film-clubs`,
  },
};
interface FilmClubInfo {
  id: number;
  heading: string;
  description: string;
  img_Url: string;
  age_range: string;
  details:string;
}
const FilmClubs = async () => {
  const response = await fetch(
    "https://kentfilm2025-production.up.railway.app/api/film-clubs",
    { headers:{ Accept:'application/json'}, cache: "force-cache",  }
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
          textAlign={'center'}
          marginTop={4}
         
          
        >
          <Typography variant="h3" >Film Clubs</Typography>
        </Grid>
        <Grid item xs={12} md={12} display={'flex'} justifyContent={'center'} sx={{}} >
          <Card sx={{backgroundColor:'rgb(240 253 244)', border:'1px solid', borderColor:'rgb(187 247 208)', width:'90%', textAlign:'center', justifyContent:'center', alignItems:'center'}} elevation={0}>
            <CardContent>
              <Stack spacing={5}>
              <Typography variant="h5">FREE Youth Film Clubs Every Monday 6-8pm (Term Time Only)</Typography>
              <Typography>Join our exciting film clubs in Ramsgate, led by award-winning mentors from professional arts and media backgrounds. We often invite guest speakers from the world of film and television!</Typography>
              <Stack direction={'row'} spacing={1} textAlign={'center'} justifyContent={'center'}>
              <Typography variant="caption">For more information contact: </Typography> 
              <Typography variant="caption" component={'a'} href="mailto:kentfilmfoundation@gmail.com" sx={{color:'blue'}}> kentfilmfoundation@gmail.com</Typography>
              </Stack>
              
              </Stack>
            </CardContent>
          </Card>
        </Grid>
  

        {filmClubs.map((club: FilmClubInfo) => (
          <Grid item xs={12} md={5} lg={4} xl={3}   key={club.id}>
            <FilmClubDisplayCard
              heading={club.heading}
              ageRange={club.age_range}
              details={club.details}
              description={club.description}
              img={club.img_Url?"https://kentfilm2025-production.up.railway.app/storage/"+club.img_Url : "fallback"}
            />
          </Grid>
        ))}
       
      </Grid>
    </ThemeProvider>
  );
};

export default FilmClubs;
