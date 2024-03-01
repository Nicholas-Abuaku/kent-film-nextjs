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
} from "@mui/material";
import Link from "next/link";
import PressCardTheme from "../Themes/PressCardTheme";

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
      {isMobile ? (
        <Card
          sx={{
            backgroundColor: "#339465",
            height: "auto",
            width: "90%",
            color: "white",
            marginLeft: "10px",
            marginBottom: "30px",
            borderRadius: "0px",
          }}
        >
          <CardMedia
            component={"img"}
            height={"300px"}
            src={"https://kentfilm.up.railway.app/storage/" + image}
            loading="eager"
            title={articleTitle}
            alt={"News coverage from " + newsSource}
          />
          <CardContent>
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
        </Card>
      ) : (
        <Card
          elevation={24}
          sx={{
            backgroundColor: "#339465",
            height: "500px",
            maxWidth: "550px",
            width: "100%",
            color: "white",
            marginBottom: "10px",
            display: "flex",
            flexDirection: "column",
            // borderRadius: "0px",
          }}
        >
          <CardMedia
            component={"img"}
            src={"https://kentfilm.up.railway.app/storage/" + image}
            loading="eager"
            title={articleTitle}
            alt={"News coverage from " + newsSource}
            sx={{
              width: "28.645833333333332vw",
              height: "35.76051779935275vh",
              objectFit: "cover",
            }}
          />
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
        </Card>
      )}
    </ThemeProvider>
  );
};

export default PressCard;
