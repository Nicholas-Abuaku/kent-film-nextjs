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
  articleTitle: string;
  date:string;
  articleDesc: string;
  articleUrl: string;
  
};
const PressCard2 = (props: PressCardProps) => {
  const { newsSource, articleTitle, articleUrl } = props;
  const isMobile = useMediaQuery(PressCardTheme.breakpoints.down("md"));
  return (
    <ThemeProvider theme={PressCardTheme}>
        <Card sx={{display:'flex', flexDirection:'column',  borderRadius:'16px',  padding:'2px',backgroundColor:'#FFFFF',  "@media (max-width: 1024px)": {
            height: "auto",
            width: "100%",
            maxWidth:'320px',
            margin: "auto",
           
            marginBottom: "30px",
            borderRadius: "15px",
            
          },width:'400px', height:'42.23864836325237vh',  }}>
          
            <Box sx={{ justifyContent:'left', alignItems:'left', textAlign:'left', paddingLeft:'10px' }}>
            <Stack sx={{  textAlign:'left'}}>
                <Typography variant="body1">{props.newsSource}</Typography>
                
            </Stack>
            </Box>
            <Box sx={{ overflowY:'scroll',textAlign:'left', height:'100%', }} >
            {/* <Stack  spacing={1}> */}
            <Box sx={{ height:'33%', paddingLeft:'10px'}}>
              <Stack spacing={0}>
              <Typography variant="h6">{props.articleTitle}</Typography>
              <Typography variant="caption">{props.date}</Typography>
              </Stack>
            
            </Box>
            
            <Box sx={{ height:'50%', marginTop:'40px', textAlign:'left', paddingLeft:'10px'}}>
            <Typography variant="body2" maxWidth={400}>{props.articleDesc} </Typography>
            </Box>
            
            {/* </Stack> */}
            </Box>
            <Link
                href={articleUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Learn More"
              >
            <Box sx={{
          flexGrow: 0, 
          padding: '10px 0 15px 0', 
          display: 'flex',           
          justifyContent: 'center', 
          alignItems: 'center',
          mt:'auto'       
        }}>
            
            <Button variant="contained" sx={{backgroundColor:'#15803d', width:'90%'}}>Read More</Button>
            
            </Box>
            </Link>
        </Card>
    </ThemeProvider>
  );
};

export default PressCard2;
