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
  const [allEvents, setAllEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const itemsPerPage = isMobile ? 2 : 6;
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

  useEffect(() => {
    fetchAllEvents();
  }, []);
  const currentMonthEvents = allEvents.filter((event: Event) => {
    const startDate = new Date(event.start.local);
    const currentDate = new Date();

    return (
      startDate.getMonth() >= currentDate.getMonth() &&
      startDate.getFullYear() === currentDate.getFullYear() &&
      startDate.getDate() >= currentDate.getDate()
    );
  });
  const totalPages = Math.ceil(currentMonthEvents.length / itemsPerPage);
  const indexOfLastEvent = currentPage * itemsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - itemsPerPage;
  const currentEvents = currentMonthEvents.slice(
    indexOfFirstEvent,
    indexOfLastEvent
  );

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };
  return (
    <>
      <Grid
        container
        spacing={1}
        direction={"row"}
        paddingTop={3}
        paddingBottom={3}
        marginBottom={3}
        paddingLeft={"3%"}
        sx={{
          backgroundColor: "#339465",
          width: "100%",
          maxHeight: "723px",
        }}
        minHeight={"47.61vh"}
      >
        <Grid item xs={12} width={"100%"}>
          <Typography
            variant="h2"
            fontFamily={"Open Sans, arial, sans-serif"}
            sx={{
              border: "2px solid",
              borderLeft: "0px",
              borderRight: "0px",
              marginRight: "40px",
              color: "white",
            }}
          >
            What's On
          </Typography>
        </Grid>
        {
          isLoading ? (
            allEvents.length > 0 ? (
              allEvents.map((a: Event) => {
                const startArr = a.start.local.replace("T", " ");
                const dateTimeArray = startArr.split(" ");
                const startTime = dateTimeArray[1];
                const startDate = new Date(dateTimeArray[0]);
                const eventDate = startDate.toDateString();
                const imageUrl = a.logo ? a.logo.url : null;
                return (
                  <Grid item key={a.id}>
                    <MCard
                      title={a.name.text}
                      description={a.name.text}
                      date={startDate}
                      time={startTime}
                      link={a.url}
                      img={imageUrl ? imageUrl : "N/A"}
                    />
                  </Grid>
                );
              })
            ) : (
              <Grid item xs={12}>
                <Typography variant="h3" color={"white"}>
                  Nothing Scheduled yet, check back again later!
                </Typography>
              </Grid>
            )
          ) : (
            Array.from({ length: 3 }).map((_, index) => (
              <Grid item key={index}>
                <Skeleton
                  variant="rectangular"
                  width={576.13}
                  height={275.06}
                />
              </Grid>
            ))
          )
          // <Skeleton variant="rectangular" width={576.13} height={275.06} />
        }
      </Grid>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
      />
    </>
  );
};
export default CardGridPaginated;
