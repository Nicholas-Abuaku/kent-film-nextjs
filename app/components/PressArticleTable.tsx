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
  Paper,
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
  image_Url: string;
}
const PressArticleTable = () => {
  const [pressData, setPressData] = useState([]);
  const [deleteCounter, setDeleteCounter] = useState(0);
  const { tableUpdate, setTableUpdate } = useContext(ManageTableContext);
  const fetchPressData = async () => {
    try {
      const response = await axios.get(
        "https://kentfilm2025-production.up.railway.app/api/press"
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
              <TableCell sx={{backgroundColor:'#f5f6f6'}}>News Source</TableCell>
              <TableCell sx={{backgroundColor:'#f5f6f6'}}>Article Title</TableCell>
              <TableCell sx={{backgroundColor:'#f5f6f6'}}>Article Url</TableCell>
              
              <TableCell sx={{backgroundColor:'#f5f6f6'}}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pressData.map((article: PressArticleData) => (
              <TableRow key={article.id}>
                <TableCell sx={{color:'#1E2A38'}}>{article.id}</TableCell>
                <TableCell sx={{color:'#1E2A38'}}>{article.news_source}</TableCell>
                <TableCell sx={{color:'#1E2A38'}}>{article.article_title}</TableCell>
                <TableCell sx={{color:'#1E2A38'}}>
                  {
                    <Link href={article.article_url}>
                      <Typography color="blue">Article</Typography>
                    </Link>
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
    </div>
  );
};

export default PressArticleTable;
