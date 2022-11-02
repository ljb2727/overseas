import React from "react";
import { Typography } from "@mui/material";

export function SubTitle(props) {
  return (
    <Typography
      variant="subtitle1"
      sx={{ fontWeight: "bold", fontSize: "1rem" }}
    >
      {props.children}
    </Typography>
  );
}

export default SubTitle;
