import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import MapComponent from "./components/Map/MapComponent";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import { AuthProvider } from "./components/Auth/AuthContext";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<MapComponent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;