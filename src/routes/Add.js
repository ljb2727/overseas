import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import CommentIcon from "@mui/icons-material/Comment";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

import MenuItem from "@mui/material/MenuItem";
import { Divider, Grid, TextField, InputAdornment } from "@mui/material";
import SubTitle from "components/common/SubTitle.js";

export default function GutterlessList() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box component="form">
      <List dense sx={{ px: 1 }}>
        <SubTitle>회원권 정보</SubTitle>
        <ListItem disableGutters>
          <ListItemText>
            구분
            <Typography component="span" color="text.red">
              *
            </Typography>
          </ListItemText>
          <Box>
            <RadioGroup row name="radio-type-1">
              <FormControlLabel
                value="a"
                control={<Radio color="green" />}
                label="분양 매물"
                sx={{ m: 0 }}
              />
              <FormControlLabel
                value="b"
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
                id="demo-simple-select"
                value={age}
                label="국가 선택"
                onChange={handleChange}
                sx={{ minWidth: "120px" }}
              >
                <MenuItem value={1}>일본</MenuItem>
                <MenuItem value={2}>중국</MenuItem>
                <MenuItem value={3}>태국</MenuItem>
                <MenuItem value={4}>필리핀</MenuItem>
                <MenuItem value={5}>베트남</MenuItem>
                <MenuItem value={6}>말레이시아</MenuItem>
                <MenuItem value={7}>기타</MenuItem>
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
            <TextField
              size="small"
              placeholder="도시 또는 지역명 입력"
            ></TextField>
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
              placeholder="골프장명 또는 회원권명 입력"
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
              placeholder="골프장명 또는 회원권명 입력"
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
              placeholder="숫자만 입력. 예) 800, 1500등"
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
          <ListItemText>물결표시(~) 여부</ListItemText>
          <Box>
            <RadioGroup row name="radio-type-2">
              <FormControlLabel
                value="a"
                control={<Radio color="green" />}
                label="있음"
                sx={{ m: 0 }}
              />
              <FormControlLabel
                value="b"
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
          <ListItemText>회원권 안내</ListItemText>
          <TextField
            size="small"
            fullWidth
            multiline
            rows={7}
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
            <TextField size="small" placeholder="업체명 입력"></TextField>
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
            <TextField size="small" placeholder="이름 입력"></TextField>
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
          <ListItemText>골프장 소개</ListItemText>
          <TextField
            size="small"
            fullWidth
            multiline
            rows={6}
            placeholder={`내용을 입력 하세요.
※ 입력 추천 정보
1. 규모 : 18홀 72파 6,999야드 등
2. 부대시설 : 골프텔, 드라이빙레인지, 레스토랑, 프로샵 등
3. 위치 : 나리타 공항에서 1시간 10분 등
4. 기타정보`}
          ></TextField>
        </ListItem>

        <ListItem disableGutters>
          <ListItemText>썸네일 이미지 등록</ListItemText>
          <Box>
            <TextField
              size="small"
              type="number"
              placeholder="숫자만 입력 예 01012345678"
            ></TextField>
          </Box>
        </ListItem>
      </List>
    </Box>
  );
}
