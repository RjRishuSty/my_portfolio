import React from "react";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
const MenuBtn = () => {
  return (
    <IconButton sx={{backgroundColor:'#f9004d'}}> 
      <MenuIcon  fontSize="large" sx={{color:'white'}}/>
    </IconButton>
  );
};

export default MenuBtn;
