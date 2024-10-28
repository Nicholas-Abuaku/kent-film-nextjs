import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import LatestScreeningCard from "./LatestScreeningCard";
import EditLatestScreening from "./EditLatestScreening";
import EditScreeningCard from "./EditScreeningCard";

const ScreeningsPage = () => {
  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      margin={"auto"}
    >
      <Grid
        item
        container
        xs={6}
        textAlign={"center"}
        sx={{
          backgroundColor: "#E0C9C9",
          minHeight: "60vh",
          borderRadius: "10px",
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h6">Latest Screening</Typography>
        </Grid>
        <Grid item xs={12}>
          <EditScreeningCard />
        </Grid>
      </Grid>
      <Grid item container xs={6}>
        <Grid item xs={12}>
          <Typography>Hello</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ScreeningsPage;
