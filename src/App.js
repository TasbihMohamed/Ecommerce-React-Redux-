import * as React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";

import {
  Cart,
  Products,
  NotFound,
  Home,
  Login,
  Register,
  WishList,
  Categories,
  ProductDetails,
  Brands,
  ForgotPassword,
} from "./pages";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import CheckOut from "./pages/CheckOut/CheckOut";
import Allorders from "./pages/allorders/allorders";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            // <ProtectedRoute>
              <Home />
            // </ProtectedRoute>
          ),
        },
        {
          path: "forgot-password",
          element: <ForgotPassword />,
        },

        {
          path: "register",
          element: <Register />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "cart",
          element: (
            // <ProtectedRoute>
            <Cart /> // </ProtectedRoute>
          ),
         
        },
        {
          path: "checkOut",
          element: (
            // <ProtectedRoute>
            <CheckOut /> // </ProtectedRoute>
          ),
        
        },
        {
          path: "allorders",
          element: (
            // <ProtectedRoute>
            <Allorders /> // </ProtectedRoute>
          ),
         
        },
        {
          path: "products",
          element: (
            //  <ProtectedRoute>
            <Products /> // </ProtectedRoute>
          ),
       
        },
        {
          path: "product-details/:productId",
          element: (
            // <ProtectedRoute>
            <ProductDetails /> // </ProtectedRoute>
          ),
 
        },
        {
          path: "products/product-details/:productId",
          element: (
            // <ProtectedRoute>
            <ProductDetails /> // </ProtectedRoute>
          ),
       
        },
        {
          path: "categories",
          element: (
            // <ProtectedRoute>
            <Categories /> // </ProtectedRoute>
          ),
    
        },
        {
          path: "brands",
          element: (
            // <ProtectedRoute>
            <Brands /> // </ProtectedRoute>
          ),
        
        },
        {
          path: "wish-list",
          element: (
            // <ProtectedRoute>
            <WishList /> // </ProtectedRoute>
          ),
      
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
