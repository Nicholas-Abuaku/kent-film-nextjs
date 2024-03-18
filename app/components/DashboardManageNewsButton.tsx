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
      <CardActionArea sx={{ width: "300px", height: "140px" }}>
        <Card
          sx={{
            width: "300px",
            height: "140px",
            // background:
            //   "linear-gradient(90deg, rgba(0,36,4,1) 0%, rgba(43,125,74,1) 50%)",
            backgroundImage: "linear-gradient(62deg, #289ae2 0%, #171fb7 100%)",
            color: "white",
          }}
        >
          <CardContent>
            <Stack direction={"row"} spacing={1}>
              <Typography variant="h4">Manage Press Articles</Typography>
              <Icon sx={{ height: "40px" }}>
                <ManageHistoryIcon />
              </Icon>
            </Stack>
          </CardContent>
        </Card>
      </CardActionArea>
    </Link>
  );
};

export default DashboardManageNewsButton;
