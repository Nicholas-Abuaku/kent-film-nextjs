"use client";
import { Grid, Stack, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import AboutTheme from "../Themes/AboutTheme";
import Image from "next/image";
import AimingHigh from "../assets/images/AimingHigh.png";
import Partners from "./Partners";
const AboutContent2 = () => {
  return (
    <ThemeProvider theme={AboutTheme}>
      <Grid container justifyContent={'center'} xs={12} padding={'50px'}>
        <Grid item xs={12} textAlign={'center'} marginBottom={4}>
          <Typography variant="h3"  textAlign={'center'}>About Us</Typography>
        </Grid>
        <Grid item width={900}>
          <Typography variant="body1" >
          Kent Film Foundation began as a non-for-profit arm of a film production company based in Thanet, Kent – an area of high deprivation where young people suffer from "Poverty of Opportunity".

A local group of filmmakers attached training elements for young people to a series of feature film shoots. This successfully led talented young people into entry-level film industry jobs, film schools, universities and drama schools for those interested in careers in media.

This inspired one of the filmmakers who had also grown up in poverty herself, to create the Kent Film Foundation, an organisation with charitable status, in the hope of hiring professional filmmakers to mentor young people in film workshops that would be FREE to every participant.

Since its inception in 2010, the charity has an excellent track record in achieving its outcomes. It recently received a prestigious nomination in the Colyer Fergusson 50th Anniversary Awards in the category "Unlocking Opportunities". 
          </Typography>
        </Grid>
        <Grid item xs={12} textAlign={'center'}>
          <Typography variant="h5" >Our Cinema</Typography>
        </Grid>
        <Grid item width={900}>
          <Typography> The Kent Film Foundation hosts regular film clubs and screenings at the Ramsgate Community Cinema in the heart of Ramsgate, Kent. This cozy cinema offers a delightful experience for movie enthusiasts, showcasing a diverse array of films, from beloved classics to thought-provoking independent productions.
Ramsgate Community Cinema has become a beloved gathering place for cinephiles and locals alike, fostering a vibrant sense of community through the shared love of cinema. Whether you're a seasoned film buff or simply looking for a unique cultural experience, we promise an unforgettable dose of cinematic magic. </Typography>
        </Grid>
       
      </Grid>
      <hr style={{marginBottom:'40px'}}/>
      <Grid container xs={12}>
        <Partners/>
      </Grid>
      
    </ThemeProvider>
  );
};

export default AboutContent2;
