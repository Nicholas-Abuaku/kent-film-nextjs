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
  img_Url: string;
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
        "https://kentfilm2025-production.up.railway.app/api/allscreenings"
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
          // color="success"
          sx={{
            marginTop: "5px",
            marginRight: "5px",
            float: "right",
            marginBottom: "10px",
            backgroundColor:'#1e5943',
            color:'white',
            height:'45px'
          }}
        >
          Add Screening
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
                <TableCell sx={{backgroundColor:'#f5f6f6'}}>Event Title</TableCell>
                <TableCell sx={{backgroundColor:'#f5f6f6'}}>Description</TableCell>
                <TableCell sx={{backgroundColor:'#f5f6f6'}}>Event Date</TableCell>
                <TableCell sx={{backgroundColor:'#f5f6f6'}}>Event Time</TableCell>
                <TableCell sx={{backgroundColor:'#f5f6f6'}}>Image</TableCell>
                <TableCell sx={{backgroundColor:'#f5f6f6'}}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((club: FilmClubData) => (
                <TableRow key={club.id}  >
                  <TableCell sx={{color:'#1E2A38'}}>{club.title}</TableCell>
                  <TableCell sx={{maxWidth:'290px', color:'#1E2A38'}} >{club.description}</TableCell>
                  <TableCell sx={{color:'#1E2A38'}}>{club.date}</TableCell>
                  <TableCell sx={{color:'#1E2A38'}}>{club.time}</TableCell>
                  
                  <TableCell>
                    <img
                      src={
                        "https://kentfilm2025-production.up.railway.app/storage/" +
                        club.img_Url
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
