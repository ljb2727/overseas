import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { styled } from "@mui/material/styles";
import { Chip, Typography, Stack, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SubTitle from "components/common/SubTitle";
import { useSelector } from "react-redux";
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
  const { offer } = useSelector((store) => store);
  const navigation = useNavigate();
  const [historyArray, setHistoryArray] = useState(
    JSON.parse(localStorage.getItem("xgolfViewHistory"))
  );

  const offerId = offer.map((el) => el.id);
  //없어진 아이디 삭제를 위해 현재 아이디와 히스토리 아이디 비교 후 중복값만 보유
  const realArray = offerId.filter((item) => historyArray.includes(item));
  const setArray = [];
  if (historyArray !== null) {
    console.log(realArray);
    console.log(historyArray);
    for (const item of realArray) {
      setArray.push(offer.find((e) => e.id === item));
    }
    localStorage.setItem("xgolfViewHistory", JSON.stringify(realArray));
  }

  return (
    <>
      {historyArray !== null && (
        <Box className="section">
          <SubTitle>최근 본 회원권</SubTitle>

          <CusSwiper
            slidesPerView={1.125}
            spaceBetween={10}
            loop={true}
            // autoplay={{
            //   delay: 15000,
            //   disableOnInteraction: false,
            // }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {setArray.map((el, index) => {
              return (
                <SwiperSlide
                  onClick={() => navigation(`/detail/${el.id}`)}
                  key={el.id}
                >
                  <div className="img">
                    <img src={`${el.img[0]}`} alt="" />
                  </div>
                  <Stack direction="column" spacing={0.5} sx={{ mt: 1 }}>
                    <div>
                      <Chip
                        label={`${el.country} ${el.region}`}
                        color="primary"
                        size="small"
                      />
                    </div>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: "bold" }}
                    >{`${el.label}`}</Typography>
                    <Typography
                      variant="body1"
                      color="text.blue"
                      sx={{ fontWeight: "bold" }}
                    >
                      {`${el.commaPrice}만원~`}
                    </Typography>
                    <Typography variant="body1" color="text.gray">
                      {`${el.personal ? "개인" : "분양"}`}
                    </Typography>
                  </Stack>
                </SwiperSlide>
              );
            })}
          </CusSwiper>
        </Box>
      )}
    </>
  );
}
