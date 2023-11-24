import React, { useState } from 'react'
import TopNavBar from '../components/topnavbar'
import SideNavBar from '../components/sidenavbar'
import './addbook.css'
import {useNavigate} from 'react-router-dom'
import axios from '../services/instance'

const Addbook = () => {
  const navigate = useNavigate();
  const [book,setBook] = useState({bookid:"",title:"",author:"",copies:"",location:"",branch:"",status:""});
  
  const postdata = async(e) => {
    e.preventDefault();
    document.getElementById('regsubmit').setAttribute("disabled", "true");
    const {bookid,title,author,copies,status,branch,location} = book;
    const res = await axios.post("/addbook",{
      bookid:bookid,
      title:title,
      author:author,
      copies:copies,
      status:status,
      branch:branch,
      location:location
    });
    const data = await res.json();
    console.log(res);
    if (res.status===200){
      setBook({bookid:"",title:"",author:"",copies:"",location:"",branch:"",status:""});
      document.getElementById("regsubmit").removeAttribute("disabled");
      window.alert("Book added successfully!!");
      navigate("/allbooks");
    }
    else{
      setBook({bookid:"",title:"",author:"",copies:"",location:"",branch:"",status:""});
      document.getElementById("regsubmit").removeAttribute("disabled");
      window.alert(data.message);
    }
  }

  return (
    <div>
      <div className="svnav m-0">
        <div className='p-0'>
          <TopNavBar/>
        </div>
        <div className='d-flex body-sec'>
          <div className="p-0">
            <SideNavBar/>
          </div>
          <div className="main-section w-100 d-flex justify-content-center align-items-center ">
            <div className="frm w-50 p-4 rounded shadow">
              <form className="text-white" method="POST" onSubmit={postdata}>
              <div className="mb-3">
                <label className="form-label">BookId</label>
                <input placeholder="Id" required value={book.bookid} onChange={(e) => setBook({...book,bookid:e.target.value})} type="text" className="form-control"/>
              </div>
              <div className="mb-3">
                <label className="form-label">Title</label>
                <input placeholder="Title" required value={book.title} onChange={(e) => setBook({...book,title:e.target.value})}type="text" className="form-control"/>
              </div>
              <div className="mb-3">
                <label className="form-label">Author</label>
                <input placeholder="Author" required value={book.author} onChange={(e) => setBook({...book,author:e.target.value})} type="text" className="form-control"/>
              </div>
              <div className="mb-3">
                <label className="form-label">Copies</label>
                <select className='w-100' onChange={(e)=>setBook({...book,copies:e.target.value})}>
                  <option value={""}>select</option>
                  <option value={1}>1</option>
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={15}>15</option>
                  <option value={20}>20</option>
                  <option value={25}>25</option>
                </select>
                {/* <input placeholder="Copies" required value={book.copies} onChange={(e) => setBook({...book,copies:e.target.value})} type="text" className="form-control"/> */}
              </div>
              <div className="mb-3">
                <label className="form-label">Status</label>
                <select className='w-100' onChange={(e)=>setBook({...book,status:e.target.value})}>
                  <option value={""}>select</option>
                  <option value={"Available"}>Available</option>
                  <option value={"Unavailable"}>Unavailable</option>
                </select>
                {/* <input placeholder="Status" required value={book.status} onChange={(e) => setBook({...book,status:e.target.value})} type="text" className="form-control"/> */}
              </div>
              <div className="mb-3">
                <label className="form-label">Location</label>
                <input placeholder="Location" required value={book.location} onChange={(e) => setBook({...book,location:e.target.value})} type="text" className="form-control"/>
              </div>
              <div className="mb-3">
                <label className="form-label">Branch</label>
                <select className='w-100' onChange={(e)=>setBook({...book,branch:e.target.value})} required>
                  <option value={""}>select</option>
                  <option value={"CSE"}>CSE</option>
                  <option value={"ECE"}>ECE</option>
                  <option value={"MECH"}>MECH</option>
                  <option value={"VISH"}>VISH</option>
                  <option value={"MGT"}>MGT</option>
                  <option value={"LAW"}>LAW</option>
                  <option value={"EEE"}>EEE</option>
                </select>
                {/* <input placeholder="Branch" required value={book.branch} onChange={(e) => setBook({...book,branch:e.target.value})} type="text" className="form-control"/> */}
              </div>
              <div className="d-flex justify-content-end">
              <button id='regsubmit' type="submit" className="btn btn-success">Add Book</button>
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