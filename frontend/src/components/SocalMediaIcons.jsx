import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import { IconButton, useMediaQuery } from "@mui/material";

const SocalMediaIcons = ({ useIn }) => {
  const isMobile = useMediaQuery("(max-width:550px)");
  const heroSection = useIn === "heroSection";
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
    <>
      {socialMedia.map((item) => (
        <IconButton
          component="a"
          href={item.path}
          target="_blank"
          key={item.id}
          sx={{
            color: "white",
            backgroundColor: "secondary.main",
            borderRadius: 10,
            mr: isMobile?1:heroSection?3:2,
            border: "2px solid transparent",
            transition: "transform 0.2s, color 0.2s",
            "&:hover": {
              color: "secondary.main",
              transform: "scale(1.2)",
              borderColor: "secondary.main",
              borderWidth: 2,
              backgroundColor: "transparent",
            },
          }}
        >
          {React.cloneElement(item.icon, {
            sx: { fontSize: isMobile?'1.7rem':heroSection ? "2.5rem" : "1.7rem" },
          })}
        </IconButton>
      ))}
    </>
  );
};

export default SocalMediaIcons;
