import React from 'react'
import NavBar from '../components/sidenavbar';
import TopNaBbar from '../components/topnavbar';
import Search from '../components/search';

const AllBooks = () => {
  return (
    <div className="svnav m-0">
      <div className='p-0'>
        <TopNaBbar/>
      </div>
      <div className='d-flex'>
          <div className="p-0">
            <NavBar/>
          </div>
          <div className="main-section w-100 p-3">
            <div className="heading mt-3 d-flex mb-3 justify-content-center h1">
              All Books
            </div>
            <div className='p-0 pb-2'>
              <Search/>
            </div>
            <div className="booksTable table-responsive-md mt-1 overflow-auto">
              <table className="table  table-hover table-dark">
                <thead className="table-secondary">
                  <tr>
                    <th>S.NO</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Copies</th>
                    <th>Book Alignment</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Data Structure</td>
                    <td>Martin Joz</td>
                    <td>15</td>
                    <td></td>
                    <td>AVAILABLE</td>
                    <td>
                      <button className="btn text-light bg-success">Issue</button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>React in Action</td>
                    <td>Mark Tielens Thomas</td>
                    <td>11</td>
                    <td>AVAILABLE</td>
                    <td>
                      <button className="btn text-light bg-success">Issue</button>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Practical Node.js</td>
                    <td>Azat Mardan</td>
                    <td>15</td>
                    <td>AVAILABLE</td>
                    <td>
                      <button className="btn text-light bg-success">Issue</button>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Learning Node</td>
                    <td>Shelley Powers</td>
                    <td>5</td>
                    <td>AVAILABLE</td>
                    <td>
                      <button className="btn text-light bg-success">Issue</button>
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Head first SQL</td>
                    <td>Lynn Beighley</td>
                    <td>11</td>
                    <td>AVAILABLE</td>
                    <td>
                      <button className="btn text-light bg-success">Issue</button>
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>SQL Cookbook</td>
                    <td>Anthony Molinaro</td>
                    <td>0</td>
                    <td>NOT AVAILABLE</td>
                    <td>
                      <button className="btn text-light bg-success">Issue</button>
                    </td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Full Stack React</td>
                    <td>Nate Murray</td>
                    <td>7</td>
                    <td>AVAILABLE</td>
                    <td>
                      <button className="btn text-light bg-success">Issue</button>
                    </td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>Learning React</td>
                    <td>Alex Banks</td>
                    <td>21</td>
                    <td>AVAILABLE</td>
                    <td>
                      <button className="btn text-light bg-success">Issue</button>
                    </td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>Effective Java</td>
                    <td>Joshua Bloch</td>
                    <td>13</td>
                    <td>AVAILABLE</td>
                    <td>
                      <button className="btn text-light bg-success">Issue</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
        </div> 
      </div>       
    </div>
    )
}

export default AllBooks;