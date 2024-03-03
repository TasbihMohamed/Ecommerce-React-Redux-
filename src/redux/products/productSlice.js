import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
  product: [],
};

export let getSpecificProduct = createAsyncThunk(
  "product/getSpecificProduct",
  async function (id) {
    let { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/products/${id}`
    );
    return data;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSpecificProduct.fulfilled, (state, action) => {
      state.product = action.payload;
    });
  },
});

export let productReducer = productSlice.reducer;
