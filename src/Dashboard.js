// import { Modal } from "react-responsive-modal";
import React from "react";
import "react-responsive-modal/styles.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import  secureLocalStorage  from  "react-secure-storage";

export default function Dashboard() {
  const navigate = useNavigate();

  const Logout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div>
      <h1 className="m-2">This is Dashboard</h1>
      <button className="w-[10%]  py-2 ml-1 mr-1 mt-6 mb-4 font-bold leading-normal text-center text-white align-middle transition-all bg-cyan-500 border-0 rounded-lg cursor-pointer hover:-translate-y-px active:opacity-85 hover:shadow-xs text-sm ease-in tracking-tight-rem shadow-md bg-150 bg-x-25 ">
        <Link to="/adduser" className="text-white no-underline">
          Adduser
        </Link>
      </button>
      <button
        onClick={Logout}
        className="w-[10%]  py-2  mt-6 mb-4 font-bold leading-normal text-center text-white align-middle transition-all bg-cyan-500 border-0 rounded-lg cursor-pointer hover:-translate-y-px active:opacity-85 hover:shadow-xs text-sm ease-in tracking-tight-rem shadow-md bg-150 bg-x-25 "
      >
        Logout
      </button>
    </div>
  );
}
