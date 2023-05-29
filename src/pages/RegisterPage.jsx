import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Blog/register.css";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const dateRegistered = new Date().toISOString(); // moved inside handleSubmit

    try {
      // Make a request to the register endpoint
      const response = await fetch("http://localhost:5291/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: username,
          password: password,
          email: email,
          roleID: 1,
          dateRegistered: dateRegistered,
        }),
      });

      // If the registration is successful, the status should be 200 OK
      if (response.ok) {
        console.log("Registration successful");
        // Redirect the user to the login page
        navigate("/login");
      } else {
        console.error("Registration failed");
        // Here, you could show an error message
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="register-container">
      <h1>Register</h1>
      <div className="register-container">
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
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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

export default RegisterPage;
