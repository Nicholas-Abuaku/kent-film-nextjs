"use client";
import React from "react";
import { Button, IconButton } from "@mui/material";
import PaidIcon from "@mui/icons-material/Paid";
import Link from "next/link";

const PayPalDonate = () => {
  return (
    <Link
      href={"https://www.paypal.com/uk/fundraiser/charity/3207559"}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button
        endIcon={<PaidIcon />}
        variant="contained"
        sx={{
          borderRadius: "20px",
          backgroundColor: "#339465",
          float: "right",
        }}
      >
        Donate
      </Button>
    </Link>
  );
};

export default PayPalDonate;
