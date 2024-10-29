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

const DashboardManageNewsButton = () => {
  return (
    <Link href={"/dashboard/press"}>
      <CardActionArea sx={{ width: "401px", height: "189px" }}>
        <Card
          sx={{
            width: "401px",
            height: "189px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            borderRadius: "10px",
            alignItems: "flex-start",
            backgroundColor: "#D9D9D9",
            color: "black",
          }}
        >
          <CardContent>
            <Stack direction={"row"} spacing={1}>
              <Typography variant="h6">Manage Press Articles</Typography>
            </Stack>
          </CardContent>
        </Card>
      </CardActionArea>
    </Link>
  );
};

export default DashboardManageNewsButton;
