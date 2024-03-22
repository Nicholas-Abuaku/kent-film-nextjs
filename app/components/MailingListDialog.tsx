"use client";
import React, { useEffect, useState } from "react";
import { Button, useMediaQuery } from "@mui/material";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Box, Icon, Stack } from "@mui/material";

import KentFilmLogo from "../assets/images/OtterLogo.png";
import Close from "@mui/icons-material/Close";
import MailingDialogTheme from "../Themes/MailingDialogTheme";
import Link from "next/link";
import Image from "next/image";
const MailingListDialog = () => {
  const closedPopUp = window.localStorage.getItem("closedMailingPopUp");
  const [open, setOpen] = useState(closedPopUp !== "true");
  const isMobile = useMediaQuery(MailingDialogTheme.breakpoints.down("md"));
  const handleClose = () => {
    window.localStorage.setItem("closedMailingPopUp", "true");
    setOpen(false);
  };
  const styles = {
    backgroundColor: "#339465",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    xs: {
      width: "100%",
      height: "auto",
    },
    md: {
      width: "31.25vw",
      height: "64.72491909385113vh",
    },
  };
  useEffect(() => {
    const closedPopUp = window.localStorage.getItem("closedMailingPopUp");
    if (closedPopUp === "true") {
      setOpen(false);
    }
  }, []);

  return (
    <ThemeProvider theme={createTheme(MailingDialogTheme)}>
      {isMobile ? (
        <Dialog onClose={handleClose} open={open}>
          <Box sx={{ styles }}>
            <DialogTitle textAlign={"center"}>
              <Image
                src={KentFilmLogo.src}
                width={128}
                height={128}
                alt="Kent Film Foundation Logo"
              />
            </DialogTitle>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
              }}
            >
              <CloseIcon />
            </IconButton>
            <DialogContent
              sx={{ justifyContent: "center", alignItems: "center" }}
            >
              <Stack direction={"column"} spacing={2} marginBottom={10}>
                <Typography
                  textAlign={"center"}
                  variant="body1"
                  component={"h1"}
                >
                  Never miss a screening again!
                </Typography>
                <Typography textAlign={"center"} variant="h2">
                  Subscribe to our Mailing List
                </Typography>
              </Stack>
              <Link
                href={"https://forms.gle/wLES8Bm7or54U58RA"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Typography
                  sx={{
                    display: "block",
                    margin: "auto",
                    textAlign: "center",
                    color: "white",
                    textDecoration: "none",
                  }}
                  onClick={handleClose}
                >
                  Click Here!
                </Typography>
              </Link>

              <Typography
                textAlign={"center"}
                color={"white"}
                marginTop={20}
                sx={{ textDecoration: "underline", cursor: "pointer" }}
                onClick={handleClose}
              >
                No Thanks
              </Typography>
            </DialogContent>
          </Box>
        </Dialog>
      ) : (
        <Dialog onClose={handleClose} open={open}>
          <Box
            width={"31.25vw"}
            height={"64.72491909385113vh"}
            sx={{
              backgroundColor: "#339465",
              color: "white",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <DialogTitle textAlign={"center"}>
              <Image
                src={KentFilmLogo.src}
                width={128}
                height={128}
                alt="Kent Film Foundation Logo"
              />
            </DialogTitle>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
              }}
            >
              <CloseIcon />
            </IconButton>
            <DialogContent
              sx={{ justifyContent: "center", alignItems: "center" }}
            >
              <Stack direction={"column"} spacing={2} marginBottom={10}>
                <Typography textAlign={"center"}>
                  Never miss a screening again!
                </Typography>
                <Typography textAlign={"center"} variant="h4">
                  Subscribe to our Mailing List
                </Typography>
              </Stack>
              <Link
                href={"https://forms.gle/wLES8Bm7or54U58RA"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Typography
                  sx={{
                    display: "block",
                    margin: "auto",
                    textAlign: "center",
                    color: "white",
                    textDecoration: "none",
                  }}
                  onClick={handleClose}
                >
                  Click Here!
                </Typography>
              </Link>

              <Typography
                textAlign={"center"}
                color={"white"}
                marginTop={20}
                sx={{ textDecoration: "underline", cursor: "pointer" }}
                onClick={handleClose}
              >
                No Thanks
              </Typography>
            </DialogContent>
          </Box>
        </Dialog>
      )}
    </ThemeProvider>
  );
};

export default MailingListDialog;
