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
import PartnerTheme from "../Themes/PartnerTheme";
const Partners = () => {
  const isMobile = useMediaQuery(AboutTheme.breakpoints.down("md"));
  return (
    <ThemeProvider theme={PartnerTheme}>
      <Grid
        item
        container
        md={12}
        justifyContent={"center"}
        alignItems={"center"}
        marginBottom={0}
      >
        <Grid item xs={12}>
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
        <Grid item xs={12}>
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
                width={0}
                height={60}
              />
              <Image
                src={ColyerFergusonIcon.src}
                width={30}
                height={60}
                alt="Colyer Ferguson Chartiable Trust"
                title="Colyer Ferguson Chartiable Trust"
              />
              <Image
                src={KentCommunityFoundationIcon.src}
                alt="Kent Community Foundation"
                title="Kent Community Foundation"
                loading="lazy"
                width={30}
                height={60}
              />
              <Image
                src={RamsgateCouncil.src}
                alt="Ramsgate Town Council"
                title="Ramsgate Town Council"
                width={50}
                height={60}
                loading="lazy"
              />

              <Image
                src={RamsgateFilm.src}
                title="Ramsgate International Film & TV Festival"
                alt="Ramsgate International Film & TV Festival"
                loading="lazy"
                width={20}
                height={30}
                quality={100}
              />
              <Image
                src={ShiftKeyFilms.src}
                alt="ShiftKey Films"
                title="ShiftKey Films"
                width={40}
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
                width={120}
                height={130}
              />
              <Image
                src={ColyerFergusonIcon.src}
                width={70}
                height={80}
                alt="Colyer Ferguson Chartiable Trust"
                title="Colyer Ferguson Chartiable Trust"
              />
              <Image
                src={KentCommunityFoundationIcon.src}
                alt="Kent Community Foundation"
                title="Kent Community Foundation"
                loading="lazy"
                width={55}
                height={65}
              />
              <Image
                src={RamsgateCouncil.src}
                alt="Ramsgate Town Council"
                title="Ramsgate Town Council"
                width={100}
                height={125}
                loading="lazy"
              />

              <Image
                src={RamsgateFilm.src}
                title="Ramsgate International Film & TV Festival"
                alt="Ramsgate International Film & TV Festival"
                loading="lazy"
                width={60}
                height={70}
                quality={100}
              />
              <Image
                src={ShiftKeyFilms.src}
                alt="ShiftKey Films"
                title="ShiftKey Films"
                width={100}
                height={150}
              />
              <Image
                src={VioletPictures.src}
                alt="Violet Pictures"
                title="Violet Pictures"
                width={200}
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
