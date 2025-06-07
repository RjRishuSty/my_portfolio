import { Stack } from "@mui/material";
import React from "react";
import errorImg from '../assets/404-pica.png';

const NotFound = () => {
  return (
    <Stack
      sx={{
        minHeight: "100vh",
        backgroundImage:`url(${errorImg})`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat'
      }}
    ></Stack>
  );
};

export default NotFound;
