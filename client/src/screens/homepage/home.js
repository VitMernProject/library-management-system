import React from 'react'
import NavBar from '../components/sidenavbar';
import TopNaBbar from '../components/topnavbar';
import profilepic from "../../assets/images/profilepic.png"
const Home = () => {
  return (
    <div className="svnav row m-0">
        <div className='p-0'>
          <TopNaBbar/>
        </div>
        <div className="col-2 p-0">
           <NavBar/>
        </div>
        <div className="home col">
            <div className='box'>
              <form method=''>
                <div className='prfpic'>
                  <div className='text-center fs-4'>
                    <b>G Eswar Aditya</b>
                  </div>
                  <div className='d-flex flex-column align-items-center'>
                  <img src={profilepic} alt="pic" height={130} width={125} />
                  </div>
                  
                </div>
                <div className='dets'>
                    <b className='m-2 p-2'>E-Mail ID : </b><br/>
                    <b className='m-2 p-2'>Phone Number : </b><br/>
                    <b className='m-2 p-2'>Registration Number : </b><br/>
                    <b className='m-2 p-2'>Batch : </b><br/>
                    <b className='m-2 p-2'>Branch : </b><br/>
                </div>
              </form>
              
            </div>
        </div>
    </div>
  )
}

export default Home;