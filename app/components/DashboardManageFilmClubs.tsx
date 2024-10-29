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

const DashboardManageFilmClubsButton = () => {
  return (
    <Link href={"/dashboard/film-clubs"}>
      <CardActionArea sx={{ width: "401px", height: "189px" }}>
        <Card
          sx={{
            width: "401px",
            height: "189px",
            display: "flex",
            borderRadius: "10px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            backgroundColor: "#D9D9D9",
            color: "black",
          }}
        >
          <CardContent>
            <Stack direction={"row"} spacing={1}>
              <Typography variant="h6">Manage Film Clubs</Typography>
            </Stack>
          </CardContent>
        </Card>
      </CardActionArea>
    </Link>
  );
};

export default DashboardManageFilmClubsButton;
