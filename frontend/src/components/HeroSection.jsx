import {
  Box,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import banner from "../assets/banner.png";
import { allItemsStart } from "../custom-styles";
import TypingEffect from "./TypingEffect ";
import SocalMediaIcons from "./SocalMediaIcons";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 500 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      ease: "easeOut",
    },
  },
};

const HeroSection = () => {
  const miniLaptop = useMediaQuery("(max-width:1100px)");
  const isMobile = useMediaQuery("(max-width:670px)");
  const xSmall = useMediaQuery("(max-width:459px)");
  const [startIcons, setStartIcons] = useState(false);

  // Delay the start of social icons animation after hero animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setStartIcons(true);
    }, 1800); // delay longer than containerVariants duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <Stack
      component={motion.section}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
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
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <TypingEffect />
        </motion.div>

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
        >
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
        </motion.div>

        {/* Trigger social icons animation only after hero section finishes */}
        <SocalMediaIcons useIn="heroSection" animateNow={startIcons} />
      </Box>
    </Stack>
  );
};

export default HeroSection;
