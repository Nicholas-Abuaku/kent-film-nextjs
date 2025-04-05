"use client";
import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  ThemeProvider,
} from "@mui/material";
import ButtonTheme from "../Themes/ButtonTheme";
const TicketButton = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <ThemeProvider theme={ButtonTheme}>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        sx={{
          borderRadius: "50px",
          height: "50px",
          width: "180px",
          fontSize:'20px',
          color: "white",
          backgroundColor:'#237A2B',
          marginTop: "0px",
          // display: "none",
          "&:hover": { backgroundColor: "#3FA74A" },
          "@media (max-width: 1024px)": {
            marginTop: "0px",
            paddingTop: "0px",
            width: "90px",
            height: "25px",
            fontSize: "0.6rem",
            
          },
        }}
      >
        Tickets
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="aler-dialog-title">Ticket Info!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Tickets are available at the door. All tickets are pay what you can
            with a suggested donation of £3.50
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </ThemeProvider>
  );
};

export default TicketButton;
