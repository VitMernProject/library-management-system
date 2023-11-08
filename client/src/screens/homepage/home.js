import React from 'react'
import NavBar from '../components/sidenavbar';
import TopNaBbar from '../components/topnavbar';

const Home = () => {
  return (
    <div className="svnav m-0">
        <div className='p-0'>
          <TopNaBbar/>
        </div>
        <div className='d-flex'>
        <div className="p-0">
           <NavBar/>
        </div>
        <div className="home w-100 d-flex justify-content-center">
            <div className='box mt-5 rounded h-50 w-auto shadow-lg'>
              <div className='prfpic h-50 d-flex flex-column justify-content-center align-items-center'>
                    <img src="..." className="img-thumbnail rounded-circle h-75 w-25" alt=""/>
                 <div>
                  <b>G Eswar Aditya</b>
                 </div>
              </div>
              <div className='dets p-3'>
                  <div><b className='m-2'>E-Mail ID : </b></div>
                  <div>aditya.21bce8184@vitapstudent.ac.in</div>
                  <div><b className='m-2'>Phone Number : </b></div>
                  <div>8919350084</div>
                  <div><b className='m-2'>Registration Number : </b></div>
                  <div>21BCE8184</div>
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