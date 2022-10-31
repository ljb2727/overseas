import { ThemeProvider } from "@mui/material/styles";
import { Routes, Route, Link } from "react-router-dom";
import theme from "theme";
import CssBaseline from "@mui/material/CssBaseline";
import "./scss/style.scss";
import Container from "@mui/material/Container";
import Main from "routes/Main";

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Container
          maxWidth="sm"
          sx={{ mx: 1, mt: 1, p: 0 }}
          style={{ overflow: "hidden", width: "auto" }}
        >
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/list" element={<Main />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
