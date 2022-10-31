import React from "react";
import { Typography } from "@mui/material";

export default function SuTitle(props) {
  return (
    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
      {props.children}
    </Typography>
  );
}
