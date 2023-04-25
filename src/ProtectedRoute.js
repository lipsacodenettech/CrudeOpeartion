/* eslint-disable no-unused-expressions */
// import Cookies from 'js-cookie';
import React from "react";
import { Outlet, Navigate } from "react-router-dom";
// import jwt_decode from "jwt-decode";

const ProtectedRoute = () => {
  // let decodedToken = jwt_decode(token);
  // console.log("Decoded Token", decodedToken);
  // let currentDate = new Date();
  // var result = false;
  // // if (decodedToken.exp * 1000 < currentDate.getTime()) {
  //   console.log("Token expired.");
  // } else {
  //   console.log("Valid token");
  //   result = true;
  // }
  const token = window.localStorage.getItem("token");
  const userType = window.localStorage.getItem("email");
  userType === null ? true : false;
  token === null ? true : false;
  return userType && token ? <Outlet /> : <Navigate to="/" />;
};
export default ProtectedRoute;
