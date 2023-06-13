import React, { useState } from "react";
import axios from "axios";
import "../../css/Login/login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const user = {
      UserName: username,
      Password: password,
    };

    const url = "https://blogweb.azurewebsites.net/api/Auth/login"; // Replace with your API endpoint

    axios
      .post(url, user)
      .then((res) => {
        console.log(res.data);
        // Save token to localStorage
        localStorage.setItem("token", res.data);
        navigate("/dashboard");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <h2>Login</h2>
      <div id="login-container">
        <form action="" id="login-form" onSubmit={handleSubmit}>
          <input
            type="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
      <a href="/register">Register</a>
    </div>
  );
};

export default Login;
