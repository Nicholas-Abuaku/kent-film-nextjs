import { Typography, Stack } from "@mui/material";
import React from "react";
import SolidLogo from "./assets/images/Negative-round-solid.png";
import Image from "next/image";
const loading = () => {
  return (
    <main>
      <Stack justifyContent={"center"} alignItems={"center"} margin={"auto"}>
        <Typography variant="h4">Loading Page...</Typography>
      </Stack>
    </main>
  );
};

export default loading;
