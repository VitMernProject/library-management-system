import React, {useState} from 'react';
import vitlogo from "../../assets/images/vitlogo.png";
import {BsFillPersonFill} from "react-icons/bs";
import {MdAlternateEmail, MdOutlineStickyNote2} from "react-icons/md";
import {RiLockPasswordFill, RiLockPasswordLine} from "react-icons/ri";
import { NavLink, useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name:"",email:"",regno:"",password:"",cpassword:""
  });

  const PostData = async (e) =>{
    e.preventDefault();
    const { name, email, regno, password, cpassword} = user;
     const res = await fetch("/register", {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, regno, password, cpassword
      }),
     });
     const data = await res.json();
     if( data.status === 422 || !data) {
      window.alert("invalid registration");
      console.log("invalid registration");
     }else{
      window.alert("Registration Successful!");
      console.log("Registration Successful!");
      navigate("/login");
     }

  }
  
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
          <form method="POST" className='registration-form' id='registration-form'>
            <div className="input-group mb-3" style={{width:"30rem"}}>
              <span className="input-group-text border border-black" id="basic-addon1"><BsFillPersonFill/></span>
              <input type="text" className="form-control border border-black" value={user.name} onChange={(e)=>setUser({...user,name:e.target.value})} placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" required/>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text border border-black" id="basic-addon1"><MdAlternateEmail/></span>
              <input type="email" className="form-control border border-black" value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})} placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" required/>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text border border-black" id="basic-addon1"><MdOutlineStickyNote2/></span>
              <input type="text" className="form-control border border-black" value={user.regno} onChange={(e)=>setUser({...user,regno:e.target.value})} placeholder="Regno" aria-label="Registration" aria-describedby="basic-addon1" required/>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text border border-black" id="basic-addon1"><RiLockPasswordFill/></span>
              <input type="password" className="form-control border border-black" value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})} placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" required/>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text border border-black" id="basic-addon1"><RiLockPasswordLine/></span>
              <input type="password" className="form-control border border-black" value={user.cpassword} onChange={(e)=>setUser({...user,cpassword:e.target.value})} placeholder="Confirm Password" aria-label="cPassword" aria-describedby="basic-addon1" required/>
            </div>
          </form>
        </div>
        <div className="form-group form-button text-center">
          <input type="Submit" className="btn btn-dark form-submit" value ="register" onClick={PostData} />
        </div>
        <div className="text-center p-3">
          <p>Already Have an account? <NavLink to="/login"> Login Here</NavLink></p> 
        </div>
      </div>
    </div>
    </>
    
  )
}

export default RegisterPage;
