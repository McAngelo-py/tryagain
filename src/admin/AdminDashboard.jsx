import React from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const navigate = useNavigate();

  // Logout function (removes user from localStorage)
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/");
  };

  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="sidebar-title">Admin Panel</h2>
        <ul className="sidebar-menu">
          <li><button>Dashboard</button></li>
          <li><button>Manage Users</button></li>
          <li><button>Settings</button></li>
          <li><button onClick={handleLogout}>Logout</button></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="admin-header">
          <h1>Admin Dashboard</h1>
        </header>
        <section className="dashboard-content">
          <p>Welcome, Admin! This is your dashboard.</p>
          <p>Manage users, update settings, and view reports here.</p>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
