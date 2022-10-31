import { configureStore, createSlice } from "@reduxjs/toolkit";
import offerList from "store/offerList";
let offer = createSlice({
  name: "offerList",
  initialState: offerList,
});
export default configureStore({
  reducer: {
    offer: offer.reducer,
  },
});
