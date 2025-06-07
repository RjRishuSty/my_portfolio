import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
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
        sx={{
          width: "100%",
          bgcolor: "transparent",
          ...allItemsCenter,
          flexWrap: "wrap",
          color: "text.default",
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {driveList.map((item, index) => (
          <ListItemButton
            key={index}
            sx={{
              width: isTablet ? "100%" : "40%",
              m: 1,
              bgcolor: "secondary.main",
              "&:hover": { bgcolor: "black" },
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
