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
  Stack,
  ThemeProvider,
  Box,
} from "@mui/material";
import EventGridTheme from "../Themes/EventGridTheme";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["300"],
});

interface Event {
  id: string;
  title: string;
  time: string;
  date: string;
  img_Url?: string;
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

  const upcomingEvents = allEvents.filter((event: Event) => {
    const eventDate = new Date(event.date);
    eventDate.setHours(22, 0, 0, 0);
    // const today = new Date();
    // today.setHours(0, 0, 0, 0);
    const now = new Date();

    return eventDate  >= now;
  });
  upcomingEvents.sort((event1: Event, event2: Event) => {
    const date1 = new Date(event1.date);
    const date2 = new Date(event2.date);
    date1.setHours(0, 0, 0, 0);
    date2.setHours(0, 0, 0, 0);
    return date1.getTime() - date2.getTime();
  });
  return (
    <ThemeProvider theme={EventGridTheme}>
      {upcomingEvents.length > 0 ? (
        <>
          {upcomingEvents.slice(startIndex, endIndex).map((event: Event) => {
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
                    "https://kentfilm2025-production.up.railway.app/storage/" +
                    event.img_Url
                  }
                />
              </Grid>
            );
          })}
        </>
      ) : (
        <Grid item color={'white'} marginTop={0} xs={12}>
          {isMobile ? (
            <>
            <Typography
              variant="h4"
              marginBottom={3}
              marginTop={0}
            >
              Coming Soon!
            </Typography>
            <Typography>We're busy programming our next exciting season of films! Please check back soon for new announcements and showtimes. </Typography>
            <Typography>Want to be the first to know?</Typography>
            <Stack spacing={0} direction={'row'}>
              
              <Typography>{"Sign up to our "} {<a href="https://docs.google.com/forms/d/e/1FAIpQLSc2wUiczHiUs9dqQ6jKGw9a9gDmOBrUpzj9McnHnxht4b1EPg/viewform" style={{textDecoration:'underline'}}>Mailing List!</a>}</Typography>
              
            </Stack>
            </>
          ) : (
            <>
            
            <Typography variant="h4">Coming Soon!</Typography>
            <Typography>We're busy programming our next exciting season of films! Please check back soon for new announcements and showtimes. </Typography>
            <Typography>Want to be the first to know?</Typography>
            <Stack spacing={1} direction={'row'}>
              
            <Typography>{"Sign up to our "} {<a href="https://docs.google.com/forms/d/e/1FAIpQLSc2wUiczHiUs9dqQ6jKGw9a9gDmOBrUpzj9McnHnxht4b1EPg/viewform" style={{textDecoration:'underline'}}>Mailing List!</a>}</Typography>
            </Stack>
            
            </>
            
          )}
        </Grid>
      )}
      {upcomingEvents.length > 0 && (
        <Grid item xs={12}>
          <Pagination
            count={Math.ceil(upcomingEvents.length / itemsPerPage)}
            page={page}
            onChange={handlePageChange}
            sx={{ mt: 2, justifyContent: "center" }}
          />
        </Grid>
      )}
    </ThemeProvider>
  );
};

export default CardGridPaginated;
