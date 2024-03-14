import React from "react";
import { Grid, Typography, Stack, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import dynamic from "next/dynamic";
const EditLatestScreening = dynamic(
  () => import("@/app/components/EditLatestScreening"),
  { ssr: true }
);
const page = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h3" textAlign={"center"}>
          {" "}
          Edit Latest Screening
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Stack direction="row" spacing={2}>
          <Link href={"/dashboard"}>
            <IconButton>
              <ArrowBackIcon />
            </IconButton>
          </Link>
          <Typography variant="h3">Preview</Typography>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <EditLatestScreening />
      </Grid>
    </Grid>
  );
};

export default page;
