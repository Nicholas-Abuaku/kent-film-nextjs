"use client";
import {
  Card,
  Box,
  Typography,
  Stack,
  Button,
  TextField,
  Paper,
} from "@mui/material";
import React, { useState } from "react";
import TicketButton from "./TicketButton";
import Image from "next/image";
import placeHolderImage from "../assets/images/1ColyerFerguson.png";

const EditScreeningCard = () => {
  const [file, setFile] = useState<File>();
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>("");

  async function fileHandler(event: React.FormEvent<HTMLInputElement>) {
    const target = event.target as HTMLInputElement & {
      files: FileList;
    };
    setFile(target.files[0]);
    setFileName(target.files[0].name);
    setFileUrl(URL.createObjectURL(target.files[0]));
    console.log(file);
  }
  return (
    <Paper
      sx={{
        paddingTop: "20px",
        paddingLeft: "20px",
        paddingRight: "20px",
        backgroundColor: "#D9D9D9",
      }}
    >
      <Typography variant="h6">Latest Screening:</Typography>
      <Card
        sx={{
          minHeight: "551px",
          height: "551px",
          width: "100%",
          display: "flex",
        }}
        elevation={24}
      >
        <Box
          sx={{
            width: "100vw",
            textAlign: "center",
            display: "flex",
          }}
        >
          {fileUrl ? (
            <>
              <Image
                src={fileUrl ? fileUrl : placeHolderImage.src}
                alt="ok"
                width={"100"}
                height={"100"}
                objectFit="cover"
                style={{ flex: "1", objectFit: "cover" }}
              />
              <Button
                onClick={() => setFileUrl("")}
                sx={{ width: "5px", height: "5px", position: "absolute" }}
              >
                Erase
              </Button>
            </>
          ) : (
            <Button component="label">
              Upload Image
              <input type="file" hidden onChange={fileHandler} />
            </Button>
          )}
        </Box>
        <Box
          sx={{
            width: "100vw",

            textAlign: "center",
            backgroundColor: "black",
            height: "auto",
          }}
        >
          <Stack
            marginTop={2}
            paddingBottom={4}
            direction={"column"}
            spacing={1}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            <TextField
              name="title"
              label="Title"
              multiline={true}
              rows={4}
              sx={{
                "& .MuiInputLabel-root": { color: "white" },
                "& .MuiOutlinedInput-input": { color: "white" },
              }}
            />
            <TextField
              type="date"
              name="date"
              sx={{
                "& .MuiInputLabel-root": { color: "white" },
                "& .MuiOutlinedInput-input": { color: "white" },
              }}
            />
            <TextField
              name="description"
              label="Description"
              multiline={true}
              rows={4}
              sx={{
                "& .MuiInputLabel-root": { color: "white" },
                "& .MuiOutlinedInput-input": { color: "white" },
              }}
            />
            <Button
              variant="contained"
              sx={{
                borderRadius: "10px",
                backgroundColor: "white",
                color: "black",
              }}
            >
              Tickets
            </Button>
          </Stack>
        </Box>
      </Card>
      <Stack justifyContent={"center"} direction={"row"} marginTop={1}>
        <Button variant="contained" color="success">
          Submit
        </Button>
      </Stack>
    </Paper>
  );
};

export default EditScreeningCard;
//Need a way to remove the image and get back to upload screen
//Otherwise not too fussed, get started on the next tab
