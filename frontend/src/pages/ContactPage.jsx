import React from "react";
import { Box, Container, Stack } from "@mui/material";
import ContactMe from "../components/ContactMe";

const ContactPage = () => {
  return (
    <>
      <Stack
        sx={{
          minHeight: "100vh",
        }}
      >
        <Container  sx={{mt:15}}>
          <ContactMe/>
        </Container>
        <Box sx={{width:'100%',height:'70vh'}}>
           <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.289285761399!2d85.13756411500902!3d25.594094484515598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5822b1f9afc7%3A0x64db90a179a0b64b!2sPatna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1717760000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </Box>
      </Stack>
    </>
  );
};

export default ContactPage;
