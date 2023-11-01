import React from "react";
import {  Route, Routes, Navigate  } from "react-router-dom";
import Home from "./screens/homepage/home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import SignInPage from "./screens/signin/Signin";
import registerPage from "./screens/register/registerpage";
import loginPage from "./screens/login/loginpage";

const App = () => {
  return (
    <>
    {/* <AppBar/> */}
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="*" element={<Navigate replace to={"/"} />} />
        <Route path="/signin" Component={SignInPage}/>
        <Route path="/register" Component={registerPage}/>
        <Route path="/login" Component={loginPage}/>
      </Routes>
    </>
  );
};

export default App;
