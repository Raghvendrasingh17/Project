import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom"; // For redirection
import "./loginsign.css";
import NavBar from "../Navbar/nav";
import Footer from "../Footer/foot";

export default function Loginsign() {
  const [isLogin, setIsLogin] = useState(true);
  const [users, setUsers] = useState([]); // Store user data
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const notifySuccess = (message) => toast.success(message);
  const notifyError = (message) => toast.error(message);

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(
      (u) => u.email === loginData.email && u.password === loginData.password
    );
    if (user) {
      notifySuccess("Login successful! Welcome.");
      setTimeout(() => navigate("/"), 1500); // Redirect after 1.5 seconds
    } else {
      notifyError("Invalid email or password.");
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (signupData.password !== signupData.confirmPassword) {
      notifyError("Passwords do not match.");
      return;
    }
    if (users.some((u) => u.email === signupData.email)) {
      notifyError("This email is already registered.");
      return;
    }
    setUsers([...users, signupData]);
    notifySuccess("Account created successfully! Please login.");
    setSignupData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setIsLogin(true);
  };

  return (
    <>
    <NavBar/>
    <div className="min-vh-100 d-flex justify-content-center align-items-center bg-light">
      <div
        className={`card shadow-lg p-4 border-animation ${
          isLogin ? "" : "signup-border-animation"
        }`}
        style={{ width: "400px" }}
      >
        <div className="d-flex justify-content-center mb-4">
          <button
            className={`btn ${isLogin ? "btn-primary" : "btn-outline-primary"} mx-2`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`btn ${!isLogin ? "btn-primary" : "btn-outline-primary"} mx-2`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        {isLogin ? (
          <div>
            <h3 className="text-center mb-3">Login</h3>
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="loginEmail" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  required
                  id="loginEmail"
                  className="form-control"
                  placeholder="Enter your email"
                  value={loginData.email}
                  onChange={(e) =>
                    setLoginData({ ...loginData, email: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="loginPassword" className="form-label">
                  Password
                </label>
                <input
                required
                  type="password"
                  id="loginPassword"
                  className="form-control"
                  placeholder="Enter your password"
                  value={loginData.password}
                  onChange={(e) =>
                    setLoginData({ ...loginData, password: e.target.value })
                  }
                />
              </div>
              <button className="btn btn-primary w-100">Login</button>
            </form>
          </div>
        ) : (
          <div>
            <h3 className="text-center mb-3">Sign Up</h3>
            <form onSubmit={handleSignup}>
              <div className="mb-3">
                <label htmlFor="signupName" className="form-label">
                  Full Name
                </label>
                <input
                required
                  type="text"
                  id="signupName"
                  className="form-control"
                  placeholder="Enter your name"
                  value={signupData.name}
                  onChange={(e) =>
                    setSignupData({ ...signupData, name: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="signupEmail" className="form-label">
                  Email
                </label>
                <input
                required
                  type="email"
                  id="signupEmail"
                  className="form-control"
                  placeholder="Enter your email"
                  value={signupData.email}
                  onChange={(e) =>
                    setSignupData({ ...signupData, email: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="signupPassword" className="form-label">
                  Password
                </label>
                <input
                required
                  type="password"
                  id="signupPassword"
                  className="form-control"
                  placeholder="Enter your password"
                  value={signupData.password}
                  onChange={(e) =>
                    setSignupData({ ...signupData, password: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="signupConfirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                required
                  type="password"
                  id="signupConfirmPassword"
                  className="form-control"
                  placeholder="Confirm your password"
                  value={signupData.confirmPassword}
                  onChange={(e) =>
                    setSignupData({
                      ...signupData,
                      confirmPassword: e.target.value,
                    })
                  }
                />
              </div>
              <button className="btn btn-primary w-100">Sign Up</button>
            </form>
          </div>
        )}
      </div>

      <ToastContainer />
    </div>
    <Footer/>
    </>
  );
}
