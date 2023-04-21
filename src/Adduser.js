/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-use-before-define */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-lone-blocks */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-modal/styles.css";
import ImageUploading from 'react-images-uploading';
import { Modal } from "react-responsive-modal";
import {
  useDeleteCarMutation,
  useInsertNewCarMutation,
  useLazyGetAllCarQuery,
  useUpdateCarMutation,
} from "./services/api";
// import { Card } from "react-bootstrap";

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

export default function Adduser(e) {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  const [SelectedId, setSelectedID] = useState();
  const [selectedImage, setSelectedImage] = useState();
  const [IsImageChanging, setIsImageChanging] = useState(false);
  const [Result, setResult] = useState([]);
  const [imagUrl, setImgUrl] = useState("");
  const [ButtonTxt, setButtonTxt] = useState("update cars");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [carData, setCarData] = useState({
    name: null,
    color: null,
    brand: null,
    price: null,
    car_file: null,
  });
 const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  // This function will be triggered when the "Remove This Image" button is clicked
  const removeSelectedImage = () => {
    setSelectedImage();
  };

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
      setCarData({
        ...carData,
        car_file: e.target.files[0],
      });
    }
  };
  const handleChange = (e) => {
    setCarData({
      ...carData,
      [e.target.name]: e.target.value,
    });
  };
  const [getCars, result] = useLazyGetAllCarQuery();
  const { isSuccess, isFetching, isError, error } = result;
  useEffect(() => {
    getCars();
  }, []);

  useEffect(() => {
    if (isSuccess && !isFetching) {
      setResult(result?.data.length > 0 ? result.data : []);
      console.log(result.data);
    }
  }, [isSuccess, isFetching]);
  const [delteCars] = useDeleteCarMutation();
  const del = (id) => {
    delteCars(id);
    getCars({});
  };
  function selectUser(data) {
    setCarData(data);
    setImgUrl(`${process.env.REACT_APP_PUBLIC_URL}/file/${data.image}`);
    setSelectedID(data._id);
    setSelectedImage("");
  }

  const [UpdateCar, Updateresult] = useUpdateCarMutation();
  const {
    isSuccess: isupSuccess,
    isFetching: isupFetching,
    isError: isuprError,
    error: upError,
  } = Updateresult;
  var formdata = new FormData();
  formdata.append("car_file", carData.car_file);
  formdata.append("name", carData.name);
  formdata.append("price", carData.price);
  formdata.append("brand", carData.brand);
  formdata.append("color", carData.color);

  const update = {
    formdata,
    SelectedId,
  };
  const updateUser = () => {
    UpdateCar(update);
    console.log(update, "update");
  };
  useEffect(() => {
    if (isupSuccess && !isupFetching) {
      getCars({});
    }
  }, [isupSuccess, isupFetching]);
  const [InsertNewCar, CarResult] = useInsertNewCarMutation();
  const {
    isSuccess: isCarSuccess,
    isFetching: isCarFetching,
    isError: isCarError,
    error: carError,
  } = CarResult;

  function AddNewCar() {
    var formdata = new FormData();
    formdata.append("car_file", carData.car_file);
    formdata.append("name", carData.name);
    formdata.append("price", carData.price);
    formdata.append("brand", carData.brand);
    formdata.append("color", carData.color);
    InsertNewCar(formdata);
  }
  useEffect(() => {
    if ((isCarSuccess && !isCarFetching) || (isupSuccess && isupFetching)) {
      getCars({});
    }
  }, [isCarSuccess, isCarFetching, isupSuccess, isupFetching]);

  return (
    <div>
      Adduser page <br />
      <a href="/Dashboard">Dashboard</a>
      <button
        className="btn btn-primary ml-[80%]"
        onClick={() => {
          setButtonTxt("Add new");
          setIsModalOpen(true);
          setSelectedImage("");
          setIsImageChanging(false);
          carData.name = "";
          carData.color = "";
          carData.price = "";
          carData.brand = "";
          carData.car_file = "";
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
                    src={`http://192.168.1.5:8001/file/${i.image}`}
                    className="img-fluid"
                    alt="profile-image"
                    height="150px"
                    width="150px"
                    onClick={() => {
                      setIsModalOpen(true);
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
                      setIsModalOpen(true);
                      selectUser(i);
                      setIsImageChanging(false)
                      // console.log(IsImageChanging);
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
                    DELETE
                  </button>
                </td>
              </tr>
            );
          })}{" "}
        </tbody>
      </table>
      <Modal
        classNames={{
          modal: "customModal",
          closeIcon: "color",
        }}
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
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
                  name="color"
                  value={carData.name}
                  placeholder="Color"
                  onChange={handleChange}
                  className=" h-10 mt-[3%] focus:shadow-primary-outline bg-gray-900  placeholder:text-white/80 text-white/80  text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300  bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-cyan-500 focus:border focus:border-solid focus:outline-none "
                />
              </tr>
              <tr>
                <input
                  type="text"
                  name="color"
                  value={carData.color}
                  placeholder="Color"
                  onChange={handleChange}
                  className=" h-10 mt-[3%] focus:shadow-primary-outline bg-gray-900  placeholder:text-white/80 text-white/80  text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300  bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-cyan-500 focus:border focus:border-solid focus:outline-none "
                />
              </tr>
              <tr>
                <input
                  name="price"
                  type="text"
                  value={carData.price}
                  placeholder="CAR Price"
                  onChange={handleChange}
                  className=" h-10 mt-[3%] focus:shadow-primary-outline bg-gray-900  placeholder:text-white/80 text-white/80  text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300  bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-cyan-500 focus:border focus:border-solid focus:outline-none "
                />
              </tr>
              <tr>
                <input
                  name="brand"
                  type="text"
                  value={carData.brand}
                  placeholder="CAR Brand"
                  onChange={handleChange}
                  className=" h-10 mt-[3%] focus:shadow-primary-outline bg-gray-900  placeholder:text-white/80 text-white/80  text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300  bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-cyan-500 focus:border focus:border-solid focus:outline-none "
                />
              </tr>
            </>
          )}

          <tr>
            <td>
              <input name="file" type="file" onChange={(e) => imageChange(e)} />
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
              onClick={() => {
                setIsModalOpen(false);
                {
                  ButtonTxt === "Add new"
                    ? AddNewCar()
                    : updateUser(SelectedId);
                }
              }}
              className="btn btn-primary mt-[5%]"
            >
              {ButtonTxt}
            </button>
          </tr>
        </div>
      </Modal>
    </div>
  );
}
