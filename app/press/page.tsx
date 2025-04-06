import React from "react";
import { Grid, Typography, ThemeProvider } from "@mui/material";
import dynamic from "next/dynamic";
const PressCardGrid = dynamic(() => import("../components/PressCardGrid"), {
  ssr: true,
});
import PressTheme from "../Themes/PressTheme";
import { Metadata } from "next";
import PressCard2 from "../components/PressCard2";
export const metadata: Metadata = {
  title: "Press",
  description:
    "Discover recent press coverage about the Kent Film Foundation and Ramsgate Community Cinema. See how we're making a difference in the community!",
  openGraph: {
    title: "Kent Film Foundation & Ramsgate Community Cinema: In The News",
    description:
      "Discover recent press coverage about the Kent Film Foundation and Ramsgate Community Cinema. See how we're making a difference in the community!",
    type: "website",
    url: "https://kentfilmfoundation.co.uk/press",
  },
  twitter: {
    title: "Kent Film Foundation",
    description:
      "Discover recent press coverage about the Kent Film Foundation and Ramsgate Community Cinema. See how we're making a difference in the community!",
  },
  alternates: {
    canonical: `https://kentfilmfoundation.co.uk/press`,
  },
};
function Press() {
  return (
    <ThemeProvider theme={PressTheme}>
      <Grid container justifyContent={"center"} alignItems={"center"}>
        <Grid item md={12} xs={12} marginBottom={0}>
          <Typography variant="h3" textAlign={"center"} component={"h2"}>
            Media & Press
          </Typography>
          <Typography variant="h6" textAlign={"center"} component={"h2"}>
            Kent Film Foundation Press and Media Coverage
          </Typography>
        </Grid>
        <Grid item xs={12} marginTop={4}>
          <PressCardGrid />
        </Grid>
        
      </Grid>
    </ThemeProvider>
  );
}

export default Press;
