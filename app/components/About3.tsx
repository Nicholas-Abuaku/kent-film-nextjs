"use client";
import { Grid, Stack, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import Partners from "./Partners";
import AboutTheme from "../Themes/AboutTheme";
import AimingHigh from "../assets/images/AimingHigh.png";
import Image from "next/image";
const About3 = () => {
  return (
    <ThemeProvider theme={AboutTheme}>
      <Grid container alignItems={"center"} justifyContent={"center"} xs={12}>
        <Grid item xs={12} textAlign={"center"}>
          <Typography variant="h3" component={"h1"} marginBottom={4}>
            About Us
          </Typography>
        </Grid>
        <Grid item>
          <Stack width={"60vw"}>
            <Typography>
              Kent Film Foundation began as a non-for-profit arm of a film
              production company based in Thanet , Kent an area of high
              deprivation where young people suffer from "Poverty of
              Opportunity".
            </Typography>
            <Typography>
              A local group of filmmakers attached training elements for young
              people to a series of feature film shoots. This successfully led
              talented young people into entry level film industry jobs, film
              schools, universities and drama schools for those interested in
              careers in media.
            </Typography>
            <Typography>
              This inspired one of the filmmakers who had also grown up in
              poverty herself, to create the Kent Film Foundation, an
              organisation with charitable status in the hope of hiring
              professional filmmakers to mentor young people in film workshops
              that would be FREE to every participant.
            </Typography>
            <Typography>
              Since its inception in 2010 the charity has an excellent track
              record in achieving its outcomes. It recently received a
              prestigious nomination in the Colyer Fergusson 50th Anniversary
              Awards in the category "Unlocking Opportunities"
            </Typography>
            <Stack direction={"row"} spacing={4}>
              <Typography>
                The Kent Film Foundation hosts regular film clubs and screenings
                at the Ramsgate Community Cinema in the heart of Ramsgate, Kent.
                This cozy cinema offers a delightful experience for movie
                enthusiasts, showcasing a diverse array of films, from beloved
                classics to thought-provoking independent productions. Ramsgate
                Community Cinema has become a beloved gathering place for
                cinephiles and locals alike, fostering a vibrant sense of
                community through the shared love of cinema. Whether you're a
                seasoned film buff or simply looking for a unique cultural
                experience, we promise an unforgettable dose of cinematic magic.
              </Typography>
              <Stack
                direction={"column"}
                textAlign={"center"}
                alignItems={"center"}
              >
                <Image
                  style={{
                    borderRadius: "50%",
                    marginBottom: "10px",
                  }}
                  alt="'Aiming High' is a film made by our young filmmakers about Ian Payne a wheelchair tennis player."
                  title="Ian Payne"
                  loading="eager"
                  width={200}
                  height={100}
                  src={AimingHigh.src}
                />
                <Typography
                  variant="caption"
                  width={150}
                  sx={{
                    "@media (max-width: 1024px)": {
                      width: "100px",
                    },
                  }}
                >
                  Aiming High' is a film made by our young filmmakers about Ian
                  Payne a wheelchair tennis player.
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} marginTop={10}>
          <Partners />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default About3;
