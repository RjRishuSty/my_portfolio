import {
  Box,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { allItemsStart } from "../custom-styles";

const InfoCard = () => {
  const isMobile = useMediaQuery("(max-width:900px)");
  const contactDetails = [
    {
      id: "location",
      label: "Location",
      value:
        "Hospital More, SBPDCL Colony - 37 Bihar Sharif, Nalanda , Bihar – 803101, India",
      icon: <LocationOnIcon />,
    },
    {
      id: "email",
      label: "Email",
      value: "rishurajk59@gmail.com",
      icon: <EmailIcon />,
    },
    {
      id: "phone",
      label: "Phone",
      value: "+91 7903 33504",
      icon: <PhoneIcon />,
    },
  ];
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={2} columnSpacing={2} sx={{}}>
        {contactDetails.map((item) => (
          <Grid
            size={{ xs: 12, sm: 6, md: 12 }}
            sx={{ ...allItemsStart }}
            key={item.id}
          >
            <IconButton
              sx={{
                backgroundColor: "#f9004d",
                mr: isMobile ? 1 : 2,
                p: 1,
                "&:hover": { backgroundColor: "#ff6696" },
              }}
            >
              {React.cloneElement(item.icon, {
                fontSize: isMobile ? "medium" : "large",
                sx: { color: "#fff" },
              })}
            </IconButton>
            <Box>
              <Typography
                variant={isMobile ? "h6" : "h5"}
                sx={{ fontWeight: 700, color: "text.default" }}
              >
                {item.label}
              </Typography>
              <Typography variant="body1" sx={{ color: "text.default",pr:item.id ==='location'?2:"" }}>
                {item.value}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default InfoCard;
