"use client";
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import MCard from "./MCard";
import {
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
  Pagination,
  Skeleton,
  ThemeProvider,
  createTheme,
} from "@mui/material";

interface Event {
  id: string;
  name: { text: string };
  start: { local: string };
  url: string;
  logo?: { url: string };
}
const CardGridPaginated = () => {
  const API_KEY = "";
  //Pagination Logic
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;
  const [allEvents, setAllEvents] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const fetchAllEvents = async () => {
    const headers = {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    };
    try {
      const response = await axios.post("/api/eventbrite");
      setAllEvents(response.data);
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
    fetchAllEvents();
  }, []);

  return (
    <>
      {isLoading ? (
        allEvents.length > 0 ? (
          allEvents.slice(startIndex, endIndex).map((event: Event) => {
            const startArr = event.start.local.replace("T", " ");
            const dateTimeArray = startArr.split(" ");
            let startTime = dateTimeArray[1];
            const startDate = new Date(dateTimeArray[0]);
            const eventDate = startDate.toDateString();
            const imageUrl = event.logo ? event.logo.url : null;
            return (
              <Grid item key={event.id}>
                <MCard
                  title={event.name.text}
                  description={event.name.text}
                  date={eventDate}
                  time={startTime}
                  link={event.url}
                  img={imageUrl ? imageUrl : "N/A"}
                />
              </Grid>
            );
          })
        ) : (
          <Grid item>
            {isMobile ? (
              <Typography variant="h5" color={"white"}>
                Nothing Scheduled yet, check back again later!
              </Typography>
            ) : (
              <Typography variant="h3" color={"white"}>
                Nothing Scheduled yet, check back again later!
              </Typography>
            )}
          </Grid>
        )
      ) : (
        Array.from({ length: itemsPerPage }).map((_, index) => (
          <Grid item key={index}>
            <Skeleton variant="rectangular" width={576.13} height={275.06} />
          </Grid>
        ))
      )}
      <Grid item xs={12}>
        <Pagination
          count={Math.ceil(allEvents.length / itemsPerPage)}
          page={page}
          onChange={handlePageChange}
          sx={{ mt: 2, justifyContent: "center" }}
        />
      </Grid>
    </>
  );
};

export default CardGridPaginated;
