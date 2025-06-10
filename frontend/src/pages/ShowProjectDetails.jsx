import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { projectList } from "../../projectList";

const ShowProjectDetails = () => {
  const { id } = useParams();
  const filteredProject = projectList.find((item) => item.id === Number(id));
  return (
    <Stack component="section" sx={{ border: "2px solid red",minHeight:'100vh', py: 10 }}>
      <Container sx={{ border: "3px solid blue" }}>
        <Typography sx={{ color: "text.default" }}>
          {filteredProject.name}
        </Typography>
      </Container>
    </Stack>
  );
};

export default ShowProjectDetails;
