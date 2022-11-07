import { ThemeProvider } from "@mui/material/styles";
import { Routes, Route, Link } from "react-router-dom";
import theme from "theme";
import CssBaseline from "@mui/material/CssBaseline";
import "./scss/style.scss";

import Main from "routes/Main";
import List from "routes/List";
import Detail from "routes/Detail";
import Add from "routes/Add";
import { Container } from "@mui/material";

function App() {
  return (
    <>
      text
      <CssBaseline />
      <Container disableGutters maxWidth="sm">
        <ThemeProvider theme={theme}>
          <Main />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/list/:type" element={<List />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/add" element={<Add />} />
          </Routes>
        </ThemeProvider>
      </Container>
    </>
  );
}

export default App;
