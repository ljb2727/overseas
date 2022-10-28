import { configureStore, createSlice } from "@reduxjs/toolkit";
import offer_list from "store/offer_list";
let offer = createSlice({
  name: "offer",
  initialState: offer_list,
});
export default configureStore({
  reducer: {
    offer: offer.reducer,
  },
});
