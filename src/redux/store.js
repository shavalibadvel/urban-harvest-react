import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import productsReducer from "./productsSlice";
//godolfoj
export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
  },
});
