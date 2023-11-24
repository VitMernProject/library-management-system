import React, { useEffect, useState } from 'react'
import NavBar from '../components/sidenavbar';
import TopNaBbar from '../components/topnavbar';
import profilepic from "../../assets/images/profilepic.png"
import axios from "../services/instance";

const Home = () => {
  const [data, setData] = useState({});
  
  const fetchdetails = async()=>{
    const uid = localStorage.getItem('uid');
    await axios.get(`/getUserDetails?uid=${uid}`).then(function(response){
      setData(response.data.data);
    })
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
        <div className='d-flex body-sec'>
        <div className="p-0">
           <NavBar/>
        </div>
        <div className="home w-100 d-flex justify-content-center">
            <div className='box mt-5 rounded w-auto shadow-lg'>
              <div className='prfpic h-50 d-flex flex-column justify-content-center align-items-center'>
                    <img src={profilepic} className="img-thumbnail rounded-circle h-auto w-50 mt-2" alt=""/>
                 <div className='m-2'>
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
                  <div>{data.batch}</div>
                  <div><b className='m-2'>Branch : </b></div>
                  <div>{data.branch}</div>
              </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Home;