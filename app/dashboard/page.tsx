import React from "react";
import { Grid, Stack, Typography, Paper, Box } from "@mui/material";
import dynamic from "next/dynamic";

import { Alexandria } from "next/font/google";
import DashboardScreeningsButton from "../components/DashboardScreeningsButton";
import DashboardManageNewsButton from "../components/DashboardManageNewsButton";
import DashboardManageButton from "../components/DashboardManageFilmClubs";
import DashboardFeaturedButton from "../components/DashboardFeaturedButton";
import EditScreeningCard from "../components/EditScreeningCard";

const inter = Alexandria({
  subsets: ["latin"],
  weight: ["500"],
});
interface LatestScreeningInfo {
  heading: string;
  img_Url: string;
  date: Date;
  time: string;
  description: string;
  eventUrl: string;
}
const page = async () => {
  const response = await fetch(
    "https://picayune-belief-production.up.railway.app/api/featured-content",
    { next: { tags: ["latest-screening"] }, cache: "no-store" }
  );
  const latestInfo: LatestScreeningInfo[] = await response.json();
  let latestImage =
    "https://picayune-belief-production.up.railway.app/storage/" +
    latestInfo[0].img_Url;

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
            <EditScreeningCard
              title={latestInfo[0].heading}
              desc={latestInfo[0].description}
              date={latestInfo[0].date}
              image={latestImage}
            />
          </Box>
        </Grid>
        <Grid item>
          <Stack spacing={4}>
            <DashboardFeaturedButton
              heading="Add Press Article"
              linkto="/dashboard/press/new"
            />
            <DashboardFeaturedButton
              heading="Add Screening"
              linkto="/dashboard/all-screenings/new"
            />
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default page;
