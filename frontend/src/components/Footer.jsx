import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import {
  allItemsCenter,
  allItemsEnd
} from "../custom-styles";
import SocalMediaIcons from "./SocalMediaIcons";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigation = useNavigate();
  const miniLaptop = useMediaQuery("(max-width:1160px)");
  const isTablet = useMediaQuery("(max-width:900px)");
  return (
    <Stack
      component="footer"
      sx={{
        pt: 10,
        pb: 5,
        backgroundColor: "primary.main",
      }}
    >
      <Grid container rowSpacing={3} columnSpacing={3}>
        <Grid
          size={{ xs: 12, sm: 12, md: 8 }}
        >
          <Typography
            variant={miniLaptop ? "h3" : "h2"}
            sx={{textAlign:isTablet?"center":"end", color: "text.primary", p:isTablet?1:"" }}
          >
            Have a project in mind?
          </Typography>
        </Grid>
        <Grid
          size={{ xs: 12, sm: 12, md: 3 }}
          sx={{
            display:'flex',
            justifyContent:isTablet?"center":'start',
            alignItems:'center',
          }}
        >
          <Button
            size="large"
            variant="outlined"
            sx={{
              color: "secondary.main",
              borderColor: "secondary.main",
              borderWidth: 2,
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "secondary.main",
                color: "#fff",
                borderColor: "secondary.dark",
              },
            }}
            onClick={()=>navigation('/contact')}
          >
            Start a Conversation
          </Button>
        </Grid>
      </Grid>
      <Grid container rowSpacing={5} sx={{ width: "100%", mt: 15, px: 5 }}>
        <Grid size={{ xs: 12, sm: 12, md: 7 }}>
          <Typography
            sx={{
              textAlign: isTablet ? "center" : "start",
              opacity: 0.7,
            }}
          >
            © 2025 All rights reserved. Built by Rishu Raj — MERN Stack
            Developer.
          </Typography>
        </Grid>
        <Grid
          size={{ xs: 12, sm: 12, md: 5 }}
          sx={{ ...(isTablet ? allItemsCenter : allItemsEnd) }}
        >
          <SocalMediaIcons />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Footer;
