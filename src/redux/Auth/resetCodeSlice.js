// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// let initialState = {
//   resetCode: null,
//   error: null,
//   loading: false,
// };

// export let resetCodeRequest = createAsyncThunk(
//   "resetCode/resetCodeRequest",
//   async function ({ body }) {
//     try {
//       let response = await axios.post(
//         "https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",
//         body
//       );
//       return response.data;
//     } catch (error) {
//       throw error.response.data;
//     }
//   }
// );

// export const resetCodeSlice = createSlice({
//   name: "resetCode",
//   initialState: initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(resetCodeRequest.fulfilled, (state, action) => {
//       state.resetCode = action.payload;
//       state.error = null;
//       state.loading = false;
//     });
//     builder.addCase(resetCodeRequest.rejected, (state, action) => {
//       state.error = action.error.message;
//       state.loading = false;
//     });
//     builder.addCase(resetCodeRequest.pending, (state) => {
//       state.loading = true;
//       state.error = null;
//     });
//   },
// });

// export let resetCodeReducer = resetCodeSlice.reducer;
