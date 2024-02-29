"use client";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
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
} from "@mui/material";

import FilmClubDisplayGrid from "../components/FilmClubDisplayGrid";
import FilmClubTheme from "../Themes/FilmClubTheme";

const FilmClubs = () => {
  const isMobile = useMediaQuery(FilmClubTheme.breakpoints.down("md"));
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
        </Grid>
        <Grid item xs={12}>
          <FilmClubDisplayGrid />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default FilmClubs;
