import React, { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useNavigate, useParams, useLocation } from "react-router-dom";

export default function TabMenu() {
  const navigate = useNavigate();
  const params = useParams();
  const { pathname } = useLocation();
  const [value, setValue] = useState(false);

  const watchTab = () => {
    if (params.type === "type1") {
      setValue("분양");
    } else if (params.type === "type2") {
      setValue("개인");
    } else if (pathname === "/add") {
      setValue("등록");
    } else {
      setValue("검색");
    }
  };

  useEffect(() => {
    watchTab();
  });

  const handleChange = (event, newValue) => {
    switch (newValue) {
      case "분양":
        navigate("/list/type1");
        break;
      case "개인":
        navigate("/list/type2");
        break;
      case "검색":
        navigate("/");
        break;
      case "등록":
        navigate("/add");
        break;

      default:
        break;
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        variant="fullWidth"
        onChange={handleChange}
        TabIndicatorProps={{ style: { transition: "none" } }}
        sx={{ borderBottom: "1px solid #ccc" }}
      >
        <Tab value="검색" label="검색" />
        <Tab value="분양" label="분양" />
        <Tab value="개인" label="개인" />
        <Tab value="등록" label="등록" />
      </Tabs>
    </Box>
  );
}
