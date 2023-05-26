import React, { useState } from "react";
import "../../css/Blog/login.css";
import TextField from "@mui/material/TextField";
import { useAuth } from "../../Routes/AuthContext";

const LoginBox = () => {
  const { login } = useAuth(); // get the login function from your auth context
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault(); // prevent the page from refreshing
    login(username, password);
  };

  return (
    <div>
      <div className="login-container">
        <div className="field-container">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <TextField
              id="standard-username-input"
              label="Username"
              type="username"
              autoComplete="current-username"
              variant="standard"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginBox;
