import React from "react";
import "../../css/Blog/login.css";
import TextField from "@mui/material/TextField";

const LoginBox = () => {
  return (
    <div>
      <div className="login-container">
        <div className="field-container">
          <h2>Login</h2>
          {/* <input placeholder="Username" type="username" />
          <input placeholder="Password" type="password" /> */}
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
          />
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
          />
          <a href="">
            <button>Submit</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginBox;
