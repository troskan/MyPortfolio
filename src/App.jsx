import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";
import BlogP from "./pages/BlogP";

function App() {
  return (
    <>
      <Router>
        <div className="grid-container">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<AboutMe />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/blog" element={<BlogP />} />
            </Routes>
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;
