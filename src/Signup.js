/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [getName, setName] = useState("");
  const [getEmail, setEmail] = useState("");
  const [getPassword, setPassword] = useState("");
  const [getAge, setAge] = useState("");
  const [get, setget] = useState([]);

  const registerclick = () => {
    if (
      document.getElementById("name") == "" ||
      document.getElementById("email") == "" ||
      document.getElementById("password") == "" ||
      document.getElementById("retype_password") == ""
    ) {
      alert("Fields are empty.");
      return;
    }
    axios
      .post("http://192.168.1.17:3001/register", {
        name: getName,
        email: getEmail,
        password: getPassword,
        age: getAge,
      })
      .then(function (response) {
        // handle success
        console.log(response);
        // if(response.data == true){
        //   alert("succes");
        // }
        alert("success");
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.getElementById("retype_password").value = "";
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  return (
    <div>
      <div className=" text-white bg-black min-h-screen">
        <div className="">
          <div className="px-5 lg:px-8 md:mx-auto lg:mx-0 sm:mx-auto xs:mx-auto">
            <img
              src={require("./img/logo.png")}
              alt=""
              className="lg:w-[120px] rounded-full mx-auto p-0 sm:w-[35%] md:w-[35%] "
            />
            <div className=" text-start text-[150%] sm:text-center md:text-center capitalize pt-1 font-bold">
              sign in
            </div>
            <div className="text-start pt-2 pb-2 text-[90%] text-slate-100 ">
              Enter your email and password to sign in
            </div>
            <form action="" method="post">
              <div className="flex justify-between flex-wrap">
                <input
                  type="text"
                  className=" h-10 mt-[2%]  w-[48%] focus:shadow-primary-outline bg-gray-900  placeholder:text-white/80 text-white/80  text-sm leading-5.6 ease   appearance-none rounded-lg border border-solid border-gray-300  bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-cyan-500 focus:border focus:border-solid focus:outline-none "
                  placeholder="Enter your name"
                  value={getName}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  className=" h-10 mt-[2%]  w-[48%] focus:shadow-primary-outline bg-gray-900  placeholder:text-white/80 text-white/80  text-sm leading-5.6 ease   appearance-none rounded-lg border border-solid border-gray-300  bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-cyan-500 focus:border focus:border-solid focus:outline-none "
                  placeholder="Enter your email"
                  value={getEmail}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  className=" h-10 w-[48%]  mt-[2%]  focus:shadow-primary-outline bg-gray-900  placeholder:text-white/80 text-white/80  text-sm leading-5.6 ease block  appearance-none rounded-lg border border-solid border-gray-300  bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-cyan-500 focus:border focus:border-solid focus:outline-none "
                  placeholder="Enter your password"
                  value={getPassword}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  type="text"
                  className=" h-10 w-[48%]  mt-[2%]  focus:shadow-primary-outline bg-gray-900  placeholder:text-white/80 text-white/80  text-sm leading-5.6 ease block  appearance-none rounded-lg border border-solid border-gray-300  bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-cyan-500 focus:border focus:border-solid focus:outline-none "
                  placeholder="Enter your age"
                  value={getAge}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div className="form-check form-switch">
                <input
                  className="form-check-input bg-transparent border-white p-[12px] px-[20px] mt-4"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label
                  className=" mt-4 ml-[20px] "
                  for="flexSwitchCheckDefault"
                >
                  Remember me
                </label>
              </div>
              <Link to="/">
                <button
                  onClick={registerclick}
                  className="w-full px-16 py-3.5 mt-6 mb-4 font-bold leading-normal text-center text-white align-middle transition-all bg-cyan-500 border-0 rounded-lg cursor-pointer hover:-translate-y-px active:opacity-85 hover:shadow-xs text-sm ease-in tracking-tight-rem shadow-md bg-150 bg-x-25"
                  disabled={!getName || !getEmail || !getPassword}
                >
                  Register
                </button>
              </Link>
            </form>
            <div className=" text-center capitalize text-slate-600 text-sm font-bold tracking-wide">
              Allredy have an account !
              <a href="/"  className="capitalize text-cyan-600 text-xs text-right font-bold">
                sign in
              </a>
            </div>
            {/* <div className="h-1 w-1  before:mt-[50px]   before:content-[''] before:w-[60px] before:h-[1px] before:bg-slate-300 before:absolute before:ml-[277px] "></div> */}
            <div className="underline underline-offset-2 text-gray-700 text-center ">
              {" "}
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
            </div>
            <div className="font-semibold mt-4 mb-2 text-[18px] text-center ">
              Powered by
            </div>
            <div>
              <img
                src={require("./img/codenet-white.png")}
                className="h-[60px] m-auto"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
