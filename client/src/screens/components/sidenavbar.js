import React from 'react';
import './nav.css';
import {AiOutlineHome,AiOutlineBook} from 'react-icons/ai';
import {BiMessageDetail} from 'react-icons/bi';
import {PiBooksLight} from 'react-icons/pi';
import {LiaBookSolid} from 'react-icons/lia';
import {HiOutlineLogout} from 'react-icons/hi';
import TopNavBar from './topnavbar.js';
import { NavLink } from 'react-router-dom';

const SideNavBar = () => {
  return (
          <div>
              <ul>
                  <li><NavLink class="a active" to="/home"><AiOutlineHome className='me-2' />Home</NavLink></li>
                  <li><NavLink class="a" to="#news"><BiMessageDetail className='me-2' />Messages</NavLink></li>
                  <li><NavLink class="a" to="#contact"><PiBooksLight className='me-2' />All Books</NavLink></li>
                  <li><NavLink class="a" to="#about"><LiaBookSolid className='me-2' />Recommended Books</NavLink></li>
                  <li><NavLink class="a" to="#about"><AiOutlineBook className='me-2' />Currently Issued Books</NavLink></li>
                  <li><NavLink class="a" to="/manageStudents"><HiOutlineLogout className='me-2' />Manage Students</NavLink></li>
                  <li><NavLink class="a" to="#about"><HiOutlineLogout className='me-2' />Issue Request</NavLink></li>
                  <li><NavLink class="a" to="#about"><HiOutlineLogout className='me-2' />Book recommendation</NavLink></li>
                  <li><NavLink class="a" to="#about"><HiOutlineLogout className='me-2' />All issued Book</NavLink></li>
                  <li><NavLink class="a" to="#about"><HiOutlineLogout className='me-2' />Add Book</NavLink></li>
                  <li><NavLink class="a" to="#about"><HiOutlineLogout className='me-2' />Logout</NavLink></li>

                  
              </ul>
          </div>
    )
}

export default SideNavBar;