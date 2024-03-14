import React from "react";
import { Grid } from "@mui/material";
import dynamic from "next/dynamic";
const DashboardFeaturedButton = dynamic(
  () => import("./DashboardFeaturedButton"),
  { ssr: false }
);

const DashboardManageButton = dynamic(() => import("./DashboardManageButton"), {
  ssr: false,
});
const DashboardManageNewsButton = dynamic(
  () => import("./DashboardManageNewsButton"),
  { ssr: false }
);
const DashboardSignOutButton = dynamic(
  () => import("./DashboardSignOutButton"),
  { ssr: false }
);

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
