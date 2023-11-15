import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [userRegister, setUserRegister] = useState({
    username: "",
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUserRegister({ ...userRegister, [name]: value });
    console.log("userRegister", userRegister);
  };

  const registerHandler = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(userRegister);
    localStorage.setItem("users", JSON.stringify(users));
    setUserRegister({
      username: "",
      email: "",
      password: "",
    });
    alert("User Registered");
    navigate("/dashboard");
  };

  return (
    <div className="container-fluid login-container">
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-6 p-0">
          <img
            alt="img"
            className="img-fluid"
            src={require("../../assets/leftimg.jpg")}
          />
        </div>

        <div className="col-lg-6 p-0 mt-5 mt-lg-0 d-flex justify-content-center align-items-center">
          <div className="inner-content">
            <div className="text-center mb-3">
              <img
                alt="img"
                className="img-fluid"
                src={require("../../assets/logo.PNG")}
              />
            </div>

            <div className="text-center">
              <h3>Welcome</h3>
              <p>Register To Labs Monitoring System</p>
            </div>

            <form className="card card-body border-0">
              <div className="row flex flex-column">
                <div className="col px-1 mb-3">
                  <label
                    htmlFor="input1"
                    className="ms-2 position-absolute"
                    style={{ marginTop: "-0.25rem" }}
                  >
                    <span className="h6 small bg-white text-muted px-1">
                      Username
                    </span>
                  </label>
                  <input
                    type="text"
                    name="username"
                    className="form-control mt-2"
                    id="input1"
                    onChange={inputHandler}
                  />
                </div>

                <div className="col px-1 mb-3">
                  <label
                    htmlFor="input1"
                    className="ms-2 position-absolute"
                    style={{ marginTop: "-0.25rem" }}
                  >
                    <span className="h6 small bg-white text-muted px-1">
                      Email Id
                    </span>
                  </label>
                  <input
                    type="email"
                    className="form-control mt-2"
                    name="email"
                    id="input1"
                    onChange={inputHandler}
                  />
                </div>

                <div className="col px-1 mb-3">
                  <label
                    htmlFor="input2"
                    className="ms-2 position-absolute"
                    style={{ marginTop: "-0.25rem" }}
                  >
                    <span className="h6 small bg-white text-muted px-1">
                      Password
                    </span>
                  </label>
                  <input
                    type="password"
                    className="form-control mt-2"
                    name="password"
                    id="input2"
                    onChange={inputHandler}
                  />
                </div>

                <button className="btn btn-primary" onClick={registerHandler}>
                  Register
                </button>
                <div className="px-0">
                  <p className="d-inline text-primary text-start px-0">
                     Have account?{" "}
                    <span onClick={() => navigate("/")} className="toggle-form">Login</span>
                  </p>
                  <p className=" d-inline text-primary text-end float-end px-0">
                    Forgot password?
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
