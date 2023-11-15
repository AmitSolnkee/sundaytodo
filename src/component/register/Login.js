import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserLogin({ ...userLogin, [name]: value });
  };

  const login = () => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = storedUsers.find(
      (u) => u.email === userLogin.email && u.password === userLogin.password
    );
    if (user) {
      navigate("/dashboard");
    } else {
      alert("You need to register first.");
      navigate("/register");
    }
  };

  return (
    <div className="container-fluid login-container">
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-6 p-0 leftimg-div">
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
              <p>Login To Labs Monitoring System</p>
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
                      Email ID
                    </span>
                  </label>
                  <input
                    type="text"
                    className="form-control mt-2 py-2"
                    id="input1"
                    name="email"
                    onChange={inputChangeHandler}
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
                    className="form-control mt-2 py-2"
                    id="input2"
                    name="password"
                    onChange={inputChangeHandler}
                  />
                </div>

                <button className="btn btn-primary" onClick={login}>
                  Login
                </button>
                <div className="px-0">
                  <p className="d-inline text-primary text-start px-0">
                    No account?
                    <span
                      onClick={() => navigate("/register")}
                      className="toggle-form"
                    >
                      Register
                    </span>
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

export default Login;
