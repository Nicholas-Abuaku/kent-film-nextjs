"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Typography,
} from "@mui/material";
import React, { useEffect, useState, useContext } from "react";
import { ManageTableContext } from "../contexts/ManageTableContext";
import axios from "axios";
import Link from "next/link";
import PressActionsButton from "./PressActionsButton";
// import { PressActionsButton } from "./PressActionsButton";
interface PressArticleData {
  id: number;
  news_source: string;
  article_title: string;
  article_url: string;
  image: string;
}
const PressArticleTable = () => {
  const [pressData, setPressData] = useState([]);
  const [deleteCounter, setDeleteCounter] = useState(0);
  const { tableUpdate, setTableUpdate } = useContext(ManageTableContext);
  const fetchPressData = async () => {
    try {
      const response = await axios.get(
        "https://kentfilm.up.railway.app/api/press"
      );
      console.log(response.data);
      setPressData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPressData();
  }, [tableUpdate, deleteCounter]);
  const forceTableRefresh = () => {
    fetchPressData();
    // Increment deleteCounter to trigger a refresh
    setDeleteCounter((prevCounter) => prevCounter + 1);
    setTableUpdate(false);
  };
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>News Source</TableCell>
            <TableCell>Article Title</TableCell>
            <TableCell>Article Url</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pressData.map((article: PressArticleData) => (
            <TableRow key={article.id}>
              <TableCell>{article.id}</TableCell>
              <TableCell>{article.news_source}</TableCell>
              <TableCell>{article.article_title}</TableCell>
              <TableCell>
                {
                  <Link href={article.article_url}>
                    <Typography>Article</Typography>
                  </Link>
                }
              </TableCell>
              <TableCell>
                {
                  <img
                    src={
                      "https://kentfilm.up.railway.app/storage/" + article.image
                    }
                    style={{ width: "50px", height: "50px" }}
                  />
                }
              </TableCell>
              <TableCell>
                <PressActionsButton
                  id={article.id}
                  onDelete={forceTableRefresh}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PressArticleTable;
