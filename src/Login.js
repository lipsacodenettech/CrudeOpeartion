/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
// import React, { useState } from "react";
import { useFormik } from "formik";
import { signUpSchema } from "./schemas";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLoginUserMutation } from "./services/api";
import { useState } from "react";
import  secureLocalStorage  from  "react-secure-storage";

import "./all.min.css";
export default function Login() {
  const [isUpdating, setIsUpdating] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };
  const [Login, Loginresult] = useLoginUserMutation();
  const { isSuccess, isFetching, isError, error } = Loginresult;

  useEffect(() => {
    if (isSuccess && !isFetching) {
      setIsUpdating(false);
      secureLocalStorage.setItem("email", values.email);
      secureLocalStorage.setItem("token", Loginresult.data.data.token);
      let token = secureLocalStorage.getItem("token");
      if (token) {
        navigate("/dashboard");
      }
    }
  }, [isSuccess, isFetching]);
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        Login({
          email: values?.email,
          password: values?.password,
        });
        setIsUpdating(true);
        setDisabled(true);
      },
    });
  return (
    <div>
      <div className=" text-white bg-black min-h-screen">
        <div className="grid md:grid-cols-1 sm:grid-cols-in sign in1 lg:grid-cols-2 grid-rows-1 py-2 gap-10">
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
            <form action="">
              <input
                type="email"
                className=" h-10 mt-[2%] focus:shadow-primary-outline bg-gray-900  placeholder:text-white/80 text-white/80  text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300  bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-cyan-500 focus:border focus:border-solid focus:outline-none "
                placeholder={
                  errors.email && touched.email
                    ? errors.email
                    : "Enter your email"
                }
                value={values.email}
                onChange={handleChange}
                autoComplete="off"
                name="email"
                id="email"
                onBlur={handleBlur}
              />

              <input
                type="password"
                className=" h-10 mt-[3%] focus:shadow-primary-outline bg-gray-900  placeholder:text-white/80 text-white/80  text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300  bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-cyan-500 focus:border focus:border-solid focus:outline-none "
                placeholder={
                  errors.password && touched.password
                    ? errors.password
                    : "Enter your password"
                }
                value={values.password}
                autoComplete="off"
                name="password"
                id="password"
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <div class="form-check form-switch">
                <input
                  class="form-check-input bg-transparent border-white p-[12px] px-[20px] mt-4"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label class=" mt-4 ml-[20px] " for="flexSwitchCheckDefault">
                  Remember me
                </label>
              </div>
              <button
                type="submit"
                name="submit"
                onClick={handleSubmit}
                className="w-full px-16 py-3.5 mt-6 mb-4 font-bold leading-normal text-center text-white align-middle transition-all bg-cyan-500 border-0 rounded-lg cursor-pointer hover:-translate-y-px active:opacity-85 hover:shadow-xs text-[17px] ease-in tracking-tight-rem shadow-md bg-150 bg-x-25 "
                disabled={disabled}
              >
                {isUpdating ? (
                  <i className="fa fa-spinner animate-spin mr-2"></i>
                ) : (
                  <i class="fa-solid fa-arrow-right-to-bracket mr-2"></i>
                )}
                Signin
              </button>
              <div className=" text-center capitalize text-slate-600 text-sm font-bold tracking-wide">
                don't have an account !
                <Link
                  to="/Sign_up"
                  className="capitalize text-cyan-600 text-xs text-right font-bold"
                >
                  sign up
                </Link>
              </div>
            </form>
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
          <div className="px-5 hidden lg:block ">
            <div className="h-[90%] flex flex-col items-center justify-center bg-cover mt-[36px] overflow-hidden rounded-xl relative bg-[url('https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/1/b/9/a/7f16-0e7b-402e-b824-3865e954e08d.jpg')]">
              <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-cyan-500 to-themeColor opacity-60" />
              <h4 className="z-20 mt-12 font-bold text-white text-center">
                "Attention is the new currency"
              </h4>
              <p className="z-20 text-white text-center px-10 ">
                The more effortless the writing looks, the more effort the
                writer actually put into the process.
              </p>
            </div>
            {/* <div className="before:content-[''] before:w-[550px] before:h-[550px] before:bg-black before:opacity-[0.7] before:top-[64px] before:left-[94px] before:rounded-[10px]  before:absolute before:block"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
