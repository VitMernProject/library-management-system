import "./Issue_req.css";
import TopNavBar from "../components/topnavbar";
import NavBar from "../components/sidenavbar";
import Search from "../components/search";
import React from "react";

function Issue_req() {
  return (
    <>
      <div>
        <TopNavBar />
      </div>
      <div className="d-flex">
        <div className="p-0">
          <NavBar />
        </div>
        <div className="main-section w-100  p-3">
          <div className="heading mt-3 d-flex mb-3 justify-content-center h1">
            Student Requested to Admin to issue these Book
          </div>
          <div className='p-0 pb-2'>
              <Search/>
          </div>
          <div className="booksTable overflow-auto table-responsive-md mt-1">
            <table className="table  table-hover table-dark">
              <thead className="table-secondary">
                <tr>
                  <th>Book Name</th>
                  <th>Author</th>
                  <th>Student Name</th>
                  <th>Student Branch</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Read in Action</td>
                  <td>Mark Tielens Thomas</td>
                  <td>Tadikamalla Sudheshna</td>
                  <td>CSE</td>
                  <td>
                    <button className="btn m-2 text-light bg-success">
                      Accepted
                    </button>
                    <button className="btn text-light bg-danger">Remove</button>
                  </td>
                </tr>
                <tr>
                  <td>Effective C</td>
                  <td>Robert C.Seacord</td>
                  <td>Eswar Aditya</td>
                  <td>CSE</td>
                  <td>
                    <button className="btn m-2 text-light bg-success">
                      Accepted
                    </button>
                    <button className="btn text-light bg-danger">Remove</button>
                  </td>
                </tr>
                <tr>
                  <td>SQL CookBook</td>
                  <td>Anthony Molinaro</td>
                  <td>Sowjanya</td>
                  <td>CSE</td>
                  <td>
                    <button className="btn m-2 text-light bg-success">
                      Accepted
                    </button>
                    <button className="btn text-light bg-danger">Remove</button>
                  </td>
                </tr>
                <tr>
                  <td>JavaScript Programming basics</td>
                  <td>Nathan CLARK</td>
                  <td>Karthik</td>
                  <td>CSE</td>
                  <td>
                    <button className="btn m-2 text-light bg-success">
                      Accepted
                    </button>
                    <button className="btn text-light bg-danger">Remove</button>
                  </td>
                </tr>
                <tr>
                  <td>Internet of Things: a hands-on approach</td>
                  <td>Bahga, A.</td>
                  <td>Harshini</td>
                  <td>CSE</td>
                  <td>
                    <button className="btn m-2 text-light bg-success">
                      Accepted
                    </button>
                    <button className="btn text-light bg-danger">Remove</button>
                  </td>
                </tr>
                <tr>
                  <td>Database system concepts</td>
                  <td>Silberschatz, A.</td>
                  <td>Rahul</td>
                  <td>CSE</td>
                  <td>
                    <button className="btn m-2 text-light bg-success">
                      Accepted
                    </button>
                    <button className="btn text-light bg-danger">Remove</button>
                  </td>
                </tr>
                <tr>
                  <td>Dynamic programming and optimal control Vol. I</td>
                  <td>Bertserkas, D.P.</td>
                  <td>Basera</td>
                  <td>CSE</td>
                  <td>
                    <button className="btn m-2 text-light bg-success">
                      Accepted
                    </button>
                    <button className="btn text-light bg-danger">Remove</button>
                  </td>
                </tr>
                <tr>
                  <td>Data structures: a programming approach with C</td>
                  <td>Mishra, K.</td>
                  <td>Tadikamalla Suraj</td>
                  <td>CSE</td>
                  <td>
                    <button className="btn m-2 text-light bg-success">
                      Accepted
                    </button>
                    <button className="btn text-light bg-danger">Remove</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Issue_req;
