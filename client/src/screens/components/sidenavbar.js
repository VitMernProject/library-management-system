import React from 'react';
import './nav.css';
import {AiOutlineHome,AiOutlineBook} from 'react-icons/ai';
import {BiMessageDetail} from 'react-icons/bi';
import {PiBooksLight} from 'react-icons/pi';
import {LiaBookSolid} from 'react-icons/lia';
import {HiOutlineLogout} from 'react-icons/hi';
import { NavLink } from 'react-router-dom';

const SideNavBar = () => {
  return (
          <div className='sidebar'>
              <ul >
                  <li><NavLink className="a" to="/home"><AiOutlineHome className='me-3' />Home</NavLink></li>
                  <li><NavLink className="a" to="/message"><BiMessageDetail className='me-3' />Messages</NavLink></li>
                  <li><NavLink className="a" to="/allbooks"><PiBooksLight className='me-3' />All Books</NavLink></li>
                  <li><NavLink className="a" to="/"><LiaBookSolid className='me-3' />Recommended Books</NavLink></li>
                  <li><NavLink className="a" to="/"><AiOutlineBook className='me-3' />Currently Issued Books</NavLink></li>
                  <li><NavLink className="a" to="/manageStudents"><HiOutlineLogout className='me-3' />Manage Students</NavLink></li>
                  <li><NavLink className="a" to="/issueRequest"><HiOutlineLogout className='me-3' />Issue Request</NavLink></li>
                  <li><NavLink className="a" to="/"><HiOutlineLogout className='me-3' />Book recommendation</NavLink></li>
                  <li><NavLink className="a" to="/"><HiOutlineLogout className='me-3' />All issued Book</NavLink></li>
                  <li><NavLink className="a" to="/"><HiOutlineLogout className='me-3' />Add Book</NavLink></li>
                  <li><NavLink className="a" to="/"><HiOutlineLogout className='me-3' />Logout</NavLink></li>
              </ul>
          </div>
    )
}

export default SideNavBar;