import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate(); // For redirection
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // 🔹 Temporary accounts for testing
  const users = [
    { email: "admin@example.com", password: "admin123", role: "admin" },
    { email: "nomad@example.com", password: "nomad123", role: "user" },
  ];

  // 🔹 Handle login
  const handleLogin = (e) => {
    e.preventDefault();

    // Check if entered email & password match any user
    const foundUser = users.find((user) => user.email === email && user.password === password);

    if (foundUser) {
      // Store user data in localStorage
      localStorage.setItem("loggedInUser", JSON.stringify(foundUser));

      // Redirect based on role
      if (foundUser.role === "admin") {
        navigate("/admin-dashboard"); // ✅ Admin goes to Admin Dashboard
      } else {
        navigate("/userui"); // ✅ Regular user goes to Homepage
      }
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="forgot-password">
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
        <p className="signup-text">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;