import {React,useState,useEffect} from 'react'
import TopNavBar from '../components/topnavbar'
import SideNavBar from '../components/sidenavbar'
import Search from '../components/search'

const AllIssued = () => {
  const [data,setData] = useState([]);
  const [search,setSearch] = useState("");

  const fetchdetails = async()=>{
    const res = await fetch(`/issueBook?search=${search}`,{
      method:'GET',
    })
    const response = await res.json();
    setData(response.data);
  }

  useEffect(()=>{fetchdetails()
  },[search]);
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
              All Issued Books
            </div>
            <div className='p-0 pb-2'>
              <Search val={search} onChange={(e)=>{setSearch(e.target.value)}}  />
            </div>
            <div className="booksTable table-responsive-md mt-1 overflow-auto">
              <table className="table  table-hover table-dark">
                <thead className="table-secondary">
                  <tr>
                    <th>S.NO</th>
                    <th>Book ID</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Reg.No</th>
                    <th>Student Name</th>
                    <th>Issued date</th>
                    <th>Due date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                {
                    data.map((val,index)=>
                      <tr>
                        <td>{index +1}</td>
                        <td>{val.book.bookid}</td>
                        <td>{val.book.title}</td>
                        <td>{val.book.author}</td>
                        <td>{val.student.regno}</td>
                        <td>{val.student.name}</td>
                        <td>{val.issueDate.toString().substring(0,10)}</td>
                        <td>{val.returnDate.toString().substring(0,10)}</td>
                        <td>{val.status}</td>
                        </tr>
                    )}
                </tbody>
              </table>
            </div>
        </div> 
      </div>       
    </div>
    </div>
  )
}

export default AllIssued