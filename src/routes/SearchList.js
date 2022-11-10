import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AppBar from "components/common/AppBar.js";
export default function SearchList() {
  const { keyword } = useParams();
  console.log(keyword);
  return (
    <>
      <AppBar />
      go
    </>
  );
}
