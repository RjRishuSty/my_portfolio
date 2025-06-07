import { Stack } from "@mui/material";
import React from "react";
import AboutMe from "../components/AboutMe";
import aboutBg from '../assets/aboutBg.png';

const AboutPage = () => {
  return (
   <>
     <Stack
      sx={{
        // border: "2px solid red",
        backgroundImage:`url(${aboutBg})`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        minHeight:'100vh',
      }}
    >

    </Stack>
    <AboutMe/>
   </>
  );
};

export default AboutPage;
