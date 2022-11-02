import React, { useState, useRef, useEffect } from "react";
import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Badge from "@mui/material/Badge";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

function ImageBox({ src, onClickRemove }) {
  return (
    <>
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            width: "100px",
            height: "100px",
            "& img": {
              width: "100%",
              height: "100%",
            },
          }}
        >
          <img src={src} alt="" />
        </Box>
        <Badge
          sx={{
            background: "#fff",
            position: "absolute",
            top: "6px",
            right: "6px",
          }}
          badgeContent={
            <CancelOutlinedIcon
              sx={{
                background: "#fff",
                overflow: "hidden",
                borderRadius: "100%",
              }}
            />
          }
          onClick={() => onClickRemove(src)}
        />
      </Box>
    </>
  );
}
function ImageUpload({ max = 1 }) {
  const [imageList, setImageList] = useState([]);

  const onClickRemove = (src) => {
    const copyImageList = [...imageList];
    setImageList(copyImageList.filter((e) => src !== e));
    //setImageList([]);
  };
  const onChange = (event) => {
    if (event.currentTarget.files?.[0]) {
      const file = event.currentTarget.files[0];

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = (event) => {
        setImageList((prev) => [...prev, event.target?.result]);
      };
    }
  };

  return (
    <>
      {imageList.map((el, index) => {
        return <ImageBox src={el} key={index} onClickRemove={onClickRemove} />;
      })}
      {imageList.length < max && (
        <Button component="label" sx={{ width: "100px", height: "100px" }}>
          <AddIcon />
          <input
            hidden
            accept="image/*"
            //multiple
            type="file"
            onChange={(event) => onChange(event)}
          />
        </Button>
      )}
    </>
  );
}

export default ImageUpload;
