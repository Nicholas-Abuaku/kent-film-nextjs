"use client";
import React from "react";
import {
  Card,
  CardContent,
  Stack,
  Typography,
  ThemeProvider,
  createTheme,
  Button,
  Box,
} from "@mui/material";
import KidsFilmClb from '../assets/images/KidsFilmClub.png'
type FilmClubDisplayCardProps = {
  img: string;
  heading: string;
  ageRange: string;
  description: string;
  details: string;
};
import FilmCardTheme from "../Themes/FilmCardTheme";
import Image from "next/image";
const FilmClubDisplayCard = (props: FilmClubDisplayCardProps) => {
  return (
    <ThemeProvider theme={createTheme(FilmCardTheme)}>
      <Card
        elevation={12}
        sx={{
          width: "351px",
          maxHeight:'515px',
          
          marginLeft: "auto",
          borderRadius:'10px',
          marginRight: "auto",
          marginTop: "40px",
          backgroundColor: "#FFFFF",
          color: "black",
        }}
      >
        

        <Box sx={{ backgroundColor:'#15803d', maxWidth:'351px'}}>
        <Image
          src={
            props.img}
          width={0}
          height={0}
          alt={props.heading}
          title={props.heading}
          loading="eager"
          objectFit="stetech"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ height: "100%", maxHeight:'230px', maxWidth:'351px', width: "100%" }}
          quality={80}
        />
        </Box>
        <CardContent sx={{maxWidth:'351px'}}>
          <Stack spacing={0} sx={{marginBottom:'20px'}}>
            <Typography textAlign={"left"} variant="h6" >
              {props.heading}
            </Typography>
            <Typography variant="caption">{"Ages: " + props.ageRange}</Typography>
            <Typography textAlign={"left"} variant="subtitle1" sx={{height:'84px', overflowY:'scroll', }}>
              {props.description}
            </Typography>
          </Stack>
          <hr/>
          <Stack>
          <Typography variant="caption">{props.details}</Typography>
          <Button variant="contained" sx={{backgroundColor:'#15803d', width:'40%'}} href={"mailto: kentfilmfoundation@gmail.com?subject="+props.heading}>Contact Us</Button>
          </Stack>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
};

export default FilmClubDisplayCard;
