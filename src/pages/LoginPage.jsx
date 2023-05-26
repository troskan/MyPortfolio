// LoginPage.jsx
import React, { useState } from "react";
import "../css/Login/login.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Here, you would typically send the username and password to your server for authentication
    // If successful, store the returned token and user role in local storage or a cookie
    // Then redirect the user to the appropriate page
  };

  return (
    <div>
      <h1>Login</h1>
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
