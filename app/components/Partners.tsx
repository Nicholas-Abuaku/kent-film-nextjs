import React from "react";
import {
  Grid,
  Stack,
  useMediaQuery,
  createTheme,
  Typography,
  ThemeProvider,
} from "@mui/material";
import AboutTheme from "../Themes/AboutTheme";
import GarfieldWestonIcon from "../assets/images/1GarfieldWestonFoundation.png";
import ColyerFergusonIcon from "../assets/images/1ColyerFerguson.png"; //Keep
import KentCommunityFoundationIcon from "../assets/images/1KentCommunityFoundation .png"; //Keep
import RamsgateCouncil from "../assets/images/1PartnerLogo.png";
import ShiftKeyFilms from "../assets/images/1Shiftkey.png";
import VioletPictures from "../assets/images/1VioletPictures.png";
import RamsgateFilm from "../assets/images/3RamsgateInternationalFilm.png";
const Partners = () => {
  const isMobile = useMediaQuery(AboutTheme.breakpoints.down("md"));
  return (
    <ThemeProvider theme={AboutTheme}>
      <Grid
        item
        container
        md={12}
        justifyContent={"center"}
        alignItems={"center"}
        spacing={1}
      >
        <Grid item md={12}>
          <Typography
            textAlign={"center"}
            variant="h4"
            marginTop={0}
            marginBottom={0}
          >
            A HUGE THANKS to our Partners
          </Typography>
        </Grid>
        <Grid item md={12}>
          {isMobile ? (
            <Stack
              direction={"row"}
              spacing={1}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <img
                src={GarfieldWestonIcon.src}
                style={{ width: "60px", height: "60px" }}
                alt="Garfield Weston Foundation"
              />
              <img
                src={ColyerFergusonIcon.src}
                style={{ width: "60px", height: "60px" }}
              />
              <img
                src={KentCommunityFoundationIcon.src}
                style={{ width: "60px", height: "60px" }}
              />
              <img
                src={RamsgateCouncil.src}
                style={{ width: "60px", height: "60px" }}
              />
            </Stack>
          ) : (
            <Stack
              direction={"row"}
              spacing={4}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <img
                src={GarfieldWestonIcon.src} //Keep
                alt="Garfield Weston Foundation"
                title="Garfield Weston Foundation"
                loading="lazy"
              />
              <img
                src={ColyerFergusonIcon.src} //Keep
                alt="Colyer Ferguson Charitable Trust"
                title="Colyer Ferguson Charitable Trust"
                loading="lazy"
              />
              <img
                src={KentCommunityFoundationIcon.src} //Keep
                alt="Kent Community Foundation"
                title="Kent Community Foundation"
                loading="lazy"
              />
              <img
                src={RamsgateCouncil.src}
                alt="Ramsgate Town Council"
                title="Ramsgate Town Council"
                loading="lazy"
              />
              <img
                src={RamsgateFilm.src}
                title="Ramsgate International Film & TV Festival"
                alt="Ramsgate International Film & TV Festival"
                loading="lazy"
              />
              <img
                src={ShiftKeyFilms.src} //Keep
                alt="ShiftKey Films"
                title="ShiftKey Films"
                loading="lazy"
                width={150}
              />
              <img
                src={VioletPictures.src} //Keep
                alt="Violet Pictures"
                title="Violet Pictures"
                loading="lazy"
                width={290}
              />
            </Stack>
          )}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Partners;
