import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
  login: [],
  error: null,
  loading: false,
};

export let loginRequest = createAsyncThunk(
  "login/loginRequest",
  async function ({ body }) {
    try {
      let response = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signin",
        body
      );
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginRequest.fulfilled, (state, action) => {
      state.login = action.payload;
      state.error = null;
      state.loading = false;
    });
    builder.addCase(loginRequest.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
    builder.addCase(loginRequest.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
  },
});

export let loginReducer = loginSlice.reducer;
