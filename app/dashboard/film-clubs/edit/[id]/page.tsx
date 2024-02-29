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

const page = () => {
  const params = useParams();
  const userId = params.id;
  const [imageFile, setImageFile] = useState<File>();
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [clubData, setClubData] = useState([]);
  const [fileName, setFileName] = useState<string>("");
  const [heading, setHeading] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const fetchClubData = async () => {
    try {
      const response = await axios.get(
        "https://kentfilm.up.railway.app/api/film-clubs/" + userId
      );
      setClubData(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  //file handler
  async function fileHandler(event: React.FormEvent<HTMLInputElement>) {
    const target = event.target as HTMLInputElement & {
      files: FileList;
    };
    setImageFile(target.files[0]);
    setFileName(target.files[0].name);
    setFileUrl(URL.createObjectURL(target.files[0]));
    console.log(imageFile);
  }
  //field inputs
  function handleHeadingChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
    setHeading(event.target.value);
  }

  function handleDescriptionChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
    setDescription(event.target.value);
  }

  //handleNew
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
            <h1>{userId ? "Edit" : "New"}</h1>
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
                // onClick={handleSubmit}
              >
                Submit
              </Button>
            </Stack>
            {showSuccessAlert && (
              <Alert severity="success">
                {userId
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
            {/* <FilmClubCard
              heading={heading ? heading : clubData.heading}
              desc={description ? description : clubData.description}
              img={
                fileUrl
                  ? fileUrl
                  : "https://kentfilm.up.railway.app/storage/" +
                    clubData.img_Url
              }
            /> */}
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default page;
