import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import {
  Box,
  Stack,
  Typography,
  useMediaQuery,
  createTheme,
  ThemeProvider,
} from "@mui/material";

import MCardTheme from "../Themes/MCardTheme";
import Image from "next/image";

type MCardProps = {
  title: string;
  description: string;
  date: string;
  time: string;
  img: string;
};
const MCard = (props: MCardProps) => {
  const isMobile = useMediaQuery(MCardTheme.breakpoints.down("md"));

  return (
    <ThemeProvider theme={createTheme(MCardTheme)}>
      <Card
        sx={{
          width: "29.59vw",
          height: "300px",
          // height: "29vh",
          display: "flex",
          backgroundColor: "#F0F0ED ",
          color: "black",
        }}
        elevation={10}
      >
        {isMobile ? (
          <h1 style={{ display: "none" }}>Hi</h1>
        ) : (
          <Image
            src={props.img}
            alt={props.title + " image"}
            title={props.title}
            width={200}
            height={300}
            style={{
              width: "10.416666666666666vw",
              height: "auto",
              objectFit: "fill",
              marginRight: "5px",
              borderRadius: "5px",
            }}
            loading="lazy"
          />
        )}

        <Box
          sx={{
            wordWrap: "break-word",
            overflow: "auto",
            height: "300px",
            "@media (max-width: 1024px)": {
              overflowY: "scroll",
            },
          }}
        >
          <Stack direction={"row"} spacing={isMobile ? 2 : 10}>
            <Typography fontWeight={"bold"} variant="h6" component="h3">
              {props.title}
            </Typography>
          </Stack>
          <Typography fontWeight={"bold"} variant="subtitle1" component="h4">
            {props.date} <br /> {props.time}
          </Typography>

          <Typography sx={{ marginTop: "4px" }}>{props.description}</Typography>
        </Box>
      </Card>
      {/* )} */}
    </ThemeProvider>
  );
};

export default MCard;
