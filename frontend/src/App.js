import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<div>Login Page</div>} />
        <Route path="/register" element={<div>Registration Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
