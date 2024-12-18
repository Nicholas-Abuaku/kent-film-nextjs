"use client";
import React, { useState } from "react";
import { Grid, Stack, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const FilmClubTable = dynamic(() => import("@/app/components/FilmClubTable"));
import { ManageTableContext } from "@/app/contexts/ManageTableContext";
import dynamic from "next/dynamic";

const AllFilmClubs = () => {
  const [tableUpdate, setTableUpdate] = useState(false);
  return (
    <Grid
      container
      minHeight={"90vh"}
      sx={{ display: "flex", flexDirection: "column" }}
    >
      <Grid item xs={12}>
        <Stack direction={"row"} spacing={2} justifyContent={"center"}>
          <Link href={"/dashboard"}>
            <IconButton>
              <ArrowBackIcon />
            </IconButton>
          </Link>
          <Typography variant="h4">Film Clubs</Typography>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <ManageTableContext.Provider value={{ tableUpdate, setTableUpdate }}>
          <FilmClubTable />
        </ManageTableContext.Provider>
      </Grid>
    </Grid>
  );
};

export default AllFilmClubs;
