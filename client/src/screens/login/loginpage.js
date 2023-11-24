import React, {useState} from 'react';
import vitlogo from "../../assets/images/vitlogo.png";
import {MdAlternateEmail} from "react-icons/md";
import {RiLockPasswordFill} from "react-icons/ri";
import { NavLink, useNavigate } from 'react-router-dom';
import axios from "../services/instance";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e) =>{
    e.preventDefault();
    document.getElementById('regsubmit').setAttribute("disabled", "true");
    document.getElementById('txt').innerHTML = "please wait ...";
    await axios.post('/signin', {
      email:email,
      password:password
    }).then(function(response){
        localStorage.setItem('uid', response.data.uid);
        localStorage.setItem('role', response.data.role);
        navigate("/home");
    }).catch(function(err){     
      document.getElementById('txt').innerHTML = `${err.response.data.msg}`;
      document.getElementById("regsubmit").removeAttribute("disabled");
    })    
  }

  return (
    <>
    <div className="vh-100 wel">
      <h2 className="rtext text-white text-center p-5">Login Page</h2>
      <div className="bg-white logincard mx-auto w-50 d-flex flex-column rounded justify-content-center align-items-center">
        <div className="justify-content-around align-items-center d-flex">
            <img src={vitlogo} alt="logo" className="logo" />
            <h4 className="wtext text-black justify-content-around py-3 fw-semibold">Welcome to Library Management System</h4>
        </div>
        <div className="w-75 mt-3">
          <form method="POST" onSubmit={loginUser}>
            <div className="input-group mb-3">
              <span className="input-group-text border border-black" id="basic-addon1"><MdAlternateEmail/></span>
              <input type="email" className="form-control border border-black" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} aria-label="Email" aria-describedby="basic-addon1"/>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text border border-black" id="basic-addon1"><RiLockPasswordFill/></span>
              <input type="password" className="form-control border border-black" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} aria-label="Password" aria-describedby="basic-addon1"/>
            </div>
            <div className="text-center p-3">
              <button id='regsubmit' type="Submit" className="btn btn-dark">Login</button>
              <p id='txt'></p>
            </div>
          </form>
        </div>
        {/* <div className="text-center p-2">
          <p>Didn't have an account? <NavLink to="/register"> Register Here</NavLink></p> 
        </div> */}
      </div>
    </div>
    </>
      
    
  )
}

export default LoginPage;