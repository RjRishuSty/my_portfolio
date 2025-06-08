import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import authorImg from "../assets/auther.png";
import { allItemsCenterWithStart } from "../custom-styles";
import { Link, useLocation } from "react-router-dom";
import ListsSection from "./ListsSection";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 1.8, // stagger image grid and text grid animation
    },
  },
};

const leftSlide = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.5 },
  },
};

const rightSlide = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const textFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
};

const AboutMe = () => {
  const location = useLocation();
  const isTablet = useMediaQuery("(max-width:900px)");
  const isMobile = useMediaQuery("(max-width:600px)");
  const xsMobile = useMediaQuery("(max-width:450px)");
  const aboutPage = location.pathname === "/about";

  return (
    <Stack sx={{ py: 10 }}>
      <Container>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Typography
            gutterBottom
            variant="h4"
            sx={{ color: "secondary.main", textAlign: "center" }}
          >
            {aboutPage ? "Get to Know Me" : "About Me"}
          </Typography>
        </motion.div>

        {/* Subheading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h5"
            sx={{ textAlign: "center", color: "text.default" }}
          >
            {aboutPage
              ? "Focused on crafting fast, responsive, and user-friendly web apps."
              : "Crafting scalable MERN apps — turning ideas into real solutions."}
          </Typography>
        </motion.div>

        {/* Container for both grids with stagger animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <Grid container rowSpacing={3} sx={{ mt: 5 }}>
            {!aboutPage && (
              <Grid
                size={{ xs: 12, sm: 12, md: 4 }}
                sx={{
                  display: "flex",
                  justifyContent: isTablet ? "start" : "center",
                  alignItems: "center",
                  backgroundColor: isTablet ? "#e6b800" : "",
                }}
                component={motion.div}
                variants={leftSlide}
              >
                {isTablet && (
                  <Box
                    sx={{
                      position: "relative",
                      backgroundColor: "#ffde59",
                      width: xsMobile ? "6%" : isMobile ? "15%" : "30%",
                      height: "100%",
                    }}
                  />
                )}
                <Box
                  component="img"
                  src={authorImg}
                  alt="Rishu raj"
                  sx={{
                    width: "auto",
                    height: isTablet ? "40vh" : "65vh",
                    objectFit: isTablet ? "contain" : "cover",
                    objectPosition: "center",
                    borderRadius: isTablet ? 100 : "",
                    borderTopLeftRadius: 5,
                    borderBottomLeftRadius: 5,
                  }}
                />
              </Grid>
            )}

            <Grid
              size={{ xs: 12, sm: 12, md: aboutPage ? 12 : 8 }}
              sx={{
                p: xsMobile ? 0 : 3,
                ...allItemsCenterWithStart,
                flexDirection: "column",
                backgroundColor: !isTablet ? "#fffae6" : "",
                borderTopRightRadius: 5,
                borderBottomRightRadius: 5,
              }}
              component={motion.div}
              variants={rightSlide}
            >
              <motion.div variants={textFadeIn}>
                <Typography
                  gutterBottom
                  variant="h6"
                  sx={{ color: "text.default", fontWeight: 700 }}
                >
                  MERN Stack Web Developer.
                </Typography>
              </motion.div>

              <motion.div variants={textFadeIn}>
                <Typography
                  gutterBottom
                  variant="body1"
                  sx={{ color: "text.secondary" }}
                >
                  Passionate MERN Stack Developer building end-to-end web solutions
                  with a focus on performance, scalability, and clean code.
                </Typography>
              </motion.div>

              <motion.div variants={textFadeIn}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    mt: 3,
                    letterSpacing: 0.5,
                    lineHeight: aboutPage ? 1.9 : 1.5,
                  }}
                >
                  Hi, I'm <strong>Rishu Raj</strong>, a passionate MERN Stack Web
                  Developer from Bihar, India. I specialize in building clean,
                  responsive, and scalable web applications using{" "}
                  <strong>MongoDB</strong>, <strong>Express.js</strong>,{" "}
                  <strong>React.js</strong>, and <strong>Node.js</strong>. With a
                  strong foundation in frontend technologies like{" "}
                  <strong>HTML</strong>, <strong>CSS</strong>,{" "}
                  <strong>JavaScript</strong>, <strong>Bootstrap</strong>, and{" "}
                  <strong>Mui</strong>, I focus on turning real-world ideas into
                  full-stack solutions. I’m currently looking for opportunities to
                  contribute to impactful web projects and grow as a developer in a
                  collaborative team.
                </Typography>
              </motion.div>

              {aboutPage && (
                <>
                  <motion.div variants={textFadeIn}>
                    <ListsSection />
                  </motion.div>

                  <motion.div variants={textFadeIn}>
                    <Typography
                      gutterBottom
                      variant="h6"
                      sx={{ color: "text.default", mt: 3, fontWeight: 700 }}
                    >
                      Career Goal
                    </Typography>
                  </motion.div>

                  <motion.div variants={textFadeIn}>
                    <Typography
                      gutterBottom
                      variant="body1"
                      sx={{
                        color: "text.secondary",
                        width: isTablet ? "100%" : "80%",
                      }}
                    >
                      To become a full-time developer in a company where I can
                      contribute to meaningful projects, learn from experienced
                      professionals, and grow into a senior role over time.
                    </Typography>
                  </motion.div>
                </>
              )}

              {!aboutPage && (
                <motion.div variants={textFadeIn}>
                  <Button
                    component={Link}
                    to="/about"
                    variant="outlined"
                    size="large"
                    sx={{
                      borderColor: "secondary.main",
                      color: "secondary.main",
                      mt: 3,
                      "&:hover": {
                        backgroundColor: "secondary.main",
                        color: "white",
                      },
                    }}
                  >
                    Learn more
                  </Button>
                </motion.div>
              )}
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Stack>
  );
};

export default AboutMe;
