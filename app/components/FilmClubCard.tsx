import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Paper,
  CardContent,
  Stack,
  Typography,
  Alert,
} from "@mui/material";
type FilmClubCardProps = {
  heading: string;
  desc: string;
  img: string;
};

const FilmClubCard = (props: FilmClubCardProps) => {
  const { desc, heading, img } = props;
  const renderDescription = () => {
    const descriptionText = desc || "";
    return descriptionText.split("\n").map((paragraph, index) => (
      <Typography key={index} textAlign={"center"} variant="subtitle2">
        {paragraph}
      </Typography>
    ));
  };
  return (
    <Paper
      elevation={4}
      sx={{
        width: "430px",
        height: "100%",
        marginTop: "0px",
        marginBottom: "40px",
        marginLeft: "0.875rem",
      }}
    >
      <Card sx={{ width: "100%", height: "100%" }}>
        <CardMedia component={"img"} height={"300px"} src={img} />
        <CardContent>
          <Stack spacing={0}>
            <Typography
              textAlign={"center"}
              fontWeight={"bold"}
              variant="subtitle1"
            >
              {heading}
            </Typography>
            {renderDescription()}
          </Stack>
        </CardContent>
      </Card>
    </Paper>
  );
};

export default FilmClubCard;
