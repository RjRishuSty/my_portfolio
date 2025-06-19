import React from "react";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { IconButton } from "@mui/material";
const MenuBtn = ({
  handleToggleMenu,
  showSidebar,
  useIn,
  onGridSizeChange,
}) => {
  const useInAdmin = useIn === "AdminPage";

  return (
    <IconButton
      onClick={useInAdmin ? onGridSizeChange : handleToggleMenu}
      sx={{ backgroundColor: "#f9004d","&:hover": { backgroundColor:"#f9004d"} }}
    >
      {showSidebar? (
        <CloseIcon
          fontSize={useInAdmin ? "medium" : "large"}
          sx={{ color: "white" }}
        />
      ) : (
        <MenuIcon
          fontSize={useInAdmin ? "medium" : "large"}
          sx={{ color: "white" }}
        />
      )}
    </IconButton>
  );
};

export default MenuBtn;
