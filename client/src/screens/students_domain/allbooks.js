import React from 'react'
import NavBar from '../components/sidenavbar';
import TopNaBbar from '../components/topnavbar';

const AllBooks = () => {
  return (
    <div className="svnav m-0">
      <div className='p-0'>
        <TopNaBbar/>
      </div>
      <div className='d-flex'>
          <div className="p-0">
            <NavBar/>
          </div>
          <div className="table w-100 d-flex">
            d
          </div>
        </div>        
    </div>
    )
}

export default AllBooks;