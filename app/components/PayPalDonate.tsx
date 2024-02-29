import React from "react";
import { Button, IconButton } from "@mui/material";
import PaidIcon from "@mui/icons-material/Paid";

const PayPalDonate = () => {
  return (
    <Button
      endIcon={<PaidIcon />}
      variant="contained"
      sx={{ borderRadius: "20px", backgroundColor: "#339465", float: "right" }}
    >
      Donate
    </Button>
  );
};

export default PayPalDonate;
