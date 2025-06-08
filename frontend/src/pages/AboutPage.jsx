import { Stack, useMediaQuery } from "@mui/material";
import React from "react";
import AboutMe from "../components/AboutMe";
import aboutBg from "../assets/aboutBg.png";
import PassionCard from "../components/PassionCard";
import CodeIcon from "@mui/icons-material/Code";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import DynamicFormIcon from "@mui/icons-material/DynamicForm";
import { motion } from "framer-motion";

const AboutPage = () => {
  const isTablet = useMediaQuery("(max-width:900px)");

  const passionHighlights = [
    {
      icon: <CodeIcon fontSize="medium" color="white" />,
      heading: "Building Web Apps",
      description:
        "Developed multiple real-world projects using React, Node.js, MongoDB, and Express.",
    },
    {
      icon: <ViewQuiltIcon fontSize="medium" color="white" />,
      heading: "Passionate Design",
      description:
        "Strong believer in continuous learning, clean architecture, and user-first design.",
    },
    {
      icon: <DynamicFormIcon fontSize="medium" color="white" />,
      heading: "From Concept to Code — I Build It All",
      description:
        "Always eager to contribute to impactful tech products in a collaborative team.",
    },
    {
      icon: <LocalLibraryIcon fontSize="medium" color="white" />,
      heading: "Always Learning, Always Improving",
      description:
        "Continuously enhancing skills to build cleaner, faster, and smarter applications.",
    },
  ];

  const positions = [
    { top: "20%", left: "5%" },
    { top: "40%", right: "5%" },
    { top: "60%", left: "10%" },
    { top: "80%", right: "10%" },
  ];

  const tabletPositions = [
    { top: "20%", left: "2%" },
    { top: "76.5%", right: "2%" },
  ];

  const cardsToShow = isTablet
    ? passionHighlights.slice(0, 2)
    : passionHighlights;
  const cardPositions = isTablet ? tabletPositions : positions;

  return (
    <>
      <Stack
        component={motion.div}
        sx={{
          backgroundImage: `url(${aboutBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          position: "relative",
          px: 4,
          py: 8,
        }}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {cardsToShow.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1 + index * 0.3, // delay starts after bg is shown
              duration: 0.6,
              ease: "easeOut",
            }}
            style={{
              position: "absolute",
              maxWidth: 350,
              ...cardPositions[index],
            }}
          >
            <PassionCard
              heading={item.heading}
              description={item.description}
              icon={item.icon}
            />
          </motion.div>
        ))}
      </Stack>
      <AboutMe />
    </>
  );
};

export default AboutPage;
