import React from "react";
import { Grid, Typography } from "@mui/material";
import dynamic from "next/dynamic";
const ButtonGrid = dynamic(() => import("../components/ButtonGrid"), {
  ssr: false,
});
import { Alexandria } from "next/font/google";
import DashboardScreeningsButton from "../components/DashboardScreeningsButton";
import ScreeningsPage from "../components/ScreeningsPage";

const inter = Alexandria({
  subsets: ["latin"],
  weight: ["500"],
});
const page = () => {
  return (
    <Grid container>
      <Grid item xs={12} sx={{ textAlign: "left", marginLeft: "10px" }}>
        <Typography
          variant="h3"
          sx={{ fontFamily: `${inter.style.fontFamily}` }}
        >
          Dashboard
        </Typography>
        <Typography sx={{ fontFamily: `${inter.style.fontFamily}` }}>
          Welcome!
        </Typography>
      </Grid>
      {/* <Grid item xs={3} sx={{ justifyContent: "center", alignItems: "center" }}>
        <ButtonGrid />
      </Grid>

      <Grid item xs={12}>
        <DashboardScreeningsButton />
      </Grid> */}
      <Grid item xs={12}>
        <ScreeningsPage />
      </Grid>
    </Grid>
  );
};

export default page;
