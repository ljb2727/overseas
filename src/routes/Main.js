import { React } from "react";
import { useSelector } from "react-redux";
import MainSearch from "components/main/MainSearch";
import MainSlider from "components/main/MainSlider";
import { Button, Stack, Link, Box, Typography } from "@mui/material";

import SubTitle from "components/common/SubTitle";

function Main() {
  return (
    <>
      {/* 검색메뉴 */}
      <Box className="section">
        <Stack spacing={1}>
          <MainSearch />
          <Stack direction="row" spacing={1}>
            <Button fullWidth>분양 매물</Button>
            <Button fullWidth>개인 매물</Button>
          </Stack>
          <Stack direction="row" spacing={1}>
            <Link href="#">#최근 본</Link>
            <Link href="#">#관심 등록한</Link>
          </Stack>
        </Stack>
      </Box>

      <Box className="section">
        <SubTitle>추천 회원권</SubTitle>

        <MainSlider />
      </Box>

      <Box className="section">
        <SubTitle>회원권 팔기</SubTitle>
        <Button variant="contained" fullWidth color="green" sx={{ mt: 1 }}>
          해외 회원권 매물 등록
        </Button>
      </Box>
    </>
  );
}

export default Main;
