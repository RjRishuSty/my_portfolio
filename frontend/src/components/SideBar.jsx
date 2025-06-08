import { Box, Stack } from "@mui/material";
import React from "react";
import NavLinks from "./NavLinks";
import SocalMediaIcons from "./SocalMediaIcons";

const SideBar = ({ showSidebar, setShowSidebar }) => {
  return (
    <Stack
      sx={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 70,
        left: 0,
        pl: 1,
        bgcolor: "#e60049",
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
