import React, { useState, useEffect } from "react";
import NavBar from "../components/sidenavbar";
import TopNaBbar from "../components/topnavbar";
import Search from "../components/search";


const AllBooks = () => {
  const [data, setData] = useState([]);
  const [search,setSearch] = useState("");
  const [edit, setEdit] = useState([]);
  const [editmode, setEditmode] = useState({
    index: 0,
    mode:false,
  })

  const fetchdetails = async () => {
    const res = await fetch(`/getAllBooks?search=${search}`, {
      method: "GET",
    });
    const response = await res.json();
    await setData(response.data);
    const newData = [];
    response.data.map((val,index)=>newData.push({"copies":val.copies}));
    setEdit(newData);
  }
  
  useEffect(()=>{
    fetchdetails()
    console.log(edit);
  },[search]);
  
  const postdata = async (b_data) =>{
    document.querySelectorAll(".regsubmit").forEach((s)=>s.setAttribute("disabled","true"))
    const res = await fetch('/issuebook', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      }, 
      body:JSON.stringify({
        book : b_data._id,
        student : localStorage.getItem('uid')
      }),
      })
      const data = await res.json();
      if(res.status === 200){
        console.log(data);
        document.querySelectorAll(".regsubmit").forEach((s)=>s.removeAttribute("disabled"));
        fetchdetails();
      }else{
        document.querySelectorAll(".regsubmit").forEach((s)=>s.removeAttribute("disabled"));
        window.alert(data.msg);
      }  
    }
  
    const updateFieldChanged = index => e =>{
      let newArr = [...edit];
      console.log(newArr);
      newArr[index].copies = e.target.value;
      console.log(newArr);
      setEdit(newArr);
    }

    const updateData=async (index,val)=>{
      await fetch("/updatebook",{
        method:"PUT",
        headers:{
          "Content-Type": "application/json"
        },
        body:JSON.stringify(
          {
            "bookid":val._id,
            "copies":parseInt(edit[index].copies)
          }
        )
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
                      <tr>
                        <td>{index +1}</td>
                        <td>{val.bookid}</td>
                        <td>{val.title}</td>
                        <td>{val.author}</td>
                        <td>{val.branch}</td>
                        {index === editmode.index && editmode.mode?<td><input name={"copies"} value={(edit.length === 0)?0:edit[index].copies} onChange={updateFieldChanged(index)} min={0} max={30} type="range"/> {edit[index].copies}</td>:<td>{val.copies}</td>}
                        <td>{val.location}</td>
                        <td>{val.status}</td>
                        <td>
                        {
                          localStorage.getItem('role')==='student' ?
                          (val.copies > 0)? <button className="btn text-light bg-success regsubmit"  onClick={()=>postdata(val)}>Issue</button>:<></>
                          :<button className="btn text-light bg-success regsubmit"  onClick={(index === editmode.index && editmode.mode)?()=>updateData(index,val):()=>setEditmode({index:index, mode:true})}>{index === editmode.index && editmode.mode?"Update":"Edit"}</button>
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
