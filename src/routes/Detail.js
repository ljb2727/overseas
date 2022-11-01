import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Divider,
  Box,
  styled,
  Stack,
  Chip,
  Typography,
  Button,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import AlertDialogSlide from "components/Detail/AlertDialogSlide";

export default function Detail() {
  const { id } = useParams();

  const { offer, tabArray } = useSelector((state) => state);
  const target = offer.find((e) => e.id === id);

  const [favorite, setFavorite] = useState(false);

  const onChangeFavorite = (e) => {
    setFavorite((state) => !state);
  };

  const DetailBox = styled(Box)`
    font-size: 0.875rem;
    & .price_box:not(:first-of-type) {
      margin-top: 10px;
    }
    & dl {
      display: flex;
      text-align: left;
      margin: 0.5rem;
      flex-direction: column;
    }
    & dt {
      flex-shrink: 0;
      font-weight: bold;

      & strong {
        position: relative;
        padding-left: 0.5em;
      }
      & strong:after {
        position: absolute;
        content: " ";
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        width: 0.2em;
        height: 0.2em;
        background: #000;
        border-radius: 100%;
        overflow: hidden;
      }
    }
    & dd {
      margin: 0;
      font-size: 0.75rem;
    }
    & .mySwiper {
      & img {
        width: 100%;
        height: 62vw;
      }
    }
    & .btn_box {
      margin: 1rem;
    }
    .user_info li {
      display: flex;
      & strong {
        flex-basis: 5em;
      }
    }
  `;

  return (
    <>
      <DetailBox>
        <Swiper
          pagination={{
            type: "fraction",
          }}
          autoplay={{
            delay: 12500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {target.img.map((e, i) => {
            return (
              <SwiperSlide key={i}>
                <img src={e} alt={i} className="swiper-lazy" />
                <div className="swiper-lazy-preloader"></div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Box sx={{ p: 1, position: "relative" }}>
          <Stack direction="column" spacing={0.5}>
            <div>
              <Chip
                label={`${target.country} ${target.region}`}
                color="primary"
                size="small"
              />
            </div>
            <Typography variant="body1" noWrap>
              {target.label}
            </Typography>
            <Typography variant="body1" color="text.blue">
              {`${target.price}만원~`}
            </Typography>

            <Stack direction="row" justifyContent="space-between">
              <Typography variant="body2">
                {target.personal
                  ? tabArray.mainTabArray[1]
                  : tabArray.mainTabArray[0]}
              </Typography>
              <Typography variant="body2">{`등록일 ${target.date}`}</Typography>
            </Stack>
          </Stack>

          <Button
            size="small"
            sx={{
              position: "absolute",
              top: "4px",
              right: 0,
              fontSize: "0.875rem",
              "& span": {
                marginLeft: "0",
              },
            }}
            variant="text"
            endIcon={
              favorite ? <FavoriteIcon color="red" /> : <FavoriteBorderIcon />
            }
            onClick={onChangeFavorite}
          >
            관심등록
          </Button>
        </Box>
        <Divider />
        {target.info.골프장정보 && (
          <dl>
            <dt>
              <strong>골프장 정보</strong>
            </dt>
            <dd
              dangerouslySetInnerHTML={{ __html: target.info.골프장정보 }}
            ></dd>
          </dl>
        )}
        {target.info.회원권정보 && (
          <dl>
            <dt>
              <strong>회원권 정보</strong>
            </dt>
            <dd
              dangerouslySetInnerHTML={{ __html: target.info.회원권정보 }}
            ></dd>
          </dl>
        )}
        {target.info.등록자 && (
          <dl>
            <dt>
              <strong>등록자 정보</strong>
            </dt>
            <dd>
              <ul className="user_info">
                <li>
                  <strong>담당자명</strong>
                  <span>{target.info.등록자[0]}</span>
                </li>
                <li>
                  <strong>연락처</strong>
                  <a href={`tel:${target.info.등록자[1]}`}>
                    {target.info.등록자[1]}
                  </a>
                </li>
              </ul>
            </dd>
          </dl>
        )}
        <AlertDialogSlide />
        {/* <Box sx={{ pb: "44px" }}>
          <Box sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
            <Button
              fullWidth
              variant="contained"
              color="green"
              size="large"
              sx={{ borderRadius: 0 }}
            >
              상담 문의
            </Button>
          </Box>
        </Box> */}
      </DetailBox>
    </>
  );
}
