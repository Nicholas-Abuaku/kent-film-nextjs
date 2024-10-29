import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Stack,
  Typography,
  Icon,
  CardActionArea,
} from "@mui/material";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
import Link from "next/link";

const DashboardFeaturedButton = () => {
  return (
    <Link href={"/dashboard/edit-latest-screening"}>
      {/* <CardActionArea sx={{ width: "190px", height: "160px" }}> */}
      <Card
        sx={{
          width: "210px",
          height: "200px",
          backgroundColor: "#D9D9D9",
          color: "black",
          borderRadius: "30px",
        }}
      >
        <CardContent sx={{ textAlign: "center" }}>
          <Stack direction={"row"} spacing={1}>
            <Typography variant="h6">New Press Article </Typography>
          </Stack>
        </CardContent>
      </Card>
      {/* </CardActionArea> */}
    </Link>
  );
};

export default DashboardFeaturedButton;
