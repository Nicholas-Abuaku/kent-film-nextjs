"use client";
import React, { useState } from "react";
import LatestScreeningCard from "./LatestScreeningCard";
import { Alert, Button, Stack, TextField } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { ChangeEvent } from "react";
import axios from "axios";

interface LatestScreeningInfo {
  heading: string;
  img_Url: File;
  date: string;
  description: string;
  eventUrl: string;
}
const EditLatestScreening = () => {
  const [heading, setHeading] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [eventUrl, setEventUrl] = useState<string>("");
  const [showSuccessAlert, setShowSuccessAlert] = useState<boolean>(false);
  const [file, setFile] = useState<File>();
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  async function fileHandler(event: React.FormEvent<HTMLInputElement>) {
    const target = event.target as HTMLInputElement & {
      files: FileList;
    };
    setFile(target.files[0]);
    setFileName(target.files[0].name);
    setFileUrl(URL.createObjectURL(target.files[0]));
    console.log(file);
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
    formData.append("eventUrl", eventUrl);
    console.log(formData.get("img_Url"));

    try {
      const response = await axios.post("/api/edit-latest-screening", formData);
      console.log(response.data);
      if (response.status === 200) {
        setShowSuccessAlert(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

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
            multiline={true}
            rows={4}
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
            <input type="file" hidden onChange={fileHandler} />
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

export default EditLatestScreening;
