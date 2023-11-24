import { React, useState, useEffect } from 'react'
import TopNavBar from '../components/topnavbar'
import SideNavBar from '../components/sidenavbar'
import axios from '../services/instance'

const Recommended = () => {

  const [data, setData] = useState({
    cse: [],
    ece: [],
    math: [],
    mgt: [],
    law: [],
    vish:[],
    mech:[],
    eee:[]
  });
  const fetchdetails = async () => {
    await axios.get(`/getRecomendedBooks`).then(function(res){
      setData(res.data.data);
    });
    
  }
  useEffect(() => {
    fetchdetails()
  }, []);

  const postdata = async (b_data) =>{
    document.querySelectorAll(".regsubmit").forEach((s)=>s.setAttribute("disabled","true"))
      await axios.post('/issuebook', {
        "book" : b_data._id,
        "student" : localStorage.getItem('uid')
      }).then(function(res){
        document.querySelectorAll(".regsubmit").forEach((s)=>s.removeAttribute("disabled"));
        fetchdetails();
      }).catch(function(err){
          document.querySelectorAll(".regsubmit").forEach((s)=>s.removeAttribute("disabled"));
          window.alert(err.response.data.msg);
      })  
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