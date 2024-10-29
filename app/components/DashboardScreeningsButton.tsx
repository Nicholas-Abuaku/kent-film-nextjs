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

const DashboardScreeningsButton = () => {
  return (
    <Link href={"/dashboard/all-screenings"}>
      <CardActionArea sx={{ width: "401px", height: "189px" }}>
        <Card
          sx={{
            width: "401px",
            height: "189px",
            borderRadius: "10px",
            backgroundColor: "#D9D9D9",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <CardContent>
            <Stack direction={"row"} spacing={1}>
              <Typography variant="h6">All Screenings</Typography>
            </Stack>
          </CardContent>
        </Card>
      </CardActionArea>
    </Link>
  );
};

export default DashboardScreeningsButton;
