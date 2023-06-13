import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";
import BlogP from "./pages/BlogP";
import DashboardPage from "./pages/DashboardPage"; // Import your login page
import LoginPage from "./pages/LoginPage"; // Import your login page
import RegisterPage from "./pages/RegisterPage"; // Import your login page
import { AuthProvider } from "./Routes/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <div className="grid-container">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<AboutMe />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/blog" element={<BlogP />} />
                <Route path="/dashboard" element={<DashboardPage />} />{" "}
                <Route path="/login" element={<LoginPage />} />{" "}
                <Route path="/register" element={<RegisterPage />} />{" "}
              </Routes>
            </main>
          </div>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
