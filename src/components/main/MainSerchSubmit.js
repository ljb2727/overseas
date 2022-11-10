import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
export default function MainSearchSubmit() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  const searchInput = (event) => {
    console.log(inputValue);
    navigate(`/search/${inputValue}`);
    event.preventDefault();
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          display: "flex",
          alignItems: "center",
          borderBottom: "1px solid #191919",
        }}
        onSubmit={(event) => searchInput(event)}
      >
        <IconButton
          type="button"
          sx={{ p: "10px" }}
          onClick={(event) => searchInput(event)}
        >
          <img src="https://image.xgolf.com/file/2022/1109/202211095762551ljb2727.png" />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="지역, 골프장, 회원권명 검색"
          value={inputValue}
          onInput={(event) => setInputValue(event.target.value)}
        />

        {inputValue !== "" && (
          <IconButton
            type="button"
            sx={{ p: "10px" }}
            onClick={(event) => setInputValue("")}
          >
            <CloseIcon />
          </IconButton>
        )}
      </Box>
    </>
  );
}
