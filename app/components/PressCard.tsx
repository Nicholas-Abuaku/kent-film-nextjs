"use client";
import React from "react";
import {
  Card,
  Paper,
  CardMedia,
  CardContent,
  Stack,
  Typography,
  Button,
  ThemeProvider,
  useMediaQuery,
  Box,
} from "@mui/material";
import Link from "next/link";
import PressCardTheme from "../Themes/PressCardTheme";
import Image from "next/image";

type PressCardProps = {
  newsSource: string;
  articleTitle: string;
  articleUrl: string;
  image: string;
};
const PressCard = (props: PressCardProps) => {
  const { newsSource, articleTitle, articleUrl, image } = props;
  const isMobile = useMediaQuery(PressCardTheme.breakpoints.down("md"));
  return (
    <ThemeProvider theme={PressCardTheme}>
      <Card
        elevation={24}
        sx={{
          backgroundColor: "#339465",
          height: "600px",
          // maxWidth: "550px",
          width: "360px",
          color: "white",
          marginBottom: "10px",
          display: "flex",
          flexDirection: "column",
          marginRight: "0px",
          "@media (min-width: 2284px)": { minWidth: "500px" },
          "@media (min-width: 3000px)": { minWidth: "650px" },
          "@media (max-width: 1024px)": {
            height: "auto",
            width: "90%",
            margin: "auto",
            marginBottom: "30px",
            borderRadius: "0px",
          },
          // borderRadius: "0px",
        }}
      >
        <Box sx={{ height: "70%" }}>
          <Image
            src={
              "https://picayune-belief-production.up.railway.app/storage/" +
              image
            }
            height={0}
            title={articleTitle}
            alt={"News coverage from " + newsSource}
            sizes="100vw"
            width={0}
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
        <Box sx={{ width: "100%" }}>
          <CardContent sx={{ height: "100%" }}>
            <Stack spacing={0}>
              <Typography
                textAlign={"center"}
                fontWeight={"bold"}
                variant="subtitle1"
                component={"h3"}
              >
                {newsSource}
              </Typography>
              <Typography textAlign={"center"} variant="body1">
                {articleTitle}
              </Typography>
            </Stack>
            <Stack
              alignItems={"center"}
              justifyContent={"center"}
              marginTop={2}
            >
              <Link href={articleUrl}>
                <Button variant="outlined" color="inherit">
                  Learn More
                </Button>
              </Link>
            </Stack>
          </CardContent>
        </Box>
      </Card>
    </ThemeProvider>
  );
};

export default PressCard;
