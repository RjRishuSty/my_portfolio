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
import { Link } from "react-router-dom";

const MotionCard = motion(Card);

const ProjectCard = ({ item, useIn }) => {
  const isMobile = useMediaQuery("(max-width:560px)");
  const isSmallLaptop = useMediaQuery("(max-width:1100px)");
  const projectPage = useIn === "projectPage";

  return (
    <MotionCard
      whileHover={{ scale: 1.03 }}
      transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
      sx={{
        width: "100%",
        backgroundColor: "#ffde59",
        border: "none",
        boxShadow: "0 4px 5px rgba(0, 0, 0, 0.9)",
      }}
    >
      <Box
        component="img"
        src={item.images ? item.images[0] : projectImg}
        alt={item.name}
        sx={{
          width: "100%",
          height: "auto",
          objectFit: "contain",
          objectPosition: "center",
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
          component="a"
          target="_blank"
          href={item.demo}
          size={isMobile ? "medium" : "large"}
          variant="contained"
          sx={{ backgroundColor: "#000" }}
          startIcon={<LiveTvIcon fontSize={isMobile ? "medium" : "large"} />}
        >
          {isSmallLaptop && projectPage ? "Demo" : "Live Demo"}
        </Button>
        <Button
          component={Link}
          to={`/project/${item._id}`}
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
          {isSmallLaptop && projectPage ? "Details" : "View More"}
        </Button>
      </CardActions>
    </MotionCard>
  );
};

export default ProjectCard;
