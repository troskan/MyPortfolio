import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (username, password) => {
    // Send a POST request to your server with the username and password

    const response = await fetch(
      "https://blogweb.azurewebsites.net/User/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }
    );

    console.log("status", response.status); // log the status code of the response

    // Check if the response has content before trying to parse it
    const contentType = response.headers.get("Content-Type");
    if (contentType && contentType.includes("application/json")) {
      const data = await response.json();
      // console.log("data", data); // log the parsed JSON data

      // If the login was successful, set the user
      if (response.ok) {
        setUser(data);
        return data; // added this line to return the user data to the login function caller
      } else {
        // Handle error...
      }
    } else if (!response.ok) {
      // adjusted this condition
      console.error("Login failed");
    } else {
      console.log(
        "Login successful, but no JSON content received from the server"
      );
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
