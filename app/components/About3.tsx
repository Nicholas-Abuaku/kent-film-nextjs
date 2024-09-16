import { Grid, Stack, Typography } from "@mui/material";
import React from "react";

const About3 = () => {
  return (
    <Grid container alignItems={"center"} justifyContent={"center"} xs={12}>
      <Grid item>
        <Stack width={"1000px"}>
          <Typography variant="h3" component={"h1"} marginBottom={4}>
            About Us
          </Typography>
          <Typography>
            Kent Film Foundation began as a non-for-profit arm of a film
            production company based in Thanet , Kent an area of high
            deprivation where young people suffer from "Poverty of Opportunity".
          </Typography>
          <Typography>
            A local group of filmmakers attached training elements for young
            people to a series of feature film shoots. This successfully led
            talented young people into entry level film industry jobs, film
            schools, universities and drama schools for those interested in
            careers in media.
          </Typography>
          <Typography>
            This inspired one of the filmmakers who had also grown up in poverty
            herself, to create the Kent Film Foundation, an organisation with
            charitable status in the hope of hiring professional filmmakers to
            mentor young people in film workshops that would be FREE to every
            participant.
          </Typography>
          <Typography>
            Since its inception in 2010 the charity has an excellent track
            record in achieving its outcomes. It recently received a prestigious
            nomination in the Colyer Fergusson 50th Anniversary Awards in the
            category "Unlocking Opportunities"
          </Typography>
          <Typography>
            The Kent Film Foundation hosts regular film clubs and screenings at
            the Ramsgate Community Cinema in the heart of Ramsgate, Kent. This
            cozy cinema offers a delightful experience for movie enthusiasts,
            showcasing a diverse array of films, from beloved classics to
            thought-provoking independent productions. Ramsgate Community Cinema
            has become a beloved gathering place for cinephiles and locals
            alike, fostering a vibrant sense of community through the shared
            love of cinema. Whether you're a seasoned film buff or simply
            looking for a unique cultural experience, we promise an
            unforgettable dose of cinematic magic.
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default About3;
