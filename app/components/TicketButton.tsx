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
          borderRadius: "10px",
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
            paddingTop: "auto",
            width: "90%",
            height: "30px",
            fontSize: "0.9rem",
            textAlign:'center'
            
          },
        }}
      >
        Ticket Info
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="aler-dialog-title">Ticket Info!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Doors Open 30 mins before screening, no booking required. All tickets are Pay-What-You-Can can and available at the door
            with a suggested donation of £3.50
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </ThemeProvider>
  );
};

export default TicketButton;
