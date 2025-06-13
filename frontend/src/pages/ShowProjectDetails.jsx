import { Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { projectList } from "../../projectList";

const ShowProjectDetails = () => {
  const { id } = useParams();
  const filteredProject = projectList.find((item) => item.id === Number(id));
  const sidebarLinks = [
    { title: "Overview" },
    { title: "Extended Overview" },
    { title: "Build QTify" },
  ];
  return (
    <Stack
      component="section"
      sx={{ border: "2px solid red", minHeight: "100vh", py: 10 }}
    >
      <Container sx={{ border: "3px solid blue" }}>
        <Typography sx={{ color: "text.default" }}>
          {filteredProject.name}
        </Typography>
      </Container>

      {/* Details page */}

      <Container minWidth="lg" sx={{ border: "3px solid blue" }}>
        <Grid container rowSpacing={2} columnSpacing={5}>
          <Grid
            size={{ xs: 12, sm: 12, md: 4 }}
            sx={{ border: "2px solid red" }}
          >
            {sidebarLinks.map((item,index) => (
              <Typography key={index}
                sx={{ color: "text.default", bgcolor: "gray", m: 2, p: 1,borderRadius:1,cursor:'pointer',"&:hover":{color:'red'} }}
              >
                {item.title}
              </Typography>
            ))}
          </Grid>
          <Grid
            size={{ xs: 12, sm: 12, md: 8 }}
            sx={{ border: "2px solid red" }}
          >
            <Typography>Details</Typography>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default ShowProjectDetails;
