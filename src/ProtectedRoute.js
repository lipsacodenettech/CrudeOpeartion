/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-expressions */
// import Cookies from 'js-cookie';
import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import  secureLocalStorage  from  "react-secure-storage";

const ProtectedRoute = () => {
  const navigate = useNavigate();
  const userType = secureLocalStorage.getItem("email");
  const token = secureLocalStorage.getItem("token");
  if (token) {
    let decodedToken = jwt_decode(token);
    // console.log("Decoded Token", decodedToken);
    let currentDate = new Date();
    var result = false;
    if (decodedToken.exp * 1000 < currentDate.getTime()) {
      // console.log("Token expired.");
      localStorage.clear();
      navigate("/");
    } else {
      // console.log("Valid token");
      result = true;
    }
  }
  else{
    return <Navigate to="/" />
  }
  userType === null ? true : false;
  token === null ? true : false;
  return userType && token ? <Outlet /> : <Navigate to="/" />;
};
export default ProtectedRoute;
