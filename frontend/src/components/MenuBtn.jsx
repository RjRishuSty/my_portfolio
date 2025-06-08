import React from "react";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { IconButton } from "@mui/material";
const MenuBtn = ({ handleToggleMenu, showSidebar }) => {
  return (
    <IconButton onClick={handleToggleMenu} sx={{ backgroundColor: "#f9004d" }}>
      {showSidebar ? (
        <CloseIcon fontSize="large" sx={{ color: "white" }} />
      ) : (
        <MenuIcon fontSize="large" sx={{ color: "white" }} />
      )}
    </IconButton>
  );
};

export default MenuBtn;
