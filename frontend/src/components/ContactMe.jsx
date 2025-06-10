import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useCallback, useState } from "react";
import { allItemsCenter } from "../custom-styles";
import FormInputs from "./FormInputs";
import InfoCard from "./InfoCard";
import { motion } from "framer-motion";
import { enqueueSnackbar } from "notistack";
import axios from "axios";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

const MotionStack = motion(Stack);
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionGrid = motion(Grid);

const ContactMe = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });
  const miniLaptop = useMediaQuery("(max-width:1025px)");
  const isMobile = useMediaQuery("(max-width:900px)");

  const handleInputChange = useCallback((e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }, []);

  const handleInputValidate = () => {
    if (!formData.fullname) {
      enqueueSnackbar("Please enter your full name.", { variant: "error" });
      return false;
    }
    if (!formData.email) {
      enqueueSnackbar("Please provide a valid email address.", {
        variant: "error",
      });
      return false;
    }
    if (!formData.subject) {
      enqueueSnackbar("Please specify the subject of your message.", {
        variant: "error",
      });
      return false;
    }
    if (!formData.message) {
      enqueueSnackbar("Please enter your message or query.", {
        variant: "error",
      });
      return false;
    }

    return true;
  };

  const handleFromSubmit = async (e) => {
    e.preventDefault();

    if (!handleInputValidate()) return;

    try {
      const response = await axios.post(
        "https://my-protfolio-backend-bi5k.onrender.com/contact",
        formData
      );

      if (response)
        return enqueueSnackbar(response.data.message, {
          variant: "success",
        });
    } catch (error) {
      console.error("Submission error:", error);
      enqueueSnackbar(error.response.data.message, {
        variant: "error",
      });
    }
  };

  return (
    <MotionStack
      component="section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      sx={{ py: 5 }}
    >
      <Container sx={{ ...allItemsCenter, flexDirection: "column" }}>
        <MotionTypography
          variant="h4"
          gutterBottom
          sx={{ color: "secondary.main", textAlign: "center" }}
          variants={fadeUp}
          custom={0}
        >
          Get in Touch
        </MotionTypography>

        <MotionTypography
          variant="h5"
          sx={{
            textAlign: "center",
            color: "text.default",
            width: isMobile ? "100%" : miniLaptop ? "80%" : "50%",
          }}
          variants={fadeUp}
          custom={0.2}
        >
          I'm open to freelance, collaboration, or full-time opportunities —
          drop a message!
        </MotionTypography>
      </Container>

      <Container sx={{ mt: 5 }}>
        <Grid container rowSpacing={3} columnSpacing={3}>
          {/* Left Grid */}
          <MotionGrid
            size={{ xs: 12, sm: 12, md: 4 }}
            variants={fadeUp}
            custom={0.4}
          >
            {isMobile && (
              <MotionTypography
                variant="h6"
                sx={{
                  color: "text.default",
                  fontWeight: 700,
                  mb: 3,
                  backgroundColor: "#ffde59",
                  pl: 2,
                  p: 1,
                }}
                variants={fadeUp}
                custom={0.45}
              >
                Contact Information
              </MotionTypography>
            )}
            {/* Animate InfoCard itself */}
            <MotionBox variants={fadeUp} custom={0.6}>
              <InfoCard />
            </MotionBox>
          </MotionGrid>

          {/* Right Grid */}
          <MotionGrid
            component="form"
            onSubmit={handleFromSubmit}
            size={{ xs: 12, sm: 12, md: 8 }}
            variants={fadeUp}
            custom={0.6}
            sx={{
              py: 2,
              ...allItemsCenter,
              flexDirection: "column",
            }}
          >
            {isMobile && (
              <MotionBox
                sx={{ width: "100%", mb: 3 }}
                variants={fadeUp}
                custom={0.65}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: "text.default",
                    fontWeight: 700,
                    backgroundColor: "#ffde59",
                    pl: 2,
                    p: 1,
                  }}
                >
                  Drop Your Query
                </Typography>
              </MotionBox>
            )}

            <MotionBox variants={fadeUp} custom={0.8} sx={{ width: "100%" }}>
              <FormInputs handleInputChange={handleInputChange} />
            </MotionBox>

            <MotionBox variants={fadeUp} custom={1}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{ backgroundColor: "#f9004d", mt: 2 }}
              >
                Send Message
              </Button>
            </MotionBox>
          </MotionGrid>
        </Grid>
      </Container>
    </MotionStack>
  );
};

export default ContactMe;
