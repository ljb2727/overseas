import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#436ae3",
      main: "#333333",
      contrastText: "#fff",
    },
    secondary: {
      main: "#9c27b0",
      contrastText: "#fff",
    },
    green: "#36ae37",

    gray: {
      light: "#f8f8fa",
    },
    red: "#ff0000",
    common: {
      color: "#2d2d2d",
      borderColor: "#e0e0e0",
    },
  },
  components: {
    // Name of the component
    MuiButton: {
      defaultProps: {
        variant: "outlined",
        disableRipple: true,
      },
      styleOverrides: {
        // Name of the slot
        root: {
          fontSize: "1rem",
          color: "#2d2d2d",
          borderColor: "#e0e0e0",
          "&:hover": {
            color: "#2d2d2d",
            borderColor: "#e0e0e0",
            background: "#ffffff",
          },
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: "0.9rem",
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          padding: "0",
          marginLeft: "0",
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          //background: "none",
        },
      },
    },
  },
});

export default theme;
