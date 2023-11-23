import "./Issue_req.css";
import TopNavBar from "../components/topnavbar";
import NavBar from "../components/sidenavbar";
import Search from "../components/search";
import { React, useState, useEffect } from "react";

const Issue_req = () => {
  const [data, setData] = useState([]);
  const [search,setSearch] = useState("");
  const fetchdetails = async () => {
    const res = await fetch(`/issueBook?status=Pending&search=${search}`, {
      method: "GET",
    });
    const response = await res.json();
    setData(response.data);
  };

  useEffect(() => {
    fetchdetails();
  }, [search]);

  const removeRequest=async(val,index)=> {
    document.getElementsByClassName('regsubmit').item(index).setAttribute("disabled","true");
    await fetch(`/issueBook?id=${val._id}`,{
      method:"DELETE",
    });
    fetchdetails();
    document.getElementsByClassName('regsubmit').item(index).removeAttribute("disabled");
  }

  const approveRequest=async(val,index)=> {
    document.getElementsByClassName('regsubmit').item(index).setAttribute("disabled","true");
    await fetch(`/issueBook?id=${val._id}`,{
      method:"PUT",
    });
    fetchdetails();
    document.getElementsByClassName('regsubmit').item(index).removeAttribute("disabled");
  }

  return (
    <>
      <div>
        <TopNavBar />
      </div>
      <div className="d-flex">
        <div className="p-0">
          <NavBar />
        </div>
        <div className="main-section w-100  p-3">
          <div className="heading mt-3 d-flex mb-3 justify-content-center h1">
            Student Requested to Admin to issue these Book
          </div>
          <div className="p-0 pb-2">
            <Search val={search} onChange={(e)=>{setSearch(e.target.value)}}  />
          </div>
          <div className="booksTable overflow-auto table-responsive-md mt-1">
            <table className="table  table-hover table-dark">
              <thead className="table-secondary">
                <tr>
                  <th>Book ID</th>
                  <th>Book Name</th>
                  <th>Author</th>
                  <th>Student ID</th>
                  <th>Student Name</th>
                  <th>Branch</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((val, index)=> 
                  <tr>
                    <td>{val.book.bookid}</td>
                    <td>{val.book.title}</td>
                    <td>{val.book.author}</td>
                    <td>{val.student.regno}</td>
                    <td>{val.student.name}</td>
                    <td>cse</td>
                    <td>
                    <button className="btn m-2 text-light bg-success" onClick={()=>approveRequest(val,index)}>
                      Accept
                    </button>
                    <button className="btn text-light bg-danger regsubmit" onClick={()=>removeRequest(val,index)}>Remove</button>
                  </td>

                  </tr>
                  )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Issue_req;
