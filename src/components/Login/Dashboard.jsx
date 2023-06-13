import React, { useState, useEffect } from "react";
import Logout from "./Logout";
import PostCreator from "../blog/PostCreator";

const Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div>
      <h1>Admin Panel</h1>
      {isLoggedIn ? (
        <div>
          <h2>Welcome, you are logged in!</h2>
          <PostCreator />
          <Logout />
        </div>
      ) : (
        <div>
          <h2>You are not logged in!</h2>
          <a href="/login">Login</a>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
