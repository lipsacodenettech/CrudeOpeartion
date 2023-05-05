/* eslint-disable no-const-assign */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { registerSchema } from "./schemas/regirster.jsx";
import { useFormik } from "formik";
import { useRegisterUserMutation } from "./services/api.js";
import swal from "sweetalert";

export default function Signup() {
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      navigate("/adduser");
    }
  }, []);
  const initialValues = {
    name: "",
    email: "",
    password: "",
    age: "",
  };
  const [Register, RegisterResult] = useRegisterUserMutation();
  const { isSuccess, isFetching, isError, error } = RegisterResult;
  useEffect(() => {
    if (isSuccess && !isFetching) {
      navigate('/login')
    }
  }, [isSuccess, isFetching]);

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    setFieldValue,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema: registerSchema,
    onSubmit: (values, action) => {
      Register({
        name: values.name,
        email: values.email,
        password: values.password,
        age: values.age,
      });
      setDisabled(true);
    },
  });
  return (
    <div>
      <div className=" text-white bg-black min-h-screen">
        <div className="">
          <div className="px-5 lg:px-8 md:mx-auto lg:mx-0 sm:mx-auto xs:mx-auto">
            <img
              src={require("./img/logo.png")}
              alt=""
              className="lg:w-[120px] rounded-full mx-auto p-0 sm:w-[25%] md:w-[35%] "
            />
            <div className=" text-start text-[150%] sm:text-center md:text-center capitalize pt-1 font-bold">
              sign Up
            </div>
            <form action="" method="post">
              <div className="flex justify-between flex-wrap">
                <input
                  type="text"
                  className=" h-10 mt-[2%]  w-[48%] focus:shadow-primary-outline bg-gray-900  placeholder:text-white/80 text-white/80  text-sm leading-5.6 ease   appearance-none rounded-lg border border-solid border-gray-300  bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-cyan-500 focus:border focus:border-solid focus:outline-none "
                  placeholder={
                    errors.name && touched.name
                      ? errors.name
                      : "Enter your name"
                  }
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <input
                  type="email"
                  className=" h-10 mt-[2%]  w-[48%] focus:shadow-primary-outline bg-gray-900  placeholder:text-white/80 text-white/80  text-sm leading-5.6 ease   appearance-none rounded-lg border border-solid border-gray-300  bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-cyan-500 focus:border focus:border-solid focus:outline-none "
                  placeholder={
                    errors.email && touched.email
                      ? errors.email
                      : "Enter your email"
                  }
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <input
                  type="password"
                  className=" h-10 w-[48%]  mt-[2%]  focus:shadow-primary-outline bg-gray-900  placeholder:text-white/80 text-white/80  text-sm leading-5.6 ease block  appearance-none rounded-lg border border-solid border-gray-300  bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-cyan-500 focus:border focus:border-solid focus:outline-none "
                  placeholder={
                    errors.password && touched.password
                      ? errors.password
                      : "Enter your password"
                  }
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <input
                  type="number"
                  className=" h-10 w-[48%]  mt-[2%]  focus:shadow-primary-outline bg-gray-900  placeholder:text-white/80 text-white/80  text-sm leading-5.6 ease block  appearance-none rounded-lg border border-solid border-gray-300  bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-cyan-500 focus:border focus:border-solid focus:outline-none "
                  placeholder={
                    errors.number && touched.number
                      ? errors.number
                      : "Enter your number"
                  }
                  name="age"
                  value={values.age}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full px-16 py-3.5 mt-6 mb-4 font-bold leading-normal text-center text-white align-middle transition-all bg-cyan-500 border-0 rounded-lg cursor-pointer hover:-translate-y-px active:opacity-85 hover:shadow-xs text-sm ease-in tracking-tight-rem shadow-md bg-150 bg-x-25"
                disabled={disabled}
              >
                Register
              </button>
            </form>
            <div className=" text-center capitalize text-slate-600 text-sm font-bold tracking-wide">
              Allredy have an account !
              <Link
                to="/"
                className="capitalize text-cyan-600 text-xs text-right font-bold"
              >
                sign in
              </Link>
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
