"use client";
import React, { useState } from "react";
import { TextField, Typography, Stack, Alert, Button } from "@mui/material";
import { ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import LoginAlert from "./LoginAlert";
import axios from "axios";
const LoginForm = () => {
  const { push } = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  function handleUsernameChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    console.log((e.target as HTMLInputElement).value);
    setUsername((e.target as HTMLInputElement).value);
  }
  function handlePasswordChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    console.log((e.target as HTMLInputElement).value);
    setPassword((e.target as HTMLInputElement).value);
  }

  const handleSubmit = async (event: React.MouseEvent<HTMLElement>) => {
    try {
      const formData = new FormData();
      if (showErrorAlert) {
        setShowErrorAlert(false);
      }

      if (showSuccessAlert) {
        setShowSuccessAlert(false);
      }
      formData.append("name", username);
      formData.append("password", password);
      event.preventDefault();
      const response = await axios.post("/api/login", formData);
      console.log(response.data);
      if (response.status === 200) {
        setShowSuccessAlert(true);
        push("/dashboard");
      }
    } catch (err) {
      console.log(err);
      setShowErrorAlert(true);
    }
  };
  return (
    <form>
      <Stack
        direction="column"
        spacing={2}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography variant="h3">Login</Typography>
        <TextField
          name="username"
          label="username"
          type="text"
          sx={{ width: "50%" }}
          onChange={handleUsernameChange}
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          sx={{ width: "50%" }}
          onChange={handlePasswordChange}
        />
        <Button variant="contained" onClick={handleSubmit}>
          Login
        </Button>
        {showSuccessAlert && (
          <Alert severity="success" variant="outlined">
            Successs
          </Alert>
        )}
        {showErrorAlert && (
          <Alert severity="error" variant="outlined">
            Invalid Login Credentials
          </Alert>
        )}
      </Stack>
    </form>
  );
};

export default LoginForm;
