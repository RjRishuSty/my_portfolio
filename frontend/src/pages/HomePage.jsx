import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import HeroSection from "../components/HeroSection";
import SkillsContainer from '../components/SkillsContainer';
import AboutMe from "../components/AboutMe";
import ContactMe from "../components/ContactMe";
import ProjectCollection from "../components/ProjectCollection";

const HomePage = () => {
  return (
    <Stack component="main">
      <HeroSection />
      <SkillsContainer/>
      <AboutMe/>
      <ProjectCollection/>
      <ContactMe/>
    </Stack>
  );
};

export default HomePage;
