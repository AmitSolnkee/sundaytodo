import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import axios from "axios";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isSideBarOpen, setSideBarOpen] = useState(false);
  const userClicked = (user) => {
    setSelectedUser(user);
    setSideBarOpen(true);
  };

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((res) => setUsers(res?.data?.users));
  }, []);

  const getUserColor = (index) => {
    const colors = ["red", "green", "blue", "orange", "purple"];
    return colors[index % colors.length];
  };
  return (
    <div
      className="container-fluid py-5  dashboard"
      style={{ backgroundColor: "whitesmoke" }}
    >
      <div className="container-header mb-3 d-flex justify-content-between">
        <div className="" style={{ color: "gray" }}>
          <h3>Users</h3>
          <p className="fs-5">Here are all users for this project</p>
        </div>
        <div>
          <button className="btn btn-outline-primary py-2 px-4">
            <i className="fa fa-plus me-2" />
            Add User
          </button>
        </div>
      </div>
      <div className="search-container">
        <input
          type="text"
          className="border-0 rounded-pill px-3 py-3 me-5"
          style={{ width: "20%" }}
          placeholder="Search..."
        />
        <button
          className="border-0 fs-4"
          style={{ backgroundColor: "whitesmoke", color: "gray" }}
        >
          <i class="fa-solid fa-filter me-3"></i>Filter
        </button>
      </div>

      {/* Main Body */}
      <div className="main-container px-2 ">
        <div
          className="row mt-5  py-3 rounded rounded-2"
          style={{ backgroundColor: "silver", color: "gray" }}
        >
          <div className="col-3">
            NAME{" "}
            <i
              class="fa-solid fa-arrow-up ms-2"
              style={{ color: "#828487" }}
            ></i>
            <i class="fa-solid fa-arrow-down" style={{ color: "#828487" }}></i>
          </div>
          <div className="col-3">
            USER ID{" "}
            <i
              class="fa-solid fa-arrow-up ms-2"
              style={{ color: "#828487" }}
            ></i>
            <i class="fa-solid fa-arrow-down" style={{ color: "#828487" }}></i>
          </div>
          <div className="col-3">
            ROLE
            <i
              class="fa-solid fa-arrow-up ms-2"
              style={{ color: "#828487" }}
            ></i>
            <i class="fa-solid fa-arrow-down" style={{ color: "#828487" }}></i>
          </div>
          <div className="col-3">
            LAST LOGIN
            <i
              class="fa-solid fa-arrow-up ms-2"
              style={{ color: "#828487" }}
            ></i>
            <i class="fa-solid fa-arrow-down" style={{ color: "#828487" }}></i>
          </div>
        </div>
      </div>

      {users.map((user, index) => {
        return (
          <>
            <div
              key={user.id}
              className="px-4 py-5 bg-white my-3 "
              style={{
                borderLeft: `6px solid ${getUserColor(index)}`,
                borderRadius: "5px",
              }}
              onClick={() => userClicked(user)}
            >
              <div className="row">
                <div className="col-3">
                  <div className=" d-flex flex-column flex-lg-row align-items-center">
                    <span
                      className="me-4 p-4 rounded rounded-circle"
                      style={{ backgroundColor: "silver" }}
                    >
                      <i class="fa-regular fa-user fa-2xl"></i>
                    </span>
                    <span className="fs-5 fw-bolder">
                      {user?.firstName} {user?.lastName}
                    </span>
                  </div>
                </div>

                <div className="col-3">
                  <div className="fs-5 fw-bolder">{user?.id}</div>
                </div>

                <div className="col-3">
                  <div className="fs-5 fw-bolder">{user?.company?.title}</div>
                </div>

                <div className="col-3">
                  <div className="" style={{ color: "silver" }}>
                    May 18 ,2020 <li className="d-inline">5:30 PM</li>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}

      {isSideBarOpen && (
        <div className="sidebar-overlay">
          <div className="sidebar-content " style={{ color: "silver" }}>
            <div className="d-flex mb-2 justify-content-between align-items-center">
              <div>
                {" "}
                <span className="fs-4">User details</span>
              </div>
              <div className="" onClick={() => setSideBarOpen(false)}>
                <i class="fa-solid fa-xmark"></i>
              </div>
            </div>

            <div className="d-flex align-items-center">
              <div
                className="p-5 me-5 rounded-circle"
                style={{ backgroundColor: "silver" }}
              >
                <i
                  class="fa-regular fa-user fa-2xl p-4"
                  style={{ color: "black" }}
                ></i>
              </div>
              <div>
                <p className="fs-5 mb-1 fw-bolder text-dark">
                  {selectedUser.firstName} {selectedUser.lastName}
                </p>
                <p className="mb-1">User id:000{selectedUser.id}</p>
                <button className="btn btn-success rounded-pill px-3 py-1 ">
                  Active
                </button>
              </div>
            </div>
            <hr />
            <div className="d-flex align-items-center">
              <div
                className=" me-5 rounded-circle"
                style={{ backgroundColor: "whitesmoke" }}
              >
                <i
                  class="fa-regular fa-user  p-4"
                  style={{ color: "gray" }}
                ></i>
              </div>
              <span className="fs-5 text-dark">Basic & Account Details</span>
            </div>
            <div className="mt-5 text-dark ps-4 ">
              <p className="fw-bolder mb-1">{`${selectedUser.firstName} ${selectedUser.lastName}`}</p>
              <p className="mb-4" style={{ color: "silver" }}>
                Full Name
              </p>

              <p className="fw-bolder mb-1">{selectedUser.company.title}</p>
              <p className="mb-4" style={{ color: "silver" }}>
                User roles
              </p>
              <hr />

              <div className="d-flex align-items-center">
                <div
                  className=" me-5 rounded-circle"
                  style={{ backgroundColor: "whitesmoke" }}
                >
                  <i
                    class="fa-solid fa-signal  p-3"
                    style={{ color: "gray" }}
                  ></i>
                </div>
                <span style={{ color: "silver" }}>User data</span>
              </div>
              <div className="mt-4">
                <p>May 18,2020 11.45AM</p>
                <p style={{ color: "silver" }}>Last Login</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
