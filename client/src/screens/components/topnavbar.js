import React from 'react'
import { NavLink } from 'react-router-dom';

const TopNavBar = () => {
  return (
    <nav className="tpnav d-flex justify-content-between p-3">
            <div>
                <NavLink className="lmslink h1">
                Library Management System
                </NavLink>
            </div>
            <div className='d-flex align-items-center'>
               <img src='...' alt='...' className='img-thumbnail rounded-circle bg-light'></img>
               <p className='lead'>Eswar Aditya</p>
            </div>
        </nav>
  )
}

export default TopNavBar;