import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#333333",
    },

    green: {
      main: "#36ae37",
      contrastText: "#fff",
    },

    red: {
      main: "#ff0000",
    },
    blue: {
      main: "#436ae3",
    },
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

          borderColor: "#e0e0e0",
          "&:hover": {
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
