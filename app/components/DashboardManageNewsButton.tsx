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

const DashboardManageNewsButton = () => {
  return (
    <Link href={"/dashboard/press"}>
      <ThemeProvider theme={DashboardButtonTheme}>
        <CardActionArea sx={{ width: "370px", height: "120px" }}>
          <Card
            sx={{
              width: "370px",
              height: "120px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              borderRadius: "5px",
              alignItems: "flex-start",
              backgroundColor: "#2F4F75",
              color: "white",
            }}
            elevation={24}
          >
            <CardContent>
              <Stack direction={"row"} spacing={1}>
                <Typography variant="h6">Manage Press Articles</Typography>
              </Stack>
            </CardContent>
          </Card>
        </CardActionArea>
      </ThemeProvider>
    </Link>
  );
};

export default DashboardManageNewsButton;
