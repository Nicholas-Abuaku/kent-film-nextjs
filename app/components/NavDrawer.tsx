import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

export const NavDrawer = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <IconButton
        onClick={() => setOpenDrawer(true)}
        sx={{ marginLeft: "auto" }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List sx={{ backgroundColor: "#339465", height: "100%" }}>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <Link href={"/"}>
              <Button sx={{ color: "white" }}>Home</Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href={"/film-clubs"}>
              <Button sx={{ color: "white" }}>Film Clubs</Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href={"/press"}>
              <Button sx={{ color: "white" }}>Press</Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href={"/about"}>
              <Button sx={{ color: "white" }}>About</Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href={"/contact"}>
              <Button sx={{ color: "white" }}>Contact Us</Button>
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};
