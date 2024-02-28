import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import ButtonGrid from "../components/ButtonGrid";
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
