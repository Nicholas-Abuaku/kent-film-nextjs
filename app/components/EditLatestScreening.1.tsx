"use client";
import React, { useState } from "react";
import LatestScreeningCard from "./LatestScreeningCard";
import { Alert, Button, Stack, TextField } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import axios from "axios";
import { LatestScreeningInfo } from "./EditLatestScreening";

export const EditLatestScreening = () => {
  const [heading, setHeading] = useState<string>();
  const [date, setDate] = useState<string>();
  const [eventUrl, setEventUrl] = useState<string>();
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  function fileHander(event: React.ChangeEvent<HTMLButtonElement>) {
    const { files } = event.target;
    setFile(files[0]);
    setFileName(files[0].name);
    setFileUrl(URL.createObjectURL(files[0]));
  }
  function handleDateChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
    setDate(e.target.value);
    console.log(file);
  }

  function handleHeadingChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
    setHeading(e.target.value);
  }

  function handleDescriptionChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
    setDescription(e.target.value);
  }

  function handleEventUrlChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEventUrl(e.target.value);
    console.log(eventUrl);
  }
  function handlePost() {
    if (!heading || !date || !description || !eventUrl || !file) {
      console.log("Missing data");
      return;
    }
    const data: LatestScreeningInfo = {
      heading,
      date,
      description,
      img_Url: file,
      eventUrl,
    };
    const formData = new FormData();
    for (const [key, value] of Object.entries(data)) {
      formData.append(key, value);
    }
    console.log(file);
    axios.post("/api/edit-latest-screening", formData).then((res) => {
      console.log(res.data);
      setShowSuccessAlert(true);
    });
  }

  return (
    <>
      <LatestScreeningCard
        title={heading ? heading : "Title"}
        date={date ? date : "2024-04-04"}
        url={"NonePlease"}
        img={fileUrl ? fileUrl : "No"}
        description={description}
        edit={true}
      />
      <form style={{ marginTop: "50px" }}>
        <Stack
          spacing={2}
          width={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <TextField
            name="title"
            label="Title"
            sx={{ width: "50%" }}
            onChange={handleHeadingChange}
          />
          <TextField
            type="date"
            name="date"
            sx={{ width: "50%" }}
            onChange={handleDateChange}
          />
          <TextField
            label="description"
            name="description"
            sx={{ width: "50%" }}
            onChange={handleDescriptionChange}
          />
          <TextField
            label="Event Url"
            name="eventUrl"
            sx={{ width: "50%" }}
            onChange={handleEventUrlChange}
          />
        </Stack>
        <Stack
          direction={"row"}
          spacing={2}
          marginTop={5}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Button component="label" variant="contained">
            Upload Image
            <input type="file" hidden onChange={fileHander} />
          </Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#339465" }}
            onClick={handlePost}
          >
            Submit
          </Button>
        </Stack>
        {showSuccessAlert && (
          <Alert icon={<CheckIcon />} severity="success">
            Screening Successfully Updated!
          </Alert>
        )}
      </form>
    </>
  );
};
