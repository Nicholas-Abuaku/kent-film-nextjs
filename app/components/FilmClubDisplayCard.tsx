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
const FilmClubDisplayCard = (props: FilmClubDisplayCardProps) => {
  const isMobile = useMediaQuery(FilmCardTheme.breakpoints.down("md"));
  return (
    <ThemeProvider theme={createTheme(FilmCardTheme)}>
      {isMobile ? (
        <Card
          sx={{
            width: "100%",
            height: "auto",
            marginLeft: "4%",
            marginBottom: "4px",
            backgroundColor: "#339465",
            color: "white",
          }}
          elevation={12}
        >
          <CardMedia
            component={"img"}
            height={"30%"}
            src={"https://kentfilm.up.railway.app/storage/" + props.img}
            alt={props.heading}
            title={props.heading}
            loading="lazy"
          />
          <CardContent>
            <Stack spacing={2}>
              <Typography textAlign={"center"} variant="h6" fontWeight={"bold"}>
                {props.heading}
              </Typography>
              <Typography
                textAlign={"center"}
                variant="subtitle1"
                component={"h4"}
              >
                {props.description}
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      ) : (
        <Card
          elevation={12}
          sx={{
            width: "80%",
            marginLeft: "0.875rem",
            marginTop: "40px",
            backgroundColor: "#339465",
            color: "white",
          }}
        >
          <CardMedia
            component={"img"}
            height={"300px"}
            src={"https://kentfilm.up.railway.app/storage/" + props.img}
            alt={props.heading}
            title={props.heading}
            loading="lazy"
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
      )}
    </ThemeProvider>
  );
};

export default FilmClubDisplayCard;
