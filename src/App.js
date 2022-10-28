import { ThemeProvider } from "@mui/material/styles";
import { Routes, Route, Link } from "react-router-dom";
import theme from "theme";
import Main from "./routes/Main";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
