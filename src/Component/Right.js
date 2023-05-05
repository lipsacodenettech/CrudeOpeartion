/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  Title,
  ArcElement,
} from "chart.js";
import { Bar, Line, Doughnut } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { Menu, Transition } from "@headlessui/react";
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  Title,
  ArcElement
);
export default function Right() {
  const data = {
    labels: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    datasets: [
      {
        label: "",
        data: [
          3000, 4500, 2000, 6000, 4000, 3500, 4100, 4700, 4800, 7000, 5000,
          4000, 4000, 6000, 2500,
        ],
        backgroundColor: "#0d6efd",
        width: "10px",
        borderWidth: 1,
        borderRadius: 20,
      },
    ],
  };
  const options = { maintainAspectRatio: false };
  const labels = ["January", "February", "March", "April", "May"];
  const data1 = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 })
        ),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 })
        ),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  const data2 = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "My First Dataset",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "#66f385",
          "#f25cf2",
          "#f2a45c",
        ],

        hoverOffset: 4,
      },
    ],
  };
  return (
    <div className="bg-[#EDF2F6] ">
      <div className="pt-[6.5rem] z-10 container transition-all ease-in">
        <div className="lg:ml-[11rem] sm:ml-[4rem ] md:ml-[6rem]">
          <div className="mb-[21px] items-center flex flex-wrap">
            <h2 className="mb-4 mr-auto md:text-[2.125rem]  sm:text-[1.8rem] font-semibold">
              Dashboard
            </h2>
            <div>
              <ol className="text-lg font-semibold flex flex-wrap p-0    mb-4 list-none ">
                <li>
                  <a
                    href="#"
                    className="text-[#737B8B] no-underline text-[0.875rem] md:text-[1.125rem]"
                  >
                    Dashboard
                  </a>{" "}
                </li>
                <li className="before:float-left before:pr-2 before:content-['/'] pl-2 text-[#216FED]">
                  <a
                    href="#"
                    className="text-[#737B8B] no-underline  text-[0.875rem] md:text-[1.125rem]"
                  >
                    Dashboard
                  </a>
                </li>
              </ol>
            </div>
          </div>
          <div className="relative  row z-10">
            <div className="col-sm-12 col-md-6 col-xl-3 col-lg-6">
              <div className=" h-[calc(100% - 30px)] mb-[1.875rem] bg-white transition-all ease-in relative border-0 rounded-3xl shadow-sm">
                <div className=" p-[1.875rem] items-center justify-between flex  flex-auto break-words">
                  <div className=" mr-2">
                    <h5 className="text-[#737B8B] text-[1rem]">
                      Cars for sale
                    </h5>
                    <h2 className=" font-semibold text-[1.875rem] ">685</h2>
                  </div>
                  <div>
                    <span
                      className="donut1"
                      data-peity='{ "fill": ["#0d6efd", "rgba(242, 246, 252)"]}'
                      style={{ display: "none" }}
                    >
                      5/6
                    </span>
                    <svg className="peity" height="5.75rem" width="5.75rem">
                      <path
                        d="M 40.25 0 A 40.25 40.25 0 1 1 5.392477497676346 20.124999999999996 L 22.821238748838173 30.1875 A 20.125 20.125 0 1 0 40.25 20.125"
                        data-value={5}
                        fill="#0d6efd"
                      />
                      <path
                        d="M 5.392477497676346 20.124999999999996 A 40.25 40.25 0 0 1 40.24999999999999 0 L 40.24999999999999 20.125 A 20.125 20.125 0 0 0 22.821238748838173 30.1875"
                        data-value={1}
                        fill="rgba(242, 246, 252)"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-xl-3 col-lg-6">
              <div className=" h-[calc(100% - 30px)] mb-[1.875rem] bg-white transition-all ease-in relative border-0 rounded-3xl shadow-sm">
                <div className=" p-[1.875rem] items-center justify-between flex  flex-auto break-words">
                  <div className=" mr-2">
                    <h5 className="text-[#737B8B] text-[1rem]">Cars on rent</h5>
                    <h2 className=" font-semibold text-[1.875rem] ">685</h2>
                  </div>
                  <div>
                    <span
                      className="donut1"
                      data-peity='{ "fill": ["rgb(56, 226, 93,1)", "rgba(242, 246, 252)"]}'
                      style={{ display: "none" }}
                    >
                      2/8
                    </span>
                    <svg className="peity" height="5.75rem" width="5.75rem">
                      <path
                        d="M 40.25 0 A 40.25 40.25 0 0 1 80.5 40.25 L 60.375 40.25 A 20.125 20.125 0 0 0 40.25 20.125"
                        data-value={2}
                        fill="rgb(56, 226, 93,1)"
                      />
                      <path
                        d="M 80.5 40.25 A 40.25 40.25 0 1 1 40.24999999999999 0 L 40.24999999999999 20.125 A 20.125 20.125 0 1 0 60.375 40.25"
                        data-value={6}
                        fill="rgba(242, 246, 252)"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 self-center col-md-6  col-xl-3 col-lg-6">
              <div className=" h-[calc(100% - 30px)] mb-[1.875rem] bg-white transition-all ease-in relative border-0 rounded-3xl shadow-sm">
                <div className=" p-[1.875rem] items-center justify-between flex  flex-auto break-words">
                  <div className=" mr-2">
                    <h5 className="text-[#737B8B] text-[1rem]">Total cars</h5>
                    <h2 className=" font-semibold text-[1.875rem] ">3,672</h2>
                  </div>
                  <div>
                    <span
                      className="donut1"
                      data-peity='{ "fill": ["rgb(255, 135, 35,1)", "rgba(242, 246, 252)"]}'
                      style={{ display: "none" }}
                    >
                      5/8
                    </span>
                    <svg className="peity" height="5.75rem" width="5.75rem">
                      <path
                        d="M 40.25 0 A 40.25 40.25 0 1 1 11.788952057241463 68.71104794275854 L 26.01947602862073 54.48052397137927 A 20.125 20.125 0 1 0 40.25 20.125"
                        data-value={5}
                        fill="rgb(255, 135, 35,1)"
                      />
                      <path
                        d="M 11.788952057241463 68.71104794275854 A 40.25 40.25 0 0 1 40.24999999999999 0 L 40.24999999999999 20.125 A 20.125 20.125 0 0 0 26.01947602862073 54.48052397137927"
                        data-value={3}
                        fill="rgba(242, 246, 252)"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 self-center col-md-6 col-lg-6 col-xl-3">
              <div className=" h-[calc(100% - 30px)] mb-[1.875rem] bg-white transition-all ease-in relative border-0 rounded-3xl shadow-sm">
                <div className=" p-[1.875rem] items-center justify-between flex  flex-auto break-words">
                  <div className=" mr-2">
                    <h5 className="text-[#737B8B] text-[1rem]">Total city</h5>
                    <h2 className=" font-semibold text-[1.875rem] ">75</h2>
                  </div>
                  <div>
                    <span
                      className="donut1"
                      data-peity='{ "fill": ["rgb(51, 62, 75,1)", "rgba(242, 246, 252)"]}'
                      style={{ display: "none" }}
                    >
                      3/8
                    </span>
                    <svg className="peity" height="5.75rem" width="5.75rem">
                      <path
                        d="M 40.25 0 A 40.25 40.25 0 0 1 68.71104794275854 68.71104794275854 L 54.48052397137927 54.48052397137927 A 20.125 20.125 0 0 0 40.25 20.125"
                        data-value={3}
                        fill="rgb(51, 62, 75,1)"
                      />
                      <path
                        d="M 68.71104794275854 68.71104794275854 A 40.25 40.25 0 1 1 40.24999999999999 0 L 40.24999999999999 20.125 A 20.125 20.125 0 1 0 54.48052397137927 54.48052397137927"
                        data-value={5}
                        fill="rgba(242, 246, 252)"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row relative z-10">
            <div className="col-xl-8 col-xxl-8">
              <div className="row">
                <div className="col-lg-12">
                  <div className="h-[calc(100% - 30px)] mb-[1.875rem] bg-white transition-all ease-in relative border-0 rounded-3xl shadow-sm">
                    <div className="rounded-3xl relative bg-transparent pt-4 pb-2 px-[1.875rem] flex justify-between items-center">
                      <h4 className="text-lg">Total Revenue</h4>
                      <div className="flex">
                        <div className="mt-0 hidden md:block">
                          <ul
                            className="border-0 flex flex-wrap pl-0 mb-0 list-none p-0 m-0 "
                            role="tablist"
                          >
                            <li>
                              <a
                                href="#"
                                className="text-[#216FED] no-underline  border-b-[0.150rem] border-solid border-b-[rgba(33, 111, 237, 0.2)] font-semibold  text-[0.875rem] px-4 py-2"
                              >
                                Monthly
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-[#216FED] no-underline  border-b-[0.150rem] border-solid border-b-[rgba(33, 111, 237, 0.2)] font-semibold  text-[0.875rem] px-4 py-2"
                              >
                                Daily
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-[#216FED] no-underline  border-b-[0.150rem] border-solid border-b-[rgba(33, 111, 237, 0.2)] font-semibold  text-[0.875rem] px-4 py-2"
                              >
                                Today
                              </a>
                            </li>
                          </ul>
                        </div>
                        <Menu
                          as="div"
                          className="relative inline-block text-left"
                        >
                          <div>
                            <Menu.Button className="inline-flex relative w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900   hover:bg-gray-50">
                              <i class="fa-solid fa-ellipsis text-[1.2rem]"></i>
                            </Menu.Button>
                          </div>
                          <Transition
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute m-0 inset-x-auto inset-y-0  ">
                              <div className=" flex flex-col py-1  rounded-3xl z-10 mt-2  px-4 origin-top-right  bg-white shadow-lg  ">
                                <Menu.Item>
                                  <a
                                    className="py-[0.375rem] block pr-[20px] text-left  w-full text-[0.875rem] text-[#737B8B] bg-transparent border-0 no-underline"
                                    href="#"
                                  >
                                    Details
                                  </a>
                                </Menu.Item>
                                <Menu.Item>
                                  <a
                                    className="py-[0.375rem] block pr-8 text-danger w-full text-left text-[0.875rem] bg-transparent border-0 no-underline"
                                    href="#"
                                  >
                                    Cancel
                                  </a>
                                </Menu.Item>
                              </div>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    </div>
                    <div className="py-0 px-[1.875rem] flex-auto">
                      <div>
                        <div className="relative ">
                          <div className="flex-wrap mb-6 items-center">
                            <div className="flex items-center">
                              <span className="md:text-[2.25rem] text-2xl text-black font-semibold mr-12">
                                $236,535
                              </span>
                              <div className="flex items-center">
                                <div className="p-1 md:p-2 bg-[#32d16d] rounded-full">
                                  <i class="fa-solid fa-arrow-up   px-2  text-white text-[0.750rem] md:text-[0.875rem]"></i>
                                </div>
                                <div className="ml-4 ">
                                  <span className="text-xl  font-medium  text-[#32d16d]">
                                    0.8%
                                  </span>
                                  <p className="mb-0 text-[0.875rem] hidden md:block">
                                    then last week
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <Bar
                            style={{ padding: "20px", width: "80%" }}
                            data={data}
                            width={"250vh"}
                            height={"250vh"}
                            options={options}
                          ></Bar>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="mb-[1.875rem] bg-white relative border-0 border-solid border-transparent rounded-3xl shadow-sm h-[calc(100% - 30px)] flex flex-col min-w-0 bg-clip-border">
                    <div className="rounded-sm relative bg-transparent pt-6 pb-6 px-[1.875rem] justify-between items-center border-0 block mb-0 ">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-sm md:text-2xl ">Overview</div>
                        <div>
                          <Menu
                            as="div"
                            className="relative inline-block text-left"
                          >
                            <div>
                              <Menu.Button className="inline-flex relative w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900   hover:bg-gray-50">
                                <i class="fa-solid fa-ellipsis-vertical text-[1.2rem]"></i>
                              </Menu.Button>
                            </div>
                            <Transition
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items className="absolute m-0 inset-x-auto inset-y-0  ">
                                <div className=" flex flex-col py-1  rounded-3xl z-10 mt-2  px-4 origin-top-right  bg-white shadow-lg  ">
                                  <Menu.Item>
                                    <a
                                      className="py-[0.375rem] block pr-[20px] text-left  w-full text-[0.875rem] text-[#737B8B] bg-transparent border-0 no-underline"
                                      href="#"
                                    >
                                      Details
                                    </a>
                                  </Menu.Item>
                                  <Menu.Item>
                                    <a
                                      className="py-[0.375rem] block pr-8 text-danger w-full text-left text-[0.875rem] bg-transparent border-0 no-underline"
                                      href="#"
                                    >
                                      Cancel
                                    </a>
                                  </Menu.Item>
                                </div>
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        </div>
                      </div>
                      <div className="relative  row z-10">
                        <div className="flex col-sm-4 col-6 items-center ">
                          <div className="px-2 md:px-3  py-1 md:py-2 text-center  leading-10 text-white rounded-3xl text-2xl md:text-3xl  bg-[#216FED]">
                            <i class="far fa-building  "></i>
                          </div>
                          <div className="ml-4 sm:ml-2">
                            <span className="text-xs md:text-lg ">
                              Total sale
                            </span>
                            <h4 className="font-bold mb-0 text-xs md:text-lg">
                              2,345 Cars
                            </h4>
                          </div>
                        </div>
                        <div className="flex col-sm-4 col-6 items-center ">
                          <div className="px-2 md:px-3  py-1 md:py-2 text-center  leading-10 text-white rounded-3xl text-2xl md:text-3xl bg-[#68e365]">
                            <i class="far fa-building "></i>
                          </div>
                          <div className="ml-4 sm:ml-2">
                            <span className="text-xs md:text-lg">
                              Total sale
                            </span>
                            <h4 className="font-bold mb-0 text-xs md:text-lg">
                              2,345 Cars
                            </h4>
                          </div>
                        </div>
                        <div className="flex col-sm-4 col-6 items-center ">
                          <div className="text-right mr-4 md:text-end hidden md:block">
                            <span className="text-xl  font-medium  text-[#32d16d]">
                              0.8%
                            </span>
                            <p className="mb-0 text-base hidden md:block">
                              then last week
                            </p>
                          </div>
                          <div className="p-1 md:p-4 bg-[#32d16d] rounded-full hidden md:block  ">
                            <i class="fa-solid fa-arrow-up   px-2  text-white text-[0.750rem] md:text-lg"></i>
                          </div>
                        </div>
                      </div>
                      <div>
                        <Line
                          options={options}
                          data={data1}
                          width={"250vh"}
                          height={"250vh"}
                          style={{ padding: "20px", width: "80%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="mb-[1.875rem] bg-white relative border-0 border-solid border-transparent rounded-3xl shadow-sm h-[calc(100% - 30px)] flex flex-col min-w-0 bg-clip-border">
                    <div className=" rounded-sm relative bg-transparent pt-6 pb-6 px-[1.875rem] justify-between items-center border-0 block mb-0">
                      <h4 className="text-lg">Pie chart</h4>
                    </div>
                    <div className="relative pt-0 text-center p-[1.875rem] flex-auto">
                      <Doughnut
                        options={options}
                        data={data2}
                        // style={{padding: "20px",  }}
                        width={"250vh"}
                        height={"250vh"}
                        // width="50px"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="mb-[1.875rem] bg-white relative border-0 border-solid border-transparent rounded-3xl shadow-sm h-[calc(100% - 30px)] flex flex-col min-w-0 bg-clip-border">
                    <div className=" rounded-sm  flex relative bg-transparent pt-6 pb-6 px-[1.875rem] justify-between items-center border-0 block mb-0">
                      <h4 className="text-lg">Propeties Map</h4>
                      <Menu
                        as="div"
                        className="relative inline-block text-left"
                      >
                        <div>
                          <Menu.Button className="inline-flex relative w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900   hover:bg-gray-50">
                            <i class="fa-solid fa-ellipsis-vertical text-[1.2rem]"></i>
                          </Menu.Button>
                        </div>
                        <Transition
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute m-0 inset-x-auto inset-y-0  ">
                            <div className=" flex flex-col py-1  rounded-3xl z-10 mt-2  px-4 origin-top-right  bg-white shadow-lg  ">
                              <Menu.Item>
                                <a
                                  className="py-[0.375rem] block pr-[20px] text-left  w-full text-[0.875rem] text-[#737B8B] bg-transparent border-0 no-underline"
                                  href="#"
                                >
                                  Details
                                </a>
                              </Menu.Item>
                              <Menu.Item>
                                <a
                                  className="py-[0.375rem] block pr-8 text-danger w-full text-left text-[0.875rem] bg-transparent border-0 no-underline"
                                  href="#"
                                >
                                  Cancel
                                </a>
                              </Menu.Item>
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                    <div className="relative pt-0 text-center p-[1.875rem] flex-auto">
                      <img src={require("../img/download.png")} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-xxl-4">
              <div className="row relative x-10">
                <div className="col-xl-12">
                  <div className="mb-8 bg-white relative rounded-lg transition-all border-0 border-transparent border-solid shadow-sm height-[calc(100% - 30px)]">
                    <div className=" p-4 flex-auto pb-4 ">
                      <p className="font-medium text-black  text-base mb-2  flex">
                        Product Viewed
                        <span className="font-normal text-sm text-[#6e6e6e] ml-auto">
                          561/days
                        </span>
                      </p>
                      <div className="h-4 bg-[#f6f6f6] overflow-hidden mb-4 flex text-[0.65625rem] rounded-xl">
                        <div className="w-[60%] h-4 bg-primary flex flex-col justify-center overflow-hidden rounded-full text-white text-center whitespace-no-wrap"></div>
                      </div>
                      <p className="font-medium text-black  text-base mb-2  flex">
                        Product Listed
                        <span className="font-normal text-sm text-[#6e6e6e] ml-auto">
                          3,456 Units
                        </span>
                      </p>
                      <div className="h-4 bg-[#f6f6f6] overflow-hidden mb-4 flex text-[0.65625rem] rounded-xl">
                        <div className="w-[60%] h-4 bg-primary flex flex-col justify-center overflow-hidden rounded-full text-white text-center whitespace-no-wrap"></div>
                      </div>
                      <p className="font-medium text-black  text-base mb-2  flex">
                        Reviews
                        <span className="font-normal text-sm text-[#6e6e6e] ml-auto">
                          456 Comments
                        </span>
                      </p>
                      <div className="h-4 bg-[#f6f6f6] overflow-hidden mb-1 flex text-[0.65625rem] rounded-xl">
                        <div className="w-[60%] h-4 bg-primary flex flex-col justify-center overflow-hidden rounded-full text-white text-center whitespace-no-wrap"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-md-6">
                  <div className="mb-8 bg-white relative rounded-lg transition-all border-0 border-transparent border-solid shadow-sm height-[calc(100% - 30px)]">
                    <div className="rounded-3xl relative bg-transparent pt-4  px-[1.875rem] flex justify-between items-center">
                      <h4 className="text-lg">Customer Review</h4>
                      <div>
                        <Menu
                          as="div"
                          className="relative inline-block text-left"
                        >
                          <div>
                            <Menu.Button className="inline-flex relative w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900   hover:bg-gray-50">
                              <i class="fa-solid fa-ellipsis-vertical text-[1.2rem]"></i>
                            </Menu.Button>
                          </div>
                          <Transition
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute m-0 inset-x-auto inset-y-0  ">
                              <div className=" flex flex-col py-1  rounded-3xl z-10 mt-2  px-4 origin-top-right  bg-white shadow-lg  ">
                                <Menu.Item>
                                  <a
                                    className="py-[0.375rem] block pr-[20px] text-left  w-full text-[0.875rem] text-[#737B8B] bg-transparent border-0 no-underline"
                                    href="#"
                                  >
                                    Details
                                  </a>
                                </Menu.Item>
                                <Menu.Item>
                                  <a
                                    className="py-[0.375rem] block pr-8 text-danger w-full text-left text-[0.875rem] bg-transparent border-0 no-underline"
                                    href="#"
                                  >
                                    Cancel
                                  </a>
                                </Menu.Item>
                              </div>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    </div>
                    <div className=" flex-auto  p-[1.875rem]">
                      <div className=" mb-1 border-b-solid border-b border-b-[#0d6efd]">
                        <div className="flex mb-4 flex-wrap items-end">
                          <img
                            className="rounded-full mr-4"
                            width="40px"
                            src={require("../img/asset 6.jpeg")}
                            alt=""
                          />
                          <div>
                            <h6 className="text-black font-medium text-base mb-0 ">
                              Hawkins Maru
                            </h6>
                            <span className="text-sm">5m ago</span>
                          </div>
                          <div class="star-icons ml-auto">
                            <i class="fa-solid fa-star text-yellow-400"></i>
                            <i class="fa-solid fa-star text-yellow-400"></i>
                            <i class="fa-solid fa-star text-slate-400"></i>
                            <i class="fa-solid fa-star text-slate-400"></i>
                            <i class="fa-solid fa-star text-slate-400"></i>
                          </div>
                          <p class="mb-0 pb-0 text-sm">
                            I viewed a number of properties with Just Property
                            and found them to be professional, efficient,
                            patient, courteous and helpful every time.
                          </p>
                        </div>
                      </div>
                      <div className=" mb-1  mt-3 border-b-solid border-b border-b-[#0d6efd]">
                        <div className="flex mb-4  flex-wrap items-end">
                          <img
                            className="rounded-full mr-4"
                            width="40px"
                            src={require("../img/asset 7.jpeg")}
                            alt=""
                          />
                          <div>
                            <h6 className="text-black font-medium text-base mb-0 ">
                            Bella Smith
                            </h6>
                            <span className="text-sm">20m ago</span>
                          </div>
                          <div class="star-icons ml-auto">
                            <i class="fa-solid fa-star text-yellow-400"></i>
                            <i class="fa-solid fa-star text-yellow-400"></i>
                            <i class="fa-solid fa-star text-yellow-400"></i>
                            <i class="fa-solid fa-star text-yellow-400"></i>
                            <i class="fa-solid fa-star text-slate-400"></i>
                          </div>
                          <p class="mb-0 pb-0 text-sm">
                          Dealing with Syamsudin and Bakri was a joy. I got in touch with Just Property after seeing a couple of properties that caught my eye. Both Syamsudin and Bakri strive to deliver a professional service and surpassed my expectations - they were not only helpful but extremely approachable and not at all bumptious...
                          </p>
                        </div>
                      </div>
                      <div className=" mb-1  mt-3 border-b-solid border-b border-b-[#0d6efd]">
                        <div className="flex mb-4  flex-wrap items-end">
                          <img
                            className="rounded-full mr-4"
                            width="40px"
                            src={require("../img/asset 8.jpeg")}
                            alt=""
                          />
                          <div>
                            <h6 className="text-black font-medium text-base mb-0 ">
                              Hawkins Maru
                            </h6>
                            <span className="text-sm">5m ago</span>
                          </div>
                          <div class="star-icons ml-auto">
                            <i class="fa-solid fa-star text-yellow-400"></i>
                            <i class="fa-solid fa-star text-yellow-400"></i>
                            <i class="fa-solid fa-star text-yellow-400"></i>
                            <i class="fa-solid fa-star text-slate-400"></i>
                            <i class="fa-solid fa-star text-slate-400"></i>
                          </div>
                          <p class="mb-0 pb-0 text-sm">
                            I viewed a number of properties with Just Property
                            and found them to be professional, efficient,
                            patient, courteous and helpful every time.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="border-0 pt-0 pb-4   px-[1.875rem]">
                      <a href="#" className="btn btn-primary block w-full">See More Reviews</a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-md-6">
                  <div className="h-[calc(100% - 30px)] mb-[1.875rem] bg-white  transition-all ease-in relative border-0 rounded-3xl shadow-sm">
                    <div className="p-[1.875rem] items-center justify-between flex  flex-auto break-words">
                      <h4 className="text-xl">Recent Customer</h4>
                      <div>
                        {" "}
                        <Menu
                          as="div"
                          className="relative inline-block text-left"
                        >
                          <div>
                            <Menu.Button className="inline-flex relative w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900   hover:bg-gray-50">
                              <i class="fa-solid fa-ellipsis-vertical text-[1.2rem]"></i>
                            </Menu.Button>
                          </div>
                          <Transition
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute m-0 inset-x-auto inset-y-0  ">
                              <div className=" flex flex-col py-1  rounded-3xl z-10 mt-2  px-4 origin-top-right  bg-white shadow-lg  ">
                                <Menu.Item>
                                  <a
                                    className="py-[0.375rem] block pr-[20px] text-left  w-full text-[0.875rem] text-[#737B8B] bg-transparent border-0 no-underline"
                                    href="#"
                                  >
                                    Details
                                  </a>
                                </Menu.Item>
                                <Menu.Item>
                                  <a
                                    className="py-[0.375rem] block pr-8 text-danger w-full text-left text-[0.875rem] bg-transparent border-0 no-underline"
                                    href="#"
                                  >
                                    Cancel
                                  </a>
                                </Menu.Item>
                              </div>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    </div>
                    <div className="p-[1.875rem]  flex-auto">
                      <div className="flex items-center mb-4">
                        <div className="mr-4 ">
                          <img
                            src={require("../img/asset 9.jpeg")}
                            alt=""
                            className="rounded-3xl h-[3.125rem] w-[3.125rem]"
                          />
                        </div>
                        <div>
                          <h4 className="mb-0 text-base">Benny Chagur</h4>
                          <p className="text-primary font-semibold mb-0 text-sm">
                            MEMBER
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center mb-4">
                        <div className="mr-4 ">
                          <img
                            src={require("../img/asset 10.jpeg")}
                            alt=""
                            className="rounded-3xl h-[3.125rem] w-[3.125rem]"
                          />
                        </div>
                        <div>
                          <h4 className="mb-0 text-base">Chynita Bella</h4>
                          <p className="text-primary font-semibold mb-0 text-sm">
                            MEMBER
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center mb-4">
                        <div className="mr-4 ">
                          <img
                            src={require("../img/asset 11.jpeg")}
                            alt=""
                            className="rounded-3xl h-[3.125rem] w-[3.125rem]"
                          />
                        </div>
                        <div>
                          <h4 className="mb-0 text-base">David Heree</h4>
                          <p className="text-[#8089a1] font-semibold mb-0 text-sm">
                            Regular Customer
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center mb-4">
                        <div className="mr-4 ">
                          <img
                            src={require("../img/asset 12.jpeg")}
                            alt=""
                            className="rounded-3xl h-[3.125rem] w-[3.125rem]"
                          />
                        </div>
                        <div>
                          <h4 className="mb-0 text-base">Evan D. Mas</h4>
                          <p className="text-primary font-semibold mb-0 text-sm">
                            MEMBER
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center mb-4">
                        <div className="mr-4 ">
                          <img
                            src={require("../img/asset 13.jpeg")}
                            alt=""
                            className="rounded-3xl h-[3.125rem] w-[3.125rem]"
                          />
                        </div>
                        <div>
                          <h4 className="mb-0 text-base">Supratman</h4>
                          <p className="text-[#8089a1] font-semibold mb-0 text-sm">
                            Regular Customer
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center mb-4">
                        <div className="mr-4 ">
                          <img
                            src={require("../img/asset 14.jpeg")}
                            alt=""
                            className="rounded-3xl h-[3.125rem] w-[3.125rem]"
                          />
                        </div>
                        <div>
                          <h4 className="mb-0 text-base">John Kusnaidi</h4>
                          <p className="text-[#8089a1] font-semibold mb-0 text-sm">
                            Regular Customer
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="border-0 pt-0 pb-4   px-[1.875rem]">
                      <a href="#" className="btn btn-primary block w-full"><i class="fa-solid fa-plus"></i>Add new Customer</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
