import { Button, Menu, MenuItem, Snackbar } from "@mui/material";
import React, { useState, useContext } from "react";
import { ManageTableContext } from "../contexts/ManageTableContext";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import axios from "axios";
import Link from "next/link";

type PressActionProps = {
  id: number;
  onDelete: Function;
};
const PressActionsButton = (props: PressActionProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [openSnack, setOpenSnack] = useState(false);
  const { tableUpdate, setTableUpdate } = useContext(ManageTableContext);
  const open = Boolean(anchorEl);
  function handleClose() {
    setAnchorEl(null);
    console.log(props.id);
  }
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleDelete = async () => {
    console.log("Havent implemented handle delete");
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
        id="press-actions-button"
        onClick={handleClick}
        aria-controls={open ? "press-actions" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        endIcon={<ArrowDropDownIcon />}
      >
        Actions
      </Button>
      <Menu
        id="presss-actions"
        anchorEl={anchorEl}
        open={open}
        MenuListProps={{ "aria-labelledby": "press-actions-button" }}
        onClose={handleClose}
      >
        <Link href={"/dashboard/press/edit/" + props.id}>
          <MenuItem onClick={handleClose}>Edit</MenuItem>
        </Link>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </Menu>
    </>
  );
};

export default PressActionsButton;
