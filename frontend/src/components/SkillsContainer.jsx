import React from "react";
import {
  Avatar,
  Box,
  Container,
  Tooltip,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";

import reactImg from "../assets/react.png";
import htmlImg from "../assets/html.png";
import cssImg from "../assets/css.png";
import muiImg from "../assets/mui.png";
import jSImg from "../assets/javascript.png";
import gitImg from "../assets/git.png";
import bootstrapImg from "../assets/bootstrap.png";
import nodeImg from "../assets/node.png";
import expressImg from "../assets/express.png";
import mongoImg from "../assets/mogno.png";

import bgImg from "../assets/banner2.jpg";
import { allItemsCenter } from "../custom-styles";

// Container animation for icons
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Individual icon animation
const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const SkillsContainer = () => {
  const skills = [
    { name: "HTML", icon: htmlImg },
    { name: "CSS", icon: cssImg },
    { name: "JavaScript", icon: jSImg },
    { name: "Bootstrap", icon: bootstrapImg },
    { name: "React", icon: reactImg },
    { name: "MUI", icon: muiImg },
    { name: "Git", icon: gitImg },
    { name: "Node.js", icon: nodeImg },
    { name: "Express", icon: expressImg },
    { name: "MongoDB", icon: mongoImg },
  ];

  return (
    <Box
      sx={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        py: 10,
        ...allItemsCenter,
        flexDirection: "column",
      }}
    >
      {/* Heading animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.6 }}
      >
        <Typography
          gutterBottom
          variant="body1"
          sx={{
            color: "secondary.main",
            textAlign: "center",
            fontWeight: 800,
          }}
        >
          What I Work With
        </Typography>
      </motion.div>

      {/* Description animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, amount: 0.6 }}
        style={{...allItemsCenter}}
      >
        <Typography
          variant="h5"
          sx={{ color: "text.default", textAlign: "center", width: "80%" }}
        >
          Blending frontend design with backend logic to build full-stack
          solutions.
        </Typography>
      </motion.div>

      {/* Skill icons animation */}
      <Container
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        sx={{ mt: 5, ...allItemsCenter, flexWrap: "wrap" }}
      >
        {skills.map((item) => (
          <motion.div key={item.name} variants={itemVariants}>
            <Tooltip title={item.name} arrow placement="top">
              <Avatar
                alt={item.name}
                src={item.icon}
                sx={{
                  width: "100px",
                  height: "100px",
                  m: 3,
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.1)",
                    cursor: "pointer",
                    boxShadow: "0px 10px 10px rgb(0, 0, 0)",
                  },
                }}
              />
            </Tooltip>
          </motion.div>
        ))}
      </Container>
    </Box>
  );
};

export default SkillsContainer;
