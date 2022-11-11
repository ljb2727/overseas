import React, { useState, useEffect } from "react";
import { Badge, Divider, Stack, IconButton, Box, Button } from "@mui/material";

import AddPhotoAlternateSharpIcon from "@mui/icons-material/AddPhotoAlternateSharp";
import CancelIcon from "@mui/icons-material/Cancel";
const ImageBox = ({ src, onClickRemove }) => {
  return (
    <>
      <Box
        sx={{
          flexGrow: "0 !important",
          width: "72px",
          height: "72px",
          border: "1px solid #c4c4c4",
          borderRadius: "5px",
          position: "relative",
          "&::after": {
            content: '""',
            display: "block",
          },

          "& img": {
            width: "100%",
            height: "70px",
          },
          "& .MuiButtonBase-root": {
            p: 0,
            m: 0,
          },
        }}
      >
        <img src={src} alt="" />
        <Badge
          sx={{
            background: "#fff",
            position: "absolute",
            top: "6px",
            right: "6px",
          }}
          badgeContent={
            <CancelIcon
              sx={{
                background: "#fff",
                overflow: "hidden",
                borderRadius: "100%",
              }}
              onClick={() => onClickRemove(src)}
            />
          }
        />
      </Box>
    </>
  );
};
export default function MultipleImageUpload({ id, max = 5 }) {
  const [detailImgs, setDetailImgs] = useState([]);

  const onClickRemove = (src) => {
    console.log("remove");
    const copyImageList = [...detailImgs];
    setDetailImgs(copyImageList.filter((e) => src !== e));
  };

  const handleImageUpload = (e) => {
    const fileArr = e.target.files;
    let fileURLs = [];
    let file;
    let filesLength = fileArr.length > max ? max : fileArr.length;

    for (let i = 0; i < filesLength; i++) {
      file = fileArr[i];
      let reader = new FileReader();
      reader.onload = () => {
        fileURLs[i] = reader.result;
        setDetailImgs([...fileURLs]);
      };
      reader.readAsDataURL(file);
    }
    console.log(filesLength);
  };

  useEffect(() => {
    if (detailImgs !== undefined) {
      console.log(detailImgs);
    }
  }, [detailImgs]);
  return (
    <>
      <input type="hidden" id={id} value={JSON.stringify(detailImgs)} />
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        <Button
          component="label"
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "72px",
            height: "72px",
            backgroundColor: "#f5f5f5",
            border: "none",
          }}
        >
          <AddPhotoAlternateSharpIcon color="gray" />
          <input
            hidden
            type="file"
            multiple={max > 1 ? true : false}
            accept="image/jpg,image/png,image/jpeg,image/gif"
            onInput={handleImageUpload}
          />
          <span style={{ fontSize: "12px", whiteSpace: "nowrap" }}>
            {`${detailImgs.length}`} / {`${max}`}
          </span>
        </Button>
        {detailImgs !== undefined &&
          detailImgs.map((el, idx) => <ImageBox key={idx} src={el} />)}
      </Box>
    </>
  );
}
