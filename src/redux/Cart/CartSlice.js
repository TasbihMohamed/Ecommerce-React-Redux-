import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
  addCart: [],
  allCart: [],
  removeFromCart: [],
  clearCart: [],
  updateCart: [],
  payment: [],
  error: null,
  loading: false,
};

export let addToCart = createAsyncThunk(
  "addCart/addToCart",
  async function ({ productId }) {
    try {
      let response = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/cart",
        { productId: productId },
        { headers: { token: localStorage.getItem("userToken") } }
      );
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

export let getAllCart = createAsyncThunk(
  "addCart/getAllCart",
  async function () {
    try {
      let response = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/cart",
        { headers: { token: localStorage.getItem("userToken") } }
      );
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);
export let removeProductCart = createAsyncThunk(
  "removeFromCart/removeProductCart",
  async function ({ id }) {
    try {
      let response = await axios.delete(
        `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
        { headers: { token: localStorage.getItem("userToken") } }
      );
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);
export let clearCartRequest = createAsyncThunk(
  "clearCart/clearCartRequest",
  async function () {
    try {
      let response = await axios.delete(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        { headers: { token: localStorage.getItem("userToken") } }
      );
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);
export let updateCartRequest = createAsyncThunk(
  "updateCart/updateCartRequest",
  async function ({ body, id }) {
    try {
      let response = await axios.put(
        `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
        body,
        { headers: { token: localStorage.getItem("userToken") } }
      );
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

export let paymentRequest = createAsyncThunk(
  "payment/paymentRequest",
  async function ({ body, cartId }) {
    try {
      let response = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000`,
        { shippingAddress: body },
        { headers: { token: localStorage.getItem("userToken") } }
      );
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

export const cartSlice = createSlice({
  name: "addCart",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.addCart = action.payload;
      state.error = null;
      state.loading = false;
    });
    builder.addCase(addToCart.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
    builder.addCase(addToCart.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getAllCart.fulfilled, (state, action) => {
      state.allCart = action.payload;
      state.error = null;
      state.loading = false;
    });
    builder.addCase(getAllCart.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
    builder.addCase(getAllCart.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(removeProductCart.fulfilled, (state, action) => {
      state.removeFromCart = action.payload;
      state.error = null;
      state.loading = false;
    });
    builder.addCase(removeProductCart.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
    builder.addCase(removeProductCart.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(clearCartRequest.fulfilled, (state, action) => {
      state.clearCart = action.payload;
      state.error = null;
      state.loading = false;
    });
    builder.addCase(clearCartRequest.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
    builder.addCase(clearCartRequest.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateCartRequest.fulfilled, (state, action) => {
      state.updateCart = action.payload;
      state.error = null;
      state.loading = false;
    });
    builder.addCase(updateCartRequest.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
    builder.addCase(updateCartRequest.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(paymentRequest.fulfilled, (state, action) => {
      state.payment = action.payload;
      state.error = null;
      state.loading = false;
    });
    builder.addCase(paymentRequest.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
    builder.addCase(paymentRequest.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
  },
});

export let cartReducer = cartSlice.reducer;
