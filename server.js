const express = require("express");
const Cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const schedule = require("node-schedule");

const app = express();
const PORT = 3002;

const { mongoURI, secretOrKey } = require("./Config/keys");

app.use(Cors());
app.use(bodyParser.json());

// Import models
const { User, Movie } = require("./Models/Models");

// Connect to MongoDB
mongoose
  .connect(mongoURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Login
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  // Check if the username and password match a user in the database
  // db.get(
  //   "SELECT * FROM users WHERE email = ? AND password = ?",
  //   [email, password],
  //   (err, row) => {
  //     if (err) {
  //       console.error("Database error:", err.message);
  //       res.status(500).json({ error: "Internal server error" });
  //     } else if (row) {
  //       // Successful authentication
  //       res
  //         .status(200)
  //         .json({ id: row.id, username: row.username, email: row.email });
  //     } else {
  //       // Authentication failed
  //       res.status(401).json({ error: "Invalid credentials" });
  //     }
  //   }
  // );
});

// Register
app.post("/api/register", (req, res) => {
  const { email, password, username } = req.body;

  // // Check if the email already exists
  // db.get("SELECT * FROM users WHERE email = ?", [email], (err, row) => {
  //   if (err) {
  //     console.error("Database error:", err.message);
  //     res.status(500).json({ error: "Internal server error" });
  //   } else if (row) {
  //     // Email already exists
  //     res.status(400).json({ error: "Account already exists" });
  //   } else {
  //     // Email doesn't exist, insert the new user
  //     db.run(
  //       "INSERT INTO users (username, email, password, likedMovies) VALUES (?, ?, ?, ?)",
  //       [username, email, password, ""],
  //       function (err) {
  //         if (err) {
  //           console.error("Database error:", err.message);
  //           res.status(500).json({ error: "Internal server error" });
  //         } else {
  //           // User successfully registered
  //           res.status(201).json({ message: "User registered successfully" });
  //         }
  //       }
  //     );
  //   }
  // });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
