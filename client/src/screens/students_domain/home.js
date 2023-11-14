import React, { useEffect, useState } from 'react'
import NavBar from '../components/sidenavbar';
import TopNaBbar from '../components/topnavbar';
import profilepic from "../../assets/images/profilepic.png"

const Home = () => {
  const [data, setData] = useState({});
  
  const fetchdetails = async()=>{
    const uid = localStorage.getItem('uid');
    const res = await fetch(`/getUserDetails?uid=${uid}`,{
      method:'GET',
    })
    const response = await res.json();
    setData(response.data);
  }
  useEffect(()=>{fetchdetails()
  },[]);
  // console.log(data);
  // console.log(GlobalConstants.uid);

  return (
    <div className="svnav m-0">
        <div className='p-0'>
          <TopNaBbar name={data.name}/>
        </div>
        <div className='d-flex'>
        <div className="p-0">
           <NavBar/>
        </div>
        <div className="home w-100 d-flex justify-content-center">
            <div className='box mt-5 rounded h-50 w-auto shadow-lg'>
              <div className='prfpic h-50 d-flex flex-column justify-content-center align-items-center'>
                    <img src={profilepic} className="img-thumbnail rounded-circle h-75 w-auto" alt=""/>
                 <div>
                  <b>{data.name}</b>
                 </div>
              </div>
              <div className='dets p-3'>
                  <div><b className='m-2'>E-Mail ID : </b></div>
                  <div>{data.email}</div>
                  <div><b className='m-2'>Phone Number : </b></div>
                  <div>{data.phoneno}</div>
                  <div><b className='m-2'>Registration Number : </b></div>
                  <div>{data.regno}</div>
                  <div><b className='m-2'>Batch : </b></div>
                  <div>21st Batch</div>
                  <div><b className='m-2'>Branch : </b></div>
                  <div>CSE</div>
              </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Home;