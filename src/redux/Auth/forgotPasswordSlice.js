import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
  forgotPassword: [],
  error: null,
  loading: false,
};

export let forgotPasswordRequest = createAsyncThunk(
  "forgotPassword/forgotPasswordRequest",
  async function ({ body }) {
    try {
      let response = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",
        body
      );
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

export const forgotPasswordSlice = createSlice({
  name: "forgotPassword",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(forgotPasswordRequest.fulfilled, (state, action) => {
      state.forgotPassword = action.payload;
      state.error = null;
      state.loading = false;
    });
    builder.addCase(forgotPasswordRequest.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
    builder.addCase(forgotPasswordRequest.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
  },
});

export let forgotPasswordReducer = forgotPasswordSlice.reducer;
