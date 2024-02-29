import React from "react";
import {
  Card,
  Paper,
  CardMedia,
  CardContent,
  Stack,
  Typography,
  Button,
} from "@mui/material";
type PressCardPreviewProps = {
  source: string;
  title: string;
  img: string;
};
export const PressCardPreview = (props: PressCardPreviewProps) => {
  return (
    <Card
      sx={{
        backgroundColor: "#339465",
        height: "500px",
        maxWidth: "550px",
        width: "100%",
        color: "white",
        marginLeft: "10px",
        marginBottom: "30px",
        borderRadius: "0px",
      }}
    >
      <CardMedia component={"img"} height={"300px"} src={props.img} />
      <CardContent>
        <Stack spacing={0}>
          <Typography
            textAlign={"center"}
            fontWeight={"bold"}
            variant="subtitle1"
          >
            {props.source}
          </Typography>
          <Typography textAlign={"center"} variant="body1">
            {props.title}
          </Typography>
        </Stack>
        <Stack alignItems={"center"} justifyContent={"center"} marginTop={2}>
          <Button variant="outlined" color="inherit">
            Learn More
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};
