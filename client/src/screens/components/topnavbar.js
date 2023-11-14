import React from 'react'
import { NavLink, useNavigate} from 'react-router-dom';
import profilepic from '../../assets/images/profilepic.png';

const TopNavBar = (props) => {

  const navigate = useNavigate();
  function userLogout(){
    localStorage.clear();
    console.log("logged out");
    navigate("/login")
  }

  return (
    <nav className="tpnav d-flex justify-content-between p-3">
            <div className='d-flex align-items-center'>
                {/* <div className='btn me-3 pt-2 border'>
                  <div className='d-flex flex-column '>
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
                  </div>
                </div> */}
                <NavLink className="lmslink h1">
                Library Management System
                </NavLink>
            </div>
            <div className='d-flex align-items-center'>
               <li className="nav-item dropdown list-group-item">
                  <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src={profilepic} width={50} alt='...' className='img-thumbnail rounded-circle bg-light h-auto me-2'></img>
                    {props.name}
                  </a>
                  <ul className="dropdown-menu h-auto w-auto bg-dark ">
                    <li><a className="dropdown-item text-info" onClick={userLogout}>Logout</a></li>
                    {/* <li><hr class="dropdown-divider" /></li> */}
                  </ul>
                </li>
            </div>
        </nav>
  )
}

export default TopNavBar;