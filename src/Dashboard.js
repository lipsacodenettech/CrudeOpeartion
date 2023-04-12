// import { Modal } from "react-responsive-modal";
import React from "react";
import 'react-responsive-modal/styles.css';

export default function Dashboard() {
  // const [isModalOpen,setIsModalOpen] = useState(false);

  const Logout = () => {
    window.localStorage.clear();
    // window.localStorage.removeItem("");
    window.location.href = "/";
  };
  return (
    <div>
      <h1>This is Dashboard</h1>
      {/* <button onClick={() => setIsModalOpen(true)}>hehh</button> */}
      <button
        onClick={Logout}
        className="w-[20%]  py-2  mt-6 mb-4 font-bold leading-normal text-center text-white align-middle transition-all bg-cyan-500 border-0 rounded-lg cursor-pointer hover:-translate-y-px active:opacity-85 hover:shadow-xs text-sm ease-in tracking-tight-rem shadow-md bg-150 bg-x-25 "
        
      >
        Logout
      </button>
      {/* <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        center
        closeOnEsc={false}
        closeOnOverlayClick={false}
        styles={{
          overlay: {
            height: "800px",
          },
        }}
      >fg</Modal> */}
    </div>
  );
}
