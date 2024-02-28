"use client";
import React from "react";
import {
  Box,
  Button,
  Stack,
  TextField,
  TextareaAutosize,
  Typography,
  useTheme,
  useMediaQuery,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import ContactTheme from "../Themes/ContactTheme";
const ContactForm = () => {
  //   const ContactTheme = createTheme({});
  const isMobile = useMediaQuery(ContactTheme.breakpoints.down("md"));
  return (
    <ThemeProvider theme={ContactTheme}>
      {isMobile ? (
        <Box width={"100%"}>
          <form style={{ width: "100%" }}>
            <Typography
              textAlign={"left"}
              variant="h6"
              component={"h2"}
              color={"#339465"}
            >
              Contact Us
            </Typography>
            <Stack direction={"column"} spacing={2}>
              <TextField type="text" name="Name" label="Name" required />
              <TextField type="email" name="Email" label="Email" required />
              <TextField
                type="text"
                name="mesasge"
                label="Message"
                multiline
                rows={8}
                required
              />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#339465",
                  borderRadius: "0px",
                  width: "10px",
                  alignSelf: "center",
                }}
                type="submit"
              >
                Send
              </Button>
            </Stack>
            <Stack spacing={3} marginTop={"40px"}>
              <Typography
                textAlign={"center"}
                color={"#339465"}
                variant="body1"
                component={"h3"}
              >
                PLEASE NOTE KENT FILM FOUNDATION HAS NO FULL TIME STAFF SO
                PLEASE BE PATIENT WITH US.
              </Typography>

              <Typography textAlign={"center"} variant="body1" component={"h4"}>
                ALL OUR PROFESSIONAL FILM MENTORS UNDERTAKE AN ENHANCED DBS
                CHECK
              </Typography>
              <Typography
                textAlign={"center"}
                color={"#339465"}
                variant="h6"
                component={"h5"}
              >
                KENT FILM FOUNDATION
              </Typography>
              <Typography textAlign={"center"} variant="body1" component={"h6"}>
                Ramsgate Youth Centre, High St, St Lawrence Ramsgate, CT11 0QG
              </Typography>
            </Stack>
          </form>
        </Box>
      ) : (
        <Box
          width={"50%"}
          justifyContent={"center"}
          alignItems={"center"}
          margin={"auto"}
        >
          <form>
            <Typography
              textAlign={"left"}
              variant="h6"
              component="h2"
              color={"#339465"}
            >
              Contact Us
            </Typography>
            <Stack direction={"column"} spacing={2}>
              <TextField type="text" name="Name" label="Name" required />
              <TextField type="email" name="Email" label="Email" required />
              <TextField
                type="text"
                name="Mesasge"
                label="Message"
                multiline
                rows={8}
                required
              />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#339465",
                  borderRadius: "0px",
                  width: "10px",
                  alignSelf: "center",
                }}
                type="submit"
              >
                Send
              </Button>
            </Stack>
            <Stack spacing={3} marginTop={"40px"}>
              <Typography
                textAlign={"center"}
                color={"#339465"}
                variant="h6"
                component={"h3"}
              >
                PLEASE NOTE KENT FILM FOUNDATION HAS NO FULL TIME STAFF SO
                PLEASE BE PATIENT WITH US.
              </Typography>
              <Typography textAlign={"center"}>
                ALL OUR PROFESSIONAL FILM MENTORS UNDERTAKE AN ENHANCED DBS
                CHECK
              </Typography>
              <Typography textAlign={"center"} color={"#339465"}>
                KENT FILM FOUNDATION
              </Typography>
              <Typography textAlign={"center"} marginBottom={4}>
                Ramsgate Youth Centre, High St, St Lawrence Ramsgate, CT11 0QG
              </Typography>
            </Stack>
          </form>
        </Box>
      )}
    </ThemeProvider>
  );
};

export default ContactForm;
