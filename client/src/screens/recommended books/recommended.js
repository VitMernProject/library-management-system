import { React, useState, useEffect } from 'react'
import TopNavBar from '../components/topnavbar'
import SideNavBar from '../components/sidenavbar'

const Recommended = () => {

  const [data, setData] = useState({
    cse: [],
    ece: [],
    math: [],
    mgt: [],
    law: [],
    phy: [],
    che: []
  });
  const fetchdetails = async () => {
    const res = await fetch(`/getRecomendedBooks`, {
      method: "GET",
    });
    const response = await res.json();
    setData(response.data);
  }
  useEffect(() => {
    fetchdetails()
  }, []);

  const postdata = async (b_data) => {
    document.querySelectorAll(".regsubmit").forEach((s) => s.setAttribute("disabled", "true"))
    const res = await fetch('/issuebook', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        book: b_data._id,
        student: localStorage.getItem('uid')
      }),
    })
    const data = await res.json();
    if (res.status === 200) {
      console.log(data);
      document.querySelectorAll(".regsubmit").forEach((s) => s.removeAttribute("disabled"));
      fetchdetails();
    } else {
      document.querySelectorAll(".regsubmit").forEach((s) => s.removeAttribute("disabled"));
      window.alert(data.msg);
    }
  }

  return (
    <div>
      <div className="svnav m-0">
        <div className='p-0'>
          <TopNavBar />
        </div>
        <div className='d-flex body-sec'>
          <div className="p-0">
            <SideNavBar />
          </div>
          <div className="main-section w-100 p-3">
            <div className="heading mt-3 d-flex mb-3 justify-content-center h1">
              Recommended Books
            </div>

              {
                Object.keys(data).map((val, index) =>
                ((data[val].length > 0))?
                <div className=''>
                  <h3 className='mb-3'>{val.toUpperCase()} Books</h3>
                  <div className="table-responsive-md mt-1">
                    <table className="table  table-hover table-dark">
                      <thead className="table-secondary">
                        <tr>
                          <th>S.NO</th>
                          <th>Book ID</th>
                          <th>Title</th>
                          <th>Author</th>
                          <th>Branch</th>
                          <th>Copies</th>
                          <th>Book alignment</th>
                          <th>status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          data[val].map((val, index) =>
                            <tr>
                              <td>{index + 1}</td>
                              <td>{val.bookid}</td>
                              <td>{val.title}</td>
                              <td>{val.author}</td>
                              <td>{val.branch}</td>
                              <td>{val.copies}</td>
                              <td>{val.location}</td>
                              <td>{val.status}</td>
                              <td>
                                {
                                  localStorage.getItem('role') === 'student' ?
                                    (val.copies > 0) ? <button className="btn text-light bg-success regsubmit" onClick={() => postdata(val)}>Add Book</button> : <></>
                                    : <button className="btn text-light bg-success regsubmit" onClick={() => null}>Edit</button>
                                }
                              </td>
                            </tr>
                          )
                        }
                      </tbody>
                    </table>
                  </div>
                </div>:<></>
                )
              }
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recommended;