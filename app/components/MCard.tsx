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
  console.log(props.time);
  return (
    <ThemeProvider theme={createTheme(MCardTheme)}>
      {isMobile ? (
        <Card
          sx={{
            width: "35vw",
            height: "29vh",
            display: "flex",

            backgroundColor: "#F0F0ED ",
            color: "black",
          }}
          elevation={10}
        >
          {/* <Image
                src={props.img}
                height={0}
                width={0}
                title={props.title}
                alt={"Movie poster for " + props.title}
                loading="lazy"
                style={{
                  width: "8.5vw",
                  height: "30vh",
                  objectFit: "scale-down",
                  marginRight: "5px",
                }}
              /> */}
          {/* <Skeleton variant='rectangular' width={400} height={274.05}/> */}
          <Box
            sx={{
              wordWrap: "break-word",
              overflowY: "scroll",
            }}
          >
            <Stack direction={"row"} spacing={2}>
              <Typography fontWeight={"bold"} variant="h5" component="h3">
                {props.title}
              </Typography>
            </Stack>

            <Typography fontWeight={"bold"} variant="h6" component={"h4"}>
              {props.date + " " + props.time}
            </Typography>

            <Typography sx={{ marginTop: "10px", marginLeft: "1px" }}>
              {props.description}
            </Typography>
          </Box>
        </Card>
      ) : (
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
          <Image
            src={props.img}
            alt={props.title + " image"}
            title={props.title}
            width={200}
            height={300}
            sizes="100vw"
            style={{
              width: "10.416666666666666vw",
              height: "auto",
              objectFit: "fill",
              marginRight: "5px",
              borderRadius: "5px",
            }}
            loading="lazy"
          />

          <Box
            sx={{
              wordWrap: "break-word",
              overflow: "auto",
              height: "300px",
            }}
          >
            <Stack direction={"row"} spacing={10}>
              <Typography fontWeight={"bold"} variant="h6" component="h3">
                {props.title}
              </Typography>
            </Stack>
            <Typography fontWeight={"bold"} variant="subtitle1" component="h4">
              {props.date} <br /> {props.time}
            </Typography>

            <Typography sx={{ marginTop: "4px" }}>
              {props.description}
            </Typography>
          </Box>
        </Card>
      )}
    </ThemeProvider>
  );
};

export default MCard;
