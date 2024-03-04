"use client";
import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
  Stack,
  CssBaseline,
  useTheme,
  useMediaQuery,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import NavHome from "./NavHome";
import KentFilmLogo from "../icons/RamsgateCinema.jpg";
import Link from "next/link";
import { NavDrawer } from "./NavDrawer";
import NavbarTheme from "../Themes/NavbarTheme";
import Image from "next/image";
const Navigation2 = () => {
  const isMobile = window.innerWidth <= 768;
  return (
    <ThemeProvider theme={NavbarTheme}>
      <AppBar position="static" elevation={0}>
        <Toolbar
          sx={{ backgroundColor: "#339465", width: "100%", height: "100px" }}
        >
          <Link href={"/"}>
            <IconButton sx={{ float: "left" }} disableRipple>
              <Image
                src={KentFilmLogo.src}
                width={80}
                height={80}
                title="Kent Film Foundation Logo"
                alt="Kent Film Foundation Logo"
              />
            </IconButton>
          </Link>
          <Stack direction={"column"}>
            <Typography
              sx={{
                flexGrow: "1",
                color: "white",
                fontWeight: "bold",
                flexBasis: "100%",
              }}
              variant="h5"
              component="h1"
            >
              Kent Film Foundation
            </Typography>
            <Typography>Ramsgate Community Cinema</Typography>
          </Stack>
          {isMobile ? (
            <NavDrawer />
          ) : (
            <Stack direction={"row"} spacing={2} sx={{ marginLeft: "auto" }}>
              <NavHome />
              <Link href={"/film-clubs"}>
                <Button variant="text" color="inherit">
                  Film Clubs
                </Button>
              </Link>
              <Link href={"/press"}>
                <Button variant="text" color="inherit">
                  Press
                </Button>
              </Link>
              <Link href={"/about"}>
                <Button variant="text" color="inherit">
                  About
                </Button>
              </Link>
              <Link href={"/contact"}>
                <Button variant="text" color="inherit">
                  Contact Us
                </Button>
              </Link>
            </Stack>
          )}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navigation2;
