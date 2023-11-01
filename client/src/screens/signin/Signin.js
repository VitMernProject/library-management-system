import React from 'react'
import admin from "../../assets/images/admin.png";
import student from "../../assets/images/student.png"; 
import { NavLink } from 'react-router-dom';

const SignInPage = () => {
  return (
    <>
        <div className="vh-100 signin">
            <h2 className=" signtext d-flex flex-column justify-conent-start text-white text-center p-4">Sign in As</h2>
            <div className='d-flex flex-row justify-content-center p-5'>
            <div className='admin p-4 mx-5' style={{width:'14rem'}}>
              <div className="card" style={{width: '8rem', background:'none'}}>
                <img src={admin} className="adminimg card-img-top" alt="admin"/>
              </div>
              <div className="card-body"> 
                  <NavLink to="/login" className="fs-4 text-white card-text text-center">Admin</NavLink>
                </div>
            </div>

            <div className='student p-4 mx-5'style={{width:'14rem'}}> 
              <div className="card" style={{width: '8rem', background:'none'}}>
                <img src={student} className="adminimg card-img-top" alt="student"/>
              </div>
              <div className="card-body"> 
                  <NavLink to="/login" className=" fs-4 text-white card-text text-center">Student</NavLink>
                </div>
            </div>
          </div> 
          <div className='text-center d-flex flex-column justify-conent-end my-auto text-white p-5'><h4>Didn't have an account? <NavLink>Register here</NavLink></h4></div>
        </div>
    </>
    
  )
}

export default SignInPage;
