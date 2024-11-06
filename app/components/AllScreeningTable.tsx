"use client";
import React, { useEffect, useState, useContext } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Paper,
} from "@mui/material";
import FilmClubActions from "./FilmClubActions";
import { ManageTableContext } from "../contexts/ManageTableContext";
import Link from "next/link";
import axios from "axios";
import EventActions from "./EventActions";

interface FilmClubData {
  id: number;
  title: string;
  date: string;
  time: string;
  description: string;
  image: string;
}

const AllScreeningTable = () => {
  const [data, setData] = useState([]);
  const { tableUpdate, setTableUpdate } = useContext(ManageTableContext);
  const [deleteCounter, setDeleteCounter] = useState(0);
  function onDelete() {
    console.log("From the table");
  }

  const forceTableRefresh = () => {
    fetchFilmClubs();
    // Increment deleteCounter to trigger a refresh
    setDeleteCounter((prevCounter) => prevCounter + 1);
    setTableUpdate(false);
  };

  const fetchFilmClubs = async () => {
    try {
      const response = await axios.get(
        "https://picayune-belief-production.up.railway.app/api/events"
      );
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchFilmClubs();
  }, []);

  return (
    <>
      <Link href={"/dashboard/all-screenings/new"}>
        <Button
          variant="contained"
          color="success"
          sx={{
            marginTop: "5px",
            marginRight: "5px",
            float: "right",
            marginBottom: "10px",
          }}
        >
          Add
        </Button>
      </Link>
      <div
        className="table-container"
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <TableContainer component={Paper} sx={{ width: "90%" }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Event Title</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Event Date</TableCell>
                <TableCell>Event Time</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((club: FilmClubData) => (
                <TableRow key={club.id}>
                  <TableCell>{club.title}</TableCell>
                  <TableCell>{club.description}</TableCell>
                  <TableCell>{club.date}</TableCell>
                  <TableCell>{club.time}</TableCell>
                  <TableCell>
                    <img
                      src={
                        "https://picayune-belief-production.up.railway.app/storage/" +
                        club.image
                      }
                      style={{ maxWidth: "50px", maxHeight: "50px" }}
                    />
                  </TableCell>
                  <TableCell>
                    <EventActions id={club.id} onDelete={forceTableRefresh} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default AllScreeningTable;
