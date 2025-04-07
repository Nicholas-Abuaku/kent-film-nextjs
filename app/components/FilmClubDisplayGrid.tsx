// "use client";
// import {
//   Grid,
//   Skeleton,
//   Typography,
//   useMediaQuery,
//   CardMedia,
//   CardContent,
//   Stack,
//   Card,
// } from "@mui/material";

// import FilmClubDisplayCard from "./FilmClubDisplayCard";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import FilmClubTheme from "../Themes/FilmClubTheme";
// interface FilmClub {
//   id: number;
//   heading: string;
//   description: string;
//   img_Url: string;
// }
// type FilmClubDisplayGridProps = {
//   response: FilmClub[];
// };

// const FilmClubDisplayGrid = (props: FilmClubDisplayGridProps) => {
//   const filmClubs = props.response;
//   return (
//     <Grid container justifyContent={"center"} alignItems={"center"}>
//       {filmClubs.map((club: FilmClub) => (
//         <Grid item md={6} xs={11} xl={3} key={club.id}>
//           <FilmClubDisplayCard
//             heading={club.heading}
//             description={club.description}
//             img={club.img_Url}
//           />
//         </Grid>
//       ))}
//     </Grid>
//   );
// };

// export default FilmClubDisplayGrid;
