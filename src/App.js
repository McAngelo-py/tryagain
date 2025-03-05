import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainPage from "./mainpage/MainPage";
import Login from "./login/Login";
import Signup from "./login/Signup";
import AdminDashboard from "./admin/AdminDashboard";
import Userui from "./user/Userui";

function App() {
  // State to store data from each route
  const [users, setUsers] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [superadmins, setSuperadmins] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state for async requests

  useEffect(() => {
    // Use Promise.all to handle multiple fetch requests concurrently
    Promise.all([
      fetch("http://localhost:8081/users"),
      fetch("http://localhost:8081/admin"),
      fetch("http://localhost:8081/superadmin"),
    ])
      .then(([usersRes, adminsRes, superadminsRes]) =>
        Promise.all([
          usersRes.json(),
          adminsRes.json(),
          superadminsRes.json(),
        ])
      )
      .then(([usersData, adminsData, superadminsData]) => {
        setUsers(usersData);
        setAdmins(adminsData);
        setSuperadmins(superadminsData);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false even if there's an error
      });
  }, []); // Empty dependency array to fetch only once when component mounts

  // Render loading message while data is being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <MainContent users={users} admins={admins} superadmins={superadmins} />
    </Router>
  );
}

const MainContent = ({ users, admins, superadmins }) => {
  const location = useLocation();
  const hideNavbar = ["/admin-dashboard", "/userui", "/login", "/signup"].includes(location.pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin-dashboard" element={<AdminDashboard admins={admins} />} />
        <Route path="/userui" element={<Userui users={users} superadmins={superadmins} />} />
      </Routes>
    </>
  );
};

export default App;
