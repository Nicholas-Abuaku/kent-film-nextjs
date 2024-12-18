"use client";
import React, { useState } from "react";
import { Grid, Stack, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const FilmClubTable = dynamic(() => import("@/app/components/FilmClubTable"));
import { ManageTableContext } from "@/app/contexts/ManageTableContext";
import dynamic from "next/dynamic";
import AllScreeningTable from "@/app/components/AllScreeningTable";

const AllScreenings = () => {
  const [tableUpdate, setTableUpdate] = useState(false);
  return (
    <Grid
      container
      minHeight={"90vh"}
      sx={{ display: "flex", flexDirection: "column" }}
    >
      <Grid item xs={12}>
        <Stack
          direction={"row"}
          spacing={2}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Link href={"/dashboard"}>
            <IconButton>
              <ArrowBackIcon />
            </IconButton>
          </Link>
          <Typography variant="h4">All Screenings</Typography>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <ManageTableContext.Provider value={{ tableUpdate, setTableUpdate }}>
          <AllScreeningTable />
        </ManageTableContext.Provider>
      </Grid>
    </Grid>
  );
};

export default AllScreenings;
