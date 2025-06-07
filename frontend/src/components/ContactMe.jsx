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
import { allItemsCenter } from "../custom-styles";
import FormInputs from "./FormInputs";
import InfoCard from "./InfoCard";

const ContactMe = () => {
  const miniLaptop = useMediaQuery("(max-width:1025px)");
  const isMobile = useMediaQuery("(max-width:900px)");
  return (
    <Stack
      component="section"
      sx={{
        py: 5,
      }}
    >
      <Container
        sx={{
          ...allItemsCenter,
          flexDirection: "column",
        }}
      >
        <Typography
          gutterBottom
          variant="h4"
          sx={{ color: "secondary.main", textAlign: "center" }}
        >
          Get in Touch
        </Typography>
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            color: "text.default",
            width: isMobile ? "100%" : miniLaptop ? "80%" : "50%",
          }}
        >
          I'm open to freelance, collaboration, or full-time opportunities —
          drop a message!
        </Typography>
      </Container>
      <Container sx={{ mt: 5 }}>
        <Grid container rowSpacing={3} columnSpacing={3}>
          <Grid size={{ xs: 12, sm: 12, md: 4 }}>
            {isMobile && (
              <Typography
                variant="h6"
                sx={{ color: "text.default", fontWeight: 700, mb: 3, backgroundColor:'#ffde59',pl:2,p:1 }}
              >
                Contact Information
              </Typography>
            )}
            <InfoCard />
          </Grid>
          <Grid
            size={{ xs: 12, sm: 12, md: 8 }}
            sx={{
              py: 2,
              ...allItemsCenter,
              flexDirection: "column",
            }}
          >
            {isMobile && (
              <Box sx={{  width: "100%", mb: 3 }}>
                <Typography
                  variant="h6"
                  sx={{ color: "text.default", fontWeight: 700, backgroundColor:'#ffde59',pl:2,p:1 }}
                >
                  Drop Your Query
                </Typography>
              </Box>
            )}
            <FormInputs />
            <Button
              variant="contained"
              size="large"
              sx={{ backgroundColor: "#f9004d", mt: 2 }}
            >
              Send Message
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default ContactMe;
