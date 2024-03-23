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
      <CardActionArea
        sx={{ width: "300px", height: "140px" }}
        //   component={Link}
        //   to={"/dashboard/edit-latest-screening"}
      >
        <Card
          sx={{
            width: "300px",
            height: "140px",
            backgroundImage: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
            color: "white",
          }}
        >
          <CardContent>
            <Stack direction={"row"} spacing={1}>
              <Typography variant="h4">Manage Screenings</Typography>
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

export default DashboardScreeningsButton;
