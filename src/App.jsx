import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";
import BlogP from "./pages/BlogP";
import LoginPage from "./pages/LoginPage"; // Import your login page
import AdminPage from "./pages/AdminPage"; // Import your admin page
import { AuthProvider } from "./Routes/AuthContext";
import RegisterPage from "./pages/RegisterPage";

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
                <Route path="/login" element={<LoginPage />} />{" "}
                <Route path="/register" element={<RegisterPage />} />{" "}
                {/* Add your login route */}
                <Route path="/admin" element={<AdminPage />} />
                {/* Protect your admin page */}
              </Routes>
            </main>
          </div>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
