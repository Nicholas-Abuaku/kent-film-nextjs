"use client";
import React, { useState } from "react";
import LatestScreeningCard from "./LatestScreeningCard";
import { Alert, Button, Stack, TextField } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import axios from "axios";
const EditLatestScreening = () => {
  const [heading, setHeading] = useState();
  const [date, setDate] = useState();
  const [eventUrl, setEventUrl] = useState();
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  return <h1>Edit</h1>;
};

export default EditLatestScreening;
