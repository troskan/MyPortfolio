import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Routes/AuthContext";

const AdminPage = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect the user to the login page if they aren't authenticated
    if (!auth.user) {
      navigate("/login");
    }
  }, [auth, navigate]);

  // Only render the component if the user is authenticated
  return auth.user ? (
    <div>
      <h1>Admin Page</h1>
      <p>Welcome, admin! This is your private page.</p>
    </div>
  ) : null;
};

export default AdminPage;
