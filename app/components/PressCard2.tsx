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
import RamsgateRecordLogo from '../assets/images/rgaterecord.png';


type PressCardProps = {
  newsSource: string;
  date:string;
  articleTitle: string;
  articleDesc: string;
  articleUrl: string;
  image: any;
  
};
const PressCard2 = (props: PressCardProps) => {
  const { newsSource, articleTitle, articleUrl, image } = props;
  const isMobile = useMediaQuery(PressCardTheme.breakpoints.down("md"));
  return (
    <ThemeProvider theme={PressCardTheme}>
        <Card sx={{border:'1px solid blue', borderRadius:'10px', display:'flex', flexDirection:'column',  "@media (max-width: 1024px)": {
            height: "auto",
            width: "90%",
            margin: "auto",
            marginBottom: "30px",
            borderRadius: "15px",
            
          },width:'400px', height:'42.23864836325237vh',  }}>
            <Box sx={ {borderRadius:'5px',   flexGrow:'1', width:'398px', height:'28px', position:'relative', overflow:'hidden' }}>
                <Image src={"https://picayune-belief-production.up.railway.app/storage/" +props.image} alt="wt" width={398} height={28} objectFit="fill" />
            </Box>
            <Box sx={{display:'flex', flexDirection:'column', justifyContent:'left', alignItems:'left', textAlign:'left', flexGrow:'1'}}>
            <Stack sx={{  textAlign:'left'}}>
                <Typography variant="body1">{props.newsSource}</Typography>
                <Typography variant="caption">{props.date}</Typography>
            </Stack>
            </Box>
            <Box sx={{flexGrow:'1', overflowY:'scroll',textAlign:'left'}} >
            <Stack  spacing={3}>
                <Typography variant="h6">{props.articleTitle}</Typography>
                <Typography variant="body2">{props.articleDesc} </Typography>
            </Stack>
            </Box>
            <Link
                href={articleUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Learn More"
              >
            <Box sx={{
          flexGrow: 0, // Button section doesn't grow
          padding: '10px 0 15px 0', 
          display: 'flex',           
          justifyContent: 'center', 
          alignItems: 'center'       
        }}>
            
            <Button variant="contained" sx={{backgroundColor:'#15803d', width:'90%'}}>Read More</Button>
            
            </Box>
            </Link>
        </Card>
    </ThemeProvider>
  );
};

export default PressCard2;
