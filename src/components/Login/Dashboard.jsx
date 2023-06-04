import React, { useState, useEffect } from "react";
import Logout from "./Logout";

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
      <h1>Dashboard</h1>
      {isLoggedIn && (
        <h2>
          Welcome, you are logged in! <Logout />
        </h2>
      )}
    </div>
  );
};

export default Dashboard;
