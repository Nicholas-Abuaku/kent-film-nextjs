"use client";
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import {
  Box,
  CardActionArea,
  CardHeader,
  Typography,
  useTheme,
  useMediaQuery,
  createTheme,
  Skeleton,
  Button,
  Stack,
  ThemeProvider,
} from "@mui/material";

import Link from "next/link";
import LatestScreeningTheme from "../Themes/LatestScreeningTheme";
type LatestScreeningCardProps = {
  title: string;
  date: string;
  description: string;
  img: string;
  url: string;
  edit: boolean;
};

const LatestScreeningCard = (props: LatestScreeningCardProps) => {
  const theme = useTheme();
  const textTheme = createTheme();
  const [isLoading, setIsLoading] = useState(false);
  textTheme.typography.h2 = {
    fontSize: "2rem",
    "@media (min-width:600px)": {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2.4rem",
    },
  };

  textTheme.typography.h4 = {
    fontSize: "0.8rem",
    "@media (min-width:600px)": {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2.4rem",
    },
  };
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <ThemeProvider theme={LatestScreeningTheme}>
      {isMobile ? (
        <Card
          sx={{
            display: "inline",
            width: "100%",
            minHeight: "464.2px",
            maxHeight: "682px",
            borderRadius: "0px",
          }}
        >
          <Box maxWidth={"100%"} maxHeight={"50%"}>
            <CardMedia
              component={"img"}
              // width={"100%"}
              // maxHeight={"2px"}
              loading="lazy"
              title={props.title}
              src={
                props.edit
                  ? props.img
                  : "https://kentfilm.up.railway.app/storage/" + props.img
              }
              sx={{
                objectFit: "cover",
                width: "100%",
                height: "200px",
                "@media (max-width: 600px)": { minWidth: "100%" },
              }}
              alt={props.title}
            />
          </Box>
          <CardContent
            sx={{
              backgroundColor: "#1A1A1A",
              color: "white",
              wordBreak: "break-word",
              minHeight: "400px",
            }}
          >
            <Stack direction={"column"} alignItems={"center"} spacing={1}>
              <Typography textAlign={"center"} variant="h2">
                {props.title}
              </Typography>

              <Typography
                color={"white"}
                paddingBottom={4}
                textAlign={"center"}
                variant="h4"
                component={"h2"}
              >
                {props.date}
              </Typography>
              <Typography textAlign={"center"}>{props.description}</Typography>
              <Link href={props.url} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="contained"
                  color="inherit"
                  sx={{
                    borderRadius: "20px",
                    color: "black",
                    height: "50px",
                    width: "160px",
                  }}
                >
                  Tickets
                </Button>
              </Link>
            </Stack>
          </CardContent>
        </Card>
      ) : (
        <Card
          sx={{
            display: "flex",
            minHeight: "682px",
            borderRadius: "0px",
            width: "100vw",
            height: "63.49vh",
          }}
        >
          <Box maxHeight={"500px"} maxWidth={"974px"}>
            {props.img && typeof props.img === "object" ? (
              <Skeleton
                variant="rectangular"
                animation="wave"
                width={962}
                height={465}
              />
            ) : (
              <Box
                sx={{
                  flex: "1",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  maxHeight: "auto",
                  maxWidth: "100%",
                }}
              >
                <CardMedia
                  component={"img"}
                  title={props.title ? props.title : "Hi"}
                  src={
                    props.edit
                      ? props.img
                      : "https://kentfilm.up.railway.app/storage/" + props.img
                  }
                  alt={props.title}
                  loading="eager"
                  sx={{
                    objectFit: "cover",
                    marginRight: "0px",
                    minWidth: "962px",
                    "@media (max-width: 1280px)": { minWidth: "500px" },
                    "@media (max-width: 1838px)": { minWidth: "46.875vw" },
                    // "@media (max-width: 1832px)": { width: "300px" },
                    "@media (max-width: 1024px)": { minWidth: "450px" },
                    // maxWidth: "962px",
                    minHeight: "95.14563106796116vh",
                    // maxHeight: "708px",
                  }}
                />
              </Box>
            )}
          </Box>
          <CardContent
            sx={{
              backgroundColor: "#1A1A1A",
              color: "white",
              wordBreak: "break-word",
              minWidth: "50%",
            }}
          >
            <Stack direction={"column"} alignItems={"center"} spacing={1}>
              <Typography textAlign={"center"} variant="h1" component="h2">
                {props.title}
              </Typography>
              <Typography
                color={"white"}
                paddingBottom={4}
                textAlign={"center"}
                variant="h4"
                component="h3"
              >
                {props.date}
              </Typography>
              <Typography textAlign={"center"}>{props.description}</Typography>
              <Link href={props.url} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "20px",
                    height: "50px",
                    width: "160px",
                  }}
                  onClick={() => {
                    console.log(props.url);
                  }}
                >
                  Tickets
                </Button>
              </Link>
            </Stack>
          </CardContent>
        </Card>
      )}
    </ThemeProvider>
  );
};

export default LatestScreeningCard;
