import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { styled } from "@mui/material/styles";

import { Chip, Typography, Stack } from "@mui/material";

const CusSwiper = styled(Swiper)`
  background-color: white;
  & .img {
    overflow: hidden;
    border-radius: 4px;
  }
  & .swiper-slide {
    overflow: hidden;
    border-radius: 5px;
    & img {
      width: 100%;
      height: 40vw;
      vertical-align: top;
    }
  }
`;

export default function MainSlider() {
  return (
    <>
      <CusSwiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        // autoplay={{
        //   delay: 15000,
        //   disableOnInteraction: false,
        // }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="img">
            <img
              src="https://image.xgolf.com/file/2022/1021/2022102152988021leesy.jpg/dims/resize/311x161"
              alt=""
            />
          </div>
          <Stack direction="column" spacing={0.5} sx={{ mt: 1 }}>
            <div>
              <Chip label="일본 오이타" color="primary" size="small" sx={{}} />
            </div>
            <Typography variant="body1">도쿄 윈저파크 컨트리클럽</Typography>
            <Typography variant="body1" color="text.blue">
              1,2000만원~
            </Typography>
          </Stack>
        </SwiperSlide>
      </CusSwiper>
    </>
  );
}
