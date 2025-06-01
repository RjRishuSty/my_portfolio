import React, { useEffect, useState } from "react";
import { Box, Chip, Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";

const textArray = ["Frontend Developer", "Backend Developer"];

const TypingEffect = () => {
  const xSmall = useMediaQuery("(max-width:425px)");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const fullText = textArray[currentTextIndex];

    if (charIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const delay = setTimeout(() => {
        setCharIndex(0);
        setDisplayedText("");
        setCurrentTextIndex((prev) => (prev + 1) % textArray.length);
      }, 1000);
      return () => clearTimeout(delay);
    }
  }, [charIndex, currentTextIndex]);

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Typography
        component="div"
        gutterBottom
        variant= "body1"
        sx={{
          color: "text.default",
          textTransform: "uppercase",
          fontWeight: 600,
        }}
      >
        {xSmall ? (
          "MERN Stack Developer"
        ) : (
          <>
            MARN Stack Developer with{" "}
            <Chip
              label={displayedText}
              sx={{ textTransform: "capitalize", backgroundColor: "#333333" }}
            />
          </>
        )}
      </Typography>
    </Box>
  );
};

export default TypingEffect;
