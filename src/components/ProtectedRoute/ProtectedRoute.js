import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ childern }) {
  // console.log('5555555',localStorage.getItem("userToken"));
  if (localStorage?.getItem("userToken")) {
    //data
    return childern;
  } else {
    //no data
    return <Navigate to="/login" />;
  }
}
