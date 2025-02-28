import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainPage from "./mainpage/MainPage"; // ✅ Use MainPage instead
import Login from "./login/Login";
import Signup from "./login/Signup";
import AdminDashboard from "./admin/AdminDashboard";


function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

const MainContent = () => {
  const location = useLocation();
  const hideNavbar = ["/login", "/signup", "/admin-dashboard"].includes(location.pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<MainPage />} /> {/* ✅ Show all sections */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </>
  );
};

export default App;
