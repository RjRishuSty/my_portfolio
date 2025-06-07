import { Container, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { projectList } from "../../projectList";
import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { allItemsCenter } from "../custom-styles";
import bgImg from "../assets/banner4.jpg";

const ProjectCollection = () => {
  const isTablet = useMediaQuery("(max-width:970px)");
  const isMobile = useMediaQuery("(max-width:560px)");
  return (
    <Stack
      component="section"
      sx={{
        py: 5,
        overflow: "hidden",
        position: "relative",
        zIndex: 1,
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.5,
          zIndex: -1,
        },
      }}
    >
      <Container sx={{ pb: 7 }}>
        <Typography
          gutterBottom
          variant="h4"
          sx={{ color: "secondary.main", textAlign: "center" }}
        >
          Crafted Projects
        </Typography>
        <Typography
          variant="h5"
          sx={{ textAlign: "center", color: "text.default" }}
        >
          These projects reflect my focus on quality, user experience, and clean
          development.
        </Typography>
      </Container>
      <Swiper
        slidesPerView={isTablet ? 1 : 2}
        spaceBetween={100}
        slidesPerGroup={1}
        pagination={{
          clickable: true, // Make bullets clickable
          type: "bullets", // Use circle bullets
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        style={{
          width: "100%",
          cursor: "pointer",
          overflow: "hidden",
          padding: isMobile ? "15px 15px 70px 15px" : "0px 100px 100px 100px",
          position: "relative",
          ...allItemsCenter,
        }}
      >
        {projectList.map((item) => (
          <SwiperSlide key={item.name} sx={{ border: "4px solid pink" }}>
            <ProjectCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Stack>
  );
};

export default ProjectCollection;
