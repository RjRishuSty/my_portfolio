import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import PropTypes from "prop-types";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Logo from "./Logo";
import { Button, IconButton, Typography, useMediaQuery } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import ReceiptIcon from "@mui/icons-material/Receipt";
import NavLinks from "./NavLinks";
import { allItemsCenter } from "../custom-styles";
import MenuBtn from "./MenuBtn";

// Elevation effect on scroll
function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    sx: {
      ...children.props.sx,
      backgroundColor: trigger ? "#ffffff" : "transparent",
      transition: "background-color 0.3s ease",
    },
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const Header = (props) => {
  const miniLaptop = useMediaQuery("(max-width:1100px)");
  const isMobile = useMediaQuery("(max-width:860px)");
  return (
    <Box component="nav" sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar
          position="fixed"
          sx={{
            zIndex: 1200,
            border: "none",
          }}
        >
          <Toolbar>
            <Box
              flexGrow={miniLaptop ? 1 : 0.5}
            >
              <Logo />
            </Box>
            {isMobile ? (
              <MenuBtn/>
            ) : (
              <>
                <Box
                  flexGrow={miniLaptop ? 0 : 0.9}
                  sx={{ ...allItemsCenter }}
                >
                  <NavLinks />
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    size={miniLaptop ? "medium" : "large"}
                    sx={{ mr: 2, backgroundColor: "primary.main" }}
                    startIcon={<ReceiptIcon />}
                  >
                    My Resume
                  </Button>
                  <Button
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
                </Box>
              </>
            )}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </Box>
  );
};

export default Header;
