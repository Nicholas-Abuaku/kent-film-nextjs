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
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
import Link from "next/link";
import DashboardButtonTheme from "../Themes/DashboardButtonTheme";

const DashboardScreeningsButton = () => {
  return (
    <Link href={"/dashboard/all-screenings"}>
      <ThemeProvider theme={DashboardButtonTheme}>
        <CardActionArea sx={{ width: "370px", height: "120px" }}>
          <Card
            sx={{
              width: "370px",
              height: "120px",
              borderRadius: "5px",
              backgroundColor: "#287B6A",
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <CardContent>
              <Stack direction={"row"} spacing={1}>
                <Typography variant="h5">All Screenings</Typography>
              </Stack>
            </CardContent>
          </Card>
        </CardActionArea>
      </ThemeProvider>
    </Link>
  );
};

export default DashboardScreeningsButton;
