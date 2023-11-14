import React, { useState } from 'react'
import TopNavBar from '../components/topnavbar'
import SideNavBar from '../components/sidenavbar'
import './addbook.css'
import {useNavigate} from 'react-router-dom'
const Addbook = () => {
  const navigate = useNavigate();
  const [book,setBook] = useState({bookid:"",title:"",author:"",copies:"",location:"",branch:"",status:""});
  const postdata = async(e) => {
    e.preventDefault();
    const {bookid,title,author,copies,status,branch,location} = book;
    const res = await fetch("/addbook",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        bookid,title,author,copies,status,branch,location
      }),
    });
    const data = await res.json();
    if (data.status===200){
      setBook({bookid:"",title:"",author:"",copies:"",location:"",branch:"",status:""});
      window.alert("Book added successfully!!");
    }
    else{
      setBook({bookid:"",title:"",author:"",copies:"",location:"",branch:"",status:""});
      window.alert(data.message);
    }
  }

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
          <div className="home w-100 d-flex justify-content-center align-items-start">
            <div className="frm overflow-auto h-75 w-50 p-4 rounded shadow">
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
                <input placeholder="Copies" required value={book.copies} onChange={(e) => setBook({...book,copies:e.target.value})} type="text" className="form-control"/>
              </div>
              <div className="mb-3">
                <label className="form-label">Status</label>
                <input placeholder="Status" required value={book.status} onChange={(e) => setBook({...book,status:e.target.value})} type="text" className="form-control"/>
              </div>
              <div className="mb-3">
                <label className="form-label">Location</label>
                <input placeholder="Location" required value={book.location} onChange={(e) => setBook({...book,location:e.target.value})} type="text" className="form-control"/>
              </div>
              <div className="mb-3">
                <label className="form-label">Branch</label>
                <input placeholder="Branch" required value={book.branch} onChange={(e) => setBook({...book,branch:e.target.value})} type="text" className="form-control"/>
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