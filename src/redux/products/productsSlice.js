import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
  products: [],
};

export let getProducts = createAsyncThunk(
  "products/getProducts",
  async function () {
    let { data } = await axios.get("https://ecommerce.routemisr.com/api/v1/products");
    return data;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});



export let productsReducer = productsSlice.reducer;
