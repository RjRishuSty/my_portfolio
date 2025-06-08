import { Box, Typography, useMediaQuery } from "@mui/material";
import { useLocation, Link } from "react-router-dom";
import { links } from "../../links";
import { allItemsSpaceAround, allItemsStart } from "../custom-styles";
import { motion } from "framer-motion";

// Sequential entrance animation
const navVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

const NavLinks = ({ useIn, setShowSidebar }) => {
  const location = useLocation();
  const miniLaptop = useMediaQuery("(max-width:1100px)");
  const isMobile = useMediaQuery("(max-width:860px)");
  const sidebar = useIn === "sidebar";

  return (
    <Box
      component={motion.div}
      initial="hidden"
      animate="visible"
      sx={{
        width: miniLaptop ? "100%" : "70%",
        // border: "4px solid black",
        mt: sidebar ? 2 : 0,
        display: "flex",
        flexDirection: sidebar ? "column" : "row",
        ...(sidebar ? allItemsStart : allItemsSpaceAround),
        gap: 1,
      }}
    >
      {links.map((item, i) => {
        const isActive = location.pathname === item.path;

        return (
          <motion.div
            key={item.label}
            custom={i}
            variants={navVariants}
            whileHover={{
              y: -5,
              scale: 1.05,
              boxShadow: "0px 4px 8px rgba(0,0,0,0.15)",
              transition: {
                type: "spring",
                stiffness: 300,
              },
            }}
            style={{
              padding: "10px 15px",
              borderRadius: 5,
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Typography
              component={Link}
              to={item.path}
              variant="body1"
              onClick={() => {
                if (sidebar && isMobile && setShowSidebar) {
                  setShowSidebar(false); // ✅ runs safely on user click
                }
              }}
              sx={{
                color: sidebar && isMobile ? "white" : "black",
                cursor: "pointer",
                fontWeight: 600,
                borderRadius: 1,
                pb: 2,
                textTransform: sidebar ? "uppercase" : "capitalize",
                textDecoration: "none",
                ...(isActive && sidebar && isMobile
                  ? {
                      color: "#ffde59",
                      fontWeight: 700,
                    }
                  : {
                      borderBottom: isActive
                        ? "3px solid #f9004d"
                        : "2px solid transparent",
                    }),
                transition: "all 0.3s ease-in-out",
              }}
            >
              {item.label}
            </Typography>
          </motion.div>
        );
      })}
    </Box>
  );
};

export default NavLinks;
