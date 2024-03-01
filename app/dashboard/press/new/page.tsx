"use client";
import React, { useEffect, useState } from "react";
import {
  Stack,
  Typography,
  TextField,
  Button,
  Alert,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import { PressCardPreview } from "../../components/back-end/PressCardPreview";
import axios from "axios";
import { useParams } from "next/navigation";
import Link from "next/link";
import { PressCardPreview } from "@/app/components/PressCardPreview";
interface PressArticleData {
  news_source: string;
  article_title: string;
  article_url: string;
  image: string;
}

const page = () => {
  const params = useParams();
  const articleId = params.id;
  const [imageFile, setImageFile] = useState<File>();
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [articleData, setArticleData] = useState<PressArticleData | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [newsSource, setNewsSource] = useState<string>(" ");
  const [articleTitle, setArticleTitle] = useState<string>("");
  const [articleUrl, setArticleUrl] = useState<string>("");
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const fetchClubData = async () => {
    try {
      const response = await axios.get(
        "https://kentfilm.up.railway.app/api/press/" + articleId
      );
      setArticleData(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleNew = async () => {
    const formData = new FormData();
    formData.append("news_source", newsSource);
    formData.append("article_title", articleTitle);
    formData.append("article_url", articleUrl);

    if (imageFile) {
      formData.append("image", imageFile, fileName);
    }

    try {
      const response = await axios.post("/api/press/add/", formData);
      console.log(response.data);
      if (response.status === 200) {
        setShowSuccessAlert(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  function handleSubmit() {
    if (articleId) {
      console.log("there is id");
      // handlePost();
    } else {
      console.log("No id");
      handleNew();
    }
  }
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
  function handleSourceChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
    setNewsSource(event.target.value);
  }
  function handleTitleChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
    setArticleTitle(event.target.value);
  }
  function handleUrlChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
    setArticleUrl(event.target.value);
  }

  useEffect(() => {
    fetchClubData();
  }, []);
  return (
    <form>
      <Stack
        spacing={2}
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Stack direction={"row"} spacing={2}>
          <Link href={"/dashboard/press"}>
            <IconButton>
              <ArrowBackIcon />
            </IconButton>
          </Link>
          <Typography variant="h3">{articleId ? "Edit" : "New"}</Typography>
        </Stack>

        <PressCardPreview
          img={
            fileUrl
              ? fileUrl
              : "https://kentfilm.up.railway.app/storage/" + articleData?.image
          }
          source={newsSource ? newsSource : articleData?.news_source || ""}
          title={articleTitle ? articleTitle : articleData?.article_title || ""}
        />
        <TextField
          name="news_source"
          label="News Source"
          sx={{ width: "80%" }}
          onChange={handleSourceChange}
          required
        />
        <TextField
          name="article_title"
          label="Article Title"
          rows={8}
          sx={{ width: "80%" }}
          onChange={handleTitleChange}
          required
        />
        <TextField
          name="article_url"
          label="Article Link"
          rows={8}
          sx={{ width: "80%" }}
          onChange={handleUrlChange}
          required
        />
        {showSuccessAlert && (
          <Alert severity="success">
            {articleId
              ? "Article Information Successfully Updated!"
              : "Article Added Successfully"}
          </Alert>
        )}
        {showErrorAlert && (
          <Alert severity={"warning"}>
            {articleId
              ? "Update Failed, Please check all fields marked with * are filled!"
              : "Failed to create new article. Please check all fields marked with * are filled"}
          </Alert>
        )}
        <Button component="label" variant="contained">
          Upload Image
          <input type="file" hidden onChange={fileHandler} />
        </Button>
      </Stack>
      <Stack
        spacing={2}
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        marginTop={5}
      >
        <Button variant="contained" color="success" onClick={handleSubmit}>
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export default page;
