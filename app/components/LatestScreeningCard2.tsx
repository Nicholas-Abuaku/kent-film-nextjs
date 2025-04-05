"use client";
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import styles from "../styles/Latestscreening.module.css";
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
import TicketButton from "./TicketButton";
type LatestScreeningCardProps = {
  title: string;
  date: string;
  description: string;
  img: string;
  url: string;
  edit: boolean;
};

const LatestScreeningCard2 = (props: LatestScreeningCardProps) => {
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
          "@media (max-width: 900px)": { fontSize: "0.4rem" },
          "@media (max-width: 956px)": { fontSize: "5rem" },
          "@media (max-width: 1024px)": {
            fontSize: "2rem",
          },
          "@media (max-width: 400px)": {
            paddingBottom: "0px",
            fontSize: "1.5rem",
          },
        }}
      >
        {paragraph}
      </Typography>
    ));
  };
  return (
    <ThemeProvider theme={LatestScreeningTheme}>
      <Card elevation={0}
        sx={{
          display: "flex",
          minHeight: "682px",
          borderRadius: "0px",
          width: "100vw",
          height: "63.49vh",
          "@media (max-width: 1024px)": {
            display: "inline",
            width: "100%",
            height: "682px",
            // maxHeight: "682px",
            borderRadius: "0px",
          },
        }}
      >
        <Box
          sx={{
            width: "50%",
            height: "auto",
            "@media (max-width: 1024px)": {
              width: "100%",
              height: "50%",
            },
          }}
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
                src={props.edit ? props.img : props.img}
                width={960}
                height={682}
                alt={props.title}
                title={
                  "Ramsgate Community Cinema Latest Screening: " + props.title
                }
                className={styles.latestscreening}
                loading="eager"
                sizes="(min-width: 1040px) 50vw, 100vw"
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
            backgroundColor: "#FFFFF",
            color: "white",
            wordBreak: "break-word",
            width: "50%",
            borderRadius:'10px',
            height: "100%",
            position: "relative",
            "@media (max-width: 1024px)": {
              backgroundColor: "#F8F5F0",
              color: "white",
              wordBreak: "break-word",
              height:'10x',
              // minHeight: "500px",
              
              width: "100%",
            },
          }}
        >
          <Stack
            direction={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            spacing={1}
          >
            <Box
              minHeight={150}
              paddingBottom={4}
              sx={{
                "@media (max-width: 1024px)": {
                  paddingBottom: "1rem",
                  minHeight: "0px",
                  
                },
              }}
            >
              {renderTitle()}
              <Typography
                
                paddingBottom={4}
                textAlign={"center"}
                variant="h4"
                component="h3"
                sx={{
                  overflow: "auto",
                  "@media (max-width: 1024px)": {
                    paddingBottom: "0px",
                    fontSize: "1.7rem",
                  },
                  "@media (max-width: 400px)": {
                    paddingBottom: "0px",
                    fontSize: "1rem",
                  },
                }}
              >
                {props.date}
              </Typography>
            </Box>
            <Box
              sx={{
                
                height: "200px",
                maxWidth: "98%",
               
                "@media (max-width: 1024px)": {
                  // maxHeight: "100%",
                  minHeight: "100%",
                  display:'none',
                  maxWidth: "98%",
                  overflowY: "scroll",
                },
                overflowY: 'scroll',
                
              }}
            >
              <Typography
                height={"100%"}
                maxWidth={"75%"}
                textAlign={"center"}
                margin={"auto"}
                sx={{
                  
                  "@media (max-width: 1024px)": {
                    marginBottom: "0px",
                    maxHeight: "90%",
                    overflowY: "scroll",
                    
                    
                  },
                  
               
                }}
              >
                {props.description} 
              </Typography>
            </Box>
            <TicketButton />
          </Stack>
        </CardContent>
        
      </Card>
      {/* )} */}
      <hr/>
    </ThemeProvider>
  );
};

export default LatestScreeningCard2;
