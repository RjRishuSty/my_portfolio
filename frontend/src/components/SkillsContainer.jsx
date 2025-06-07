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
import { Avatar, Box, Container, Tooltip, Typography } from "@mui/material";

import bgImg from "../assets/banner2.jpg";
import { allItemsCenter } from "../custom-styles";
import React from "react";

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
        py: 10,
        ...allItemsCenter,
        flexDirection: "column",
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
      <Container sx={{ mt: 5, ...allItemsCenter, flexWrap: "wrap" }}>
        {skills.map((item) => (
          <Tooltip key={item.name} title={item.name} arrow placement="top">
            <Avatar
              key={item.id}
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
        ))}
      </Container>
    </Box>
  );
};

export default SkillsContainer;
