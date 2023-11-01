import React from 'react';
import vitlogo from "../../assets/images/vitlogo.png";
import {BsFillPersonFill} from "react-icons/bs";
import {MdAlternateEmail, MdOutlineStickyNote2} from "react-icons/md";
import {RiLockPasswordFill, RiLockPasswordLine} from "react-icons/ri";
import { NavLink } from 'react-router-dom';

const registerPage = () => {
  return (
    <>
    <div className="vh-100 signin">
      <h2 className="rtext text-white text-center p-5">Registration Page</h2>
      <div className="bg-white mx-auto" style={{height:'35rem', width:'58rem', }}>
        <div className="justify-content-center d-flex">
            <img src={vitlogo} alt="logo" className="logo" />
            <h4 className="wtext text-black justify-content-around p-5 fw-semibold">Welcome to Library Management System</h4>
        </div>
        <div className="justify-content-center d-flex mt-4">
          <form action="" method="post">
            <div class="input-group mb-3" style={{width:"30rem"}}>
              <span class="input-group-text border border-black" id="basic-addon1"><BsFillPersonFill/></span>
              <input type="text" class="form-control border border-black" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text border border-black" id="basic-addon1"><MdAlternateEmail/></span>
              <input type="email" class="form-control border border-black" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1"/>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text border border-black" id="basic-addon1"><MdOutlineStickyNote2/></span>
              <input type="text" class="form-control border border-black" placeholder="Regno" aria-label="Registration" aria-describedby="basic-addon1"/>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text border border-black" id="basic-addon1"><RiLockPasswordFill/></span>
              <input type="password" class="form-control border border-black" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1"/>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text border border-black" id="basic-addon1"><RiLockPasswordLine/></span>
              <input type="password" class="form-control border border-black" placeholder="Confirm Password" aria-label="cPassword" aria-describedby="basic-addon1"/>
            </div>
          </form>
        </div>
        <div class="text-center">
          <button type="button" class="btn btn-dark">Register</button>
        </div>
        <div class="text-center p-3">
          <p>Already Have an account? <NavLink to="/login"> Login Here</NavLink></p> 
        </div>
      </div>
    </div>
    </>
    
  )
}

export default registerPage;
