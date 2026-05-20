import { createSlice } from "@reduxjs/toolkit";
import { mockProducts } from "../data/mockData";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: mockProducts, 
  },
  reducers: {
    addProduct: (state, action) => {
      state.items.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.items = state.items.filter((p) => p.id !== action.payload);
    },
    toggleStatus: (state, action) => {
      const product = state.items.find((p) => p.id === action.payload);
      if (product) {
        product.status =
          product.status === "Available" ? "Out of Stock" : "Available";
      }
    },
  },
});

export const { addProduct, deleteProduct, toggleStatus } = productsSlice.actions;
export default productsSlice.reducer;
