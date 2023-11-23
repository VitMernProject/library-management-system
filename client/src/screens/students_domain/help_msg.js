import React, { useState } from 'react';
import NavBar from '../components/sidenavbar';
import TopNaBbar from '../components/topnavbar';

const HelpMsg=()=> {
  const [msg,setMsg]=useState('');
  const sendmsg=async(e)=>{
    e.preventDefault();
    document.getElementById('regsubmit').setAttribute("disabled", "true");
    const res = await fetch("/msgs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "student":localStorage.getItem('uid'),
        "msg":msg
      }),
    });
    const data = await res.json();
    if (res.status === 200) {
      setMsg('');
      window.alert("msg sent Successful!");
      document.getElementById("regsubmit").removeAttribute("disabled");
    } else {
      window.alert(data.msg);
      document.getElementById("regsubmit").removeAttribute("disabled"); 
    }
  }
  return (
    <div className="svnav m-0 h-100">
        <div className='p-0'>
        <TopNaBbar/>
        </div>
        <div>
        <div className='d-flex'>
          <div className="p-0">
            <NavBar/>
          </div>
        <div className='w-100'>
          
          {
            (localStorage.getItem('role')==='student')?
            <div className='main-section w-100 d-flex justify-content-center overflow-y-auto'>
            <div className="w-auto p-5 d-flex flex-column align-items-center"> 
              <div className='msgbox p-4 rounded shadow w-auto'>
                <div classname="h1"><p>Message</p></div>
                  <form onSubmit={sendmsg}>
                    <div className='mt-2'>
                      <textarea value={msg} onChange={(e)=>setMsg(e.target.value)} name="message" rows="10" cols="60" placeholder="Write your Message here..." />
                    </div>
                    <div className='d-flex justify-content-between py-2'>  
                      <button type="reset" class="btn btn-outline-info">Reset</button>
                      <button type="submit" id='regsubmit' class="btn btn-outline-info">Submit</button>
                    </div>
                  </form>
              </div>
            </div>
            </div>
            :
            <div className='main-section w-100 d-flex justify-content-center overflow-y-auto' style={{"height":"52%"}}>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            </div>
          }
          </div>
          </div>
        </div>
    </div>
    
  )
}

export default HelpMsg;