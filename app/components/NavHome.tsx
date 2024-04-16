"useClient";
import React from "react";
import { Button } from "@mui/material";
import Link from "next/link";
const NavHome = () => {
  return (
    <Link href={"/"}>
      <Button
        variant="text"
        color="inherit"
        sx={{
          "@media (max-width: 1024px)": {
            display: "none",
          },
        }}
      >
        Home
      </Button>
    </Link>
  );
};

export default NavHome;
