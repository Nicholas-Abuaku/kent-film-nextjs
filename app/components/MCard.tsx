import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import {
  Box,
  IconButton,
  Stack,
  Typography,
  Icon,
  CardActionArea,
  Skeleton,
  useTheme,
  useMediaQuery,
  createTheme,
  ThemeProvider,
  Button,
} from "@mui/material";
import Link from "next/link";
import MCardTheme from "../Themes/MCardTheme";
import Image from "next/image";

type MCardProps = {
  title: string;
  description: string;
  date: string;
  time: string;
  link: string;
  img: string;
};
const MCard = (props: MCardProps) => {
  const isMobile = useMediaQuery(MCardTheme.breakpoints.down("md"));
  console.log(props.time);
  return (
    <ThemeProvider theme={createTheme(MCardTheme)}>
      <Link href={props.link} target="_blank" rel="noopener noreferrer">
        <CardActionArea>
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
              <Image
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
              />
              {/* <Skeleton variant='rectangular' width={400} height={274.05}/> */}
              <Box
                sx={{
                  wordWrap: "break-word",
                  overflowY: "scroll",
                }}
              >
                <Stack direction={"row"} spacing={2}>
                  <Typography
                    fontWeight={"bold"}
                    variant="h5"
                    component="h3"
                    // fontFamily={"Open Sans, arial, sans-serif"}
                  >
                    {props.title}
                  </Typography>
                </Stack>

                <Typography fontWeight={"bold"} variant="h6" component={"h4"}>
                  {props.date + " " + props.time}
                </Typography>

                <Typography sx={{ marginTop: "10px" }}>
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
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "200px",
                  height: "auto",
                  objectFit: "contain",
                  marginRight: "5px",
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
                  <Typography
                    fontWeight={"bold"}
                    variant="h6"
                    component="h3"
                    // fontFamily={`${inter.style.fontFamily}, Helvetica, Arial, sans-serif`}
                  >
                    {props.title}
                  </Typography>
                </Stack>
                <Typography
                  fontWeight={"bold"}
                  variant="subtitle1"
                  component="h4"
                >
                  {props.date} <br /> {props.time}
                </Typography>

                <Typography sx={{ marginTop: "-9px" }}>
                  {props.description}
                </Typography>
                <Link href={props.link}>
                  <Button
                    variant="contained"
                    sx={{
                      borderRadius: "70px",
                      backgroundColor: "#339465",
                      position: "absolute",
                      bottom: "10px",
                      right: "10px;",
                      "@media screen and (max-width: 1505px)": {
                        visibility: "hidden",
                      },
                    }}
                  >
                    Click here
                  </Button>
                </Link>
              </Box>
            </Card>
          )}
        </CardActionArea>
      </Link>
    </ThemeProvider>
  );
};

export default MCard;
