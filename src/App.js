import { ThemeProvider } from "@mui/material/styles";
import { Routes, Route, Link } from "react-router-dom";
import theme from "theme";
import CssBaseline from "@mui/material/CssBaseline";
import "./scss/style.scss";

import Main from "routes/Main";
import List from "routes/List";
import Detail from "routes/Detail";

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/list/:type" element={<List />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
