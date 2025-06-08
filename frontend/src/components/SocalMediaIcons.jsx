import React, { useEffect } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box, IconButton, useMediaQuery } from "@mui/material";
import { motion, useAnimation } from "framer-motion";

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
  hidden: {},
};

const iconVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } },
};

const SocalMediaIcons = ({ useIn, animateNow }) => {
  const isMobile = useMediaQuery("(max-width:550px)");
  const controls = useAnimation();

  useEffect(() => {
    if (animateNow) {
      controls.start("visible");
    }
  }, [animateNow, controls]);

  const socialMedia = [
    {
      id: 1,
      name: "Facebook",
      icon: <FacebookIcon />,
      path: "https://www.facebook.com/rishu.raj.610704",
    },
    {
      id: 2,
      name: "LinkedIn",
      icon: <LinkedInIcon />,
      path: "https://www.linkedin.com/in/rishu-raj-13171a27a/",
    },
    {
      id: 3,
      name: "GitHub",
      icon: <GitHubIcon />,
      path: "https://github.com/RjRishuSty",
    },
    {
      id: 4,
      name: "Instagram",
      icon: <InstagramIcon />,
      path: "https://www.instagram.com/rj_rishu_sty/",
    },
  ];

  return (
    <Box
      component={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      style={{ display: "flex" }}
    >
      {socialMedia.map((item) => (
        <motion.div
          key={item.id}
          variants={iconVariants}
          style={{ marginRight: isMobile ? 8 : useIn === "heroSection" ? 24 : 16 }}
        >
          <IconButton
            component="a"
            href={item.path}
            target="_blank"
            sx={{
              color: "white",
              backgroundColor: "secondary.main",
              borderRadius: 10,
              border: "2px solid transparent",
              transition: "transform 0.2s, color 0.2s",
              "&:hover": {
                color: "secondary.main",
                transform: "scale(1.2)",
                borderColor: "secondary.main",
                backgroundColor: "transparent",
              },
            }}
          >
            {React.cloneElement(item.icon, {
              sx: {
                fontSize: isMobile
                  ? "1.7rem"
                  : useIn === "heroSection"
                  ? "2.5rem"
                  : "1.7rem",
              },
            })}
          </IconButton>
        </motion.div>
      ))}
    </Box>
  );
};

export default SocalMediaIcons;
