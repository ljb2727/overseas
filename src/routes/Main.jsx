import { React } from "react";
import { useSelector } from "react-redux";
import MainSearch from "components/main/MainSearch";
import { styled } from "@mui/system";
import { Button, Stack, Link } from "@mui/material";

const CustomButton = styled(Button)``;

function Main() {
  return (
    <>
      {/* 검색메뉴 */}
      <MainSearch />
      <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
        <CustomButton fullWidth>분양 매물</CustomButton>
        <Button fullWidth>개인 매물</Button>
      </Stack>
      <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
        <Link href="#">#최근 본</Link>
        <Link href="#">#관심 등록한</Link>
      </Stack>
    </>
  );
}

export default Main;
