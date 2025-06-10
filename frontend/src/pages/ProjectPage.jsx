import { Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import { projectList } from "../../projectList";
import ProjectCard from "../components/ProjectCard";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: custom },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Motion wrappers
const MotionStack = motion(Stack);
const MotionTypography = motion(Typography);
const MotionGrid = motion(Grid);

const ProjectPage = () => {

  return (
    <MotionStack
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      sx={{ py: 10 }}
    >
      <Container maxWidth="xl" sx={{ mt: 10 }}>
        <MotionTypography
          variant="h3"
          gutterBottom
          sx={{ color: "secondary.main", textAlign: "center" }}
          variants={fadeUp}
          custom={0.1}
        >
          My Projects
        </MotionTypography>

        <MotionTypography
          variant="h5"
          gutterBottom
          sx={{ color: "text.default", textAlign: "center" }}
          variants={fadeUp}
          custom={0.2}
        >
          Explore the real-world applications I’ve crafted with passion and
          precision.
        </MotionTypography>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container rowSpacing={3} columnSpacing={3} sx={{ mt: 7 }}>
            {projectList.map((item, index) => (
              <MotionGrid
                key={index}
                size={{ xs: 12, sm: 6, md: 4 }}
                variants={fadeUp}
                custom={0.3 + index * 0.2}
                sx={{ cursor: "pointer" }}
              >
                <ProjectCard item={item} useIn="projectPage" />
              </MotionGrid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </MotionStack>
  );
};

export default ProjectPage;
