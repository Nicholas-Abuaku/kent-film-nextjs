"use client";
import {
  Card,
  Box,
  Typography,
  Stack,
  Button,
  TextField,
  Alert,
} from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import placeHolderImage from "../assets/images/1ColyerFerguson.png";
import axios from "axios";
import CheckIcon from "@mui/icons-material/Check";
import { revalidateLatestScreening } from "../actions";
type EditScreeningProps = {
  title: string;
  date: Date;
  desc: string;
  image: string;
};
const EditScreeningCard = (props: EditScreeningProps) => {
  const [file, setFile] = useState<File>();
  const [fileUrl, setFileUrl] = useState<string | null>(props.image);
  const [fileName, setFileName] = useState<string>("");
  const [showSuccessAlert, setShowSuccessAlert] = useState<boolean>(false);
  //
  const [heading, setHeading] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [eventUrl, setEventUrl] = useState<string>("");

  function handleHeadingChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
    setHeading(e.target.value);
  }

  function handleDescriptionChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
    setDescription(e.target.value);
  }

  function handleDateChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
    setDate(e.target.value);
  }

  async function fileHandler(event: React.FormEvent<HTMLInputElement>) {
    const target = event.target as HTMLInputElement & {
      files: FileList;
    };
    setFile(target.files[0]);
    setFileName(target.files[0].name);
    setFileUrl(URL.createObjectURL(target.files[0]));
    console.log(file);
  }

  const handlePost = async () => {
    const formData = new FormData();
    formData.append("heading", heading);
    formData.append("date", date);
    formData.append("description", description);
    if (file) {
      formData.append("img_Url", file, fileName);
    } else {
      console.log("Image Required");
    }
    console.log(formData.get("img_Url"));
    formData.append("eventUrl", eventUrl);
    try {
      const response = await axios.post("/api/edit-latest-screening", formData);
      console.log(response.data);
      if (response.status === 200) {
        setShowSuccessAlert(true);
      }
      revalidateLatestScreening();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
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
                objectFit="fill"
                unoptimized
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
              onChange={handleHeadingChange}
              defaultValue={props.title}
              rows={4}
              sx={{
                "& .MuiInputLabel-root": { color: "white" },
                "& .MuiOutlinedInput-input": {
                  color: "white",
                  textAlign: "center",
                },
                width: "80%",
              }}
            />
            <TextField
              type="date"
              name="date"
              onChange={handleDateChange}
              defaultValue={props.date}
              sx={{
                "& .MuiInputLabel-root": { color: "white" },
                "& .MuiOutlinedInput-input": {
                  color: "white",
                },
              }}
            />
            <TextField
              name="description"
              label="Description"
              multiline={true}
              onChange={handleDescriptionChange}
              defaultValue={props.desc}
              rows={4}
              sx={{
                "& .MuiInputLabel-root": { color: "white" },
                "& .MuiOutlinedInput-input": {
                  color: "white",
                  textAlign: "center",
                },
                width: "80%",
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
        <Button variant="contained" color="success" onClick={handlePost}>
          Submit
        </Button>
      </Stack>
      {showSuccessAlert && (
        <Alert icon={<CheckIcon />} severity="success">
          Screening Successfully Updated!
        </Alert>
      )}
    </>
  );
};

export default EditScreeningCard;
