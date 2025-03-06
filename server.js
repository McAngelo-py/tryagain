const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();

// Middleware to handle JSON requests
app.use(cors());
app.use(express.json()); // to parse JSON bodies

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'soloparent',
});

// Route to get all users
app.get('/users', (req, res) => {
  const sql = "SELECT * FROM users";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// Route to get all admins
app.get('/admin', (req, res) => {
  const sql = "SELECT * FROM admin";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// Route to get all superadmins
app.get('/superadmin', (req, res) => {
  const sql = "SELECT * FROM superadmin";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// Route to insert a new user
app.post('/users', (req, res) => {
  const { email, password, name, role } = req.body;

  // SQL query to insert a new user into the 'users' table
  const sql = "INSERT INTO users (email, password, name, role, status) VALUES (?, ?, ?, 'user',Unverified,)";

  db.query(sql, [email, password, name, role], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    return res.status(201).json({ message: "User created successfully", userId: result.insertId });
  });
});

app.post('/getUserDetails', (req, res) => {
  const { userId } = req.body; // Assuming userId is passed from the frontend

  // Modify the SQL query to fetch 'name', 'email', and 'status' fields from the users table
  const sql = "SELECT name, email, status FROM users WHERE id = ?";  // Fetch 'status' as well
  db.query(sql, [userId], (err, data) => {
    if (err) return res.json(err);
    if (data.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.json(data[0]); // Return name, email, and status of the user
  });
});





app.listen(8081, () => {
  console.log("Server is listening on port 8081");
});
