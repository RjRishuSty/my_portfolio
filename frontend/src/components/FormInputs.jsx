import React from "react";

import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import SubjectIcon from "@mui/icons-material/Subject";
import MessageIcon from "@mui/icons-material/Message";
import { Box, Grid, InputAdornment, TextField } from "@mui/material";

const FormInputs = ({ handleInputChange }) => {
  const formFields = [
    {
      id: "fullname",
      type: "text",
      name: "fullname",
      label: "Full Name",
      icon: <PersonIcon />,
    },
    {
      id: "email",
      type: "email",
      name: "email",
      label: "Email Address",
      icon: <EmailIcon />,
    },
    {
      id: "subject",
      type: "text",
      name: "subject",
      label: "Subject",
      icon: <SubjectIcon />,
    },
    {
      id: "message",
      type: "textarea",
      name: "message",
      label: "Message",
      icon: <MessageIcon />,
    },
  ];
  return (
    <Grid container rowSpacing={2} columnSpacing={3}>
      {formFields.map((item) => (
        <Grid
          size={{
            xs: 12,
            sm: 12,
            md: item.id === "fullname" || item.id === "email" ? 6 : 12,
          }}
          key={item.id}
        >
          <TextField
            fullWidth
            type={item.type}
            size="large"
            id={item.id}
            label={item.label}
            variant="outlined"
            multiline={item.id === "message"}
            rows={item.id === "message" ? 5 : undefined}
            sx={{ color: "text.default" }}
            onChange={handleInputChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Box
                    sx={{
                      mt: item.id === "message" ? "-75px" : 1,
                    }}
                  >
                    {item.icon}
                  </Box>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default FormInputs;
