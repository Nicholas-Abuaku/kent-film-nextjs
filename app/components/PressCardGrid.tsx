"use client";
import React, { useState, useEffect } from "react";
import { Grid, Skeleton, Pagination } from "@mui/material";
import PressCard from "./PressCard";
import PressCard2 from "./PressCard2";
interface PressArticle {
  id: number;
  news_source: string;
  article_title: string;
  article_url: string;
  article_date:string;
  image: string;
  article_description: string;
}
const PressCardGrid = () => {
  const [pressData, setPressData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const itemsPerPage = 3

  const fetchPressData = async () => {
    try {
      const response = await fetch(
        "https://kentfilm2025-production.up.railway.app/api/press",
        { next: { revalidate: 86400 } }
      );
      if (!response.ok) {
        throw new Error(`Error fetching press data: ${response.statusText}`);
      }
      const data = await response.json();

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
      <Grid
        container
        spacing={1}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          "@media (min-width: 1200px)": { marginLeft: "10px" },
        }}
        maxWidth={"100%"}
      >
        {isLoading
          ? pressData
              .slice(startIndex, endIndex)
              .reverse()
              .map((article: PressArticle) => (
                <Grid item md={5} xs={12} lg={4} xl={3} key={article.id}>
                  {/* <PressCard
                    newsSource={article.news_source}
                    articleTitle={article.article_title}
                    articleUrl={article.article_url}
                    image={article.image}
                  /> */}
                  <PressCard2 newsSource={article.news_source} articleTitle={article.article_title} articleUrl={article.article_url}  date={article.article_date} articleDesc= {article.article_description}/>
                  
                </Grid>
              ))
          : Array.from({ length: 3 }).map((_, index) => (
              <Grid
                item
                key={index}
                md={5}
                xs={12}
                lg={4}
                xl={3}
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  "@media (min-width: 1200px)": { marginLeft: "10px" },
                }}
              >
                <Skeleton
                  variant="rectangular"
                  width={480}
                  height={395}
                  animation="wave"
                  sx={{
                    "@media (max-width: 1024px)": {
                      height: "auto",
                      width: "90%",
                      margin: "auto",
                      marginBottom: "30px",
                      borderRadius: "0px",
                    },
                  }}
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
