import { Grid, Typography, Stack, Skeleton } from "@mui/material";
import React from "react";
import SolidLogo from "./assets/images/Negative-round-solid.png";
import Image from "next/image";
const loading = () => {
  return (
    <main>
      <Stack justifyContent={"center"} alignItems={"center"} margin={"auto"}>
        <Image src={SolidLogo.src} width={256} height={256} alt="Logo" />
        <Typography variant="h4">Loading Page...</Typography>
      </Stack>
    </main>
  );
};

export default loading;
