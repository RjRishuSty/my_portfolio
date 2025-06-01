import { createTheme } from "@mui/material/styles";

const theme = createTheme({
   typography: {
    fontFamily: '"Quicksand", sans-serif', // Default for body text
    h1: {
      fontWeight: 700,
      fontFamily: '"Playfair Display", serif', 
    },
    h2: {
      fontWeight: 800,
      fontFamily: '"Playfair Display", serif', 
    },
    h3: {
      fontWeight: 600,
      fontFamily: '"Playfair Display", serif', 
    },
    h4: {
      fontWeight: 500,
      fontFamily: '"Playfair Display", serif', 
    },
    body1: {
      fontWeight: 400,
      fontFamily: '"Quicksand", sans-serif', 
    },
    button: {
      textTransform: 'none',
      fontFamily: '"Quicksand", sans-serif', 
      fontWeight:700
    },
  },
  palette: {
    primary: {
      default: "",
      main: "#000",
    },
    secondary: {
      default: "",
      main: "#f9004d",
    },
    background: {
      default: "#ffffff",
      paper: "#000000",
    },
    text: {
      default: "#000000",
      primary: "#ffffff",
      secondary: "rgb(71, 69, 69)",
    },
  },
});

export default theme;
