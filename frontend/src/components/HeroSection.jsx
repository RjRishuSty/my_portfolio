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

const HeroSection = () => {
  const miniLaptop = useMediaQuery("(max-width:1100px)");
  const isMobile = useMediaQuery("(max-width:670px)");
  const xSmall = useMediaQuery("(max-width:425px)");
  return (
    <Stack
      component="section"
      sx={{
        height: "auto",
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: xSmall ? "60%" : "center",
        backgroundRepeat: "no-repeat",
        ...allItemsStart,
        pb: 20,
      }}
    >
      <Box sx={{ mt: 30, pl: isMobile ? 3 : 5 }}>
        <TypingEffect />
        <Typography
          variant={xSmall ? "h4" : isMobile ? "h3" : miniLaptop ? "h2" : "h1"}
          sx={{
            color: "text.default",
          }}
        >
          Hello, I’m{" "}
          <span style={{ color: "#f9004d", textTransform: "uppercase" }}>
            Rishu
          </span>{" "}
          <br /> Welcome to my World.
        </Typography>
      </Box>
    </Stack>
  );
};

export default HeroSection;
