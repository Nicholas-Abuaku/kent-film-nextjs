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
interface FilmClubData {
  id: number;
  heading: string;
  description: string;
  img_Url: string;
}

const FilmClubTable = () => {
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
        "https://kentfilm2025-production.up.railway.app/api/film-clubs"
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
      <Link href={"/dashboard/film-clubs/new"}>
        <Button
          variant="contained"
          color="success"
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
          Add Film Club
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
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{backgroundColor:'#f5f6f6'}}>ID</TableCell>
                <TableCell sx={{backgroundColor:'#f5f6f6'}}>Heading</TableCell>
                <TableCell sx={{backgroundColor:'#f5f6f6'}}>Description</TableCell>
                <TableCell sx={{backgroundColor:'#f5f6f6'}}>Image</TableCell>
                <TableCell sx={{backgroundColor:'#f5f6f6'}}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((club: FilmClubData) => (
                <TableRow key={club.id}>
                  <TableCell sx={{color:'#1E2A38'}}>{club.id}</TableCell>
                  <TableCell sx={{color:'#1E2A38'}}>{club.heading}</TableCell>
                  <TableCell sx={{color:'#1E2A38'}}>{club.description}</TableCell>
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
                    <FilmClubActions
                      id={club.id}
                      onDelete={forceTableRefresh}
                    />
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

export default FilmClubTable;
