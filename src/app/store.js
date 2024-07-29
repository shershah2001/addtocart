import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../components/features/cartSlice";

export const store = configureStore({
  reducer: {
    allCart: cartReducer,
  },
});