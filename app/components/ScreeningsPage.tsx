import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import EditScreeningCard from "./EditScreeningCard";

const ScreeningsPage = () => {
  return (
    <Grid container>
      <Grid
        item
        container
        xs={12}
        textAlign={"left"}
        sx={{
          borderRadius: "5px",
          backgroundColor: "#D9D9D9",
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h6" marginBottom={4}>
            Latest Screening:
          </Typography>
        </Grid>
        <Grid item xs={12} marginLeft={4}>
          <EditScreeningCard />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ScreeningsPage;
