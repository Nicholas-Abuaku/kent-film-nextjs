"use client";
import { Grid, Skeleton, Typography } from "@mui/material";

import FilmClubDisplayCard from "./FilmClubDisplayCard";
import axios from "axios";
import { useEffect, useState } from "react";
interface FilmClub {
  id: number;
  heading: string;
  description: string;
  img_Url: string;
}
const FilmClubDisplayGrid = () => {
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
