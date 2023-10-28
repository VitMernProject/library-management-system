import React from "react";
import {  Route, Routes, Navigate  } from "react-router-dom";
import Home from "./screens/homepage/home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

const App = () => {
  return (
    <>
    {/* <AppBar/> */}
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="*" element={<Navigate replace to={"/"} />} />
      </Routes>
    </>
  );
};

export default App;
