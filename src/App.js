/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/no-redundant-roles */
import Adduser from "./Adduser";
import "./App.css";
import Dashboard from "./Dashboard";
import Login from "./Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Signup from "./Signup";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            window.localStorage.getItem("email") === null ? (
              <Login />
            ) : (
              <Adduser />
            )
          }
        />
        {/* <Route path="/Dashboard" element={<Dashboard/>}/> */}
        {/* <Route path="/" element={<Login/>}/> */}
        <Route
          path="/Dashboard"
          element={
            window.localStorage.getItem("email") !== null ? (
              <Dashboard />
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/adduser"
          element={
            window.localStorage.getItem("email") !== null ? (
              <Adduser />
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/sign_up"
          element={
            window.localStorage.getItem("email") !== null ? (
              <Adduser />
            ) : (
              <Signup />
            )
          }
        />
        {/* <Route path="/sign_up" element={<Signup />} /> */}
      </Routes>
    </div>
  );
}

export default App;
