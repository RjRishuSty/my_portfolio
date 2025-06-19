// src/pages/Admin/components/Topbar.jsx
import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import MenuBtn from "../../../components/MenuBtn";

const Topbar = ({ onGridSizeChange }) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "primary.default", boxShadow: "none", p:1}}>
      <Toolbar>
        <MenuBtn useIn="AdminPage" onGridSizeChange={onGridSizeChange} />
        <Box sx={{ flexGrow: 1 }} />
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
