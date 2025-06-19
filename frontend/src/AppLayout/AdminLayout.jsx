import React, { useCallback, useEffect, useState } from "react";
import { Box, Grid, useMediaQuery } from "@mui/material";
import Topbar from "../pages/Admin/components/Topbar";
import Sidebar from "../pages/Admin/components/Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";

const AdminLayout = () => {
  const [loading, setLoading] = useState(true);
  const [gridSize, setGridSize] = useState(false);
  const isTablet = useMediaQuery("(max-width: 900px)");
  const navigate = useNavigate();
  // Check authentication status on component mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get(
          "https://my-protfolio-backend-bi5k.onrender.com/api/auth/check-auth",
          { withCredentials: true }
        );
        if (!res?.data?.success) {
          navigate("/login");
        }
      } catch {
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, [navigate]);

  const handleGridSizeChange = useCallback(() => {
    setGridSize((prev) => !prev);
    if (isTablet && gridSize) {
      setGridSize((prev) => !prev);
    }
  }, [isTablet]);
  if (loading) return <div>Loading...</div>;
  console.log(gridSize);
  return (
    <Box sx={{ width: "100%", height: "100vh" }}>
      <Grid container>
        <Grid
          size={{ xs: 10, sm: 4, md: gridSize ? 1 : 2 }}
          sx={{
            position: isTablet ? "absolute" : "relative",
            top: isTablet ? 75 : 0,
            border: isTablet ? "2px solid red" : "none",
            display: {
              xs: isTablet && gridSize ? "block" : "none",
              md: "block",
            },
          }}
        >
          <Sidebar gridSize={gridSize} />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: gridSize ? 11 : 10 }}>
          <Topbar onGridSizeChange={handleGridSizeChange} />
          <Box sx={{ width: "100%", p: 2 }}>
            <Outlet />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default AdminLayout;
