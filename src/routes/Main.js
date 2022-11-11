import React, { useState } from "react";
import MainSerchSubmit from "components/main/MainSerchSubmit";
import MainSlider from "components/main/MainSlider";
import { Button, Stack, Link, Box } from "@mui/material";
import Container from "@mui/material/Container";
import SubTitle from "components/common/SubTitle";
import XgolfViewHistory from "components/main/XgolfViewHistory";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import TabMenu from "components/common/TabMenu";

function Main() {
  const navigate = useNavigate();
  const { jsonLoading } = useSelector((state) => state);

  return (
    <>
      <Container maxWidth="sm" id="container">
        {/* 검색메뉴 */}
        <TabMenu />
        <Box className="section first">
          <Stack spacing={1}>
            <MainSerchSubmit />
            {/* <Stack direction="row" spacing={1}>
              <Button fullWidth onClick={() => navigate("/list/type1")}>
                분양 매물
              </Button>
              <Button fullWidth onClick={() => navigate("/list/type2")}>
                개인 매물
              </Button>
            </Stack> */}
            {/* <Stack direction="row" spacing={1}>
              <Link href="#">#최근 본</Link>
              <Link href="#">#관심 등록한</Link>
            </Stack> */}
          </Stack>
        </Box>
        <Box className="section" sx={{ margin: "50px 0 25px !important" }}>
          <SubTitle fontSize="20px" ml="25px">
            추천 회원권
          </SubTitle>
          <MainSlider />
        </Box>

        <Box className="banner_box">
          <img
            src="https://image.xgolf.com/file/2022/1109/202211096061818ljb2727.png"
            alt=""
          />
        </Box>

        {/* 최근 본 회원권 */}

        {jsonLoading && <XgolfViewHistory />}

        {/* <Box className="section">
          <SubTitle>회원권 팔기</SubTitle>
          <Button
            variant="contained"
            fullWidth
            color="green"
            size="large"
            sx={{ mt: 1 }}
            onClick={() => navigate("/add")}
          >
            해외 회원권 매물 등록
          </Button>
        </Box> */}
      </Container>
    </>
  );
}

export default Main;
