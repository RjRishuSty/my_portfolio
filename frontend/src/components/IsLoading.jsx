import { Box, Container, Skeleton } from "@mui/material";
import React from "react";
import { allItemsCenter } from "../custom-styles";

const IsLoading = ({ useIn }) => {
  const renderLoading = () => {
    switch (useIn) {
      case "loginPage":
        return (
          <Box
            sx={{
              py:5,
              width: "100%",
              bgcolor: "black",
              boxShadow: 3,
              ...allItemsCenter,
              flexDirection:'column'
            }}
          >
            <Skeleton variant="text" width="80%" height={60} />
            <Skeleton variant="text" width="100%" height={20} />
            <Skeleton
              variant="rectangular"
              height={60}
              width='100%'
              sx={{ mt: 3, borderRadius: 1, }}
            />
            <Skeleton
              variant="rectangular"
              height={60}
              width='100%'
              sx={{ mt: 2, borderRadius: 1 }}
            />
            <Skeleton
              variant="rectangular"
              height={45}
              width={150}
              sx={{ mt: 4, borderRadius: 2 }}
            />
          </Box>
        );

      case "signupPage":
        return (
          <Box
            sx={{
              width: "90%",
              maxWidth: 400,
              bgcolor: "white",
              borderRadius: 3,
              p: 4,
              boxShadow: 3,
            }}
          >
            <Skeleton variant="text" width="70%" height={40} />
            <Skeleton variant="text" width="100%" height={20} />
            <Skeleton
              variant="rectangular"
              height={60}
              sx={{ mt: 2, borderRadius: 1 }}
            />
            <Skeleton
              variant="rectangular"
              height={60}
              sx={{ mt: 2, borderRadius: 1 }}
            />
            <Skeleton
              variant="rectangular"
              height={60}
              sx={{ mt: 2, borderRadius: 1 }}
            />
            <Skeleton
              variant="rectangular"
              height={45}
              sx={{ mt: 4, borderRadius: 2 }}
            />
          </Box>
        );

      case "updatePage":
        return (
          <Box
            sx={{
              width: "90%",
              maxWidth: 500,
              bgcolor: "white",
              borderRadius: 3,
              p: 4,
              boxShadow: 3,
            }}
          >
            <Skeleton variant="text" width="60%" height={30} />
            <Skeleton
              variant="rectangular"
              height={50}
              sx={{ mt: 2, borderRadius: 1 }}
            />
            <Skeleton
              variant="rectangular"
              height={50}
              sx={{ mt: 2, borderRadius: 1 }}
            />
            <Skeleton
              variant="rectangular"
              height={50}
              sx={{ mt: 2, borderRadius: 1 }}
            />
            <Skeleton
              variant="rectangular"
              height={50}
              sx={{ mt: 2, borderRadius: 1 }}
            />
            <Skeleton
              variant="rectangular"
              height={45}
              sx={{ mt: 4, borderRadius: 2 }}
            />
          </Box>
        );

      default:
        return <Skeleton variant="rectangular" width={300} height={200} />;
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        // border: "2px solid red",
        width: "100%",
        height: "100%",
        borderRadius:5,
        ...allItemsCenter,
      }}
    >
      {renderLoading()}
    </Container>
  );
};

export default IsLoading;
