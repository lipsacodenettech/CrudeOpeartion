/* eslint-disable no-array-constructor */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-use-before-define */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-lone-blocks */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import {
  useDeleteCarMutation,
  useInsertNewCarMutation,
  useLazyGetAllCarQuery,
  useUpdateCarMutation,
} from "./services/api";
import swal from "sweetalert";
import { useFormik } from "formik";
import { Addschemas } from "./schemas/Add";

import { useNavigate } from "react-router-dom";
import Child from "./Child";
import Header from "./Component/Header";
import Sidebar from "./Component/Sidebar";
import Footer from "./Component/Footar";

export default function Adduser() {
  const [SelectedId, setSelectedID] = useState();
  const [IsImageChanging, setIsImageChanging] = useState(false);
  const [Result, setResult] = useState([]);
  const [ButtonTxt, setButtonTxt] = useState("update cars");
  const [isUpdating, setIsUpdating] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [image, setImage] = useState([]);
  const navigate = useNavigate();
  var initialValues = {
    name: null,
    color: null,
    brand: null,
    price: null,
    car_file: null,
  };
  // formik validations
  const {
    values,
    errors,
    setErrors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema: Addschemas,
    onSubmit: (values, action) => {
      var formdata = new FormData();
      for (let i = 0; i < values.car_file.length; i++) {
        formdata.append("car_file", values.car_file[i].image);
      }
      formdata.append("name", values.name);
      formdata.append("price", values.price);
      formdata.append("brand", values.brand);
      formdata.append("color", values.color);
      if (values?.name.length <= 2) {
        setErrors({ name: "name is too Short" });
      } else if (values?.name.length >= 10) {
        setErrors({ name: "name is too long" });
      } else {
        InsertNewCar(formdata);
      }
    },
    handleChange(e) {
      initialValues({
        ...initialValues,
        [e.target.name]: e.target.value,
      });
    },
  });
  // for open pop up
  function HandelPopUpOpen() {
    setIsModalOpen(true);
  }
  //  for close pop up
  function HandelPopUpClose() {
    setIsModalOpen(false);
    setImage([]);
  }
  // log out
  const Logout = () => {
    window.localStorage.clear();
    navigate("/login");
  };

  // getting all data
  const [getCars, result] = useLazyGetAllCarQuery();
  const { isSuccess, isFetching, isError, error } = result;
  useEffect(() => {
    getCars({});
  }, []);
  useEffect(() => {
    if (isSuccess && !isFetching) {
      setResult(result?.data.length > 0 ? result.data : []);
      setIsUpdating(false);
    }
    if (isFetching) {
      setIsUpdating(true);
    }
  }, [isSuccess, isFetching]);

  // for deleting dat
  const [delteCars, deleteCarsResult] = useDeleteCarMutation();
  const del = (id) => {
    SweetAlertdel(id);
    setSelectedID(id);
  };
  const {
    isSuccess: isdeSuccess,
    isFetching: isdeFetching,
    isError: isderError,
    error: deError,
  } = deleteCarsResult;

  // for selecting user on click of edit button
  function selectUser(data) {
    setFieldValue("name", data.name);
    setFieldValue("color", data.color);
    setFieldValue("brand", data.brand);
    setFieldValue("price", data.price);

    let images = [];
    getDataBlob(`${process.env.REACT_APP_BASE_URL}/file/${data.image}`);
    async function getDataBlob(url) {
      var res = await fetch(url);
      var blob = await res.blob();
      var base64img = await parseURI(blob);
      console.log(base64img);
    }
    async function parseURI(d) {
      var reader = new FileReader();
      reader.readAsDataURL(d);
      return new Promise((res, rej) => {
        reader.onload = (e) => {
          for (let i = 0; i < data.image.length; i++) {
            let object = {
              image: e.target.result,
            };
            images.push(object);
          }
        };
      });
    }

    setImage(images);
    setSelectedID(data._id);
  }

  // for updating user on click of update user
  const [UpdateCar, Updateresult] = useUpdateCarMutation();
  const {
    isSuccess: isupSuccess,
    isFetching: isupFetching,
    isError: isuprError,
    error: upError,
  } = Updateresult;

  const updateUser = () => {
    var formdata = new FormData();
    if (image) {
      for (let i = 0; i < values.car_file.length; i++) {
        formdata.append("car_file", values.car_file[i].image);
      }
    }
    formdata.append("name", values.name);
    formdata.append("price", values.price);
    formdata.append("brand", values.brand);
    formdata.append("color", values.color);
    const update = {
      formdata,
      SelectedId,
    };
    setIsUpdating(true);
    UpdateCar(update);
  };

  // for inserting new car
  const [InsertNewCar, CarResult] = useInsertNewCarMutation();
  const {
    isSuccess: isCarSuccess,
    isFetching: isCarFetching,
    isError: isCarError,
    error: carError,
  } = CarResult;
  useEffect(() => {
    if (isCarError && !isCarFetching) {
      SweetAlertAdd();
    }
  });
  // for setting null value when model is open on click of Add new car button
  function AddNew() {
    setButtonTxt("Add new");
    setFieldValue("name", null);
    setFieldValue("color", null);
    setFieldValue("brand", null);
    setFieldValue("price", null);
    setFieldValue("car_file", null);
    HandelPopUpOpen();
    setIsImageChanging(false);
  }

  // common use effect for  getting all data
  useEffect(() => {
    if (
      (isCarSuccess && !isCarFetching) ||
      (isupSuccess && !isupFetching) ||
      (isdeSuccess && !isdeFetching)
    ) {
      getCars({});
      setIsUpdating(false);
    }
  }, [
    isCarSuccess,
    isCarFetching,
    isupSuccess,
    isupFetching,
    isdeSuccess,
    isdeFetching,
  ]);
  useEffect(() => {
    if (isupSuccess || isCarSuccess) {
      HandelPopUpClose();
    }
  }, [isupSuccess, isCarSuccess]);

  // when car is updated successfully alert is called
  useEffect(() => {
    if (isupSuccess && !isupFetching) {
      SweetAlertUp();
    }
  }, [isupSuccess, isupFetching]);

  // when car is inserted successfully alert is called
  useEffect(() => {
    if (isCarSuccess && !isCarFetching) {
      SweetAlertAdd();
    }
  }, [isCarSuccess, isCarFetching]);

  // when car is deleted successfully alert is called
  function SweetAlertdel(id) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this record !",
      icon: "warning",
      buttons: true,

      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        setIsUpdating(true);
        delteCars(id);
      } else {
        swal("Your record is safe!");
        setIsUpdating(false);
      }
    });
  }

  // update alert
  function SweetAlertUp() {
    swal({
      title: "Good job!",
      text: "record is updated successfully!",
      icon: "success",
      button: "Okay!",
    });
  }

  // insert new carr alert
  function SweetAlertAdd() {
    swal({
      title: "Good job!",
      text: "Your record is Added successfully!",
      icon: "success",
      button: "Okay!",
    });
  }
  const [person, setPerson] = useState([
    {
      name: "test",
      age: 15,
    },
    {
      name: "test2",
      age: 13,
    },
  ]);
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="lg:ml-[13rem]  pt-[6.5rem] sm:ml-[4rem ] md:ml-[6.5rem]">
        <button
          className="btn btn-primary  m-1 text-sm md:text-lg"
          onClick={() => {
            AddNew();
          }}
        >
          Add New cars
        </button>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead className="text-xs md:text-xl ">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">color</th>
                <th scope="col">price</th>
                <th scope="col">brand</th>
                <th scope="col">image</th>
                <th scope="col">edit</th>
                <th scope="col">delete</th>
              </tr>
            </thead>
            {isUpdating ? (
              <div className="h-[100vh] mx-[350%] my-[250%] block md:mx-[300%] md:my-[130%]">
                <i className="fa fa-spinner fa-spin md:text-4xl text-lg  text-cyan-600 m-auto "></i>
              </div>
            ) : (
              <tbody className="text-xs md:text-xl ">
                {Result?.map((i) => {
                  return (
                    <tr>
                      <td> {i?.name}</td>
                      <td>{i?.color}</td>
                      <td>{i?.price}</td>
                      <td>{i?.brand}</td>
                      <td>
                        {i.image.map((images) => (
                          <img
                            src={`${process.env.REACT_APP_BASE_URL}/file/${images}`}
                            className="img-fluid rounded-lg shadow-sm mt-1"
                            alt="image"
                            height="200px"
                            width="200px"
                            onClick={() => {
                              HandelPopUpOpen();
                              selectUser(i);
                              setIsImageChanging(true);
                              setButtonTxt("update image");
                            }}
                          />
                        ))}
                      </td>
                      <td>
                        <button
                          className="btn btn-primary"
                          onClick={() => {
                            setButtonTxt("update cars");
                            HandelPopUpOpen();
                            selectUser(i);
                            setIsImageChanging(false);
                          }}
                        >
                          <div className="flex">
                            <div className="">
                              <i className="fa-solid fa-pen-to-square mr-0 md:mr-2  text-sm md:text-lg "></i>
                            </div>
                            <div className="text-sm hidden lg:block md:text-lg">
                              Edit
                            </div>
                          </div>
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          onClick={() => {
                            del(i._id);
                          }}
                          className="btn btn-primary "
                        >
                          <div className="flex">
                            <div>
                              <i className="fa-solid fa-trash mr-0 md:mr-2 text-sm md:text-lg  "></i>
                            </div>
                            <div className="text-sm hidden lg:block md:text-lg">
                              DELETE
                            </div>
                          </div>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            )}
          </table>
        </div>
        <Modal
          classNames={{
            modal: "customModal",
            closeIcon: "color",
          }}
          open={isModalOpen}
          onClose={() => HandelPopUpClose()}
          center
          animationDuration={300}
          closeOnEsc={false}
          closeOnOverlayClick={false}
          styles={{
            overlay: {
              // height: "800px",
              // padding: "20px",
            },
          }}
        >
          <div>
            {IsImageChanging ? null : (
              <div className="text-xs md:text-xl">
                <tr>
                  <input
                    type="text"
                    name="name"
                    value={values?.name}
                    placeholder={
                      errors.name && touched.name
                        ? "Please enter car name"
                        : "Enter name"
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className=" h-10 mt-[3%] focus:shadow-primary-outline bg-gray-900  placeholder:text-white/80 text-white/80  text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300  bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-cyan-500 focus:border focus:border-solid focus:outline-none "
                  />
                  {errors.name && touched.name ? errors.name : ""}
                </tr>
                <tr>
                  <input
                    type="text"
                    name="color"
                    value={values?.color}
                    placeholder={
                      errors.color && touched.color
                        ? errors.color
                        : "Enter color"
                    }
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className=" h-10 mt-[3%] focus:shadow-primary-outline bg-gray-900  placeholder:text-white/80 text-white/80  text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300  bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-cyan-500 focus:border focus:border-solid focus:outline-none "
                  />
                </tr>
                <tr>
                  <input
                    name="price"
                    type="text"
                    value={values?.price}
                    placeholder={
                      errors.price && touched.price
                        ? errors.price
                        : "Enter price"
                    }
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className=" h-10 mt-[3%] focus:shadow-primary-outline bg-gray-900  placeholder:text-white/80 text-white/80  text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300  bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-cyan-500 focus:border focus:border-solid focus:outline-none "
                  />
                </tr>
                <tr>
                  <input
                    name="brand"
                    type="text"
                    value={values?.brand}
                    onBlur={handleBlur}
                    placeholder={
                      errors.brand && touched.brand
                        ? errors.brand
                        : "Enter brand"
                    }
                    onChange={handleChange}
                    className=" h-10 mt-[3%] focus:shadow-primary-outline bg-gray-900  placeholder:text-white/80 text-white/80  text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300  bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-cyan-500 focus:border focus:border-solid focus:outline-none "
                  />
                </tr>
              </div>
            )}
            <tr>
              <td>
                <div>
                  <button
                    onClick={() => {
                      setImage([...image, { image: "" }]);
                    }}
                    className="btn btn-primary mt-1"
                  >
                    <div className="flex">
                      {" "}
                      <i className="fa-solid fa-plus text-xs md:text-xl"></i>
                      <div className="text-xs md:text-lg">Add new Image</div>
                    </div>
                  </button>
                  <br />
                  {image?.map((m, i) => {
                    return (
                      <>
                        <Child
                          onUploadImage={(e) => {
                            console.log(image);
                            let k = image;
                            k[i] = {
                              image: e.target.files[0],
                            };
                            setImage([...k]);
                            console.log([...k], "k");
                            setFieldValue("car_file", k);
                          }}
                          image={m}
                          removeimage={(e) => {
                            let s = image;
                            s[i] = { image: "" };
                            setFieldValue("car_file", s);
                          }}
                        />
                        <br />
                      </>
                    );
                  })}
                </div>
              </td>
            </tr>
            <tr>
              <button
                type="button"
                onClick={(e) => {
                  {
                    ButtonTxt === "Add new"
                      ? handleSubmit()
                      : updateUser(SelectedId, e);
                  }
                }}
                className="btn btn-primary mt-[5%]"
              >
                <div className="flex">
                  {isUpdating ? (
                    <i className="fa fa-spinner fa-spin text-xs md:text-lg text-center mr-2"></i>
                  ) : ButtonTxt === "Add new" ? (
                    <i className="fa-sharp fa-solid fa-plus text-xs md:text-lg mr-2"></i>
                  ) : (
                    <i className="fa-regular fa-pen-to-square text-xs md:text-lg mr-2"></i>
                  )}
                  <div className="text-xs md:text-lg">{ButtonTxt}</div>
                </div>
              </button>
            </tr>
          </div>
        </Modal>
      </div>
      <Footer />
    </div>
  );
}
