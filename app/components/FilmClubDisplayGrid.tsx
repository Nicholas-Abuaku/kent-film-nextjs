"use client";
import {
  Grid,
  Skeleton,
  Typography,
  useMediaQuery,
  CardMedia,
  CardContent,
  Stack,
  Card,
} from "@mui/material";

import FilmClubDisplayCard from "./FilmClubDisplayCard";
import axios from "axios";
import { useEffect, useState } from "react";
import FilmClubTheme from "../Themes/FilmClubTheme";
interface FilmClub {
  id: number;
  heading: string;
  description: string;
  img_Url: string;
}
const FilmClubDisplayGrid = () => {
  const isMobile = useMediaQuery(FilmClubTheme.breakpoints.down("md"));
  const [filmClubs, setFilmClubs] = useState([]);
  const fetchFilmClubs = async () => {
    try {
      const response = await axios.get(
        "https://kentfilm.up.railway.app/api/film-clubs"
      );
      // console.log(response.data);
      setFilmClubs(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchFilmClubs();
  }, []);

  //fetch film club data
  return (
    <>
      {isMobile ? (
        <Card
          sx={{
            backgroundColor: "#127346",
            width: "90%",
            height: "100%",
            margin: "auto",
            marginTop: "40px",
            marginBottom: "30px",
            // width:"64.16vw",
            // height:"65.18vh"
          }}
        >
          <CardMedia
            component={"img"}
            height={"100%"}
            src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/Girls%20film%20club%201.jpg/:/cr=t:16.67%25,l:0%25,w:100%25,h:66.67%25/rs=w:1240,h:620,cg:true"
            alt="Free Youth Clubs Every Monday"
            title="Free Youth Clubs Every Monday"
          />
          <CardContent>
            <Stack spacing={2}>
              <Typography
                textAlign={"center"}
                variant="h6"
                color={"white"}
                component={"h2"}
              >
                FREE YOUTH FILM CLUBS EVERY MONDAY (term time only) 6-8pm
              </Typography>
              <Typography textAlign={"center"} color={"white"}>
                For more information contact: kentfilmfoundation@gmail.com{" "}
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      ) : (
        <Card
          // height={"65.18vh"}
          sx={{
            backgroundColor: "#127346",
            width: "60%",
            margin: "auto",
            marginTop: "40px",
            marginBottom: "30px",
            maxWidth: "80%",
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
                FREE YOUTH FILM CLUBS EVERY MONDAY (term time only) 6-8pm
              </Typography>
              <Typography textAlign={"center"} color={"white"}>
                For more information contact: kentfilmfoundation@gmail.com{" "}
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      )}
      <Grid container>
        {filmClubs.map((club: FilmClub) => (
          <Grid item md={6} xs={11} xl={3} key={club.id}>
            <FilmClubDisplayCard
              heading={club.heading}
              description={club.description}
              img={club.img_Url}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default FilmClubDisplayGrid;
