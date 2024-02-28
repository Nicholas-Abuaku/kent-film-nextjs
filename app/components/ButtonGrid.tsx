import React from "react";
import { Grid, Stack, Paper } from "@mui/material";
import DashboardFeaturedButton from "./DashboardFeaturedButton";
import DashboardManageButton from "./DashboardManageButton";
import DashboardManageNewsButton from "./DashboardManageNewsButton";
import DashboardSignOutButton from "./DashboardSignOutButton";
const ButtonGrid = () => {
  return (
    <Grid
      container
      spacing={2}
      justifyContent={"center"}
      alignItems={"center"}
      marginTop={"30%"}
      marginLeft={"120%"}
    >
      <Grid item xs={8}>
        <DashboardFeaturedButton />
      </Grid>
      <Grid item xs={4}>
        <DashboardManageButton />
      </Grid>
      <Grid item xs={8}>
        <DashboardManageNewsButton />
      </Grid>
      <Grid item xs={4}>
        <DashboardSignOutButton />
      </Grid>
    </Grid>
  );
};

export default ButtonGrid;
