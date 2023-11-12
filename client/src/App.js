import React from "react";
import {  Route, Routes, Navigate  } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import SignInPage from "./screens/signin/Signin";
import registerPage from "./screens/register/registerpage";
import loginPage from "./screens/login/loginpage";
import StartPage from "./screens/startpage/start";
import Home from "./screens/students_domain/home";
import AllBooks from "./screens/students_domain/allbooks";
import HelpMsg from "./screens/students_domain/help_msg";
import ManStu from "./screens/Admin page/man_Stu";
import Issue_req from "./screens/Admin page/Issue_req";
import PrivateRouter from "./privateRouter";

const App = () => {
  return (
    <>
    {/* <AppBar/> */}
      <Routes>
        <Route path="/" element={<PrivateRouter type={1} Component={StartPage}/>} />
        <Route path="*" element={<Navigate replace to={"/"} />} />
        <Route path="/signin" element={<PrivateRouter type={1} Component={SignInPage}/>}/>
        <Route path="/register" element={<PrivateRouter type={1} Component={registerPage}/>}/>
        <Route path="/login" element={<PrivateRouter type={1} Component={loginPage}/>}/>
        <Route path="/home" element={<PrivateRouter type={2} Component={Home}/>}/>
        <Route path="/allbooks" element={<PrivateRouter type={2} Component={AllBooks}/>}/>
        <Route path="/message" element={<PrivateRouter type={2} Component={HelpMsg}/>}/>
        <Route path="/manageStudents" element={<PrivateRouter type={2} Component={ManStu}/>}/>
        <Route path="/issueRequest" element={<PrivateRouter type={2} Component={Issue_req}/>}/>
      </Routes>
    </>
  );
};

export default App;
