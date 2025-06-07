import React from "react";
import { Box, Skeleton, Stack, Grid, useMediaQuery } from "@mui/material";

const LoadingPageLayout = () => {
  const isMobile = useMediaQuery("(max-width:900px)");
  return (
    <Box
      sx={{
        bgcolor: "#feda4b",
        width: "100%",
        minHeight: "100vh",
        px: { sm: 2, md: 1 },
        py: { sm: 2, md: 0.5 },
      }}
    >
      <Skeleton
        variant="rectangular"
        width="100%"
        height={80}
        sx={{ borderRadius: 2, bgcolor: "#e0b100" }}
      />
      <Grid container alignItems="center" sx={{ mt: isMobile ? 7 : "" }}>
        {/* Left content (text & icons) */}
        <Grid size={{ xs: 12, sm: 12, md: 6 }}>
          <Stack spacing={2}>
            <Skeleton
              variant="text"
              width="60%"
              height={50}
              sx={{ bgcolor: "#e0b100" }}
            />
            <Skeleton
              variant="text"
              width="100%"
              height={isMobile?150:90}
              sx={{ bgcolor: "#e0b100" }}
            />
            <Skeleton
              variant="text"
              width="100%"
              height={isMobile?150:90}
              sx={{ bgcolor: "#e0b100" }}
            />
            {/* Social icons */}
            <Stack direction="row" spacing={2} mt={2}>
              {[...Array(4)].map((_, index) => (
                <Skeleton
                  key={index}
                  variant="circular"
                  width={60}
                  height={60}
                  sx={{ bgcolor: "#e0b100" }}
                />
              ))}
            </Stack>
          </Stack>
        </Grid>

        {!isMobile && (
          <Grid
            size={{ xs: 6, sm: 6, md: 6 }}
            sx={{ display: "flex", justifyContent: "end" }}
          >
            <Skeleton
              variant="circular"
              width="90%"
              height="75vh"
              sx={{
                mt: 2,
                bgcolor: "#e0b100",
                borderRadius: isMobile ? "100%" : 5,
              }}
            />
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default LoadingPageLayout;
