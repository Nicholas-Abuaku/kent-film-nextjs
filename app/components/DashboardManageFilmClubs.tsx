"use client";
import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Stack,
  Typography,
  Icon,
  CardActionArea,
  ThemeProvider,
} from "@mui/material";

import Link from "next/link";
import DashboardButtonTheme from "../Themes/DashboardButtonTheme";

const DashboardManageFilmClubsButton = () => {
  return (
    <Link href={"/dashboard/film-clubs"}>
      <ThemeProvider theme={DashboardButtonTheme}>
        <CardActionArea sx={{ width: "374px", height: "120px" }}>
          <Card
            sx={{
              width: "374px",
              height: "120px",
              display: "flex",
              borderRadius: "5px",
              flexDirection: "column",
              color: "white",
              justifyContent: "center",
              alignItems: "flex-start",
              backgroundColor: "#2F4F75",
            }}
          >
            <CardContent>
              <Stack direction={"row"} spacing={1}>
                <Typography variant="h6">Manage Film Clubs</Typography>
              </Stack>
            </CardContent>
          </Card>
        </CardActionArea>
      </ThemeProvider>
    </Link>
  );
};

export default DashboardManageFilmClubsButton;
