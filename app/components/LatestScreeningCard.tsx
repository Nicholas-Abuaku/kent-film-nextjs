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
  time: string;
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
          "@media (max-width: 900px)": { fontSize: "0.4rem" },
          "@media (max-width: 956px)": { fontSize: "5rem" },
          "@media (max-width: 1024px)": {
            fontSize: "2rem",
            textAlign:'left'
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
      <Card elevation={0} sx={{display:'flex', "@media (max-width: 1024px)": {
            flexDirection:'column',
          },}}>
        <Box width={'100%'} maxHeight={'682px'} sx={{"@media (max-width: 1280px)": {
            width:'100%',
            padding:'10px',
            display:'block',
            
            height:'auto'
          },}}>
          <Image objectFit="cover" src={props.img} height={682} width={960}alt={props.title} title={
                  "Ramsgate Community Cinema Latest Screening: " + props.title} loading="eager"  style={{height:'auto', width:'100%', borderRadius:'5px', }}/>
        </Box>
        <CardContent sx={{justifyContent:'center', alignItems:'center',backgroundColor:'white', width:'100%', textAlign:'center', height:'100%', "@media (max-width: 1024px)": {
            width:'100%',
            paddingTop:'0px',
            height:'100%',
            marginTop:'0px',
            textAlign:'left',
            marginBottom:'40px'
          }}}>
            <Box width={'100%'}>
          <Typography variant="h1">{renderTitle()}</Typography>
          </Box>
          <Box width={'100%'}>
          <Typography variant="h3" sx={{"@media (max-width: 1024px)": {display:'none'}}}>{props.date}</Typography>
          <Typography variant="h3">{props.time.replaceAll(" ", "")}</Typography>
          </Box>
          
          
          <Stack direction={'row'} spacing={3}  sx={{"@media (min-width: 1024px)": {display:'none'}}}>
          <Typography variant="h4" component="h3" maxWidth={250} paddingBottom={4}>{props.date}</Typography>
          {/* <Button variant="contained" sx={{borderRadius:'10px', backgroundColor:'#237A2B', color:'white', height:'40px'}}>Tickets</Button> */}
          <TicketButton/>
          </Stack>
          <Box sx={{ maxWidth:'98%', "@media (max-width: 1024px)": { display:'none'}}}>
          
          {/* <Typography variant="h4" component={'h3'} marginBottom={4}>{props.date}</Typography> */}
         
          <Box sx={{overflowY:'scroll', width:'700px', textAlign:'center', margin:" auto", marginBottom:'00px', marginTop:'30px'}}>
          <Typography sx={{ height:'200px',}}>{props.description}</Typography>
          </Box>
          <Box >
          <TicketButton/>
          </Box>
          </Box>
        </CardContent>
        
      </Card>
      <hr/>
    </ThemeProvider>
  );
};

export default LatestScreeningCard;
