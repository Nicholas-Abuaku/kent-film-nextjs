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
const FilmClubCard = dynamic(() => import("@/app/components/FilmClubCard"), {
  ssr: false,
});
interface FilmClubData {
  id: number;
  heading: string;
  description: string;
  img_Url: string;
}

const page = () => {
  const params = useParams();
  const clubId = params.id;
  const [imageFile, setImageFile] = useState<File>();
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [clubData, setClubData] = useState<FilmClubData | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const [heading, setHeading] = useState<string>(" ");
  const [description, setDescription] = useState<string>("");
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const fetchClubData = async () => {
    try {
      const response = await axios.get(
        "https://picayune-belief-production.up.railway.app/api/film-clubs/" +
          clubId
      );
      setClubData(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  const handlePost = async () => {
    const formData = new FormData();
    if (!heading) {
      formData.append("heading", clubData?.heading || "no heading supplied");
    } else {
      formData.append("heading", heading);
    }

    if (!description) {
      formData.append("description", clubData?.description || "no description");
    } else {
      formData.append("description", description);
    }

    if (imageFile) {
      formData.append("img_Url", imageFile, fileName);
    }
    try {
      const response = await axios.post("/api/events/" + clubId, formData);
      console.log(response.data);
      if (response.status === 200) {
        setShowSuccessAlert(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  function handleSubmit() {
    if (clubId) {
      console.log("there is id");
      handlePost();
    } else {
      console.log("No id");
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

  function handleHeadingChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
    setHeading(event.target.value);
  }

  function handleDescriptionChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
    setDescription(event.target.value);
  }

  useEffect(() => {
    fetchClubData();
  }, []);

  return (
    <>
      <Grid container justifyContent={"center"} alignItems={"center"}>
        <Grid item xs={12}>
          <Stack direction={"row"} spacing={2}>
            <Link href={"/dashboard/film-clubs"}>
              <IconButton>
                <ArrowBackIcon />
              </IconButton>
            </Link>
            <h1>{clubId ? "Edit" : "New"}</h1>
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
                name="heading"
                label="heading"
                onChange={handleHeadingChange}
                sx={{ width: "100%" }}
              />
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
                {clubId
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
              <FilmClubCard
                heading={heading ? heading : clubData?.heading || ""}
                desc={description ? description : clubData?.description || ""}
                img={
                  fileUrl
                    ? fileUrl
                    : "https://picayune-belief-production.up.railway.app/storage/" +
                      clubData?.img_Url
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
