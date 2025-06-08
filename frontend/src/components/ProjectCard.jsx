import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import projectImg from "../assets/comingsoon.jpg";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import InfoIcon from "@mui/icons-material/Info";
import { allItemsSpacebetween } from "../custom-styles";
import { motion } from "framer-motion";

const MotionCard = motion(Card);

const ProjectCard = ({ item }) => {
  const isMobile = useMediaQuery("(max-width:560px)");

  return (
    <MotionCard
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
      sx={{
        width: "100%",
        backgroundColor: "#f2f2f2",
        border: "none",
        borderRadius: 5,
        boxShadow: "0 4px 5px rgba(0, 0, 0, 0.9)",
      }}
    >
      <Box
        component="img"
        src={item.img ? item.img : projectImg}
        alt={item.name}
        sx={{
          width: "100%",
          height: "300px",
          objectFit: "cover",
          objectPosition: "center",
          transition: "transform 0.3s ease-in-out, filter 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.05)",
            filter: "brightness(0.9)",
          },
        }}
      />
      <CardContent>
        <Typography
          variant="h5"
          sx={{
            color: "text.default",
            textAlign: "center",
            fontWeight: 700,
            textTransform: "uppercase",
          }}
        >
          {item.name}
        </Typography>
      </CardContent>
      <CardActions sx={{ ...allItemsSpacebetween, mb: 2, px: 2 }}>
        <Button
          size={isMobile ? "medium" : "large"}
          variant="contained"
          sx={{ backgroundColor: "#000" }}
          startIcon={<LiveTvIcon fontSize={isMobile ? "medium" : "large"} />}
        >
          Live Demo
        </Button>
        <Button
          size={isMobile ? "medium" : "large"}
          variant="outlined"
          sx={{
            borderColor: "secondary.main",
            color: "secondary.main",
            "&:hover": {
              backgroundColor: "secondary.main",
              color: "white",
            },
          }}
          endIcon={<InfoIcon fontSize={isMobile ? "medium" : "large"} />}
        >
          View More
        </Button>
      </CardActions>
    </MotionCard>
  );
};

export default ProjectCard;
