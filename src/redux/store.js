import { configureStore } from "@reduxjs/toolkit";
import { categoriesReducer } from "./categories/categoriesSlice";
import { productsReducer } from "./products/productsSlice";
import { productReducer } from "./products/productSlice";
import { brandsReducer } from "./brands/brandsSlice";
import { registerReducer } from "./Auth/registerSlice";
import { loginReducer } from "./Auth/loginSlice";
import { forgotPasswordReducer } from "./Auth/forgotPasswordSlice";
// import { resetCodeRequest } from "./Auth/resetCodeSlice";
import { authReducer } from "./Auth/userTokenSlice";
import { wishlistReducer } from "./wishlist/wishlistSlice";
import { cartReducer } from "./Cart/CartSlice";

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    product: productReducer,
    brands: brandsReducer,
    register: registerReducer,
    login: loginReducer,
    forgotPassword: forgotPasswordReducer,
    // resetCode: resetCodeRequest,
    auth: authReducer,
    wishlist: wishlistReducer,
    addCart: cartReducer,
  },
});

export default store;
