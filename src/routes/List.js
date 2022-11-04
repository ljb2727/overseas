import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import {
  Tabs,
  Tab,
  Box,
  styled,
  Chip,
  Stack,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

export default function List() {
  const { offer, tabArray } = useSelector((state) => state);
  const { mainTabArray, subTabArray } = tabArray;
  const [copyOffer, setCopyOffer] = useState([...offer]);
  const [mainTab, setMainTab] = useState(mainTabArray[0]);
  const [subTab, setSubTab] = useState(subTabArray[0]);
  const params = useParams();

  const navigate = useNavigate();
  useEffect(() => {
    if (params.type === "type1") {
      setMainTab(mainTabArray[0]);
    } else {
      setMainTab(mainTabArray[1]);
    }
  }, []);
  useEffect(() => {
    console.log("탭 이펙트");
    filterItem(mainTab, subTab);
  }, [mainTab, subTab]);

  const filterItem = (mainTab, subTab) => {
    console.log(`@@@${mainTab} ${subTab}`);
    if (mainTab === mainTabArray[0]) {
      setCopyOffer(offer.filter((el) => !el.personal && el.country == subTab));
    } else {
      setCopyOffer(offer.filter((el) => el.personal && el.country == subTab));
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
          <Box onClick={() => navigate(`/detail/${id}`)}>
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

              {personal ? mainTabArray[1] : mainTabArray[0]}
            </Stack>
          </Box>
        </Stack>
      </StyleItem>
    );
  }

  return (
    <>
      <Tabs value={mainTab} variant="fullWidth" onChange={mainChange}>
        <Tab value={mainTabArray[0]} label={mainTabArray[0]} />
        <Tab value={mainTabArray[1]} label={mainTabArray[1]} />
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
        {subTabArray.map((el, index) => {
          return <Tab value={el} label={el} key={index} />;
        })}
      </Tabs>

      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>

      {copyOffer.length ? (
        copyOffer.map((el, index) => {
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
        })
      ) : (
        <Box
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          매물이 없습니다.
        </Box>
      )}
    </>
  );
}
