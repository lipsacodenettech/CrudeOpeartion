/* eslint-disable no-lone-blocks */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

export default function Adduser(e) {
  const [Name, setName] = useState("");
  const [Color, SetColor] = useState("");
  const [Brand, SetBrand] = useState("");
  const [Price, SetPrice] = useState("");
  const [SelectedId, setSelectedID] = useState();
  const [Id, setId] = useState(null);
  const [Result, setResult] = useState([]);
  const [Cars, setCars] = useState([]);
  const [ButtonTxt, setButtonTxt] = useState("update cars");
  const [isUpdate, setIsUpdate] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    getdata();
  }, []);
  function AddNewCar() {
    // e.preventDefault();
    axios
      .post(
        "http://192.168.1.17:3001/cars/insert",
        {
       
        },
        {
          headers: {
            Authorization:
              "Berear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxpcHNhQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzNDUiLCJpYXQiOjE2ODExODg3MTR9.UjwNxXB8fz6pbf1LbZX27oNmxzngT56AU_w4B4qY-Vk",
          },
        }
      )
      .then(function (response) {
        console.log(response);
        alert("inserted");
        getdata();
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function getdata() {
    axios
      .get("http://192.168.1.17:3001/cars/getdata", {
        headers: {
          authorization:
            "Berear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxpcHNhQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzNDUiLCJpYXQiOjE2ODExODg3MTR9.UjwNxXB8fz6pbf1LbZX27oNmxzngT56AU_w4B4qY-Vk",
        },
      })
      .then(function (response) {
        console.log(response.data);
        setResult(response.data);
        // setLoader(true)
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const del = (id) => {
    console.log(id);
    axios
      .delete(`http://192.168.1.17:3001/cars/deletedata/${id}`, {
        headers: {
          authorization:
            "Berear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxpcHNhQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzNDUiLCJpYXQiOjE2ODExODg3MTR9.UjwNxXB8fz6pbf1LbZX27oNmxzngT56AU_w4B4qY-Vk",
        },
      })
      .then(function (response) {
        console.log(response);
        console.log(id);
        getdata();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  function selectUser(data) {
    // let item = Cars[SelectedId - 1];
    console.log(data);
    setSelectedID(data._id);
    setName(data.name);
    SetColor(data.color);
    SetBrand(data.brand);
    SetPrice(data.price);
  }
  const updateUser = (SelectedId) => {
    let item = { Name, Color, Price, Brand };
    console.warn("item", item);
    console.log("update", SelectedId);
    setIsUpdate(false);
    axios
      .put(
        `http://192.168.1.17:3001/cars/update/${SelectedId}`,
        {
          name: Name,
          brand: Brand,
          color: Color,
          price: Price,
        },
        {
          headers: {
            Authorization:
              "Berear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxpcHNhQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzNDUiLCJpYXQiOjE2ODExODg3MTR9.UjwNxXB8fz6pbf1LbZX27oNmxzngT56AU_w4B4qY-Vk",
          },
        }
      )
      .then(function (response) {
        console.log(response);
        getdata();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      Adduser page <br />
      <a href="/Dashboard">Dashboard</a>
      <button
        className="btn btn-primary ml-[80%]"
        onClick={() => {
          setButtonTxt("Add new");
          setIsModalOpen(true);
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
          {Result.map((i, j) => {
            return (
              <tr>
                <td> {i.name}</td>
                <td>{i.color}</td>
                <td>{i.price}</td>
                <td>{i.brand}</td>
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
              value={Name}
              placeholder="CAR NAME"
              onChange={(e) => {
                setName(e.target.value);
              }}
              className=" h-10 mt-[3%] focus:shadow-primary-outline bg-gray-900  placeholder:text-white/80 text-white/80  text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300  bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-cyan-500 focus:border focus:border-solid focus:outline-none "
            />
          </tr>
          <tr>
            <input
              type="text"
              value={Color}
              placeholder="Color"
              onChange={(e) => {
                SetColor(e.target.value);
              }}
              className=" h-10 mt-[3%] focus:shadow-primary-outline bg-gray-900  placeholder:text-white/80 text-white/80  text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300  bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-cyan-500 focus:border focus:border-solid focus:outline-none "
            />
          </tr>
          <tr>
            <input
              type="text"
              value={Price}
              placeholder="CAR Price"
              onChange={(e) => {
                SetPrice(e.target.value);
              }}
              className=" h-10 mt-[3%] focus:shadow-primary-outline bg-gray-900  placeholder:text-white/80 text-white/80  text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300  bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-cyan-500 focus:border focus:border-solid focus:outline-none "
            />
          </tr>
          <tr>
            <input
              type="text"
              value={Brand}
              placeholder="CAR Brand"
              onChange={(e) => {
                SetBrand(e.target.value);
              }}
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
