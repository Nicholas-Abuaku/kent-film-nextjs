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
        key={index}
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
            <Image
              alt={props.title}
              width={465}
              height={348.7}
              unoptimized
              loading="eager"
              title={props.title}
              style={{
                objectFit: "fill",
                width: "100%",
                height: "auto",
                maxHeight: "350px",
              }}
              src={
                props.edit
                  ? props.img
                  : "https://picayune-belief-production.up.railway.app/storage/" +
                    props.img
              }
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
          <Box sx={{ width: "50%", height: "auto" }}>
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
                      : "https://picayune-belief-production.up.railway.app/storage/" +
                        props.img
                  }
                  width={960}
                  height={682}
                  alt={props.title + " latest screening"}
                  title={props.title}
                  className="latest-screening-image"
                  unoptimized={true}
                  loading="eager"
                  style={{
                    width: "100%",

                    marginRight: "0px",
                    height: "100%",
                    objectFit: "fill",
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
