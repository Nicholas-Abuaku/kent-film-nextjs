"use client";
import { IconButton, Stack, Typography, Grid, Button } from "@mui/material";
import { ManageTableContext } from "@/app/contexts/ManageTableContext";
import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import PressArticleTable from "@/app/components/PressArticleTable";
// import { PressArticleTable } from "../../components/back-end/PressArticleTable";
const page = () => {
  const [tableUpdate, setTableUpdate] = useState(false);
  return (
    <Grid container>
      <Grid item xs={12}>
        <Stack direction={"row"} spacing={2}>
          <Link href={"/dashboard"}>
            <IconButton>
              <ArrowBackIcon />
            </IconButton>
          </Link>
          <Typography variant="h3">Press Articles</Typography>
        </Stack>
        <Link href={"/dashboard/press/new"}>
          <Button variant="contained" color="success" sx={{ float: "right" }}>
            Add
          </Button>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <ManageTableContext.Provider value={{ tableUpdate, setTableUpdate }}>
          <PressArticleTable />
        </ManageTableContext.Provider>
      </Grid>
    </Grid>
  );
};

export default page;
