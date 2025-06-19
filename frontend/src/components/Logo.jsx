import React from "react";
import logo from "../assets/logo.png";
import { Box, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Logo = ({ useIn }) => {
  const miniLaptop = useMediaQuery("(max-width:1100px)");
  const navigate = useNavigate();
  return (
    <Box
      component="img"
      src={logo}
      alt="portfolio"
      width={useIn === "AdminPage" ? "100%" : miniLaptop ? "150px" : "200px"}
      height={useIn === "AdminPage" ? "40px" : "auto"}
      onClick={() => navigate("/")}
      sx={{ cursor: "pointer" }}
    />
  );
};

export default Logo;
