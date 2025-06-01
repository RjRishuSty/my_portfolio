import { Box, Typography, useMediaQuery } from "@mui/material";
import { useLocation, Link } from "react-router-dom";
import { links } from "../../links"; 
import { allItemsSpaceAround } from "../custom-styles";

const NavLinks = () => {
  const location = useLocation();
  const miniLaptop = useMediaQuery("(max-width:1100px)");

  return (
    <Box sx={{...allItemsSpaceAround,width:miniLaptop?"100%":'80%'}}>
      {links.map((item) => {
        const isActive = location.pathname === item.path;

        return (
          <Typography
            key={item.label}
            component={Link}
            to={item.path}
            variant="body1"
            sx={{
              color: "black",
              cursor: "pointer",
              fontWeight: 600,
              padding:'5px 15px',
              borderRadius:1,
              textDecoration: "none",
              borderBottom: isActive
                ? "3px solid #f9004d"
                : "2px solid transparent",
              transition: "border-bottom 0.3s",
              "&:hover": {
                textTransform: "uppercase",
                border: "1px solid #f9004d",
              },
            }}
          >
            {item.label}
          </Typography>
        );
      })}
    </Box>
  );
};

export default NavLinks;
