import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  CssBaseline,
  Button,
  useMediaQuery,
  IconButton,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Logo from "./Logo";
import GitHubIcon from "@mui/icons-material/GitHub";
import ReceiptIcon from "@mui/icons-material/Receipt";
import NavLinks from "./NavLinks";
import MenuBtn from "./MenuBtn";
import myResume from "../assets/my_Resume.pdf";
import { motion } from "framer-motion";
import SideBar from "./SideBar";
import { useLocation, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { allItemsCenter } from "../custom-styles";

// Elevation on scroll
function ElevationScroll({ children, window, isProjectDetailPage }) {
  // const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    sx: {
      ...children.props.sx,
      padding: "8px 0px",
      backgroundColor: isProjectDetailPage
        ? "#ffde59"
        : trigger
        ? "rgba(255, 255, 255, 0.9)"
        : "transparent",
      backdropFilter: trigger ? "blur(10px)" : "none",
      WebkitBackdropFilter: trigger ? "blur(10px)" : "none",
      transition: "background-color 0.3s ease",
    },
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
  isProjectDetailPage: PropTypes.bool,
};

// Animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const logoVariant = {
  hidden: { x: -50, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 70 } },
};

const navVariant = {
  hidden: { y: -30, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "tween", ease: "easeOut" } },
};

const btnVariant = {
  hidden: { x: 50, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { type: "tween", ease: "easeOut" } },
};

//  // Get Project Name Handle ..............
//   export const handleGetProjectName = useCallback((name)=>{
//     setProjectName(name);
//   },[])

const Header = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);
  const miniLaptop = useMediaQuery("(max-width:1100px)");
  const isMobile = useMediaQuery("(max-width:860px)");

  // Check if path matches "/project/:id"
  const isProjectDetailPage = /^\/project\/\d+$/.test(location.pathname);

  // TODO: Handle toggle menu btn close slidebar and open slidebar............
  const handleToggleMenu = () => {
    setShowSidebar((prev) => !prev);
  };
  return (
    <Box component="nav" sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <ElevationScroll {...props} isProjectDetailPage={isProjectDetailPage}>
        <AppBar
          component={motion.div}
          position="fixed"
          sx={{
            zIndex: 1200,
            border: "none",
          }}
        >
          <motion.div
            initial="hidden"
            animate="show"
            variants={containerVariants}
          >
            <Toolbar sx={{ justifyContent: "space-between" }}>
              {/* Logo */}
              <motion.div variants={logoVariant}>
                <Box flexGrow={miniLaptop ? 1 : 0.5}>
                  {isProjectDetailPage ? (
                    <Box sx={{ ...allItemsCenter }}>
                      <IconButton
                        onClick={() => navigate(-1)}
                        sx={{
                          backgroundColor: "#f9004d",
                          borderRadius: 10,
                          cursor: "pointer",
                          mr: 2,
                          "&:hover": { backgroundColor: "#000" },
                        }}
                      >
                        <ArrowBackIcon
                          fontSize={isMobile ? "small" : "large"}
                          sx={{ color: "#fff" }}
                        />
                      </IconButton>
                      <Typography variant={isMobile?"h5":"h4"}>ABC</Typography>
                    </Box>
                  ) : (
                    <Logo />
                  )}
                </Box>
              </motion.div>

              {!isProjectDetailPage ? (
                isMobile ? (
                  <motion.div variants={btnVariant}>
                    <MenuBtn
                      handleToggleMenu={handleToggleMenu}
                      showSidebar={showSidebar}
                    />
                  </motion.div>
                ) : (
                  <>
                    {/* NavLinks */}
                    <motion.div
                      variants={navVariant}
                      style={{
                        flexGrow: miniLaptop ? 0.5 : 0.9,
                        display: "flex",
                        justifyContent: "end",
                      }}
                    >
                      <NavLinks />
                    </motion.div>

                    {/* Buttons with hover & tap animation */}
                    <motion.div
                      variants={btnVariant}
                      style={{ display: "flex", gap: 16 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Button
                          href={myResume}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="contained"
                          size={miniLaptop ? "medium" : "large"}
                          sx={{
                            backgroundColor: "primary.main",
                            textTransform: "none",
                          }}
                          startIcon={<ReceiptIcon />}
                        >
                          My Resume
                        </Button>
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Button
                          component="a"
                          href="https://github.com/RjRishuSty/"
                          target="_blank"
                          variant="contained"
                          size={miniLaptop ? "medium" : "large"}
                          sx={{
                            textTransform: "uppercase",
                            backgroundColor: "secondary.main",
                          }}
                          endIcon={<GitHubIcon />}
                        >
                          GitHub
                        </Button>
                      </motion.div>
                    </motion.div>
                  </>
                )
              ) : (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Button
                    component="a"
                    href="https://github.com/RjRishuSty/"
                    target="_blank"
                    variant="contained"
                    size={miniLaptop ? "medium" : "large"}
                    sx={{
                      textTransform: "uppercase",
                      backgroundColor: "secondary.main",
                    }}
                    endIcon={<GitHubIcon />}
                  >
                    Live Demo
                  </Button>
                </motion.div>
              )}
            </Toolbar>
          </motion.div>
        </AppBar>
      </ElevationScroll>
      {showSidebar && isMobile && (
        <SideBar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      )}
    </Box>
  );
};

export default Header;
