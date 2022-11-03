import React, { useState } from "react";
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

export default function PreviewDialog({ formValue, handleClose, onSubmit }) {
  //const { id } = useParams();
  // 구분: form.offerType.value,
  // 국가: form.country.value,
  // 도시: form.city.value,
  // 골프장명: form.offerName.value,
  // 입회금: form.offerPrice.value,
  // 물결표시: form.priceWave.value,
  // 회원권안내: form.offerInfo.value,
  // 업체명: form.companyName.value,
  // 담당자명: form.userName.value,
  // 연락처: form.userPhone.value,
  // 골프장소개: form.golfInfo.value,
  // 썸네일: JSON.parse(form.imageList1.value),
  // 상세이미지: JSON.parse(form.imageList2.value),
  // 등록일: new Date().toISOString().substr(0, 10).replaceAll("-", "."),
  const {
    구분,
    국가,
    도시,
    골프장명,
    입회금,
    물결표시,
    회원권안내,
    업체명,
    담당자명,
    연락처,
    골프장소개,
    썸네일,
    상세이미지,
    등록일,
  } = formValue();

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
          {상세이미지.map((e, i) => {
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
              <Chip label={`${국가} ${도시}`} color="primary" size="small" />
            </div>
            <Typography variant="body1" noWrap>
              {골프장명}
            </Typography>
            <Typography variant="body1" color="text.blue">
              {`${입회금}만원`}
              {물결표시 === "true" && "~"}
            </Typography>

            <Stack direction="row" justifyContent="space-between">
              {구분}
              {/* <Typography variant="body2">
                {target.personal
                  ? tabArray.mainTabArray[1]
                  : tabArray.mainTabArray[0]}
              </Typography> */}
              <Typography variant="body2">{`등록일 ${등록일}`}</Typography>
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
        {골프장소개 && (
          <dl>
            <dt>
              <strong>골프장 정보</strong>
            </dt>
            <dd>
              <pre dangerouslySetInnerHTML={{ __html: 골프장소개 }}></pre>
            </dd>
          </dl>
        )}
        {회원권안내 && (
          <dl>
            <dt>
              <strong>회원권 정보</strong>
            </dt>
            <dd>
              <pre dangerouslySetInnerHTML={{ __html: 회원권안내 }}></pre>
            </dd>
          </dl>
        )}
        <dl>
          <dt>
            <strong>등록자 정보</strong>
          </dt>
          <dd>
            <ul className="user_info">
              <li>
                <strong>담당자명</strong>
                <span>{담당자명}</span>
              </li>
              <li>
                <strong>연락처</strong>
                <a href={`tel:${연락처}`}>{연락처}</a>
              </li>
            </ul>
          </dd>
        </dl>
        <Stack direction="row" spacing={1} sx={{ m: 1 }}>
          <Button fullWidth onClick={() => handleClose()}>
            수정
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="green"
            onClick={() => onSubmit()}
          >
            등록
          </Button>
        </Stack>
      </DetailBox>
    </>
  );
}
