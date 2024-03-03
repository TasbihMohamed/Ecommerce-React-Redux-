import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
  wishlist: [],
};

export let getWishlist = createAsyncThunk(
  "wishlist/getWishlist",
  async function ({ token }) {
    let { data } = await axios.get(
      "https://ecommerce.routemisr.com/api/v1/wishlist",
      {
        headers: {
          "token": token,
        },
      }
    );
    return data;
  }
);
export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getWishlist.fulfilled, (state, action) => {
      state.wishlist = action.payload;
    });
  },
});


export const wishlistReducer = wishlistSlice.reducer;
