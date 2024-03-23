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
        "https://picayune-belief-production.up.railway.app/api/film-clubs"
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
          sx={{ marginTop: "5px", marginRight: "5px", float: "right" }}
        >
          Add
        </Button>
      </Link>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Heading</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((club: FilmClubData) => (
              <TableRow key={club.id}>
                <TableCell>{club.id}</TableCell>
                <TableCell>{club.heading}</TableCell>
                <TableCell>{club.description}</TableCell>
                <TableCell>
                  <img
                    src={
                      "https://picayune-belief-production.up.railway.app/storage/" +
                      club.img_Url
                    }
                    style={{ maxWidth: "50px", maxHeight: "50px" }}
                  />
                </TableCell>
                <TableCell>
                  <FilmClubActions id={club.id} onDelete={forceTableRefresh} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default FilmClubTable;
