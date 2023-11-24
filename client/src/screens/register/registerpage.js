import React, { useState } from 'react';
import vitlogo from "../../assets/images/vitlogo.png";
import { BsFillPersonFill } from "react-icons/bs";
import { MdAlternateEmail, MdOutlineStickyNote2, MdBatchPrediction } from "react-icons/md";
import { RiLockPasswordFill, RiLockPasswordLine } from "react-icons/ri";
import { FiPhone } from "react-icons/fi";
import { FaCodeBranch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import TopNavBar from '../components/topnavbar';
import SideNavBar from '../components/sidenavbar';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [style, setStyle] = useState('');
  const [user, setUser] = useState({
    name: "", email: "", regno: "", branch: "", batch: "", phoneno: "", password: "", cpassword: ""
  });


  const PostData = async (e) => {
    e.preventDefault();
    document.getElementById('regsubmit').setAttribute("disabled", "true");
    const { name, email, regno, branch, batch, phoneno, password, cpassword } = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, regno, branch, batch, phoneno, password, cpassword
      }),
    });
    const data = await res.json();
    if (res.status === 201) {
      window.alert("Registration Successful!");
      console.log("Registration Successful!");
      document.getElementById("regsubmit").removeAttribute("disabled");
      navigate("/manageStudents");
    } else {
      window.alert(data.error);
      document.getElementById("regsubmit").removeAttribute("disabled");
    }
  }

  function onClicked() {
    if (window.screen.width < '576')
      setStyle("regcardanimation");
    else
      setStyle("");
  }

  return (
    <>
      <div>
        <div className="svnav m-0">
          <div className='p-0'>
            <TopNavBar />
          </div>
          <div className='d-flex'>
            <div className="p-0">
              <SideNavBar />
            </div>
            <div className='w-100'>
            <div className=" main-section overflow-y-auto">
              <h2 className="rtext text-white text-center p-5">Create an account for student</h2>
              <div onClick={onClicked} className={`bg-white logincard ${style} rounded w-50 pb-3 mx-auto d-flex flex-column align-items-center justify-content-center`}>
                <div className="align-items-center justify-content-around d-flex">
                  <img src={vitlogo} alt="logo" className="logo" />
                  <h4 className="wtext text-black justify-content-around p-5 fw-semibold">Student Register Details</h4>
                </div>
                <div className="w-75">
                  <form method="POST" className='registration-form' id='registration-form' onSubmit={PostData}>
                    <div className="input-group mb-3">
                      <span className="input-group-text border border-black" id="basic-addon1"><BsFillPersonFill /></span>
                      <input type="text" className="form-control border border-black" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" required />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text border border-black" id="basic-addon1"><MdAlternateEmail /></span>
                      <input type="email" className="form-control border border-black" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" required />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text border border-black" id="basic-addon1"><MdOutlineStickyNote2 /></span>
                      <input type="text" className="form-control border border-black" value={user.regno} onChange={(e) => setUser({ ...user, regno: e.target.value })} placeholder="Regno" aria-label="Registration" aria-describedby="basic-addon1" required />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text border border-black" id="basic-addon1"><FaCodeBranch /></span>
                      <input type="text" className="form-control border border-black" value={user.branch} onChange={(e) => setUser({ ...user, branch: e.target.value })} placeholder="Branch" aria-label="Registration" aria-describedby="basic-addon1" required />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text border border-black" id="basic-addon1"><MdBatchPrediction /></span>
                      <input type="text" className="form-control border border-black" value={user.batch} onChange={(e) => setUser({ ...user, batch: e.target.value })} placeholder="Batch" aria-label="Registration" aria-describedby="basic-addon1" required />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text border border-black" id="basic-addon1"><FiPhone /></span>
                      <input type="text" className="form-control border border-black" value={user.phoneno} onChange={(e) => setUser({ ...user, phoneno: e.target.value })} placeholder="Phone Number" aria-label="Registration" aria-describedby="basic-addon1" required />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text border border-black" id="basic-addon1"><RiLockPasswordFill /></span>
                      <input type="password" className="form-control border border-black" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" required />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text border border-black" id="basic-addon1"><RiLockPasswordLine /></span>
                      <input type="password" className="form-control border border-black" value={user.cpassword} onChange={(e) => setUser({ ...user, cpassword: e.target.value })} placeholder="Confirm Password" aria-label="cPassword" aria-describedby="basic-addon1" required />
                    </div>
                    <div className='d-flex justify-content-center'>
                      <button type="submit" id='regsubmit' className="btn btn-dark form-submit">register</button>
                    </div>
                </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>

  )
}

export default RegisterPage;
