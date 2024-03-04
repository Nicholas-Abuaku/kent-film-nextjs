"use client";
import React, { useState, useEffect } from "react";
import { Grid, Skeleton, Pagination } from "@mui/material";
import PressCard from "./PressCard";
import axios from "axios";
interface PressArticle {
  id: number;
  news_source: string;
  article_title: string;
  article_url: string;
  image: string;
}
const PressCardGrid = () => {
  const [pressData, setPressData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;
  const fetchPressData = async () => {
    try {
      const response = await fetch(
        "https://kentfilm.up.railway.app/api/press",
        { cache: "no-cache" }
      );
      if (!response.ok) {
        throw new Error(`Error fetching press data: ${response.statusText}`);
      }
      const data = await response.json();
      console.log(data);
      setPressData(data);
      setIsLoading(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handlePageChange = (event: any, newPage: number) => {
    setPage(newPage);
  };
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  useEffect(() => {
    fetchPressData();
  }, []);
  return (
    <>
      <Grid container spacing={5} sx={{ margin: "auto" }} maxWidth={"100%"}>
        {isLoading
          ? pressData
              .slice(startIndex, endIndex)
              .reverse()
              .map((article: PressArticle) => (
                <Grid item md={5} xs={12} xl={4} key={article.id}>
                  <PressCard
                    newsSource={article.news_source}
                    articleTitle={article.article_title}
                    articleUrl={article.article_url}
                    image={article.image}
                  />
                </Grid>
              ))
          : Array.from({ length: 4 }).map((_, index) => (
              <Grid item key={index} md={5} xs={12} xl={4}>
                <Skeleton
                  variant="rectangular"
                  width={550}
                  height={462}
                  animation="wave"
                />
              </Grid>
            ))}
      </Grid>
      <Pagination
        count={Math.ceil(pressData.length / itemsPerPage)}
        page={page}
        onChange={handlePageChange}
        sx={{ mt: 2, justifyContent: "center" }}
      />
    </>
  );
};
export default PressCardGrid;
