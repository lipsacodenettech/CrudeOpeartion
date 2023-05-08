// import { Modal } from "react-responsive-modal";
import React from "react";
import "react-responsive-modal/styles.css";
// import { Link } from "react-router-dom";
import Header from "./Component/Header";
import Sidebar from "./Component/Sidebar";
import Right from "./Component/Right";
import Footer from "./Component/Footar";
// import Header from "./Component/Header";
// import  secureLocalStorage  from  "react-secure-storage";

export default function Dashboard() {
  return (
    <div>
      {/* <Header/> */}
      <Header />
      <Sidebar />
      <Right />
      <Footer/>
    </div>
  );
}
