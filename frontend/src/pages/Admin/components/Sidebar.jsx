// src/pages/Admin/components/Sidebar.jsx
import React, { useCallback, useMemo } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  useMediaQuery,
} from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../../components/Logo";
import { allItemsCenter } from "../../../custom-styles";

const Sidebar = ({ gridSize }) => {
  const isTablet = useMediaQuery("(max-width: 900px)");
  const location = useLocation();
  const navigate = useNavigate();
  const sidebarMenu = useMemo(
    () => [
      {
        label: "Dashboard",
        icon: "Dashboard", // You can map this to MUI Icons
        path: "/admin/dashboard",
      },
      {
        label: "Projects",
        icon: "Work",
        path: "/admin/projects",
      },
      {
        label: "Add Project",
        icon: "AddBox",
        path: "/admin/add-project",
      },
      {
        label: "Messages",
        icon: "Mail",
        path: "/admin/messages",
      },
      {
        label: "Settings",
        icon: "Settings",
        path: "/admin/settings",
      },
      {
        label: "Logout",
        icon: "Logout",
        path: "/logout", // You can trigger auth logout logic on click
      },
    ],
    []
  );
  const handleNavigation = useCallback((path) => {
  navigate(path);
}, [navigate]);
  return (
    <Box
      sx={{
        backgroundColor: "primary.default",
        ...allItemsCenter,
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Box sx={{ mt: 0.7, width: gridSize ? "90%" : "70%" }}>
        <Logo useIn="AdminPage" />
      </Box>
      <Box
        sx={{
          width: "100%",
          mt: 2,
          height: "90vh",
          overflowY: "auto",
        }}
      >
        <List
          sx={{ width: "100%", ...allItemsCenter, flexDirection: "column" }}
        >
          {sidebarMenu.map((item, index) => {
            const Icon = MuiIcons[item.icon];
            const isActive = location.pathname === item.path;
            return (
              <ListItem
                button
                key={index}
                onClick={()=>handleNavigation(item.path)}
                sx={{
                  mb: 1,
                  fullWidth: true,
                  ...allItemsCenter,
                  cursor: "pointer",
                  backgroundColor: isActive ? "#f0f0f0" : "transparent",
                  "&:hover": { backgroundColor: "#ffe6ee" },
                }}
              >
                <ListItemIcon
                  sx={{
                    color: isActive ? "#f9004d" : "#000",
                    ...allItemsCenter,
                  }}
                >
                  {Icon && <Icon sx={{ fontSize: "2rem" }} />}
                </ListItemIcon>
                {gridSize ? (
                  isTablet ? (
                    <ListItemText
                      primary={
                        <Typography
                          sx={{
                            color: isActive ? "#f9004d" : "black",
                            fontWeight: isActive ? "bold" : "normal",
                          }}
                        >
                          {item.label}
                        </Typography>
                      }
                    />
                  ) : null
                ) : (
                  <ListItemText
                    primary={
                      <Typography
                        sx={{
                          color: isActive ? "#f9004d" : "black",
                          fontWeight: isActive ? "bold" : "normal",
                        }}
                      >
                        {item.label}
                      </Typography>
                    }
                  />
                )}
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Box>
  );
};

export default React.memo(Sidebar);
