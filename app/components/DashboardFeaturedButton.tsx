"use client";
import React from "react";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
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

type DashboardFeatureProps = {
  heading: string;
  linkto: string;
};
const DashboardFeaturedButton = (props: DashboardFeatureProps) => {
  return (
    <Link href={props.linkto}>
      <CardActionArea sx={{ width: "161.65px", height: "163px" }}>
        <ThemeProvider theme={DashboardButtonTheme}>
          <Card
            sx={{
              width: "161.65px",
              height: "163px",
              backgroundColor: "#FF8A00",
              color: "white",
              borderRadius: "30px",
            }}
          >
            <CardContent sx={{ textAlign: "center" }}>
              <Stack direction={"column"} spacing={1} alignItems={"center"}>
                <Typography variant="h6">{props.heading} </Typography>
                <AddBoxOutlinedIcon fontSize="large" />
              </Stack>
            </CardContent>
          </Card>
        </ThemeProvider>
      </CardActionArea>
    </Link>
  );
};

export default DashboardFeaturedButton;
