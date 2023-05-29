import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Routes/AuthContext";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { login } = useAuth(); // Get the login function from the context

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await login(username, password); // Call the login function
      if (user) {
        // If the login function returns a user, login was successful
        console.log("Login successful");

        // Check if user has role 2
        if (user.RoleID === 2) {
          navigate("/admin");
        } else {
          console.error("User does not have permission to access admin page");
        }
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
