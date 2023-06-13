import React, { useState } from "react";
import axios from "axios";
import "../../css/Blog/register.css";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const user = {
      userName: userName,
      password: password,
      email: email,
    };

    const url = "https://blogweb.azurewebsites.net/api/Auth/register"; // Replace with your API endpoint

    axios
      .post(url, user)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h2>Register</h2>

      <div id="register-container">
        <form action="" id="register-form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Username"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Register;
