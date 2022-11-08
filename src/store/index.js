import { configureStore, createSlice } from "@reduxjs/toolkit";
import offerList from "store/offerList";
let offer = createSlice({
  name: "offerList",
  initialState: offerList,
  reducers: {
    changeOffer(state, action) {
      console.log(action.payload);
      return action.payload;
    },
  },
});

let tabArray = createSlice({
  name: "tabArray",
  initialState: {
    mainTabArray: ["분양매물", "개인매물"],
    subTabArray: [
      "일본",
      "중국",
      "태국",
      "필리핀",
      "베트남",
      "말레이시아",
      "테스트1",
      "테스트2",
    ],
  },
});

export default configureStore({
  reducer: {
    offer: offer.reducer,
    tabArray: tabArray.reducer,
  },
});

export let { changeOffer } = offer.actions;
