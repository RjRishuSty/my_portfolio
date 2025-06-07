import {
  Box,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import banner from "../assets/banner.png";
import { allItemsStart } from "../custom-styles";
import TypingEffect from "./TypingEffect ";
import SocalMediaIcons from "./SocalMediaIcons";

const HeroSection = () => {
  const miniLaptop = useMediaQuery("(max-width:1100px)");
  const isMobile = useMediaQuery("(max-width:670px)");
  const xSmall = useMediaQuery("(max-width:459px)");
  return (
    <Stack
      component="section"
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: xSmall ? "60%" : "center",
        backgroundRepeat: "no-repeat",
        ...allItemsStart,
      }}
    >
      <Box sx={{ mt: 30, pl: isMobile ? 3 : 5 }}>
        <TypingEffect />
        <Typography
          gutterBottom
          variant={xSmall ? "h4" : isMobile ? "h3" : miniLaptop ? "h2" : "h1"}
          sx={{
            color: "text.default",
            fontWeight: 800,
            fontSize: xSmall
              ? "3rem"
              : isMobile
              ? "3.5rem"
              : miniLaptop
              ? "4rem"
              : "5rem",
          }}
        >
          Hello, I’m{" "}
          <span style={{ color: "#f9004d", textTransform: "uppercase" }}>
            Rishu
          </span>{" "}
          <br /> Welcome to my World.
        </Typography>
        <SocalMediaIcons useIn="heroSection" />
      </Box>
    </Stack>
  );
};

export default HeroSection;
