"use client";
import React, { useState, useReducer, useContext } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Snackbar from "@mui/material/Snackbar";
import { ManageTableContext } from "../contexts/ManageTableContext";
import Link from "next/link";
import axios from "axios";
type EventActions = {
  id: number;
  onDelete: Function;
};
const EventActions = (props: EventActions) => {
  const { tableUpdate, setTableUpdate } = useContext(ManageTableContext);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);
  const [openSnack, setOpenSnack] = useState<boolean>();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    console.log(props.id);
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete("/api/events/delete/" + props.id);
      console.log(response.data);
      setTableUpdate(true);
      props.onDelete();
      setOpenSnack(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Snackbar
        open={openSnack}
        autoHideDuration={200000}
        onClose={() => console.log("Close")}
        message="Film Club Deleted"
      />
      <Button
        variant="contained"
        color="warning"
        id="film-clubs-actions-button"
        onClick={handleClick}
        aria-controls={open ? "film-clubs-actions" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        endIcon={<ArrowDropDownIcon />}
      >
        Actions
      </Button>
      <Menu
        id="film-clubs-actions"
        anchorEl={anchorEl}
        open={open}
        MenuListProps={{ "aria-labelledby": "film-clubs-actions-button" }}
        onClose={handleClose}
      >
        <Link href={"/dashboard/all-screenings/edit/" + props.id}>
          <MenuItem onClick={handleClose}>Edit</MenuItem>
        </Link>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </Menu>
    </>
  );
};

export default EventActions;
