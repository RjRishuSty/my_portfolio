import reactImg from "../assets/react.png";
import cssImg from "../assets/css.png";
import muiImg from "../assets/mui.png";
import bootstrapImg from "../assets/bootstrap.png";
import { Avatar, Container, IconButton, Tooltip } from "@mui/material";

import React from "react";
import { allItemsCenter } from "../custom-styles";

const SkillsContainer = () => {
  const skills = [
    { name: "HTML", icon: "" }, // Use custom: no HtmlIcon in MUI
    { name: "CSS", icon: cssImg }, // Use general style/layout icon
    { name: "JavaScript", icon: "" }, // You may need a custom SVG if not in MUI
    { name: "Bootstrap", icon: bootstrapImg }, // General icon
    { name: "React", icon: reactImg }, // React-like UI metaphor
    { name: "MUI", icon: muiImg }, // Or your logo if available
    { name: "Git", icon: "" },
    { name: "SwiperJS", icon: "" }, // No direct MUI icon, use web icon
    { name: "Node.js", icon: "" }, // Representing server/backend
    { name: "Express", icon: "" },
    { name: "MongoDB", icon: "" },
  ];
  return (
    <Container
      sx={{ mt:5, ...allItemsCenter, flexWrap: "wrap" }}
    >
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
  );
};

export default SkillsContainer;
