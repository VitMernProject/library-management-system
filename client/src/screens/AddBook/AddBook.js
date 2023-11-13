import React from 'react'
import TopNavBar from '../components/topnavbar'
import SideNavBar from '../components/sidenavbar'
import './addbook.css'
const Addbook = () => {
  return (
    <div>
      <div className="svnav m-0">
        <div className='p-0'>
          <TopNavBar/>
        </div>
        <div className='d-flex'>
          <div className="p-0">
            <SideNavBar/>
          </div>
          <div className="home w-100 d-flex justify-content-center align-items-center">
            <div className="frm w-50 p-4 rounded shadow">
              <form className="text-white">
              <div className="mb-3">
                <label className="form-label">Title</label>
                <input placeholder="Title" type="text" className="form-control"/>
              </div>
              <div className="mb-3">
                <label className="form-label">Author</label>
                <input placeholder="Author" type="text" className="form-control"/>
              </div>
              <div className="mb-3">
                <label className="form-label">Copies</label>
                <input placeholder="Copies" type="text" className="form-control"/>
              </div>
              <div className="mb-3">
                <label className="form-label">Status</label>
                <input placeholder="Status" type="text" className="form-control"/>
              </div>
              <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-success">Add Book</button>
              </div>
            </form>
          </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Addbook