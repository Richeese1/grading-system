import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import video from "./LoginAssets/video.mp4";
import logo from "./LoginAssets/logo.png";
import { FaUserShield } from "react-icons/fa";
import { AiOutlineSwapRight } from "react-icons/ai";
import { BsFillShieldLockFill } from "react-icons/bs";

const Login = () => {
  const [loginUserName, setLoginUserName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigateTo = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    const loginUserName = document.getElementById("username").value;
    const loginPassword = document.getElementById("password").value;
    if (loginUserName === "admin" && loginPassword === "admin") {
      // Assuming `navigateTo` is a navigation function for your application
      navigateTo("/admin-dashboard"); // Navigate to the general dashboard
    } else if (loginUserName === "student" && loginPassword === "student") {
      navigateTo("/student-dashboard");
    } else {
      // Handle unsuccessful login (account not found or other error)
      console.error("Login failed:", "Invalid credentials", navigateTo("/")); // Log specific error if available
      // Optionally: Display an error message to the user
    }
  };
  return (
    <div className="loginPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>

          <div className="textDiv">
            <h2 className="title">View your Grades Online</h2>
            <p>Fast and convenient</p>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo Image" />
            <h3>Welcome Back!</h3>
          </div>

          <form className="form grid">
            {/* <span className="message">Login Status will go here</span> */}
            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input
                  type="text"
                  id="username"
                  placeholder="Enter Username"
                  value={loginUserName}
                  onChange={(e) => setLoginUserName(e.target.value)}
                />
              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon" />
                <input
                  type="password"
                  id="password"
                  placeholder="Enter Password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
              </div>
            </div>

            <button type="submit" className="btn flex" onClick={loginUser}>
              <span>Login</span>
              <AiOutlineSwapRight className="icon" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
