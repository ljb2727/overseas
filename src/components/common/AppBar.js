import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useNavigate } from "react-router-dom";
export default function MainAppBar({ title = "해외 골프장 회원권" }) {
  const navigate = useNavigate();
  return (
    <Box>
      <AppBar
        position="fixed"
        color="white"
        elevation={0}
        sx={{ borderBottom: "1px solid #cccccc" }}
      >
        <Toolbar variant="dense" sx={{ p: 0 }}>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            onClick={() => navigate(-1)}
          >
            <ChevronLeftIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "center", pr: 4 }}
          >
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
