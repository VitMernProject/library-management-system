import React from 'react';
import './nav.css';
import {AiOutlineHome,AiOutlineBook} from 'react-icons/ai';
import {BiMessageDetail} from 'react-icons/bi';
import {PiBooksLight} from 'react-icons/pi';
import {LiaBookSolid} from 'react-icons/lia';
import {HiOutlineLogout} from 'react-icons/hi';
import TopNavBar from './topnavbar.js';

const SideNavBar = () => {
  return (
          <div>
              <ul>
                  <li><a class="active" href="#home"><AiOutlineHome className='me-2' />Home</a></li>
                  <li><a href="#news"><BiMessageDetail className='me-2' />Messages</a></li>
                  <li><a href="#contact"><PiBooksLight className='me-2' />All Books</a></li>
                  <li><a href="#about"><LiaBookSolid className='me-2' />Recommended Books</a></li>
                  <li><a href="#about"><AiOutlineBook className='me-2' />Currently Issued Books</a></li>
                  <li><a href="#about"><HiOutlineLogout className='me-2' />Logout</a></li>
                  <li />
              </ul>
          </div>
    )
}

export default SideNavBar;