import React from 'react'
import TopNavBar from '../components/topnavbar'
import SideNavBar from '../components/sidenavbar'
import Search from '../components/search'
const CurrentlyIssued = () => {
  return (
    <div>
      <div className="svnav m-0">
      <div className='p-0'>
        <TopNavBar/>
      </div>
      <div className='d-flex'>
          <div className="p-0">
            <SideNavBar/>
          </div>
          <div className="main-section w-100 p-3">
            <div className="heading mt-3 d-flex mb-3 justify-content-center h1">
              Currently Issued Books
            </div>
            <div className='p-0 pb-2'>
              <Search/>
            </div>
            <div className="booksTable table-responsive-md mt-1 overflow-auto">
              <table className="table  table-hover table-dark">
                <thead className="table-secondary">
                  <tr>
                    <th>S.NO</th>
                    <th>Book ID</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Issued date</th>
                    <th>Due date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>CSE2001</td>
                    <td>Data Structure</td>
                    <td>Martin Joz</td>
                    <td>12-08-2023</td>
                    <td>30-08-2023</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>CSE2001</td>
                    <td>React in Action</td>
                    <td>Mark Tielens Thomas</td>
                    <td>12-08-2023</td>
                    <td>30-08-2023</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>CSE2001</td>
                    <td>Practical Node.js</td>
                    <td>Azat Mardan</td>
                    <td>12-08-2023</td>
                    <td>30-08-2023</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>CSE2001</td>
                    <td>Learning Node</td>
                    <td>Shelley Powers</td>
                    <td>12-08-2023</td>
                    <td>30-08-2023</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>CSE2001</td>
                    <td>Head first SQL</td>
                    <td>Lynn Beighley</td>
                    <td>12-08-2023</td>
                    <td>30-08-2023</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>CSE2001</td>
                    <td>SQL Cookbook</td>
                    <td>Anthony Molinaro</td>
                    <td>12-08-2023</td>
                    <td>30-08-2023</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>CSE2001</td>
                    <td>Full Stack React</td>
                    <td>Nate Murray</td>
                    <td>12-08-2023</td>
                    <td>30-08-2023</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>CSE2001</td>
                    <td>Learning React</td>
                    <td>Alex Banks</td>
                    <td>12-08-2023</td>
                    <td>30-08-2023</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>CSE2001</td>
                    <td>Effective Java</td>
                    <td>Joshua Bloch</td>
                    <td>12-08-2023</td>
                    <td>30-08-2023</td>
                  </tr>
                </tbody>
              </table>
            </div>
        </div> 
      </div>       
    </div>
    </div>
  )
}

export default CurrentlyIssued