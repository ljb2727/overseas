import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SubTitle from "components/common/SubTitle";
import { useSelector } from "react-redux";
import InfoText from "components/common/InfoText";
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
              const { country, region, label, commaPrice, personal } = el;
              return (
                <SwiperSlide
                  onClick={() => navigation(`/detail/${el.id}`)}
                  key={el.id}
                >
                  <div className="img">
                    <img src={`${el.img[0]}`} alt="" />
                  </div>
                  {/* 상품텍스트 컴퍼넌트 */}
                  <InfoText
                    mt="15px"
                    country={country}
                    region={region}
                    label={label}
                    commaPrice={commaPrice}
                    personal={personal}
                  />
                </SwiperSlide>
              );
            })}
          </CusSwiper>
        </Box>
      )}
    </>
  );
}
