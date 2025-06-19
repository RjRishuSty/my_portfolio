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
      fontWeight: 800,
      fontFamily: '"Playfair Display", serif',
    },

    body1: {
      fontWeight: 400,
      fontFamily: '"Quicksand", sans-serif',
    },
    button: {
      textTransform: "none",
      fontFamily: '"Quicksand", sans-serif',
      fontWeight: 700,
    },
  },
  palette: {
    primary: {
      default: "#f2f2f2",
      main: "#000",
    },
    secondary: {
      default: " #000",
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
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: "#000", 
          fontWeight:600,
          "& input": {
            color: "#000",
            fontWeight:600, 
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#f9004d",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#f9004d",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#f9004d",
          },
        },
      },
    },
  },
});

export default theme;
