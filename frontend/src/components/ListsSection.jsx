import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import CodeIcon from "@mui/icons-material/Code";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import SpeedIcon from "@mui/icons-material/Speed";
import GroupIcon from "@mui/icons-material/Group";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { allItemsCenter } from "../custom-styles";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // delay between animations
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 }, // start slightly left and transparent
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ListsSection = () => {
  const isTablet = useMediaQuery("(max-width:900px)");
  const driveList = [
    {
      icon: <CodeIcon />,
      text: "Writing clean, maintainable code",
    },
    {
      icon: <DesignServicesIcon />,
      text: "Designing responsive UIs",
    },
    {
      icon: <SpeedIcon />,
      text: "Optimizing performance",
    },
    {
      icon: <GroupIcon />,
      text: "Working collaboratively in teams",
    },
    {
      icon: <AutoAwesomeIcon />,
      text: "Continuous learning and growth",
    },
  ];
  return (
    <Box sx={{ mt: 3 }}>
      <Typography
        gutterBottom
        variant="h6"
        sx={{ color: "text.default", fontWeight: 700 }}
      >
        What Drives Me
      </Typography>
      <Typography gutterBottom variant="body1" sx={{ color: "text.secondary" }}>
        I believe in creating impactful digital experiences that are not only
        functional but also user-friendly and visually appealing.
      </Typography>
      <List
        component={motion.ul}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        sx={{
          width: "100%",
          bgcolor: "transparent",
          ...allItemsCenter,
          flexWrap: "wrap",
          color: "text.default",
          padding: 0,
          margin: 0,
          listStyle: "none",
        }}
        aria-labelledby="nested-list-subheader"
      >
        {driveList.map((item, index) => (
          <ListItemButton
            key={index}
            component={motion.li}
            variants={itemVariants}
            sx={{
              width: isTablet ? "100%" : "40%",
              m: 1,
              bgcolor: "secondary.main",
              "&:hover": { bgcolor: "black" },
              borderRadius: 1,
            }}
          >
            <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
            <ListItemText
              sx={{
                color: "text.primary",
              }}
              primary={item.text}
            />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default ListsSection;
