/* eslint-disable eqeqeq */
import React, { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { signUpSchema } from "./schemas";

export default function Login() {
  const [getEmail, setEmail] = useState();
  const [getPassword, setPassword] = useState();
  // const initialValues = {
  //   email: "",
  //   password: "",
  // };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik(
    {
      values : {
        getEmail,
        getPassword
      },
      validationSchema: signUpSchema,
      onSubmit: (action) => {
        action.resetForm();
      },
    }
  );

  console.log(
    "🚀 ~ file: Registration.jsx ~ line 25 ~ Registration ~ errors",
    errors
  );
  // const a =0;
  const submit = (e) => {
    axios
      .post(
        "http://192.168.1.8:3001/login",
        {
          email: getEmail,
          password: getPassword,
        }
        // {
        //   headers: {
        //     authorization: "Berear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxpcHNhQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzNDUiLCJpYXQiOjE2ODExODg2MTB9.gKREhHSgKYtHaVfQSVcnRgmuLvKqPVawYzH-P-H5Z8k",
        //   },
        // }
      )
      .then(function (response) {
        // console.log(response.stat̥us);
        // console.log(response);
        if (response.status == "200") {
          localStorage.setItem("email", getEmail);
          // window.location.href = "/adduser";
          localStorage.setItem("token", response.data.data.token);
          // localStorage.setItem("token", response.data.data.Rtoken)
          // console.log("loginResponse", `localStorage set with token value: ${response.data.data.token}`)
          // console.log(response);
        }
      });
  };
  return (
    <div>
      <div className=" text-white bg-black min-h-screen">
        <div className="grid md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 grid-rows-1 py-2 gap-10">
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
            <input
              type="email"
              className=" h-10 mt-[2%] focus:shadow-primary-outline bg-gray-900  placeholder:text-white/80 text-white/80  text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300  bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-cyan-500 focus:border focus:border-solid focus:outline-none "
              placeholder="Enter your email"
              value={getEmail}
              onChange={(e) => setEmail(e.target.value)}
              // onChange={handleChange}
              autoComplete="off"
              name="email"
              id="email"
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <p className="form-error">{errors.email}</p>
            ) : null}
            <input
              type="password"
              className=" h-10 mt-[3%] focus:shadow-primary-outline bg-gray-900  placeholder:text-white/80 text-white/80  text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300  bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-cyan-500 focus:border focus:border-solid focus:outline-none "
              placeholder="Enter your password"
              value={getPassword}
              onChange={(e) => {
                setPassword(e.target.value);
                // handleChange()
              }}
              // type="password"
              autoComplete="off"
              name="password"
              id="password"
              // placeholder="Password"
              // value={values.password}
              // onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
              <p className="form-error">{errors.password}</p>
            ) : null}
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
            <input
              type="button"
              value="Sign in" 
              onClick={submit}
              className="w-full px-16 py-3.5 mt-6 mb-4 font-bold leading-normal text-center text-white align-middle transition-all bg-cyan-500 border-0 rounded-lg cursor-pointer hover:-translate-y-px active:opacity-85 hover:shadow-xs text-sm ease-in tracking-tight-rem shadow-md bg-150 bg-x-25 "
            />
            <div className=" text-center capitalize text-slate-600 text-sm font-bold tracking-wide">
              don't have an account !
              <a
                href="/Sign_up"
                className="capitalize text-cyan-600 text-xs text-right font-bold"
              >
                sign up
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
