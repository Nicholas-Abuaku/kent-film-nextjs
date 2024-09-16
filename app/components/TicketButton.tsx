"use client";
import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
const TicketButton = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        sx={{
          borderRadius: "20px",
          height: "50px",
          width: "160px",
          color: "black",
          marginTop: "0px",
          // display: "none",
          "&:hover": { backgroundColor: "#808080" },
          "@media (max-width: 1024px)": {
            marginTop: "0px",
            paddingTop: "0px",
            width: "90px",
            height: "25px",
            fontSize: "0.6rem",
            display: "none",
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
    </>
  );
};

export default TicketButton;
