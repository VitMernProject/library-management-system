import react from 'react'
import TopNavBar from '../components/topnavbar'
import SideNavBar from '../components/sidenavbar'
import Search from '../components/search'

const Recommended = () => {
    return(
        <div>
      <div className="svnav m-0">
      <div className='p-0'>
        <TopNavBar/>
      </div>
      <div className='d-flex body-sec'>
          <div className="p-0">
            <SideNavBar/>
          </div>
          <div className="main-section w-100 p-3">
            <div className="heading mt-3 d-flex mb-3 justify-content-center h1">
              Recommended Books
            </div>
            
            <div className=''>
            <div className="table-responsive-md mt-1 overflow-auto">
              <table className="table  table-hover table-dark">
                <thead className="table-secondary">
                  <tr>
                    <th>S.NO</th>
                    <th>Book ID</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>CSE2001</td>
                    <td>Data Structure</td>
                    <td>Martin Joz</td>
                    <td><button className="btn text-light bg-success">Add Book</button></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>CSE2001</td>
                    <td>React in Action</td>
                    <td>Mark Tielens Thomas</td>
                    <td><button className="btn text-light bg-success">Add Book</button></td>
                    
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>CSE2001</td>
                    <td>Practical Node.js</td>
                    <td>Azat Mardan</td>
                    <td><button className="btn text-light bg-success">Add Book</button></td>
                    
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>CSE2001</td>
                    <td>Learning Node</td>
                    <td>Shelley Powers</td>
                    <td><button className="btn text-light bg-success">Add Book</button></td>
                    
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>CSE2001</td>
                    <td>Head first SQL</td>
                    <td>Lynn Beighley</td>
                    <td><button className="btn text-light bg-success">Add Book</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="booksTable table-responsive-md mt-1 overflow-auto">
              <table className="table  table-hover table-dark">
                <thead className="table-secondary">
                  <tr>
                    <th>S.NO</th>
                    <th>Book ID</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>CSE2001</td>
                    <td>Data Structure</td>
                    <td>Martin Joz</td>
                    <td><button className="btn text-light bg-success">Add Book</button></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>CSE2001</td>
                    <td>React in Action</td>
                    <td>Mark Tielens Thomas</td>
                    <td><button className="btn text-light bg-success">Add Book</button></td>
                    
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>CSE2001</td>
                    <td>Practical Node.js</td>
                    <td>Azat Mardan</td>
                    <td><button className="btn text-light bg-success">Add Book</button></td>
                    
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>CSE2001</td>
                    <td>Learning Node</td>
                    <td>Shelley Powers</td>
                    <td><button className="btn text-light bg-success">Add Book</button></td>
                    
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>CSE2001</td>
                    <td>Head first SQL</td>
                    <td>Lynn Beighley</td>
                    <td><button className="btn text-light bg-success">Add Book</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            </div>
        </div> 
      </div>       
    </div>
    </div>
    )
}

export default Recommended;