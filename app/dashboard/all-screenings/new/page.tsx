"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {
  Stack,
  TextField,
  Button,
  Grid,
  Typography,
  Alert,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import axios from "axios";
import Link from "next/link";

import dynamic from "next/dynamic";
import { revalidateAllEvents } from "@/app/actions";
const MovieCard = dynamic(() => import("@/app/components/MCard"), {
  ssr: false,
});
interface MovieCardData {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  time: string;
}

const page = () => {
  const params = useParams();
  const eventID = params.id;
  const [imageFile, setImageFile] = useState<File>();
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [cardData, setCardData] = useState<MovieCardData | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const [title, setTitle] = useState<string>(" ");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const fetchCardData = async () => {
    try {
      const response = await axios.get(
        "https://picayune-belief-production.up.railway.app/api/events/" +
          eventID
      );
      setCardData(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleNew = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("time", time);
    formData.append("date", date);
    formData.append("description", description);
    if (imageFile) {
      formData.append("image", imageFile, fileName);
    }

    try {
      const response = await axios.post("/api/all-events/add/", formData);
      console.log(response.data);
      if (response.status === 200) {
        setShowSuccessAlert(true);
      }
    } catch (err) {
      console.log(err);
    }
  };
  function handleSubmit() {
    if (eventID) {
      console.log("there is id");
      // handlePost();
    } else {
      console.log("No id");
      handleNew();
      revalidateAllEvents();
    }
  }

  async function fileHandler(event: React.FormEvent<HTMLInputElement>) {
    const target = event.target as HTMLInputElement & {
      files: FileList;
    };
    setImageFile(target.files[0]);
    setFileName(target.files[0].name);
    setFileUrl(URL.createObjectURL(target.files[0]));
    console.log(imageFile);
  }

  function handleTitleChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
    setTitle(event.target.value);
  }

  function handleDescriptionChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
    setDescription(event.target.value);
  }

  function handleTimeChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
    setTime(event.target.value);
  }
  function handleDateChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
    setDate(event.target.value);
  }
  useEffect(() => {
    fetchCardData();
  }, []);

  return (
    <>
      <Grid container justifyContent={"center"} alignItems={"center"}>
        <Grid item xs={12}>
          <Stack direction={"row"} spacing={2}>
            <Link href={"/dashboard/all-screenings"}>
              <IconButton>
                <ArrowBackIcon />
              </IconButton>
            </Link>
            <h1>{eventID ? "Edit" : "New"}</h1>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <form>
            <Stack
              direction={"column"}
              spacing={4}
              justifyContent={"center"}
              alignItems={"center"}
              marginRight={0}
            >
              <TextField
                name="title"
                label="title"
                onChange={handleTitleChange}
                sx={{ width: "100%" }}
              />
              <Stack direction={"row"}>
                <TextField
                  type="date"
                  name="date"
                  onChange={handleDateChange}
                  sx={{ width: "50%" }}
                />
                <TextField
                  name="time"
                  label="time"
                  onChange={handleTimeChange}
                  sx={{ width: "50%" }}
                />
              </Stack>
              <TextField
                name="description"
                label="Description"
                onChange={handleDescriptionChange}
                sx={{ width: "100%" }}
                multiline={true}
                rows={9}
              />
            </Stack>
            <Stack direction={"row"} spacing={2} marginTop={4}>
              <Button component="label" variant="contained">
                Upload Image
                <input type="file" hidden onChange={fileHandler} />
              </Button>
              <Button
                variant="contained"
                color="success"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Stack>
            {showSuccessAlert && (
              <Alert severity="success">
                {eventID
                  ? "Film Club Successfully Updated!"
                  : "Film Club Added Successfully"}
              </Alert>
            )}
          </form>
        </Grid>
        <Grid item xs={3} justifyContent={"center"} alignItems={"center"}>
          <Stack spacing={0}>
            <Typography
              variant="h4"
              textAlign={"center"}
              sx={{ textDecoration: "underline" }}
            >
              Preview
            </Typography>
            {
              <MovieCard
                title={title ? title : cardData?.title || ""}
                description={
                  description ? description : cardData?.description || ""
                }
                date={date ? date : cardData?.date || ""}
                time={time ? time : cardData?.time || ""}
                img={
                  fileUrl
                    ? fileUrl
                    : "https://picayune-belief-production.up.railway.app/storage/" +
                      cardData?.image
                }
              />
            }
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default page;
