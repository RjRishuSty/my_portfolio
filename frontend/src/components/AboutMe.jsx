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
import { Link } from "react-router-dom";

const AboutMe = () => {
  const isTablet = useMediaQuery("(max-width:900px)");
  const isMobile = useMediaQuery("(max-width:600px)");
  const xsMobile = useMediaQuery("(max-width:450px)");
  return (
    <Stack sx={{ py: 10 }}>
      <Container>
        <Typography
          gutterBottom
          variant="h4"
          sx={{ color: "secondary.main", textAlign: "center" }}
        >
          About Me
        </Typography>
        <Typography
          variant="h5"
          sx={{ textAlign: "center", color: "text.default" }}
        >
          Crafting scalable MERN apps — turning ideas into real solutions.
        </Typography>
        <Grid container rowSpacing={3} sx={{ mt: 5 }}>
          <Grid
            size={{ xs: 12, sm: 12, md: 4 }}
            sx={{
              display: "flex",
              justifyContent: isTablet ? "start" : "center",
              alignItems: "center",
              backgroundColor: isTablet ? "#e6b800" : "",
            }}
          >
            {isTablet && (
              <Box
                sx={{
                  position: "relative",
                  backgroundColor: "#ffde59",
                  width: xsMobile ? "6%" : isMobile ? "15%" : "30%",
                  height: "100%",
                }}
              ></Box>
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
          <Grid
            size={{ xs: 12, sm: 12, md: 8 }}
            sx={{
              p: xsMobile ? 0 : 3,
              ...allItemsCenterWithStart,
              flexDirection: "column",
              backgroundColor: !isTablet ? "#fffae6" : "",
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5,
            }}
          >
            <Typography
              gutterBottom
              variant="h6"
              sx={{ color: "text.default", fontWeight: 700 }}
            >
              MERN Stack Web Developer.
            </Typography>
            <Typography
              gutterBottom
              variant="body1"
              sx={{ color: "text.default" }}
            >
              Passionate MERN Stack Developer building end-to-end web solutions
              with a focus on performance, scalability, and clean code.
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "text.default", mt: 3, letterSpacing: 0.5 }}
            >
              Hi, I'm <strong>Rishu Raj</strong>, a passionate MERN Stack Web
              Developer from Bihar, India. I specialize in building clean,
              responsive, and scalable web applications using{" "}
              <strong>MongoDB</strong>, <strong>Express.js</strong>,{" "}
              <strong>React.js</strong>, and <strong>Node.js</strong>. With a
              strong foundation in frontend technologies like
              <strong>HTML</strong>, <strong>CSS</strong>,{" "}
              <strong>JavaScript</strong>, <strong>Bootstrap</strong>, and{" "}
              <strong>Mui</strong>, I focus on turning real-world ideas into
              full-stack solutions. I’m currently looking for opportunities to
              contribute to impactful web projects and grow as a developer in a
              collaborative team.
            </Typography>
            <Button
            component={Link}
            to='/about'
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
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default AboutMe;
