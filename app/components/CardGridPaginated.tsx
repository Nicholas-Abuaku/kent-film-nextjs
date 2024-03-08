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
  const [page, setPage] = useState(1);
  const [allEvents, setAllEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const itemsPerPage = isMobile ? 4 : 3;

  const fetchAllEvents = async () => {
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
              // <>
              //   <Grid item>
              //     <MCard
              //       title="Movie (1999)"
              //       description="If you're seeing this place holder it means nothing is scheduled on eventbrite, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in"
              //       date="8 Mar 2024"
              //       time="14:00"
              //       link="none"
              //       img="https://kentfilm.up.railway.app/storage/featured-content-images/OalDmfWP9omPjTS6vMkhjxzJ5CdwXTFs1vfku6Wd.png"
              //     />
              //   </Grid>
              // </>
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
