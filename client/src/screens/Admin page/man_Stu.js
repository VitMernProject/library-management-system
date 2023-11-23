import "./man_Stu.css";
import {React,useEffect, useState} from "react";
import TopNavBar from "../components/topnavbar";
import NavBar from "../components/sidenavbar";
import Search from "../components/search";
import { FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const ManStu = () => {
  const [data, setData] = useState([]);
  const [search,setSearch] = useState("");

  const fetchdetails = async () => {
    const res = await fetch(`/getAllUsers?search=${search}&role=student`, {
      method: "GET",
    });
    const response = await res.json();
    setData(response.users);
  }
  
  useEffect(()=>{
    fetchdetails();
  },[search]);

  const delUser=async(id)=>{
    document.querySelectorAll(".regsubmit").forEach((s)=>s.setAttribute("disabled","true"))
    await fetch(`/deleteUser?id=${id}`,{
      method:"DELETE",
    })
    fetchdetails();
    document.querySelectorAll(".regsubmit").forEach((s)=>s.removeAttribute("disabled"))
  }

  return (
    <>
      <div>
        <TopNavBar />
      </div>
      <div className="d-flex">
        <div className="">
          <NavBar />
        </div>
        <div className="main-section w-100 p-3">
          <div className="heading mt-3 d-flex flex-row mb-3 justify-content-center h1">
            Manage Student
            <div className="ms-auto">
              <button className="btn btn-outline-light"><NavLink className="d-flex align-items-center text-decoration-none hover-text" to={'/register'}><FaPlus className="me-2"/>Add Student</NavLink></button>
            </div>
          </div>

          <div className="p-0 pb-2">
            <Search val={search} onChange={(e)=>{setSearch(e.target.value)}}  />
          </div>

          <div className="booksTable overflow-auto table-responsive-md mt-1">
            <table className="table table-hover table-dark">
              <thead className="table-secondary">
                <tr>
                  <th>S.NO</th>
                  <th>Student Name</th>
                  <th>Student ID</th>
                  <th>Branch</th>
                  <th>Batch</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
              {
                data.map((val,index)=>
                  <tr>
                  <td>{index+1}</td>
                  <td>{val.name}</td>
                  <td>{val.regno}</td>
                  <td>{val.branch}</td>
                  <td>{val.batch}</td>
                  <td>
                    <button className="btn text-light bg-danger regsubmit" onClick={()=>delUser(val._id)}>Remove</button>
                  </td>
                </tr>
                )
              }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManStu;
