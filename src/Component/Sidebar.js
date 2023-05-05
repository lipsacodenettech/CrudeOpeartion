/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  // const navigate = useNavigate();
  const Logout = () => {
    // localStorage.clear();
    // navigate("/");
  };
  return (
    <div className="scrollbar-thin scrollbar-rounded-full z-20 hidden md:block scrollbar-thumb-[#0d6efd] scrollbar-track-[#F2F6FC] scrollbar-thumb-rounded-full scrollbar-track-rounded-full inset-y-0 overflow-y-auto fixed top-[4.4rem] px-2 rounded-bl-0 py-3 lg:w-[13rem] sm:w-[6.5rem ] md:w-[6.5rem] md:text-center lg:text-left rounded-br-0 text-black pb-0  bg-[#F2F6FC] transition-all ease-in ">
      <div className="relative h-full rounded-tl-0 rounded-tr-0 ">
        <div className="rounded-tl-0 rounded-tr-0 relative h-fill ">
          <ul className="flex flex-col p-0 m-0 list-none">
            <li className="relative flex flex-col list-none px-2 ">
              <a
                href="#"
                className=" px-[0.9375rem] py-[1.25rem] rounded-[2rem]  font-medium inline-block text-[#737B8B] relative no-underline"
              >
                <i class="fa-solid fa-square-poll-horizontal text-[1.5rem]"></i>
                <span className=" hidden lg:inline-block decoration-none text-[1rem]  px-[0.9375rem] hover:text-[#216fed]">
                  Dashboard
                </span>
              </a>
            </li>
            <li className="relative flex flex-col list-none px-2 ">
              <a
                href="#"
                className=" px-[0.9375rem] py-[1.25rem] rounded-[2rem]  font-medium inline-block text-[#737B8B] relative no-underline"
              >
                <i class="fa-solid fa-plus text-[1.5rem]"></i>
                <span className="hidden lg:inline-block decoration-none text-[1rem]  px-[0.9375rem] hover:text-[#216fed]">
                  Cars
                </span>
              </a>
            </li>
            <li className="relative flex flex-col list-none px-2 ">
              <a
                role="button"
                href="#"
                onClick={Logout}
                className=" px-[0.9375rem] py-[1.25rem] rounded-[2rem]  font-medium inline-block text-[#737B8B] relative no-underline"
              >
                <i class="fa-solid fa-arrow-right-from-bracket  text-[1.5rem]"></i>
                <span className="hidden lg:inline-block decoration-none text-[1rem]  px-[0.9375rem] hover:text-[#216fed]">
                  Logout
                </span>
              </a>
            </li>
          </ul>

        </div>
      </div>
    </div>
  );
}
