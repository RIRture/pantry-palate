import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { FaUser, FaLock } from "react-icons/fa";
import hamburger from "../components/Assets/hamburger.svg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    // Check if username and password match hardcoded values
    if (username === "admin" && password === "admin") {
      // Set isLoggedIn to true and store it in localStorage
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true");
      navigate("/main");
    } else {
      alert(`Invalid username or password`);
    }
  };

  return (
    <div className="bigbod">
      <div className="lon">
        <button
          onClick={() => {
            navigate("/pantry-palate");
          }}
          className="logo1"
        >
          <h1>
            <img src={hamburger} alt="Icon" className="im1"/>
            Pantry Palatte
          </h1>
        </button>
      </div>
      <div className="bod">
        <div className="wrapper">
          <h1>Login</h1>
          <form>
            <div className="input-box">
              <input
                type="text"
                placeholder="Username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FaLock className="icon" />
            </div>
            <button type="button" onClick={handleLogin}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
