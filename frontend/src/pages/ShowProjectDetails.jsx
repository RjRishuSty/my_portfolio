import { Box, Container, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { allItemsCenter } from "../custom-styles";

const ShowProjectDetails = ({ projectData }) => {
  const isTablet = useMediaQuery("(max-width:850px)");
  const projectId = useParams();
  const sidebarLinks = [
    { title: "Overview" },
    { title: "Extended Overview" },
    { title: "Build QTify" },
  ];
  const currentProject = projectData.find((item) => item._id === projectId.id);
  return (
    <Stack component="section" sx={{ minHeight: "100vh", ...allItemsCenter }}>
      <Container sx={{ border: "3px solid blue", mt: 15 ,padding:'0'}}>
        <Grid container rowSpacing={2} columnSpacing={2}>
          {!isTablet&& <Grid
            size={{ xs: 12, sm: 4, md: 4 }}
            sx={{ border: "2px solid red" }}
          >
            {sidebarLinks.map((item, index) => (
              <Typography
                key={index}
                sx={{
                  color: "text.default",
                  bgcolor: "secondary.main",
                  m: 2,
                  p: 1,
                  borderRadius: 1,
                  cursor: "pointer",
                  "&:hover": { color: "white" },
                }}
              >
                {item.title}
              </Typography>
            ))}
          </Grid>}
          <Grid 
            size={{ xs: 12, sm:  isTablet?12:8, md: isTablet?12:8 }}
            sx={{ border: "2px solid red" }}
          >
            
            {currentProject.images.map((item, index) => (
              <Box component="img" key={index} src={item} sx={{width:'100%',height:"auto"}} alt="project img" />
            ))}
            <Typography sx={{ color: "text.default",fontSize:"1rem" }} variant="button">
              {currentProject.description || "Not Found"}
            </Typography>
            <Typography sx={{ color: "text.default" }} variant="h4">
              {currentProject.functional_title || "Not Found"}
            </Typography>
            {currentProject.devFunctionalities.map((item, index) => (
              <Typography key={index} sx={{ color: "text.default" }}>
                {item}
              </Typography>
            ))}
            {currentProject.skills.map((item, index) => (
              <Typography key={index} sx={{ color: "text.default" }}>
                {item}
              </Typography>
            ))}
            
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default ShowProjectDetails;
