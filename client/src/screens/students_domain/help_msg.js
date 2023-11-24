import React, { useState,useEffect } from 'react';
import NavBar from '../components/sidenavbar';
import TopNaBbar from '../components/topnavbar';
import "./help_msg.css";
import { IoPersonCircleOutline } from "react-icons/io5";
import axios from '../services/instance';


const HelpMsg=()=> {
    const [data,setData] = useState([]);
    const fetchdetails = async()=>{
      await axios.get(`/msgs`).then(function(response){
        setData(response.data.data);
      })
    }
    
    useEffect(()=>{
      if(localStorage.getItem('role') === "admin"){fetchdetails()}
    },[]);
    
  const [msg,setMsg]=useState('');
  const sendmsg=async(e)=>{
    e.preventDefault();
    document.getElementById('regsubmit').setAttribute("disabled", "true");
    await axios.post("/msgs", {
      student:localStorage.getItem('uid'),
      msg:msg
    }).then(function(res){
      setMsg('');
      window.alert("msg sent Successful!");
      document.getElementById("regsubmit").removeAttribute("disabled");
    }).catch(function(err){
      window.alert(err.response.data.msg);
      document.getElementById("regsubmit").removeAttribute("disabled");
    });
  }

  const reset=()=>{
    setMsg('');
  }

  return (
    <div className="svnav m-0 h-100">
        <div className='p-0'>
        <TopNaBbar/>
        </div>
        <div>
        <div className='d-flex body-sec'>
          <div className="p-0">
            <NavBar/>
          </div>
        <div className='w-100'>
          {
            (localStorage.getItem('role')==='student')?
            <div className='main-section w-100 d-flex justify-content-center overflow-y-auto'>
            <div className="w-auto p-5 d-flex flex-column align-items-center"> 
              <div className='msgbox p-4 rounded shadow w-auto'>
                <div className="h1"><p>Message</p></div>
                  <form onSubmit={sendmsg}>
                    <div className='mt-2'>
                      <textarea value={msg} onChange={(e)=>setMsg(e.target.value)} name="message" rows="10" cols="60" placeholder="Write your Message here..." />
                    </div>
                    <div className='d-flex justify-content-between py-2'>  
                      <button type="reset" onClick={()=>reset()} className="btn btn-outline-info">Reset</button>
                      <button type="submit" id='regsubmit' className="btn btn-outline-info">Submit</button>
                    </div>
                  </form>
              </div>
            </div>
            </div>
            :
            <div className='main-section overflow-y-auto'>
              {
                data.map((val,index)=>
                <div key={index} className = "msgbox m-3">
                <div className = "d-flex align-items-center justify-content-between">
                  <div > 
                    <IoPersonCircleOutline className="m-2 fs-3" />{val.student.name} - {val.student.regno}
                  </div>
                  <div className="m-2">
                    {val.date.toString().substring(0,10)}
                  </div>
                </div>
                <div className = "m-2">
                  {val.msg}
                </div>   
              </div>  
                )
              }
            </div> 
          }
          </div>
          </div>
        </div>
    </div>
    
  )
}

export default HelpMsg;