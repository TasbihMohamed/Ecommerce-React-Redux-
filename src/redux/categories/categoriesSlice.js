import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
  categories: [],
};

export let getCategories = createAsyncThunk(
  "categories/getCategories",
  async function () {
    // let { data } = await axios.get("https://ecommerce.routemisr.com/api/v1/categories");
    // return data;
    let response = await axios.get(
      "https://ecommerce.routemisr.com/api/v1/categories"
    );
    return response.data;
  }
);

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});



export let categoriesReducer = categoriesSlice.reducer;
