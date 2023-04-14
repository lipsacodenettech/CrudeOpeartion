/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-lone-blocks */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import {
  useDeleteCarMutation,
  useInsertNewCarMutation,
  useLazyGetAllCarQuery,
  useUpdateCarMutation,
} from "./services/api";

export default function Adduser(e) {
  const [SelectedId, setSelectedID] = useState();
  const [Id, setId] = useState(null);
  const [Result, setResult] = useState([]);
  const [Cars, setCars] = useState([]);
  const [ButtonTxt, setButtonTxt] = useState("update cars");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [carData, setCarData] = useState({
    name: null,
    color: null,
    brand: null,
    price: null,
  });

  // console.log(Result);
  const handleChange = (e) => {
    setCarData({
      ...carData,
      [e.target.name]: e.target.value,
    });
    // console.log(e.target.name, e.target.value);
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
    console.log(data);
    setSelectedID(data._id);
  }
  const update = {
    carData: {
      name: carData.name,
      brand: carData.brand,
      price: carData.price,
      color: carData.color,
    },
    SelectedId,
  };
  const [UpdateCar, Updateresult] = useUpdateCarMutation();
  const {
    isSuccess: isupSuccess,
    isFetching: isupFetching,
    isError: isuprError,
    error: upError,
  } = Updateresult;
  const updateUser = () => {
    UpdateCar(update);
    console.log("upadte", update);
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
    InsertNewCar(carData);
    console.log(CarResult);
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
          carData.name = "";
          carData.color = "";
          carData.price = "";
          carData.brand = "";
        }}
      >
        Add New cars
      </button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">color</th>
            <th scope="col">price</th>
            <th scope="col">brand</th>
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
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      setButtonTxt("update cars");
                      setIsModalOpen(true);
                      selectUser(i);
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
        // animationDuration={300}
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
          <tr>
            <input
              type="text"
              name="name"
              value={carData.name}
              placeholder="CAR NAME"
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
