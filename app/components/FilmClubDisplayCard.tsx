"use client";
import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
  ThemeProvider,
  createTheme,
} from "@mui/material";
type FilmClubDisplayCardProps = {
  heading: string;
  img: string;
  description: string;
};
import FilmCardTheme from "../Themes/FilmCardTheme";
import Image from "next/image";
const FilmClubDisplayCard = (props: FilmClubDisplayCardProps) => {
  const isMobile = useMediaQuery(FilmCardTheme.breakpoints.down("md"));
  return (
    <ThemeProvider theme={createTheme(FilmCardTheme)}>
      <Card
        elevation={12}
        sx={{
          width: "80%",
          // marginLeft: "0.875rem",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "40px",
          backgroundColor: "#339465",
          color: "white",
          "@media (max-width: 600px)": {
            width: "90%",
          },
          "@media (max-width: 899px)": {
            width: "70%",
          },
        }}
      >
        <Image
          src={
            "https://picayune-belief-production.up.railway.app/storage/" +
            props.img
          }
          height={0}
          width={0}
          alt={props.heading}
          title={props.heading}
          unoptimized={true}
          loading="eager"
          style={{ height: "20.98635886673662vh", width: "100%" }}
          quality={80}
        />

        <CardContent>
          <Stack spacing={2}>
            <Typography textAlign={"center"} variant="h6" fontWeight={"bold"}>
              {props.heading}
            </Typography>
            <Typography textAlign={"center"} variant="subtitle1">
              {props.description}
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
};

export default FilmClubDisplayCard;
