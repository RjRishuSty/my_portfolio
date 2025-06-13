import {
  Button,
  CircularProgress,
  Container,
  IconButton,
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
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IsLoading from "../../components/IsLoading";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [isLoading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
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
    return true;
  };
  // TODO: handleSubmit track the form value...................
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!handleInputValidate()) return;
    try {
      setLoading(true);
      const response = await axios.post(
        `https://my-protfolio-backend-bi5k.onrender.com/api/auth/login`,
        formData,{ withCredentials: true }
      );
      if (response.data) {
        navigate("/admin");
        enqueueSnackbar(response.data.message, { variant: "success" });
      }
    } catch (error) {
      enqueueSnackbar(
        error?.response?.data?.message || "Something went wrong!",
        { variant: "error" }
      );
    } finally {
      setLoading(false);
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
      sx={{
        width: "100%",
        backgroundColor: "#000",
        minHeight: "100vh",
        ...allItemsCenter,
      }}
    >
      {isLoading ? (
        <IsLoading useIn="loginPage" />
      ) : (
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
              type={
                field.id === "password"
                  ? showPassword
                    ? "text"
                    : "password"
                  : field.type
              }
              label={field.label}
              variant="outlined"
              value={formData[field.id]}
              sx={{ mb: 3 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">{field.icon}</InputAdornment>
                ),
                endAdornment: field.id === "password" && (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
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
      )}
    </Stack>
  );
};

export default LoginPage;
