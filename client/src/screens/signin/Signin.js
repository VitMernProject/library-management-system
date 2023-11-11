import React from 'react'
import admin from "../../assets/images/admin.png";
import student from "../../assets/images/student.png"; 
import { NavLink } from 'react-router-dom';

const SignInPage = () => {
  return (
    <>
        <div className="d-flex vh-100 flex-column justify-content-center wel">
            <h2 className=" signtext d-flex flex-column justify-conent-start text-white text-center p-4">Sign in As</h2>
            <div className='d-flex flex-row justify-content-center p-5'>
            <div className='admin p-lg-5 p-md-4 p-sm-3 mx-5 d-flex flex-column align-items-center'>
              
              <div className="card-body"> 
                  <NavLink to="/login" className="fs-4 d-flex flex-column align-items-center text-white card-text text-center">
                  <div className="card" style={{width: '8rem', background:'none'}}>
                    <img src={admin} height={110} className="adminimg card-img-top" alt="admin"/>
                  </div>
                  Admin</NavLink>
                </div>
            </div>

            <div className='student p-lg-5 p-md-4 p-sm-3 mx-5 d-flex flex-column align-items-center'> 
              <div className="card-body"> 
                  <NavLink to="/login" className="d-flex flex-column align-items-center fs-4 text-white card-text text-center">                    
                    <div className="card" style={{width: '8rem', background:'none'}}>
                      <img src={student} className="adminimg card-img-top" alt="student"/>
                    </div>
                    Student</NavLink>
                </div>
            </div>
          </div> 
        </div>
    </>
    
  )
}

export default SignInPage;
