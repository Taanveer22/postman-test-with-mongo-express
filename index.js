// ==================Recommended Order=================
// 1. Required by common js (express, cors, etc.)
// 2 .App Initialization (const app = express())
// 3. Middleware Setup (cors, json, logging)
// 4. Database Configuration & Connection (MongoDB client setup and run() function)
// 5. Routes
// 6. Server Startup (app.listen)
// ===========================================================

// 1=> required
const express = require("express");
const cors = require("cors");

// 2=> instance initialization
const port = process.env.PORT || 4000;
const app = express();

// 3=> middleware
app.use(cors());
app.use(express.json());

// 4=> databse configuration

// 5=> server routes
app.get("/", (req, res) => {
  res.send("postman test working");
});

// 6=> server startup
app.listen(port, () => {
  console.log(`the server is running on port no. ${port}`);
});
