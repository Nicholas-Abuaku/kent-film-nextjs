"use client";
import { useState } from "react";
import React from "react";
import { Noto_Sans } from "next/font/google";
import MCard from "./MCard";
import {
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
  Pagination,
  Skeleton,
} from "@mui/material";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["300"],
});

interface Event {
  id: string;
  title: string;
  time: string;
  date: string;
  url?: string;
  image?: string;
  description: string;
}
type CardGridPaginatedProps = {
  response: Event[];
};
const CardGridPaginated = (props: CardGridPaginatedProps) => {
  const [page, setPage] = useState(1);
  const allEvents = props.response.slice();
  const [isLoading, setIsLoading] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const itemsPerPage = isMobile ? 3 : 3;
  const handlePageChange = (event: any, newPage: number) => {
    setPage(newPage);
  };
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  allEvents.sort((event1: Event, event2: Event) => {
    const date1 = new Date(event1.date);
    const date2 = new Date(event2.date);
    date1.setHours(0, 0, 0, 0);
    date2.setHours(0, 0, 0, 0);
    return date1.getTime() - date2.getTime();
  });
  return (
    <>
      {allEvents.length > 0 ? (
        allEvents.length > 0 ? (
          allEvents.slice(startIndex, endIndex).map((event: Event) => {
            const date = new Date(event.date);
            let day = date.toDateString();
            let year = date.getFullYear().toLocaleString();
            year = year.replace(",", "");
            day = day.replace(year, "");
            console.log("String " + year);
            return (
              <Grid item key={event.id}>
                <MCard
                  title={event.title}
                  description={event.description}
                  date={day}
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
              width={isMobile ? "29.5vw" : 576.13}
              height={isMobile ? "300px" : 275.06}
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
