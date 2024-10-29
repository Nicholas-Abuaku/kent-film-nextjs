import React from "react";
import { Grid, Stack, Typography, Paper, Box } from "@mui/material";
import dynamic from "next/dynamic";
const ButtonGrid = dynamic(() => import("../components/ButtonGrid"), {
  ssr: false,
});
import { Alexandria } from "next/font/google";
import DashboardScreeningsButton from "../components/DashboardScreeningsButton";
import ScreeningsPage from "../components/ScreeningsPage";
import DashboardManageNewsButton from "../components/DashboardManageNewsButton";
import DashboardManageButton from "../components/DashboardManageFilmClubs";
import DashboardFeaturedButton from "../components/DashboardFeaturedButton";
import EditScreeningCard from "../components/EditScreeningCard";

const inter = Alexandria({
  subsets: ["latin"],
  weight: ["500"],
});
const page = () => {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sx={{
          textAlign: "left",
        }}
      >
        <Stack
          marginTop={1}
          direction={"row"}
          spacing={10}
          marginBottom={2}
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
          <DashboardScreeningsButton />
          <DashboardManageNewsButton />
          <DashboardManageButton />
        </Stack>
      </Grid>
      <Grid
        item
        container
        xs={12}
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <Grid item xs={8} marginLeft={30} marginRight={5}>
          <Box>
            <EditScreeningCard />
          </Box>
        </Grid>
        <Grid item>
          <Stack spacing={4}>
            <DashboardFeaturedButton />
            <DashboardFeaturedButton />
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};

function TopNavCards() {
  return (
    <>
      <h1>Hello card</h1>
    </>
  );
}
export default page;
