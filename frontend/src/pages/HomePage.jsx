import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import HeroSection from "../components/HeroSection";
import bgImg from "../assets/banner2.jpg";
import { allItemsCenter } from "../custom-styles";
import SkillsContainer from "../components/SkillsContainer";

const HomePage = () => {
  return (
    <Stack component="main">
      <HeroSection />
      <Box
        sx={{
          border: "2px solid red",
          backgroundImage: `url(${bgImg})`,
          py: 10,
          ...allItemsCenter,
          flexDirection:'column'
        }}
      >
        <Typography
        gutterBottom
          variant="body1"
          sx={{ color: "secondary.main", textAlign: "center", fontWeight: 800 }}
        >
          What I Work With
        </Typography>
        <Typography
          variant="h5"
          sx={{ color: "text.default", textAlign: "center", width: "80%" }}
        >
          Blending frontend design with backend logic to build full-stack
          solutions.
        </Typography>
        <SkillsContainer/>
      </Box>
    </Stack>
  );
};

export default HomePage;
