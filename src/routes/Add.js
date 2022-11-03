import React, { useState } from "react";
import {
  Box,
  MenuItem,
  Select,
  Stack,
  InputLabel,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  Divider,
  FormControl,
  Alert,
  TextField,
  InputAdornment,
  Snackbar,
} from "@mui/material";
import SubTitle from "components/common/SubTitle.js";
import ImageUpload from "components/add/ImageUpload";
import Preview from "components/add/Preview";
import { useSelector } from "react-redux";

export default function Add() {
  const [age, setAge] = useState("");
  const [snackOpen, setSnackOpen] = useState(false);

  const { tabArray } = useSelector((state) => state);

  const formValue = () => {
    const form = document.getElementById("addForm");
    const formValue = {
      구분: form.offerType.value,
      국가: form.country.value,
      도시: form.city.value,
      골프장명: form.offerName.value,
      입회금: form.offerPrice.value,
      물결표시: form.priceWave.value,
      회원권안내: form.offerInfo.value,
      업체명: form.companyName.value,
      담당자명: form.userName.value,
      연락처: form.userPhone.value,
      골프장소개: form.golfInfo.value,
      썸네일: JSON.parse(form.imageList1.value),
      상세이미지: JSON.parse(form.imageList2.value),
      등록일: new Date().toISOString().substr(0, 10).replaceAll("-", "."),
    };
    const { 구분, 국가, 도시, 골프장명, 입회금, 담당자명, 연락처 } = formValue;
    if (
      !구분 ||
      !국가 ||
      !도시 ||
      !골프장명 ||
      !입회금 ||
      !담당자명 ||
      !연락처
    ) {
      formValue.필수입력필요 = true;
    } else {
      formValue.필수입력필요 = false;
    }

    return formValue;
  };

  const checkRequired = () => {
    //const form = docuemnt.
    const { 필수입력필요 } = formValue();

    //필수 체크
    if (필수입력필요) {
      setSnackOpen(true);
      console.log(formValue());
      return true;
    }
  };

  const onSubmit = (event) => {
    if (checkRequired()) {
      return;
    }
    console.log("submit");
  };

  const handleChange = (event) => {
    //국가 변경
    setAge(event.target.value);
  };
  return (
    <Box
      component="form"
      id="addForm"
      sx={{
        ".no_basis": {
          flexBasis: "0 !important",
        },
        "& .MuiListItemText-root": {
          flex: "0 0 20vw",
        },
        "& .MuiListItem-root": {
          justifyContent: "space-between",
          gap: "10px",
        },
        "& .MuiListItemText-root + .MuiBox-root": {
          flexGrow: "1",
        },
        "& .MuiFormGroup-root": {
          justifyContent: "end",
        },
      }}
    >
      <List
        dense
        sx={{
          px: 1,
        }}
      >
        <SubTitle>회원권 정보</SubTitle>
        <ListItem disableGutters>
          <ListItemText>
            구분
            <Typography component="span" color="text.red">
              *
            </Typography>
          </ListItemText>
          <Box>
            <RadioGroup row name="offerType" defaultValue="분양 매물">
              <FormControlLabel
                required
                value="분양 매물"
                control={<Radio color="green" />}
                label="분양 매물"
                sx={{ m: 0 }}
              />
              <FormControlLabel
                value="개인 매물"
                control={<Radio color="green" />}
                label="개인 매물"
                sx={{ m: 0, ml: 2 }}
              />
            </RadioGroup>
          </Box>
        </ListItem>
        <ListItem disableGutters>
          <ListItemText>
            국가
            <Typography component="span" color="text.red">
              *
            </Typography>
          </ListItemText>
          <Box>
            <FormControl fullWidth size="small">
              <InputLabel id="demo-simple-select-label">국가 선택</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                value={age}
                label="국가 선택"
                onChange={handleChange}
                name="country"
                sx={{ minWidth: "120px" }}
              >
                {tabArray.subTabArray.map((el, index) => {
                  return (
                    <MenuItem value={el} key={index}>
                      {el}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
        </ListItem>
        <ListItem disableGutters>
          <ListItemText>
            도시/지역
            <Typography component="span" color="text.red">
              *
            </Typography>
          </ListItemText>
          <Box>
            <FormControl fullWidth>
              <TextField
                size="small"
                fullWidth
                placeholder="도시 또는 지역명 입력"
                name="city"
              ></TextField>
            </FormControl>
          </Box>
        </ListItem>
        <ListItem disableGutters>
          <ListItemText>
            골프장명/회원권명
            <Typography component="span" color="text.red">
              *
            </Typography>
          </ListItemText>
          <Box>
            <TextField
              size="small"
              fullWidth
              placeholder="골프장명 또는 회원권명 입력"
              name="offerName"
            ></TextField>
          </Box>
        </ListItem>

        <ListItem disableGutters>
          <ListItemText>
            입회금(VAT포함)
            <Typography component="span" color="text.red">
              *
            </Typography>
          </ListItemText>
          <Box>
            <TextField
              size="small"
              fullWidth
              placeholder="숫자만 입력. 예) 800, 1500등"
              name="offerPrice"
              type="number"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">만원</InputAdornment>
                ),
              }}
            ></TextField>
            <Typography
              variant="body2"
              sx={{ textAlign: "right", fontSize: "0.725rem" }}
            >
              ※ 입회금 최저가 1개만 입력
            </Typography>
          </Box>
        </ListItem>
        <ListItem disableGutters>
          <ListItemText sx={{ whiteSpace: "nowrap" }}>
            물결표시(~) 여부
          </ListItemText>
          <Box>
            <RadioGroup row name="priceWave" defaultValue="true">
              <FormControlLabel
                value="true"
                control={<Radio color="green" />}
                label="있음"
                sx={{ m: 0 }}
              />
              <FormControlLabel
                value="false"
                control={<Radio color="green" />}
                label="없음"
                sx={{ m: 0, ml: 2 }}
              />
            </RadioGroup>
            <Typography
              variant="body2"
              sx={{ textAlign: "right", fontSize: "0.725rem" }}
            >
              예) 800만원~
            </Typography>
          </Box>
        </ListItem>
        <ListItem
          disableGutters
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <ListItemText className="no_basis">회원권 안내</ListItemText>
          <TextField
            size="small"
            fullWidth
            multiline
            rows={7}
            name="offerInfo"
            placeholder={`내용을 입력 하세요.
※ 입력 추천 정보
1. 회원권 등급 : GOLD, VIP 등
2. 회원적용 : 기명1인+무기명1인 등
3. 입회금 : 880만원, 1,320만원 등
4. 기간   5. 연회비   6. 양도/양수
7. 회원 일일 체류비   8. 회원 혜택`}
          ></TextField>
        </ListItem>
      </List>
      <Divider />
      <List dense sx={{ px: 1 }}>
        <SubTitle>등록자 정보</SubTitle>
        <ListItem disableGutters>
          <ListItemText>업체명</ListItemText>
          <Box>
            <TextField
              size="small"
              placeholder="업체명 입력"
              fullWidth
              name="companyName"
            ></TextField>
          </Box>
        </ListItem>
        <ListItem disableGutters>
          <ListItemText>
            담당자명
            <Typography component="span" color="text.red">
              *
            </Typography>
          </ListItemText>
          <Box>
            <TextField
              size="small"
              placeholder="이름 입력"
              fullWidth
              name="userName"
            ></TextField>
          </Box>
        </ListItem>
        <ListItem disableGutters>
          <ListItemText>
            연락처
            <Typography component="span" color="text.red">
              *
            </Typography>
          </ListItemText>
          <Box>
            <TextField
              size="small"
              type="number"
              placeholder="숫자만 입력 예 01012345678"
              name="userPhone"
              fullWidth
            ></TextField>
          </Box>
        </ListItem>
      </List>
      <Divider />
      <List dense sx={{ px: 1 }}>
        <SubTitle>골프장 정보 </SubTitle>
        <ListItem
          disableGutters
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <ListItemText className="no_basis">골프장 소개</ListItemText>
          <TextField
            size="small"
            fullWidth
            multiline
            rows={6}
            name="golfInfo"
            placeholder={`내용을 입력 하세요.
※ 입력 추천 정보
1. 규모 : 18홀 72파 6,999야드 등
2. 부대시설 : 골프텔, 드라이빙레인지, 레스토랑, 프로샵 등
3. 위치 : 나리타 공항에서 1시간 10분 등
4. 기타정보`}
          ></TextField>
        </ListItem>

        <ListItem
          disableGutters
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "0 !important",
          }}
        >
          <ListItemText className="no_basis">썸네일 이미지 등록</ListItemText>
          <Box sx={{ display: "flex" }}>
            <ImageUpload id="imageList1" />
          </Box>
        </ListItem>

        <ListItem
          disableGutters
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "0 !important",
          }}
        >
          <ListItemText className="no_basis">
            상세 이미지 등록 (최대 5장 가능)
          </ListItemText>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
            <ImageUpload max="5" id="imageList2" />
          </Box>
        </ListItem>
      </List>
      <Divider />
      <Box sx={{ p: 1 }}>
        <Typography sx={{ fontSize: 14 }}>
          ※ XGOLF는 회원권 페이지에서 발생하는 사고 및 해당 게시물 내 회원 간
          이루어진 거래에 대해서는 어떠한 법적 책임도 지지 않음을 알려드립니다.
          <br />
          ※해외 회원권 등록 시 연락처가 노출 됨을 동의 합니다.
          <br />※ 허위 글,유해광고, 홍보, 상이한 게시물 등으로 등록된 내용은
          관리자 권한으로 동의 없이 삭제 및 이용이 제한될 수 있습니다.
        </Typography>
      </Box>
      <Stack direction="row" spacing={1} sx={{ m: 1 }}>
        <Preview
          formValue={formValue}
          checkRequired={checkRequired}
          onSubmit={onSubmit}
        />

        <Button
          fullWidth
          color="green"
          variant="contained"
          onClick={() => onSubmit()}
        >
          동의 후 등록
        </Button>
      </Stack>

      <Snackbar
        open={snackOpen}
        autoHideDuration={2000}
        onClose={() => setSnackOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Alert
          onClose={() => setSnackOpen(false)}
          severity="error"
          sx={{ width: "100%" }}
        >
          필수 입력 사항을 적어주세요.
        </Alert>
      </Snackbar>
    </Box>
  );
}
