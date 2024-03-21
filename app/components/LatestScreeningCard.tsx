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
import Image from "next/image";
type LatestScreeningCardProps = {
  title: string;
  date: string;
  description: string;
  img: string;
  url: string;
  edit: boolean;
};

const LatestScreeningCard = (props: LatestScreeningCardProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const isMobile = useMediaQuery(LatestScreeningTheme.breakpoints.down("md"));
  const renderTitle = () => {
    const titleText = props.title || "";
    return titleText.split("\n").map((paragraph, index) => (
      <Typography
        textAlign={"center"}
        variant="h1"
        component={"h2"}
        sx={{
          "@media (max-width: 900px)": { fontSize: "4rem" },
          "@media (max-width: 956px)": { fontSize: "5rem" },
        }}
      >
        {paragraph}
      </Typography>
    ));
  };
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
                height: "100%",
                maxHeight: "350px",
                "@media (min-width: 810px)": {
                  width: "100%",
                  height: "auto",
                  maxHeight: "350px",
                  objectFit: "fill",
                },
                "@media (min-width: 500px)": {
                  width: "100%",
                  height: "auto",
                  maxHeight: "350px",
                  objectFit: "fill",
                },
                "@media (min-width: 900px)": {
                  width: "100%",
                  height: "auto",
                  objectFit: "fill",
                },
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
                paddingBottom={0}
                textAlign={"center"}
                variant="h4"
                component={"h2"}
              >
                {props.date}
              </Typography>
              <Typography textAlign={"center"}>{props.description}</Typography>
              <Link
                href={
                  props.url ||
                  "https://www.eventbrite.co.uk/o/ramsgate-community-cinema-77759501783"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
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
          <Box
            // maxHeight={"500px"}
            // maxWidth={"974px"}
            // sx={{
            //   "@media (max-width: 1280px)": { minWidth: "500px" },
            //   "@media (max-width: 1838px)": { minWidth: "46.875vw" },
            //   "@media (max-width: 1832px)": { width: "300px" },
            //   "@media (max-width: 1024px)": { minWidth: "450px" },
            // }}
            sx={{ width: "50%", height: "auto" }}
          >
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
                  width: "100%",
                  height: "100%",
                }}
              >
                <Image
                  src={
                    props.edit
                      ? props.img
                      : "https://kentfilm.up.railway.app/storage/" + props.img
                  }
                  // width={962}
                  // height={685.35}

                  width={0}
                  height={0}
                  alt={props.title + " latest screening"}
                  title={props.title}
                  unoptimized={true}
                  style={{
                    width: "100%",
                    // maxWidth: "962px",
                    marginRight: "0px",
                    height: "100%",
                    objectFit: "cover",
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
              width: "50%",
              height: "100%",
              position: "relative",
            }}
          >
            <Stack
              direction={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              spacing={1}
            >
              <Box minHeight={150} paddingBottom={4}>
                {renderTitle()}
                <Typography
                  color={"white"}
                  paddingBottom={4}
                  textAlign={"center"}
                  variant="h4"
                  component="h3"
                >
                  {props.date}
                </Typography>
              </Box>
              <Box
                sx={{
                  maxHeight: "400px",

                  minHeight: "200px",
                  maxWidth: "98%",

                  overflow: "auto",
                }}
              >
                <Typography
                  maxHeight={"100%"}
                  maxWidth={"75%"}
                  textAlign={"center"}
                  margin={"auto"}
                >
                  {props.description}
                </Typography>
              </Box>
              <Link
                href={
                  props.url ||
                  "https://www.eventbrite.co.uk/o/ramsgate-community-cinema-77759501783"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "20px",
                    height: "50px",
                    width: "160px",
                    color: "black",
                    marginTop: "5px",
                    "&:hover": { backgroundColor: "#808080" },
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
