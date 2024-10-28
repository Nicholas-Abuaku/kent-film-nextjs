"use client";
import { Card, Box, Typography, Stack, Button, TextField } from "@mui/material";
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
    <>
      <Card sx={{ minHeight: "320px", minWidth: "50%", display: "flex" }}>
        <Box
          sx={{
            minWidth: "50%",
            border: "solid 1px black",
            textAlign: "center",
            display: "flex",
          }}
        >
          {fileUrl ? (
            <Image
              src={fileUrl ? fileUrl : placeHolderImage.src}
              alt="ok"
              width={"100"}
              height={"100"}
              objectFit="cover"
              style={{ flex: "1", objectFit: "cover" }}
            />
          ) : (
            <Button component="label">
              Upload Image
              <input type="file" hidden onChange={fileHandler} />
            </Button>
          )}
        </Box>
        <Box
          sx={{
            width: "50%",
            border: "solid 1px red",
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
    </>
  );
};

export default EditScreeningCard;
//Need a way to remove the image and get back to upload screen
//Otherwise not too fussed, get started on the next tab
