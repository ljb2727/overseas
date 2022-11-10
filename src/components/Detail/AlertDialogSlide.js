import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const onClickModalOpen = () => {
    setModalOpen(true);
  };

  const onClickModalClose = () => {
    setModalOpen(false);
  };

  const [snack, setSnack] = React.useState(false);

  const onClickSnackClose = (state) => {
    setSnack(false);
  };

  const onClickSendMessage = () => {
    setModalOpen(false);
    setSnack(true);
  };
  return (
    <div>
      <Box>
        <Box sx={{ mx: "25px" }}>
          <Button
            onClick={onClickModalOpen}
            fullWidth
            variant="contained"
            color="green"
            size="large"
            sx={{ borderRadius: 2 }}
          >
            상담 문의
          </Button>
        </Box>
      </Box>
      <Dialog
        open={modalOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClickModalClose}
      >
        <DialogTitle
          sx={{
            padding: "20px 0 25px",
            fontWeight: "bold",
            textAlign: "center",
            fontSize: "18px",
            lineHeight: 1,
          }}
        >
          회원권 문의
        </DialogTitle>
        {/* <DialogContent dividers={scroll === "paper"}> */}
        <DialogContent
          sx={{
            backgroundColor: "#efefef",
            border: "1px solid #707070",
            mx: "10px",
            p: "25px !important",
          }}
        >
          <DialogContentText
            tabIndex={-1}
            sx={{ color: "#000000", fontSize: "14px;" }}
          >
            ▷문의 내용 회원권 : 퍼시픽 블루 골프&리조트 <br />
            입회금 : 880만원~ <br />
            <br />
            ▷문의자 정보 <br />
            이름 : 조우성 <br />
            휴대폰 : 01025965803
            <br />
            <br />
            회원권 문의 드립니다.
          </DialogContentText>
        </DialogContent>
        <strong
          style={{
            textAlign: "center",
            display: "block",
            paddingTop: "20px",
            fontSize: "14px",
          }}
        >
          위와 같이 발송 하시겠습니까?
        </strong>
        <DialogActions
          sx={{
            display: "flex",
            p: "10px",
            pt: "25px",

            "& button": {
              flexGrow: "1",
            },
          }}
        >
          <Button color="green" onClick={onClickModalClose}>
            취소
          </Button>
          <Button
            variant="contained"
            color="green"
            onClick={onClickSendMessage}
          >
            확인
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snack}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={3000}
        onClose={onClickSnackClose}
      >
        <Alert
          onClose={onClickSnackClose}
          severity="info"
          sx={{ width: "100%" }}
        >
          해당 회원권의 상담 문의 접수한 내역이 있습니다. or 접수 완료
        </Alert>
      </Snackbar>
    </div>
  );
}
