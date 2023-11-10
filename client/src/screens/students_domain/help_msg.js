import React from 'react';
import NavBar from '../components/sidenavbar';
import TopNaBbar from '../components/topnavbar';

function HelpMsg() {
  return (
    <div className="svnav m-0">
        <div className='p-0'>
        <TopNaBbar/>
        </div>
        <div className='d-flex'>
          <div className="p-0">
            <NavBar/>
          </div>
          <div className='w-100 d-flex justify-content-center'>
            <div className="w-auto p-5 d-flex flex-column align-items-center"> 
              <div className='msgbox p-4 rounded shadow w-auto'>
                <div classname="h1"><p>Message</p></div>
                <div className='mt-2'>
                  <textarea name="message" rows="10" cols="60" placeholder="Write your Message here..." />
                </div>
                <div className='d-flex justify-content-between py-2'>  
                  <button type="reset" class="btn btn-outline-info">Reset</button>
                  <button type="submit" class="btn btn-outline-info">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    
  )
}

export default HelpMsg;