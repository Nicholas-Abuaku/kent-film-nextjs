import React from "react";
import { Grid, Typography } from "@mui/material";
import dynamic from "next/dynamic";
const ButtonGrid = dynamic(() => import("../components/ButtonGrid"), {
  ssr: false,
});

const page = () => {
  return (
    <Grid container>
      <Grid item xs={12} sx={{ backgroundColor: "grey" }}>
        <Typography variant="h3">Dashboard</Typography>
        <Typography>Welcome!</Typography>
      </Grid>
      <Grid item xs={3}>
        <ButtonGrid />
      </Grid>
      <Grid item xs={12}>
        {/* <DashboardAnalytics /> */}
      </Grid>
    </Grid>
  );
};

export default page;
