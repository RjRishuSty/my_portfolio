// src/pages/Admin/AdminPage.jsx
import { Stack, Typography } from "@mui/material";
import React from "react";
import { allItemsCenter } from "../../../custom-styles";

const AdminPage = () => {
  return (
    <Stack
      sx={{ border: "2px solid blue", minHeight: "83vh", ...allItemsCenter }}
    >
      <Typography>Admin Page</Typography>
    </Stack>
  );
};

export default AdminPage;
