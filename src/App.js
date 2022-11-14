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
import { GetData, Test } from "store/api.js";
import SearchList from "routes/SearchList";
function App() {
  return (
    <>
      <CssBaseline />
      <Container disableGutters maxWidth="sm">
        <ThemeProvider theme={theme}>
          <GetData />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/list/:type" element={<List />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/add" element={<Add />} />
            <Route path="/search/:keyword" element={<SearchList />} />
            <Route path="*" element={<Main />} />
          </Routes>
        </ThemeProvider>
      </Container>
    </>
  );
}

export default App;
