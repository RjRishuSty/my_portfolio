import {
  Button,
  Container,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import LoginIcon from "@mui/icons-material/Login";
import { allItemsCenter } from "../../custom-styles";
import { enqueueSnackbar } from "notistack";
import axios from "axios";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  // TODO: HandleInputChange track the input value...................
  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  // TODO: HandleInputValidate track the input value is filled or not ...................
  const handleInputValidate = () => {
    if (!formData.email) {
      enqueueSnackbar("Email Field is required", { variant: "error" });
      return false;
    }
    if (!formData.password) {
      enqueueSnackbar("Password Field is required", { variant: "error" });
      return false;
    }
    if (formData.password.length < 6) {
      enqueueSnackbar("Password must be contain more then 6 digits", {
        variant: "error",
      });
      return false;
    }
    return false;
  };
  // TODO: handleSubmit track the form value...................
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!handleInputValidate()) return;
    try {
      const response = await axios.post(``,formData);
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const loginFields = [
    {
      id: "email",
      label: "Email",
      type: "email",
      icon: <EmailIcon sx={{ color: "#f9004d" }} />,
    },
    {
      id: "password",
      label: "Password",
      type: "password",
      icon: <LockIcon sx={{ color: "#f9004d" }} />,
    },
  ];
  return (
    <Stack
      sx={{ backgroundColor: "#ffde59", minHeight: "100vh", ...allItemsCenter }}
    >
      <Container
        component="form"
        onSubmit={handleSubmit}
        maxWidth="sm"
        sx={{
          ...allItemsCenter,
          flexDirection: "column",
          py: 5,
          bgcolor: "#fff",
          boxShadow: "0px 0px 5px black",
          borderRadius: 5,
        }}
      >
        <Typography gutterBottom variant="h4" sx={{ textAlign: "center" }}>
          Admin Dashboard Access
        </Typography>
        <Typography variant="subtitle1" sx={{ textAlign: "center", mb: 4 }}>
          Please log in with your credentials to manage and maintain the
          portfolio content securely.
        </Typography>
        {loginFields.map((field) => (
          <TextField
            onChange={handleInputChange}
            key={field.id}
            id={field.id}
            type={field.type}
            label={field.label}
            variant="outlined"
            sx={{ mb: 3 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">{field.icon}</InputAdornment>
              ),
            }}
            fullWidth
          />
        ))}
        <Button
          type="submit"
          size="large"
          variant="contained"
          endIcon={<LoginIcon fontSize="medium" />}
          sx={{ backgroundColor: "#f9004d", mt: 2 }}
        >
          Login
        </Button>
      </Container>
    </Stack>
  );
};

export default LoginPage;
