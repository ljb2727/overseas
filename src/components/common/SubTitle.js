import React from "react";
import { Typography } from "@mui/material";

export function SubTitle(props) {
  return (
    <Typography
      variant="subtitle1"
      sx={{
        fontWeight: "bold",
        fontSize: "1rem",
        mb: "10px",
        lineHeight: "1",
      }}
    >
      {props.children}
    </Typography>
  );
}

export default SubTitle;
