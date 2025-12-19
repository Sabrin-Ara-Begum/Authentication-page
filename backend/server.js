const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api/auth", require("./routes/auth"));

// DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// SERVE FRONTEND
app.use(express.static(path.join(__dirname, ".."))); // serve frontend from root

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "index.html"));
});

// SERVER
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

