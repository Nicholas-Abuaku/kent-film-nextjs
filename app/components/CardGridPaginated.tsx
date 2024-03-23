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
  name: string;
  start: string;
  date: string;
  url?: string;
  logo?: string;
  description: string;
}
const CardGridPaginated = () => {
  const [page, setPage] = useState(1);
  // const [allEvents, setAllEvents] = useState([]);
  let allEvents = [
    {
      id: "1",
      name: "Kind Hearts and Coronets (1949)",
      description:
        "When Louis D'Ascoyne Mazzini, who hails from a royal family, is denied dukedom, he plans to kill all the potential threats in his way.",
      date: "Wednesday 27th",
      start: "7pm",
      url: "/",
      logo: "https://posters.movieposterdb.com/09_03/1949/41546/l_41546_a598cce9.jpg",
    },
    {
      id: "2",
      name: "Far From the Madding Crowd (1967)",
      description:
        "Adaptation of a Thomas Hardy novel about a woman and her profound effect on three men.",
      date: "Thursday 28th",
      start: "2pm",
      url: "/",
      logo: "https://m.media-amazon.com/images/M/MV5BNzI4NzUwNDgwN15BMl5BanBnXkFtZTgwNTI3MjMwNTE@._V1_.jpg",
    },
  ];
  const [isLoading, setIsLoading] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const itemsPerPage = isMobile ? 2 : 3;

  const fetchAllEvents = async () => {
    try {
      const response = await axios.post("/api/eventbrite");
      // setAllEvents(response.data);
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
                  title={event.name}
                  description={event.description}
                  date={event.date}
                  time={event.start}
                  link={event.url ? event.url : "/"}
                  img={event.logo ? event.logo : "undefined"}
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
