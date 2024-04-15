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
import Image from "next/image";
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
        marginBottom={0}
      >
        <Grid item md={12}>
          <Typography
            textAlign={"center"}
            variant="h4"
            marginTop={0}
            marginBottom={0}
            sx={{
              "@media (max-width: 1024px)": {
                fontSize: "1.2rem",
              },
            }}
          >
            A HUGE THANKS to our Partners
          </Typography>
        </Grid>
        <Grid item md={12}>
          {isMobile ? (
            <Stack
              direction={"row"}
              spacing={0.5}
              justifyContent={"center"}
              alignItems={"center"}
              width={"90%"}
              marginLeft={"auto"}
            >
              <Image
                src={GarfieldWestonIcon.src}
                alt="Garfield Weston Foundation"
                title="Garfield Weston Foundation"
                width={60}
                height={60}
              />
              <Image
                src={ColyerFergusonIcon.src}
                width={60}
                height={60}
                alt="Colyer Ferguson Chartiable Trust"
                title="Colyer Ferguson Chartiable Trust"
              />
              <Image
                src={KentCommunityFoundationIcon.src}
                alt="Kent Community Foundation"
                title="Kent Community Foundation"
                loading="lazy"
                width={60}
                height={60}
              />
              <Image
                src={RamsgateCouncil.src}
                alt="Ramsgate Town Council"
                title="Ramsgate Town Council"
                width={60}
                height={60}
                loading="lazy"
              />

              <Image
                src={RamsgateFilm.src}
                title="Ramsgate International Film & TV Festival"
                alt="Ramsgate International Film & TV Festival"
                loading="lazy"
                width={60}
                height={60}
                quality={100}
              />
              <Image
                src={ShiftKeyFilms.src}
                alt="ShiftKey Films"
                title="ShiftKey Films"
                width={60}
                height={60}
              />
              <Image
                src={VioletPictures.src}
                alt="Violet Pictures"
                title="Violet Pictures"
                width={60}
                height={60}
              />
            </Stack>
          ) : (
            <Stack
              direction={"row"}
              spacing={4}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Image
                src={GarfieldWestonIcon.src}
                alt="Garfield Weston Foundation"
                title="Garfield Weston Foundation"
                width={130}
                height={130}
              />
              <Image
                src={ColyerFergusonIcon.src}
                width={80}
                height={80}
                alt="Colyer Ferguson Chartiable Trust"
                title="Colyer Ferguson Chartiable Trust"
              />
              <Image
                src={KentCommunityFoundationIcon.src}
                alt="Kent Community Foundation"
                title="Kent Community Foundation"
                loading="lazy"
                width={65}
                height={65}
              />
              <Image
                src={RamsgateCouncil.src}
                alt="Ramsgate Town Council"
                title="Ramsgate Town Council"
                width={125}
                height={125}
                loading="lazy"
              />

              <Image
                src={RamsgateFilm.src}
                title="Ramsgate International Film & TV Festival"
                alt="Ramsgate International Film & TV Festival"
                loading="lazy"
                width={70}
                height={70}
                quality={100}
              />
              <Image
                src={ShiftKeyFilms.src}
                alt="ShiftKey Films"
                title="ShiftKey Films"
                width={150}
                height={150}
              />
              <Image
                src={VioletPictures.src}
                alt="Violet Pictures"
                title="Violet Pictures"
                width={290}
                height={290}
              />
            </Stack>
          )}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Partners;
