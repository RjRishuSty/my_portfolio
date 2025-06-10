import { Box, Stack } from "@mui/material";
import React, { useEffect } from "react";
import NavLinks from "./NavLinks";
import SocalMediaIcons from "./SocalMediaIcons";
import { useRef } from "react";

const SideBar = ({ showSidebar, setShowSidebar }) => {
  const sidebarRef = useRef();
  useEffect(()=>{
    if(showSidebar && sidebarRef.current){
      sidebarRef.current.scrollTop=0;
    }
  },[showSidebar])
  return (
    <Stack
    ref={sidebarRef}
      sx={{
        width: "100%",
        height: "100%",
        position: "fixed",
        top: 70,
        left: 0,
        pl: 1,
        bgcolor: "#e60049",
         transition: "transform 0.3s ease",
        transform: showSidebar ? "translateX(0)" : "translateX(100%)",
        zIndex: 999,
      }}
    >
      <NavLinks
        useIn={showSidebar ? "sidebar" : undefined}
        setShowSidebar={setShowSidebar}
      />
      <Box sx={{ mt: 3 }}>
        <SocalMediaIcons animateNow={true} />
      </Box>
    </Stack>
  );
};

export default SideBar;
