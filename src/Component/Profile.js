/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footar from "./Footar";
import { useState } from "react";

export default function Profile() {
  const [hide, setHide] = useState(1);

  return (
    <div>
      <Header />
      <Sidebar />
      <div className="bg-[#EDF2F6]">
        <div className="pt-[6.5rem] z-10 px-6  pb-2 container transition-all ease-in">
          <div className="lg:ml-[11rem] sm:ml-[4rem ]  md:ml-[6rem]">
            <div className="row py-[0.9357rem] px-[2.5rem] bg-white mb-8 rounded-xl mt-0 ml-0 mr-0 relative">
              <ol className="mb-0 p-0 bg-transparent items-center flex">
                <li className="font-semibold text-[#943eff] mt-0 mb-0">App</li>
                <li className="mb-0 p-0  before:pl-2  before:text-lg  before:text-[#943eff] float-left  before:pr-2 before:content-['/'] text-[#737B8B] ">
                  Profile
                </li>
              </ol>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="mb-8 bg-white relative rounded-xl transition-all ease-in  pb-0 pt-4 px-4  flex  border-0 border-transparent flex-col bg-clip-border flex-auto shadow-sm h-[calc(100% - 30px)]">
                  <div>
                    <div className="relative ">
                      <div className="bg-cover bg-center w-full min-h[15.625rem]  ">
                        <img
                          src={require("../img/asset 24.jpeg")}
                          alt=""
                          className="rounded-xl"
                        />
                      </div>
                      <div className=" flex flex-col md:flex-row   py-[0.9375rem]  px-5">
                        <div className="profile-photo max-w-[100%]  z-[1] img-fluid  ">
                          <div className="mr-[10px] w-[80px] h-[80px] md:h[100px] md:w-[100px] mx-auto -mt-[54px]">
                            <img src={require("../img/asset 6.png")} alt="" />
                          </div>
                        </div>
                        <div className="flex text-center md:flex-row flex-col z-[9] w-full ">
                          <div className="px-4 pt-2">
                            <h4 className=" text-sm md:text-xl text-primary mb-0">
                              {" "}
                              Mitchell C. Shay
                            </h4>
                            <p className="text[#828690] text-sm md:text-lg">
                              UX / UI Designer
                            </p>
                          </div>
                          <div className="px-4 pt-2">
                            <h4 className="text-[#464a53] text-sm md:text-xl  mb-0">
                              info@example.com
                            </h4>
                            <p className="text[#828690] text-sm md:text-lg">
                              Email
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="mb-8 bg-white relative border-0 border-transparent rounded-xl transition-all ease-in shadow-sm h-[calc(100% - 30px)]">
                      <div className="p-[1.875rem] flex-auto  ">
                        <div>
                          <div className="text-center">
                            <div className="row ">
                              <div className="col">
                                <h3 className="mb-0">150</h3>
                                <span>Flowers</span>
                              </div>
                              <div className="col">
                                <h3 className="mb-0">140</h3>
                                <span>Place stay</span>
                              </div>
                              <div className="col">
                                <h3 className="mb-0">45</h3>
                                <span>Reviewsx</span>
                              </div>
                            </div>
                            <div className="mt-4">
                              <a
                                href="#"
                                className="btn btn-primary  mr-1 text-sm md:text-base rounded-3xl py-[0.625rem] font-normal px-4"
                              >
                                Follow
                              </a>
                              <a
                                href="#"
                                className="btn btn-primary  text-sm md:text-base rounded-3xl py-[0.625rem] font-normal px-3"
                              >
                                Send message
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="mb-8 bg-white relative border-0 border-transparent rounded-xl transition-all ease-in shadow-sm h-[calc(100% - 30px)]">
                      <div className="p-[1.875rem] flex-auto ">
                        <div>
                          <h5 className="text-primary inline text-base font-semibold">
                            Today Highlights
                          </h5>
                          <img
                            src={require("../img/asset 7.jpeg")}
                            className="img-fluid mt-3 mb-3 w-full"
                            alt=""
                          />
                          <h4>
                            <a
                              href="#"
                              className="text-black no-underline text-lg md:text-xl"
                            >
                              Darwin Creative Agency Theme
                            </a>
                          </h4>
                          <p className="mb-0 text-[#737B8B]">
                            A small river named Duden flows by their place and
                            supplies it with the necessary regelialia. It is a
                            paradisematic country, in which roasted parts of
                            sentences fly into your mouth.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="mb-8 bg-white relative border-0 border-transparent rounded-xl transition-all ease-in shadow-sm h-[calc(100% - 30px)]">
                      <div className="p-[1.875rem] flex-auto ">
                        <div>
                          <h5 className="inline text-primary text-base">
                            Interest
                          </h5>
                          <div className="row mt-4 -mx-[0.0437rem]">
                            <div className="mb-1 col-lg-4 col-xl-4 col-sm-4 col-6 px-1">
                              <img
                                src={require("../img/asset 8.jpeg")}
                                alt=""
                              />
                            </div>
                            <div className="mb-1 col-lg-4 col-xl-4 col-sm-4 col-6 px-1">
                              <img
                                src={require("../img/asset 9.jpeg")}
                                alt=""
                              />
                            </div>
                            <div className="mb-1 col-lg-4 col-xl-4 col-sm-4 col-6 px-1">
                              <img
                                src={require("../img/asset 10.jpeg")}
                                alt=""
                              />
                            </div>
                            <div className="mb-1 col-lg-4 col-xl-4 col-sm-4 col-6 px-1">
                              <img
                                src={require("../img/asset 9.jpeg")}
                                alt=""
                              />
                            </div>
                            <div className="mb-1 col-lg-4 col-xl-4 col-sm-4 col-6 px-1">
                              <img
                                src={require("../img/asset 10.jpeg")}
                                alt=""
                              />
                            </div>
                            <div className="mb-1 col-lg-4 col-xl-4 col-sm-4 col-6 px-1">
                              <img
                                src={require("../img/asset 8.jpeg")}
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="mb-8 bg-white relative border-0 border-transparent rounded-xl transition-all ease-in shadow-sm h-[calc(100% - 30px)]">
                      <div className="p-[1.875rem] flex-auto">
                        <div>
                          <h5 className="inline text-primary text-base">
                            Our Latest News
                          </h5>
                          <div className="pt-4 pb-4  text-[#737B8B] flex items-start">
                            <img
                              src={require("../img/asset 11.jpeg")}
                              className="h-[3.25rem] rounded-3xl mr-4 w-[3.25rem]"
                              alt=""
                            />
                            <div className="flex-1">
                              <h5 className="mb-2">
                                <a
                                  href="#"
                                  className="text-black no-underline text-sm md:text-base"
                                >
                                  Collection of textile samples
                                </a>
                              </h5>
                              <p className="mb-0  text-[0.875rem]">
                                I shared this on my fb wall a few months back,
                                and I thought
                              </p>
                            </div>
                          </div>
                          <div className="pt-2 pb-4 text-[#737B8B] flex items-start">
                            <img
                              src={require("../img/asset 12.jpeg")}
                              className="h-[3.25rem] rounded-3xl mr-4 w-[3.25rem]"
                              alt=""
                            />
                            <div className="flex-1">
                              <h5 className="mb-2">
                                <a
                                  href="#"
                                  className="text-black no-underline text-sm md:text-base"
                                >
                                  Collection of textile samples
                                </a>
                              </h5>
                              <p className="mb-0 text-[0.875rem]">
                                I shared this on my fb wall a few months back,
                                and I thought
                              </p>
                            </div>
                          </div>
                          <div className="pt-2 pb-4 text-[#737B8B] flex items-start">
                            <img
                              src={require("../img/asset 13.jpeg")}
                              className="h-[3.25rem] rounded-3xl mr-4 w-[3.25rem]"
                              alt=""
                            />
                            <div className="flex-1">
                              <h5 className="mb-2">
                                <a
                                  href="#"
                                  className="text-black no-underline text-sm md:text-base"
                                >
                                  Collection of textile samples
                                </a>
                              </h5>
                              <p className="mb-0 text-[0.875rem]">
                                I shared this on my fb wall a few months back,
                                and I thought
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-8">
                <div className="mb-8 bg-white relative border-0 border-transparent rounded-xl transition-all ease-in shadow-sm ">
                  <div className="p-[1.875rem] flex-auto">
                    <div>
                      <div className="custom-table">
                        <ul className=" border-b-[#dee2e6]  border-b-[1px] flex flex-wrap pl-0 mb-0 no-underline">
                          <li>
                            <div
                              onClick={() => {
                                setHide(1);
                              }}
                              className={`${
                                hide === 1
                                  ? "text-[#216fed] underline decoration-[#216fed] decoration-2  underline-offset-[19px] "
                                  : "text-gray-600"
                              } " cursor-pointer hover:text-[#216fed] border-b-[0.875rem] border-transparent text-base mr-8 text-gray-600 font-semibold"  `}
                            >
                              Posts
                            </div>
                          </li>
                          <li>
                            <div
                              onClick={() => {
                                setHide(2);
                              }}
                              className={`${
                                hide === 2
                                  ? "text-[#216fed] underline decoration-[#216fed] decoration-2  underline-offset-[19px]"
                                  : "text-gray-600"
                              } " cursor-pointer hover:text-[#216fed]  border-b-[0.875rem] border-transparent text-base mr-8 text-gray-600 font-semibold"  `}
                            >
                              About me
                            </div>
                          </li>
                          <li>
                            <div
                              onClick={() => {
                                setHide(3);
                              }}
                              className={`${
                                hide === 3
                                  ? "text-[#216fed] underline decoration-[#216fed] decoration-2  underline-offset-[19px]"
                                  : "text-gray-600"
                              } " cursor-pointer hover:text-[#216fed]  border-b-[0.875rem] border-transparent text-base mr-8 text-gray-600 font-semibold"  `}
                            >
                              Setting
                            </div>
                          </li>
                        </ul>
                        <div className="tab-content">
                          <div
                            className={`post pt-4 ${
                              hide === 1 ? "block" : "hidden"
                            }`}
                          >
                            <div className="mb-[1.875rem]  ">
                              <textarea
                                name="textarea"
                                id="textarea"
                                cols="30"
                                rows="3"
                                class="form-control bg-transparent"
                                placeholder="Please type what you want...."
                              ></textarea>
                              <div className="mt-4">
                                <a
                                  href="#"
                                  className="border-[1px] hover:text-white hover:bg-[#216FED]  rounded-2xl bg-[#c5dafc] border-[#216FED]  mr-2 px-3 py-2  "
                                >
                                  <i class="fa fa-link m-0 hover:text-white"></i>
                                </a>
                                <a
                                  href="#"
                                  className="border-[1px] hover:text-white hover:bg-[#216FED]  rounded-2xl bg-[#c5dafc] border-[#216FED]  mr-2 px-3 py-2  "
                                >
                                  <i class="fa fa-camera m-0 hover:text-white"></i>
                                </a>
                                <a
                                  href="#"
                                  className="no-underline hover:text-white bg-primary text-white border-[1px] rounded-[100px] border-[#216FED] mr-2 px-3 py-2  "
                                >
                                  Post
                                </a>
                              </div>
                            </div>
                            <div className="profile-post pb-12 border-b-1">
                              <img
                                src={require("../img/asset 14.jpeg")}
                                className="img-fluid w-full shadow-xl rounded-xl mb-4"
                                alt=""
                              />
                              <a href="#" className=" no-underline">
                                <h3 className="text-black text-sm md:text-xl font-medium">
                                  Collection of textile samples lay spread
                                </h3>
                              </a>
                              <p className="text-[#737B8B] text-xs  md:text-sm">
                                A wonderful serenity has take possession of my
                                entire soul like these sweet morning of spare
                                which enjoy whole heart.A wonderful serenity has
                                take possession of my entire soul like these
                                sweet morning of spare which enjoy whole heart.
                              </p>
                              <button className="bg-primary font-semibold text-sm md:text-lg  text-white px-3 py-2 rounded-2xl  mr-2">
                                <span className="mr-2 ">
                                  <i class="fa fa-heart"></i>
                                </span>
                                Like
                              </button>
                              <button className="bg-[#943eff] text-white text-sm md:text-lg  font-semibold px-3 py-2 rounded-2xl  mr-2">
                                <span className="mr-2 ">
                                  <i class="fa fa-reply"></i>
                                </span>
                                Reply
                              </button>
                            </div>
                            <div className="profile-post pb-12 border-b-1">
                              <img
                                src={require("../img/asset 15.jpeg")}
                                className="img-fluid w-full rounded-xl shadow-xl mb-4"
                                alt=""
                              />
                              <a href="#" className=" no-underline">
                                <h3 className="text-black text-sm md:text-xl font-medium">
                                  Collection of textile samples lay spread
                                </h3>
                              </a>
                              <p className="text-[#737B8B] text-xs  md:text-sm">
                                A wonderful serenity has take possession of my
                                entire soul like these sweet morning of spare
                                which enjoy whole heart.A wonderful serenity has
                                take possession of my entire soul like these
                                sweet morning of spare which enjoy whole heart.
                              </p>
                              <button className="bg-primary font-semibold text-sm md:text-lg  text-white px-3 py-2 rounded-2xl  mr-2">
                                <span className="mr-2 ">
                                  <i class="fa fa-heart"></i>
                                </span>
                                Like
                              </button>
                              <button className="bg-[#943eff] text-white text-sm md:text-lg  font-semibold px-3 py-2 rounded-2xl  mr-2">
                                <span className="mr-2 ">
                                  <i class="fa fa-reply"></i>
                                </span>
                                Reply
                              </button>
                            </div>
                            <div className="profile-post pb-12 border-b-1">
                              <img
                                src={require("../img/asset 14.jpeg")}
                                className="img-fluid w-full shadow-xl rounded-xl mb-4"
                                alt=""
                              />
                              <a href="#" className=" no-underline">
                                <h3 className="text-black text-sm md:text-xl font-medium">
                                  Collection of textile samples lay spread
                                </h3>
                              </a>
                              <p className="text-[#737B8B] text-xs  md:text-sm">
                                A wonderful serenity has take possession of my
                                entire soul like these sweet morning of spare
                                which enjoy whole heart.A wonderful serenity has
                                take possession of my entire soul like these
                                sweet morning of spare which enjoy whole heart.
                              </p>
                              <button className="bg-primary font-semibold text-sm md:text-lg  text-white px-3 py-2 rounded-2xl  mr-2">
                                <span className="mr-2 ">
                                  <i class="fa fa-heart"></i>
                                </span>
                                Like
                              </button>
                              <button className="bg-[#943eff] text-white text-sm md:text-lg  font-semibold px-3 py-2 rounded-2xl  mr-2">
                                <span className="mr-2 ">
                                  <i class="fa fa-reply"></i>
                                </span>
                                Reply
                              </button>
                            </div>
                          </div>
                          <div
                            className={`"about" ${
                              hide === 2 ? "block" : "hidden"
                            }`}
                          >
                            <div className="about-me">
                              <div className="pb-4 pt-5">
                                <h4 className="text-primary text-lg md:text-xl">
                                  About me
                                </h4>
                                <p className="mb-2 text-xs md:text-sm text-[#737B8B]">
                                  A wonderful serenity has taken possession of
                                  my entire soul, like these sweet mornings of
                                  spring which I enjoy with my whole heart. I am
                                  alone, and feel the charm of existence was
                                  created for the bliss of souls like mine.I am
                                  so happy, my dear friend, so absorbed in the
                                  exquisite sense of mere tranquil existence,
                                  that I neglect my talents.
                                </p>
                                <p className="text-xs md:text-sm text-[#737B8B]">
                                  A collection of textile samples lay spread out
                                  on the table - Samsa was a travelling salesman
                                  - and above it there hung a picture that he
                                  had recently cut out of an illustrated
                                  magazine and housed in a nice, gilded frame.
                                </p>
                              </div>
                            </div>
                            <div className="skills mb-4">
                              <h4 className="text-primary text-lg md:text-xl mb-2">
                                Skills
                              </h4>
                              <div className="flex  flex-wrap ">
                                <a
                                  href="#"
                                  className="border-[1px] text-center  hover:text-white mb-2 hover:bg-[#216FED] no-underline rounded-2xl bg-[#c5dafc] border-[#c5dafc]  mr-2 px-2 md:px-3 py-1 md:py-2  "
                                >
                                  <span class=" hover:text-white text-xs blcok md:text-sm font-medium">
                                    Admin
                                  </span>
                                </a>
                                <a
                                  href="#"
                                  className="border-[1px] text-center hover:text-white mb-2 hover:bg-[#216FED] no-underline rounded-2xl bg-[#c5dafc] border-[#c5dafc]  mr-2 px-2 md:px-3 py-1 md:py-2  "
                                >
                                  <span class=" hover:text-white text-xs md:text-sm font-medium">
                                    Dashboard
                                  </span>
                                </a>
                                <a
                                  href="#"
                                  className="border-[1px] text-center hover:text-white mb-2 hover:bg-[#216FED] no-underline rounded-2xl bg-[#c5dafc] border-[#c5dafc]  mr-2 px-2 md:px-3 py-1 md:py-2  "
                                >
                                  <span class=" hover:text-white text-xs md:text-sm font-medium">
                                    Photoshop
                                  </span>
                                </a>
                                <a
                                  href="#"
                                  className="border-[1px] text-center hover:text-white  mb-2 hover:bg-[#216FED] no-underline rounded-2xl bg-[#c5dafc] border-[#c5dafc]  mr-2 px-2 md:px-3 py-1 md:py-2  "
                                >
                                  <span class=" hover:text-white text-xs md:text-sm font-medium">
                                    Bootstrap
                                  </span>
                                </a>
                                <a
                                  href="#"
                                  className="border-[1px] text-center hover:text-white mb-2 hover:bg-[#216FED] no-underline rounded-2xl bg-[#c5dafc] border-[#c5dafc]  mr-2 px-2 md:px-3 py-1 md:py-2  "
                                >
                                  <span class=" hover:text-white text-xs md:text-sm font-medium">
                                    Responsive
                                  </span>
                                </a>
                                <a
                                  href="#"
                                  className="border-[1px] text-center hover:text-white mb-2 hover:bg-[#216FED] no-underline rounded-2xl bg-[#c5dafc] border-[#c5dafc]  mr-2 px-2 md:px-3 py-1 md:py-2  "
                                >
                                  <span class=" hover:text-white text-xs md:text-sm font-medium">
                                    Crypto
                                  </span>
                                </a>
                              </div>
                            </div>
                            <div className="language mb-4">
                              <h4 className="text-primary text-lg md:text-xl mb-2">
                                Language
                              </h4>
                              <a
                                href="#"
                                className="pr-4 text-[#89879f] text-xs md:text-lg no-underline"
                              >
                                English
                              </a>
                              <a
                                href="#"
                                className="pr-4 text-[#89879f] text-xs md:text-lg no-underline"
                              >
                                French
                              </a>
                              <a
                                href="#"
                                className="pr-4 text-[#89879f] text-xs md:text-lg no-underline"
                              >
                                Bangla
                              </a>
                            </div>
                            <div className="info mb-4">
                              <h4 className="text-primary text-lg md:text-xl mb-4">
                                Personal Information
                              </h4>
                              <div className="row mb-2">
                                <div className="col-sm-3 col-5">
                                  <h5 className="font-medium text-sm md:text-lg">
                                    Name <span>:</span>
                                  </h5>
                                </div>
                                <div className="col-sm-9 col-7">
                                  <span className="font-normal text-[#737B8B] text-xs md:text-sm">
                                    Mitchell C.Shay
                                  </span>
                                </div>
                              </div>
                              <div className="row mb-2">
                                <div className="col-sm-3 col-5">
                                  <h5 className="font-medium text-sm md:text-lg">
                                    Email <span>:</span>
                                  </h5>
                                </div>
                                <div className="col-sm-9 col-7">
                                  <span className="font-normal text-[#737B8B] text-xs md:text-sm">
                                    example@examplel.com
                                  </span>
                                </div>
                              </div>
                              <div className="row mb-2">
                                <div className="col-sm-3 col-5">
                                  <h5 className="font-medium text-sm md:text-lg">
                                    Availability <span>:</span>
                                  </h5>
                                </div>
                                <div className="col-sm-9 col-7">
                                  <span className="font-normal text-[#737B8B] text-xs md:text-sm">
                                    Full Time (Free Lancer)
                                  </span>
                                </div>
                              </div>
                              <div className="row mb-2">
                                <div className="col-sm-3 col-5">
                                  <h5 className="font-medium text-sm md:text-lg">
                                    Age <span>:</span>
                                  </h5>
                                </div>
                                <div className="col-sm-9 col-7">
                                  <span className="font-normal text-[#737B8B] text-xs md:text-sm">
                                    27
                                  </span>
                                </div>
                              </div>
                              <div className="row mb-2">
                                <div className="col-sm-3 col-5">
                                  <h5 className="font-medium text-sm md:text-lg">
                                    Location<span>:</span>
                                  </h5>
                                </div>
                                <div className="col-sm-9 col-7">
                                  <span className="font-normal text-[#737B8B] text-xs md:text-sm">
                                    Rosemont Avenue Melbourne, Florida
                                  </span>
                                </div>
                              </div>
                              <div className="row mb-2">
                                <div className="col-sm-3 col-5">
                                  <h5 className="font-medium text-sm md:text-lg">
                                    Year Experience <span>:</span>
                                  </h5>
                                </div>
                                <div className="col-sm-9 col-7">
                                  <span className="font-normal text-[#737B8B] text-xs md:text-sm">
                                    07 Year Experiences
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <h4 className="text-primary text-lg md:text-xl mb-4">
                                Work Experience
                              </h4>
                              <div className="row">
                                <div class="col-xl-6 col-md-6  col-sm-12">
                                  <div class="media ms-profile-experience mb-4 justify-between rounded-xl  border-2 border-[#216fed] px-3 py-2 flex items-center">
                                    <div class="mr-2 self-center">
                                      <img
                                        src={require("../img/assert 25.jpeg")}
                                        class="rounded-full w-[60px] md:w-[80px] img-fluid"
                                        alt="people"
                                      />
                                    </div>
                                    <div class="media-body flex-1">
                                      <h4 className="mb-0 text-sm lg:text-lg text-black font-medium">
                                        User Research Hub
                                      </h4>
                                      <p className="text-xs md:text-sm mb-0 text-[#737B8B]">
                                        January 2013 to Present
                                      </p>
                                      <p className="text-xs md:text-sm mb-0 text-[#737B8B]">
                                        UX Designer
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-xl-6 col-md-6  col-sm-12">
                                  <div class="media ms-profile-experience mb-4 justify-between rounded-xl  border-2 border-[#216fed] px-3 py-2 flex items-center">
                                    <div class="mr-2 self-center">
                                      <img
                                        src={require("../img/assert 26.jpg")}
                                        class="rounded-full w-[60px] md:w-[80px] img-fluid"
                                        alt="people"
                                      />
                                    </div>
                                    <div class="media-body flex-1">
                                      <h4 className="mb-0 text-sm lg:text-lg text-black font-medium">
                                        User Research Hub
                                      </h4>
                                      <p className="text-xs md:text-sm mb-0 text-[#737B8B]">
                                        January 2013 to Present
                                      </p>
                                      <p className="text-xs md:text-sm mb-0 text-[#737B8B]">
                                        UX Designer
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-xl-6 col-md-6  col-sm-12">
                                  <div class="media ms-profile-experience mb-4 justify-between rounded-xl  border-2 border-[#216fed] px-3 py-2 flex items-center">
                                    <div class="mr-2 self-center">
                                      <img
                                        src={require("../img/assert 27.jpg")}
                                        class="rounded-full w-[60px] md:w-[80px] img-fluid"
                                        alt="people"
                                      />
                                    </div>
                                    <div class="media-body flex-1">
                                      <h4 className="mb-0 text-sm lg:text-lg text-black font-medium">
                                        User Research Hub
                                      </h4>
                                      <p className="text-xs md:text-sm mb-0 text-[#737B8B]">
                                        January 2013 to Present
                                      </p>
                                      <p className="text-xs md:text-sm mb-0 text-[#737B8B]">
                                        UX Designer
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-xl-6 col-md-6  col-sm-12">
                                  <div class="media ms-profile-experience mb-4 justify-between rounded-xl  border-2 border-[#216fed] px-3 py-2 flex items-center">
                                    <div class="mr-2 self-center">
                                      <img
                                        src={require("../img/assert 28.jpg")}
                                        class="rounded-full w-[60px] md:w-[80px] img-fluid"
                                        alt="people"
                                      />
                                    </div>
                                    <div class="media-body flex-1">
                                      <h4 className="mb-0 text-sm lg:text-lg text-black font-medium">
                                        User Research Hub
                                      </h4>
                                      <p className="text-xs md:text-sm mb-0 text-[#737B8B]">
                                        January 2013 to Present
                                      </p>
                                      <p className="text-xs md:text-sm mb-0 text-[#737B8B]">
                                        UX Designer
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-xl-6 col-md-6  col-sm-12">
                                  <div class="media ms-profile-experience mb-4 justify-between rounded-xl  border-2 border-[#216fed] px-3 py-2 flex items-center">
                                    <div class="mr-2 self-center">
                                      <img
                                        src={require("../img/assert 29.jpg")}
                                        class="rounded-full w-[60px] md:w-[80px] img-fluid"
                                        alt="people"
                                      />
                                    </div>
                                    <div class="media-body flex-1">
                                      <h4 className="mb-0 text-sm lg:text-lg text-black font-medium">
                                        User Research Hub
                                      </h4>
                                      <p className="text-xs md:text-sm mb-0 text-[#737B8B]">
                                        January 2013 to Present
                                      </p>
                                      <p className="text-xs md:text-sm mb-0 text-[#737B8B]">
                                        UX Designer
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-xl-6 col-md-6  col-sm-12">
                                  <div class="media ms-profile-experience mb-4 justify-between rounded-xl  border-2 border-[#216fed] px-3 py-2 flex items-center">
                                    <div class="mr-2 self-center">
                                      <img
                                        src={require("../img/assert 25.jpeg")}
                                        class="rounded-full w-[60px] md:w-[80px] img-fluid"
                                        alt="people"
                                      />
                                    </div>
                                    <div class="media-body flex-1">
                                      <h4 className="mb-0 text-sm lg:text-lg text-black font-medium">
                                        User Research Hub
                                      </h4>
                                      <p className="text-xs md:text-sm mb-0 text-[#737B8B]">
                                        January 2013 to Present
                                      </p>
                                      <p className="text-xs md:text-sm mb-0 text-[#737B8B]">
                                        UX Designer
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className={`"setting" ${
                              hide === 3 ? "block" : "hidden"
                            }`}
                          >
                            <div className="pt-5 pb-4">
                              <h4 className="text-primary text-lg md:text-xl">
                                Account Setting
                              </h4>
                              <form action="" className="text-sm md:text-lg">
                                <div className="row text-[#737B8B] font-normal ">
                                  <div className="mb-4 col-md-6">
                                    <label className="mb-2">Email</label>
                                    <input
                                      type="email"
                                      placeholder="Email"
                                      className="form-control"
                                    />
                                  </div>
                                  <div className="mb-4 col-md-6">
                                    <label className="mb-2">Password</label>
                                    <input
                                      type="password"
                                      placeholder="Email"
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                                <div className="mb-3">
                                  <label className="mb-2">Address</label>
                                  <input
                                    type="text"
                                    placeholder="Address"
                                    className="form-control"
                                  />
                                </div>
                                <div className="mb-3">
                                  <label className="mb-2">Address2</label>
                                  <input
                                    type="text"
                                    placeholder="Address2"
                                    className="form-control"
                                  />
                                </div>
                                <div className="row text-[#737B8B] font-normal">
                                  <div className="mb-4 col-md-6">
                                    <label className="form-label">City</label>
                                    <input type="text" class="form-control" />
                                  </div>
                                  <div class="mb-4 col-md-4 ">
                                    <label class="form-label">State</label>
                                    <select
                                      class="form-control w-[80px] md:w[100px] "
                                      // style={{width:"80px"}}
                                    >
                                      <option className="text-xs md:text-lg">
                                        Choose...
                                      </option>
                                      <option className="text-xs md:text-lg">
                                        Option 1
                                      </option>
                                      <option className="text-xs md:text-lg">
                                        Option 2
                                      </option>
                                      <option className="text-xs md:text-lg">
                                        Option 3
                                      </option>
                                    </select>
                                  </div>
                                  <div class="mb-4 col-md-2">
                                    <label class="form-label">Zip</label>
                                    <input type="text" class="form-control" />
                                  </div>
                                </div>
                                <div class="mb-4">
                                  <div class="form-check custom-checkbox">
                                    <input
                                      type="checkbox"
                                      class="form-check-input"
                                      id="gridCheck"
                                    />
                                    <label
                                      class="form-check-label form-label"
                                      for="gridCheck"
                                    >
                                      Check me out
                                    </label>
                                  </div>
                                </div>
                                <button class="btn btn-primary" type="submit">
                                  Sign in
                                </button>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footar />
    </div>
  );
}