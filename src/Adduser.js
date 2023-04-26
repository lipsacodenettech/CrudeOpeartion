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
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// Just some styles
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
  preview: {
    marginTop: 50,
    display: "flex",
    flexDirection: "column",
  },
  image: { maxWidth: "100%", maxHeight: 320 },
  delete: {
    cursor: "pointer",
    padding: 15,
    background: "red",
    color: "white",
    border: "none",
  },
};

export default function Adduser() {
  const [SelectedId, setSelectedID] = useState();
  const [selectedImage, setSelectedImage] = useState();
  const [IsImageChanging, setIsImageChanging] = useState(false);
  const [Result, setResult] = useState([]);
  const [imagUrl, setImgUrl] = useState("");
  const [ButtonTxt, setButtonTxt] = useState("update cars");
  const [isUpdating, setIsUpdating] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      formdata.append("car_file", values.car_file);
      formdata.append("name", values.name);
      formdata.append("price", values.price);
      formdata.append("brand", values.brand);
      formdata.append("color", values.color);
      setIsUpdating(true);
      InsertNewCar(formdata);
    },
    handleChange(e) {
      initialValues({
        ...initialValues,
        [e.target.name]: e.target.value,
      });
    },
  });

  // This function will be triggered when the "Remove This Image" button is clicked
  const removeSelectedImage = () => {
    setSelectedImage();
  };

  // for open pop up
  function HandelPopUpOpen() {
    setIsModalOpen(true);
  }

  //  for close pop up
  function HandelPopUpClose() {
    setIsModalOpen(false);
    setSelectedImage("");
    setImgUrl("");
  }

  // log out
  const Logout = () => {
    window.localStorage.clear();
    navigate("/");
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
      // console.log(result.data);
      setIsUpdating(false);
    }
    if (isFetching) {
      setIsUpdating(true);
    }
  }, [isSuccess, isFetching]);

  // for deleting data
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
    setFieldValue("car_file", data.car_file);
    setImgUrl(`${process.env.REACT_APP_BASE_URL}/file/${data.image}`);
    // console.log(imagUrl);
    setSelectedID(data._id);
    setSelectedImage("");
  }

  // for updating user on click of update user
  const [UpdateCar, Updateresult] = useUpdateCarMutation();
  const {
    isSuccess: isupSuccess,
    isFetching: isupFetching,
    isError: isuprError,
    error: upError,
  } = Updateresult;

  const updateUser = (e) => {
    var formdata = new FormData();
    if (selectedImage) {
      formdata.append("car_file", selectedImage);
      // console.log(selectedImage, "if call");
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
        // swal(" record has been deleted!", {
        //   icon: "success",
        // });
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
  return (
    <div>
      Adduser page <br />
      <Link to="/dashboard">DASHBOARD </Link>
      <button
        onClick={Logout}
        className="w-[10%]  py-2  mt-6 mb-4 font-bold leading-normal text-center text-white align-middle transition-all bg-cyan-500 border-0 rounded-lg cursor-pointer hover:-translate-y-px active:opacity-85 hover:shadow-xs text-sm ease-in tracking-tight-rem shadow-md bg-150 bg-x-25 "
      >
        Logout
      </button>
      <button
        className="btn btn-primary ml-[80%]"
        onClick={() => {
          AddNew();
        }}
      >
        Add New cars
      </button>
      <form action=""></form>
      <table className="table table-striped">
        <thead>
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
          <i class="fa fa-spinner fa-spin text-[100px] text-cyan-600 ml-[200%] mt-[50%]"></i>
        ) : (
          <tbody>
            {Result?.map((i) => {
              return (
                <tr>
                  <td> {i?.name}</td>
                  <td>{i?.color}</td>
                  <td>{i?.price}</td>
                  <td>{i?.brand}</td>
                  <td>
                    <img
                      src={`${process.env.REACT_APP_BASE_URL}/file/${i.image}`}
                      className="img-fluid"
                      alt="profile-image"
                      height="150px"
                      width="150px"
                      onClick={() => {
                        HandelPopUpOpen();
                        selectUser(i);
                        setIsImageChanging(true);
                        setButtonTxt("update image");
                      }}
                    />
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
                      EDIT
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => {
                        del(i._id);
                      }}
                      className="btn btn-primary"
                    >
                      <i class="fa-solid fa-trash mr-2"></i>
                      DELETE
                    </button>
                  </td>
                </tr>
              );
            })}{" "}
          </tbody>
        )}
      </table>
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
            height: "800px",
            padding: "20px",
          },
        }}
      >
        <div>
          {IsImageChanging ? null : (
            <>
              <tr>
                <input
                  type="text"
                  name="name"
                  value={values?.name}
                  placeholder={
                    errors.name && touched.name ? errors.name : "Enter name"
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className=" h-10 mt-[3%] focus:shadow-primary-outline bg-gray-900  placeholder:text-white/80 text-white/80  text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300  bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-cyan-500 focus:border focus:border-solid focus:outline-none "
                />
              </tr>
              <tr>
                <input
                  type="text"
                  name="color"
                  value={values?.color}
                  placeholder={
                    errors.color && touched.color ? errors.color : "Enter color"
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
                    errors.price && touched.price ? errors.price : "Enter price"
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
                    errors.brand && touched.brand ? errors.brand : "Enter brand"
                  }
                  onChange={handleChange}
                  className=" h-10 mt-[3%] focus:shadow-primary-outline bg-gray-900  placeholder:text-white/80 text-white/80  text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300  bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-cyan-500 focus:border focus:border-solid focus:outline-none "
                />
              </tr>
            </>
          )}

          <tr>
            <td>
              <input
                name="car_file"
                type="file"
                onChange={(e) => {
                  setFieldValue("car_file", e.currentTarget.files[0]);
                  setSelectedImage(e.currentTarget.files[0]);
                }}
              />
              {!selectedImage ? (
                <div style={styles.preview}>
                  <img src={imagUrl} style={styles.image} alt="Thumb" />
                </div>
              ) : (
                <div style={styles.preview}>
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    style={styles.image}
                    alt=""
                  />
                  <button onClick={removeSelectedImage} style={styles.delete}>
                    Remove This Image
                  </button>
                </div>
              )}
            </td>
          </tr>
          <tr>
            <button
              onClick={(e) => {
                {
                  ButtonTxt === "Add new"
                    ? handleSubmit()
                    : updateUser(SelectedId, e);
                }
              }}
              className="btn btn-primary mt-[5%]"
            >
              {isUpdating ? (
                <i class="fa fa-spinner fa-spin text-[20px] text-center mr-2"></i>
              ) : ButtonTxt === "Add new" ? (
                <i class="fa-sharp fa-solid fa-plus mr-2"></i>
              ) : (
                <i class="fa-regular fa-pen-to-square mr-2"></i>
              )}
              {ButtonTxt}
            </button>
          </tr>
        </div>
      </Modal>
    </div>
  );
}
