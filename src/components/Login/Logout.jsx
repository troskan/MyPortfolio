import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    // Redirect to the login page (or any other page)
    navigate("/aboutme");
  };

  return (
    <button id="logout" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;
