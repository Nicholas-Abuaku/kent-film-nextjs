//
import { Grid, Skeleton, Typography } from "@mui/material";

import FilmClubDisplayCard from "./FilmClubDisplayCard";

interface FilmClub {
  id: number;
  heading: string;
  description: string;
  img_Url: string;
}
const FilmClubDisplayGrid = async () => {
  const res = await fetch("https://kentfilm.up.railway.app/api/film-clubs");
  const filmClubs: FilmClub[] = await res.json();

  //fetch film club data
  return (
    <>
      <Grid container>
        {filmClubs.map((club) => (
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
