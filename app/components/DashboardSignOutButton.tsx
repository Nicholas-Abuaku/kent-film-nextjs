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
} from "@mui/material";
import { useRouter } from "next/navigation";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
import axios from "axios";
const DashboardSignOutButton = () => {
  const { push } = useRouter();
  const handleSignOut = async () => {
    try {
      const res = await axios.post("/api/logout");
      console.log(res.data);
      if (res.status === 200) {
        console.log("Yeah boy");
        push("/");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <CardActionArea
      sx={{ width: "300px", height: "140px" }}
      onClick={handleSignOut}
    >
      <Card
        sx={{
          width: "300px",
          height: "140px",

          backgroundImage: "linear-gradient(to right, #AA0000,  #D2122E)",
          color: "white",
        }}
      >
        <CardContent>
          <Stack direction={"row"} spacing={1}>
            <Typography variant="h4">Sign Out</Typography>
            <Icon sx={{ height: "40px" }}>
              <ManageHistoryIcon />
            </Icon>
          </Stack>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};

export default DashboardSignOutButton;
