import React from 'react';
import './nav.css';
import {AiOutlineHome,AiOutlineBook,AiOutlineIssuesClose} from 'react-icons/ai';
import {BiMessageDetail} from 'react-icons/bi';
import {PiBooksLight} from 'react-icons/pi';
import {LiaBookSolid,LiaSwatchbookSolid} from 'react-icons/lia';
import {HiOutlineLogout} from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import {IoIosPeople} from 'react-icons/io'

const SideNavBar = () => {
    const role = localStorage.getItem('role');
  return (
          <div className='sidebar'>
              <ul >
                  <li><NavLink className="a" to="/home"><AiOutlineHome className='me-3' />Home</NavLink></li>
                  <li><NavLink className="a" to="/message"><BiMessageDetail className='me-3' />Messages</NavLink></li>
                  <li><NavLink className="a" to="/allbooks"><PiBooksLight className='me-3' />All Books</NavLink></li>
                  {(role === "student")?<li><NavLink className="a" to="/recommended"><LiaBookSolid className='me-3' />Recommended Books</NavLink></li>:<></>}
                  {(role === "student")?<li><NavLink className="a" to="/currentlyissued"><AiOutlineBook className='me-3' />Currently Issued Books</NavLink></li>:<></>}
                  {(role === "admin")?<li><NavLink className="a" to="/addBook"><AiOutlineBook className='me-3' />Add Book</NavLink></li>:<></>}
                  {(role === "admin")?<li><NavLink className="a" to="/manageStudents"><IoIosPeople className='me-3' />Manage Students</NavLink></li>:<></>}
                  {(role === "admin")?<li><NavLink className="a" to="/issueRequest"><AiOutlineIssuesClose className='me-3' />Issue Request</NavLink></li>:<></>}
                  {(role === "admin")?<li><NavLink className="a" to="/allissued"><LiaSwatchbookSolid className='me-3' />All issued Book</NavLink></li>:<></>}
                  {/* <li><NavLink className="a" to="/home"><HiOutlineLogout className='me-3' />Logout</NavLink></li> */}
              </ul>
          </div>
    )
}

export default SideNavBar;