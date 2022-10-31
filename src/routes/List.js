import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { Tabs, Tab, Box, styled, Chip, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

export default function List() {
  const { offer } = useSelector((state) => state);
  const [copyOffer, setCopyOffer] = useState([...offer]);
  const [mainTab, setMainTab] = useState("분양매물");
  const [subTab, setSubTab] = useState("일본");

  const params = useParams();
  useEffect(() => {
    if (params.type === "type1") {
      setMainTab("분양매물");
    } else {
      setMainTab("개인매물");
    }
  }, []);
  useEffect(() => {
    console.log("탭 이펙트");
    filterItem(mainTab, subTab);
  }, [mainTab, subTab]);

  const filterItem = (mainTab, subTab) => {
    if (mainTab === "개인매물") {
      setCopyOffer(offer.filter((el) => el.personal));
    } else if (mainTab === "분양매물") {
      setCopyOffer(offer.filter((el) => !el.personal));
    }

    switch (subTab) {
      case "일본":
        console.log(`@@@${mainTab} ${subTab}`);
        console.log(copyOffer);
        break;
      case "중국":
        console.log("df");
        break;
      case "태국":
        console.log("df");
        break;
      case "필리핀":
        console.log("df");
        break;
      case "베트남":
        console.log("df");
        break;
      case "말레이시아":
        console.log("df");
        break;

      default:
        break;
    }
  };

  const mainChange = (event, newValue) => {
    setMainTab(newValue);
  };

  const subChange = (event, newValue) => {
    setSubTab(newValue);
  };

  const StyleItem = styled(Box)`
    padding: 8px;
    & .img_box {
      position: relative;
      overflow: hidden;
      border-radius: 8px;
      width: 120px;
      height: 120px;
      & img {
        vertical-align: top;
        width: 100%;
        height: 100%;
      }

      & p {
        display: flex;
        position: absolute;
        margin: 0;
        padding: 0;
        background: #000;
        color: #fff;
        width: 1.4em;
        height: 1.4em;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        border-bottom-right-radius: 4px;
      }
    }

    & .text_box {
      overflow: hidden;
    }
  `;

  function Item({
    id,
    index,
    label,
    price,
    personal,
    country,
    region,
    thumbnail,
  }) {
    return (
      <StyleItem data-personal={personal} data-id={id}>
        <Stack direction="row" spacing={1}>
          <Box>
            <Box className="img_box">
              <p className="count">{index + 1}</p>
              <img src={thumbnail} alt={label} />
            </Box>
          </Box>

          <Box className="text_box">
            <Stack direction="column" spacing={0.5} sx={{ mt: 1 }}>
              <div>
                <Chip
                  label={`${country} ${region}`}
                  color="primary"
                  size="small"
                />
              </div>
              <Typography variant="body1" noWrap>
                {label}
              </Typography>
              <Typography variant="body1" color="text.blue">
                {`${price}만원~`}
              </Typography>

              {personal ? "개인 매물" : "분양 매물"}
            </Stack>
          </Box>
        </Stack>
      </StyleItem>
    );
  }

  return (
    <>
      <Tabs value={mainTab} variant="fullWidth" onChange={mainChange}>
        <Tab value="분양매물" label="분양 매물" />
        <Tab value="개인매물" label="개인 매물" />
      </Tabs>
      <Tabs
        value={subTab}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        onChange={subChange}
        sx={{
          minHeight: "30px",
          borderBottom: "1px solid #cccccc",
          "& button": {
            //background: "blue",
            minWidth: "2em",
            minHeight: "30px",
            padding: "0.5em 1em",
          },
        }}
      >
        <Tab value="일본" label="일본" />
        <Tab value="중국" label="중국" />
        <Tab value="태국" label="태국" />
        <Tab value="필리핀" label="필리핀" />
        <Tab value="베트남" label="베트남" />
        <Tab value="말레이시아" label="말레이시아" />
        <Tab value="테스트1" label="테스트1" />
        <Tab value="테스트2" label="테스트2" />
      </Tabs>

      {copyOffer.map((el, index) => {
        return (
          <Item
            index={index}
            key={el.id}
            id={el.id}
            label={el.label}
            price={el.price}
            personal={el.personal}
            country={el.country}
            region={el.region}
            thumbnail={el.thumbnail}
          />
        );
      })}
    </>
  );
}
