import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
  register: [],
  error: null,
  loading: false,
};

export let registerRequest = createAsyncThunk(
  "register/registerRequest",
  async function ({ body }) {
    try {
      let response = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signup",
        body
      );
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

export const registerSlice = createSlice({
  name: "register",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerRequest.fulfilled, (state, action) => {
      state.register = action.payload;
      state.error = null;
      state.loading = false;
    });
    builder.addCase(registerRequest.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
    builder.addCase(registerRequest.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
  },
});

export let registerReducer = registerSlice.reducer;
