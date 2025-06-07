import React from "react";
import { Card, CardContent, Typography, Stack, Box, useMediaQuery } from "@mui/material";

const PassionCard = ({ heading, description ,icon}) => {
      const isTablet = useMediaQuery("(max-width:900px)");
  return (
    <Card
      sx={{
        maxWidth: 350,
        boxShadow: 3,
        borderRadius: 3,
        p: isTablet?0.7:2,
        bgcolor: "#000",
        cursor: "pointer",
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: 6,
        },
      }}
    >
      <CardContent>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Box
            sx={{
              bgcolor: "#f9004d",
              color: "white",
              borderRadius: "50%",
              p: 1.5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {icon}
          </Box>
          <Typography variant="h6" fontWeight="bold">
            {heading}
          </Typography>
        </Stack>
        <Typography variant="body2" mt={2} color="text.primary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PassionCard;
