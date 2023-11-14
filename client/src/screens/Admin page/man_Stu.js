import "./man_Stu.css";
import TopNavBar from "../components/topnavbar";
import NavBar from "../components/sidenavbar";
import Search from "../components/search";
import React from "react";

const ManStu = () => {
  return (
    <>
      <div>
        <TopNavBar />
      </div>
      <div className="d-flex">
        <div className="p-0">
          <NavBar />
        </div>
        <div className="main-section w-100 p-3">
          <div className="heading mt-3 d-flex flex-row mb-3 justify-content-center h1">
            Manage Student
            <div className="ms-auto">
              <button className="btn btn-outline-light">Add Student</button>
            </div>
          </div>

          <div className="p-0 pb-2">
            <Search />
          </div>
          <div className="booksTable overflow-auto table-responsive-md mt-1">
            <table className="table table-hover table-dark">
              <thead className="table-secondary">
                <tr>
                  <th>S.NO</th>
                  <th>Student Name</th>
                  <th>Student ID</th>
                  <th>Branch</th>
                  <th>Join Year</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Tadikamalla Sudheshna</td>
                  <td>21BCE7736</td>
                  <td>CSE</td>
                  <td>2021</td>
                  <td>
                    <button className="btn me-2 text-light bg-success">
                      Edit
                    </button>
                    <button className="btn text-light bg-danger">Remove</button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Eswar Aditya</td>
                  <td>21BCE8184</td>
                  <td>CSE</td>
                  <td>2021</td>
                  <td>
                    <button className="btn me-2 text-light bg-success">
                      Edit
                    </button>
                    <button className="btn text-light bg-danger">Remove</button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Sowjanya</td>
                  <td>21BCE7947</td>
                  <td>CSE</td>
                  <td>2021</td>
                  <td>
                    <button className="btn me-2 text-light bg-success">
                      Edit
                    </button>
                    <button className="btn text-light bg-danger">Remove</button>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Karthik</td>
                  <td>21BCE7894</td>
                  <td>CSE</td>
                  <td>2021</td>
                  <td>
                    <button className="btn me-2 text-light bg-success">
                      Edit
                    </button>
                    <button className="btn text-light bg-danger">Remove</button>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Harshini</td>
                  <td>21BCE8394</td>
                  <td>CSE</td>
                  <td>2021</td>
                  <td>
                    <button className="btn me-2 text-light bg-success">
                      Edit
                    </button>
                    <button className="btn text-light bg-danger">Remove</button>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Rahul</td>
                  <td>21BCE7194</td>
                  <td>CSE</td>
                  <td>2021</td>
                  <td>
                    <button className="btn me-2 text-light bg-success">
                      Edit
                    </button>
                    <button className="btn text-light bg-danger">Remove</button>
                  </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Basera</td>
                  <td>21BCE7907</td>
                  <td>CSE</td>
                  <td>2021</td>
                  <td>
                    <button className="btn me-2 text-light bg-success">
                      Edit
                    </button>
                    <button className="btn text-light bg-danger">Remove</button>
                  </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Tadikamalla Suraj</td>
                  <td>21BCE7738</td>
                  <td>CSE</td>
                  <td>2024</td>
                  <td>
                    <button className="btn me-2 text-light bg-success">
                      Edit
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
};

export default ManStu;
