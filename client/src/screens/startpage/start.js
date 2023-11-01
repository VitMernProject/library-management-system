import React from 'react'
import { NavLink } from 'react-router-dom';


const StartPage = () => {
  return (
    <> 
        <div className="p-5 vh-100 wel d-flex flex-column justify-content-center">
            <h2 className="text-white textwel p-3">Welcome to VIT-AP</h2> 
            <h1 className="text-white textonl">Online Library Management System</h1>
            <div className="d-flex flex-column justify-content-end ms-auto p-5 me-4" style={{textAlign:'right'}}> 
              <NavLink to="/login"><h3>Click Here to Login</h3></NavLink>
            </div>
        </div>

    </>
    
  )
}

export default StartPage;