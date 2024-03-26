import React from "react";
import { Icon, IconButton, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import Link from "next/link";
const SocialMediaLinks = () => {
  return (
    <Stack
      direction={"row"}
      spacing={2}
      alignItems={"center"}
      justifyContent={"center"}
      marginBottom={5}
    >
      <Link href={"https://www.facebook.com/KentFilmFoundation/"} target="_blank" rel="noopener noreferrer">
        <IconButton sx={{ backgroundColor: "#339465", color: "white" }}>
          <FacebookIcon />
        </IconButton>
      </Link>
      <Link href={"https://www.instagram.com/ramsgatecommunitycinema/"} target="_blank" rel="noopener noreferrer">
        <IconButton sx={{ backgroundColor: "#339465", color: "white" }}>
          <InstagramIcon />
        </IconButton>
      </Link>
      <Link href={"https://twitter.com/kentfilm_uk?lang=en-GB"} target="_blank" rel="noopener noreferrer">
        <IconButton sx={{ backgroundColor: "#339465", color: "white" }}>
          <XIcon />
        </IconButton>
      </Link>
    </Stack>
  );
};

export default SocialMediaLinks;
