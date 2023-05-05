/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function Header() {
  return (
    <div className="z-20 fixed">
      <div className="fixed py-[1rem] z-20 rounded-tl-0 rounded-tr-0  lg:w-[13rem] md:w-[6.5rem] bg-[#F2F6FC] flex pl-5 pr-5 justify-start items-center text-lg text-black  transition-all ease-in ">
        <div className="hidden md:block rounded-xl btn btn-primary ">
          <i className="fa-solid fa-city text-[15px] md:text-base "></i>
        </div>
        <div className="ml-6 hidden lg:block font-semibold text-[2.375rem]">
          griya.
        </div>
      </div>
      <header className="lg:pl-[13rem] sm:pl-[5rem] pl-[3rem] md:pl-[6.5rem]  fixed w-full ">
        <div className="py-3 top-0 px-5 w-full bg-[#EDF2F6] transition-all delay-[2s] ease-in">
          <div className="container">
            <div>
              <nav className="p-0 flex-nowrap relative">
                <div className=" flex justify-between items-center ">
                  <div className="left flex item-center">
                    <div className="mr-12 hidden md:block">
                      <a
                        href="#"
                        className="btn btn-primary text-[0] rounded-xl   "
                      >
                        <i className="fas fa-calendar"></i>
                      </a>
                    </div>
                    <div className=" hidden lg:block rounded-full">
                      <input
                        type="text"
                        className=" focus:border-none focus:outline-none py-[0.532rem] text-[0.875rem] rounded-tl-full rounded-bl-full  px-3 rounded-tr-0 rounded-br-0 bg-[#F2F6FC]  text-[#6e6e6e] basis-auto flex-grow flex-shrink relative leading-4 font-normal  "
                        placeholder="search hear"
                      />
                      <span className="bg-[#F2F6FC] py-[0.532rem] rounded-tl-0 text-[0.750rem] rounded-bl-0 justify-center text-[#6e6e6e] px-3 -ml-[1px]  rounded-tr-full rounded-br-full">
                        <i className="fa-solid fa-magnifying-glass"></i>
                      </span>
                    </div>
                  </div>
                  <ul className="right flex-row flex pl-0 mb-0 list-none">
                    <li className="flex items-center relative list-none ">
                      <i className="fa-solid fa-bell text-[21px] text-[#464a53] "></i>
                    </li>
                    <li className="flex items-center relative list-none ">
                      <i className="fa-solid fa-envelope text-[21px] text-[#464a53] pl-4"></i>
                    </li>
                    <li className="flex items-center relative list-none ">
                      <i className="fa-solid fa-comment-dots text-[21px] text-[#464a53] pl-4"></i>
                    </li>
                    <li className="flex items-center relative list-none ">
                      <div className="pl-4 flex">
                        <div className="pr-2 hidden md:block lg:block">
                          <span className="text-[1.125rem ] text-black block font-semibold text-end">
                            Roberto
                          </span>
                          <small className="text-end block text-[0.875rem] font-normal leading-3 text-[#89879f]">
                            robertocarloz@mail.com
                          </small>
                        </div>
                        <img
                          src={require("../img/Interior-NA-600x600.jpg")}
                          width="20"
                          alt=""
                          className="w-9 h-9 rounded-full"
                        ></img>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
