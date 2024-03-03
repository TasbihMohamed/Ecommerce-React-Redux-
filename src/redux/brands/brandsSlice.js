import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
  brands: [],
};

export let getBrands = createAsyncThunk(
  "brands/getBrands",
  async function () {

    let response = await axios.get(
      "https://ecommerce.routemisr.com/api/v1/brands"
    );
    return response.data;
  }
);

export const brandsSlice = createSlice({
  name: "brands",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBrands.fulfilled, (state, action) => {
      state.brands = action.payload;
    });
  },
});



export let brandsReducer = brandsSlice.reducer;
