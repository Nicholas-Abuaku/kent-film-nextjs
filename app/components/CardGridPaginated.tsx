"use client";
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import { Noto_Sans } from "next/font/google";
import MCard from "./MCard";
import FarFromCrowdImg from "../assets/images/farfrommaddingcrowd.jpg";
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

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["300"],
});

interface Event {
  id: string;
  title: string;
  start: string;
  time: string;
  date: string;
  url?: string;
  image?: string;
  description: string;
}
const CardGridPaginated = () => {
  const [page, setPage] = useState(1);
  const [allEvents, setAllEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const itemsPerPage = isMobile ? 2 : 3;

  const fetchAllEvents = async () => {
    try {
      const response = await axios.get(
        "https://picayune-belief-production.up.railway.app/api/events"
      );
      setAllEvents(response.data);
      console.log(response.data);
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
            return (
              <Grid item key={event.id}>
                <MCard
                  title={event.title}
                  description={event.description}
                  date={event.date}
                  time={event.time}
                  img={
                    "https://picayune-belief-production.up.railway.app/storage/" +
                    event.image
                  }
                />
              </Grid>
            );
          })
        ) : (
          <Grid item>
            {isMobile ? (
              <Typography
                variant="h5"
                color={"black"}
                sx={{ fontFamily: `${notoSans.style.fontFamily}` }}
              >
                Nothing Scheduled yet, check back again later!
              </Typography>
            ) : (
              <Typography
                variant="h3"
                color={"black"}
                sx={{ fontFamily: `${notoSans.style.fontFamily}` }}
              >
                Nothing Scheduled yet, check back again later!
              </Typography>
            )}
          </Grid>
        )
      ) : (
        Array.from({ length: itemsPerPage }).map((_, index) => (
          <Grid item key={index}>
            <Skeleton
              variant="rectangular"
              width={isMobile ? "35vw" : 576.13}
              height={isMobile ? "29vh" : 275.06}
            />
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
