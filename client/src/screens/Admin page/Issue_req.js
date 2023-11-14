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
          <div className="p-0 pb-2">
            <Search />
          </div>
          <div className="booksTable overflow-auto table-responsive-md mt-1">
            <table className="table  table-hover table-dark">
              <thead className="table-secondary">
                <tr>
                  <th>Book ID</th>
                  <th>Book Name</th>
                  <th>Author</th>
                  <th>Student ID</th>
                  <th>Student Name</th>
                  <th>Branch</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ds3042</td>
                  <td>Read in Action</td>
                  <td>Mark Tielens Thomas</td>
                  <td>21BCE7736</td>
                  <td>Tadikamalla Sudheshna</td>
                  <td>CSE</td>
                  <td>
                    <button className="btn m-2 text-light bg-success">
                      Accept
                    </button>
                    <button className="btn text-light bg-danger">Remove</button>
                  </td>
                </tr>
                <tr>
                  <td>AS2042</td>
                  <td>Effective C</td>
                  <td>Robert C.Seacord</td>
                  <td>21BCE8184</td>
                  <td>Eswar Aditya</td>
                  <td>CSE</td>
                  <td>
                    <button className="btn m-2 text-light bg-success">
                      Accept
                    </button>
                    <button className="btn text-light bg-danger">Remove</button>
                  </td>
                </tr>
                <tr>
                  <td>Dp3044</td>
                  <td>SQL CookBook</td>
                  <td>Anthony Molinaro</td>
                  <td>21BCE7947</td>
                  <td>Sowjanya</td>
                  <td>CSE</td>
                  <td>
                    <button className="btn m-2 text-light bg-success">
                      Accept
                    </button>
                    <button className="btn text-light bg-danger">Remove</button>
                  </td>
                </tr>
                <tr>
                  <td>Ds3050</td>
                  <td>JavaScript Programming basics</td>
                  <td>Nathan CLARK</td>
                  <td>21BCE7894</td>
                  <td>Karthik</td>
                  <td>CSE</td>
                  <td>
                    <button className="btn m-2 text-light bg-success">
                      Accept
                    </button>
                    <button className="btn text-light bg-danger">Remove</button>
                  </td>
                </tr>
                <tr>
                  <td>Ps60242</td>
                  <td>Internet of Things: a hands-on approach</td>
                  <td>Bahga, A.</td>
                  <td>21BCE8314</td>
                  <td>Harshini</td>
                  <td>CSE</td>
                  <td>
                    <button className="btn m-2 text-light bg-success">
                      Accept
                    </button>
                    <button className="btn text-light bg-danger">Remove</button>
                  </td>
                </tr>
                <tr>
                  <td>Cr2983</td>
                  <td>Database system concepts</td>
                  <td>Silberschatz, A.</td>
                  <td>21BCE7194</td>
                  <td>Rahul</td>
                  <td>CSE</td>
                  <td>
                    <button className="btn m-2 text-light bg-success">
                      Accept
                    </button>
                    <button className="btn text-light bg-danger">Remove</button>
                  </td>
                </tr>
                <tr>
                  <td>As4042</td>
                  <td>Dynamic programming and optimal control Vol. I</td>
                  <td>Bertserkas, D.P.</td>
                  <td>21BCE7907</td>
                  <td>Basera</td>
                  <td>CSE</td>
                  <td>
                    <button className="btn m-2 text-light bg-success">
                      Accept
                    </button>
                    <button className="btn text-light bg-danger">Remove</button>
                  </td>
                </tr>
                <tr>
                  <td>Ds2747</td>
                  <td>Data structures: a programming approach with C</td>
                  <td>Mishra, K.</td>
                  <td>21BCE7738</td>
                  <td>Tadikamalla Suraj</td>
                  <td>CSE</td>
                  <td>
                    <button className="btn m-2 text-light bg-success">
                      Accept
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
