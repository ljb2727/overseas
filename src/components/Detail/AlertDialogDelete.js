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

export default function AlertDialogDelete() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const onClickModalOpen = () => {
    setModalOpen(true);
  };

  const onClickModalClose = () => {
    setModalOpen(false);
  };

  const onClickDelete = () => {
    setModalOpen(false);
    console.log("삭제요");
  };
  return (
    <>
      <Button
        onClick={onClickModalOpen}
        fullWidth
        variant="contained"
        color="green"
        size="large"
        sx={{ borderRadius: 2 }}
      >
        삭제 하기
      </Button>
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
          알림
        </DialogTitle>

        <p
          style={{
            textAlign: "left",
            display: "block",
            paddingTop: "20px",
            fontSize: "14px",
            padding: "0 10px",
          }}
        >
          삭제 내용은 복구 되지 않습니다. <br />
          삭제 하시겠습니까?
        </p>
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
          <Button variant="contained" color="green" onClick={onClickDelete}>
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
