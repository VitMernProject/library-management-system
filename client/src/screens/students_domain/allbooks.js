import React, { useState, useEffect } from "react";
import NavBar from "../components/sidenavbar";
import TopNaBbar from "../components/topnavbar";
import Search from "../components/search";
import axios from "../services/instance";

const AllBooks = () => {
  const [data, setData] = useState([]);
  const [search,setSearch] = useState("");
  const [edit, setEdit] = useState([]);
  const [editmode, setEditmode] = useState({
    index: 0,
    mode:false,
  })

  const fetchdetails = async () => {
    await axios.get(`/getAllBooks?search=${search}`).then(function(res){
      setData(res.data.data);
      const newData = [];
      res.data.data.map((val,index)=>newData.push({"copies":val.copies,"status":val.status}));
      setEdit(newData);
    });    
  }
  useEffect(()=>{
    fetchdetails()
    console.log(edit);
  },[search]);
  
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
  
    const updateFieldChanged = index => e =>{
      let newArr = [...edit];
      console.log(newArr);
      newArr[index][e.target.name] = e.target.value;
      console.log(newArr);
      setEdit(newArr);
    }

    const deleteBook =async (val)=>{
      await axios.delete(`/deleteBook?id=${val._id}`).then(()=>fetchdetails()) 
    }

    const updateData=async (index,val)=>{
      await axios.put("/updatebook",{
            "bookid":val._id,
            "copies":parseInt(edit[index].copies),
            "status":edit[index].status
      }).then(()=>{
        setEditmode({mode:false});
        fetchdetails();
      })
    }

  return (
    <div className="svnav m-0">
      <div className="p-0">
        <TopNaBbar />
      </div>
      <div className='d-flex'>
          <div className="p-0">
            <NavBar/>
          </div>
          <div className="main-section px-3 w-100">
            <div className="heading mt-3 d-flex mb-3 justify-content-center h1">
              All Books
            </div>
            <div className='p-0 pb-2'>
            <Search val={search} onChange={(e)=>{setSearch(e.target.value)}}  />
            </div>
            <div className="booksTable table-responsive-md mt-1 overflow-auto">
              <table className="table  table-hover table-dark ">
                <thead className="table-secondary">
                  <tr>
                    <th>S.NO</th>
                    <th>Book ID</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Branch</th>
                    <th>Copies</th>
                    <th>Book Alignment</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    data.map((val,index)=>
                      <tr key={index} >
                        <td>{index +1}</td>
                        <td>{val.bookid}</td>
                        <td>{val.title}</td>
                        <td>{val.author}</td>
                        <td>{val.branch}</td>
                        {index === editmode.index && editmode.mode?<td><input name={"copies"} value={edit[index].copies} onChange={updateFieldChanged(index)} min={0} max={30} type="range"/> {edit[index].copies}</td>:<td>{val.copies}</td>}
                        <td>{val.location}</td>
                        {index === editmode.index && editmode.mode?<td>
                        <select name={"status"} onChange={updateFieldChanged(index)}>
                          <option value={""}>select</option>
                          <option value={"Available"}>Available</option>
                          <option value={"Unavailable"}>Unavailable</option>
                        </select></td>
                        :<td>{val.status}</td>}
                        <td>
                        {
                          localStorage.getItem('role')==='student' ?
                          (val.copies > 0)? <button className="btn text-light bg-success regsubmit"  onClick={()=>postdata(val)}>Issue</button>:<></>
                          :<div>
                          <button className="btn text-light bg-success regsubmit me-2"  onClick={(index === editmode.index && editmode.mode)?()=>updateData(index,val):()=>setEditmode({index:index, mode:true})}>{index === editmode.index && editmode.mode?"Update":"Edit"}
                          </button>
                          <button className="btn bg-danger text-light" onClick={()=>deleteBook(val)}>Delete</button>
                          </div>
                        }
                        </td>
                      </tr>
                    )
                  }
                </tbody>
              </table>
            </div>
        </div> 
      </div>       
    </div>
  );
};

export default AllBooks;
