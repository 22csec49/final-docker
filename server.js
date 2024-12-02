const express = require("express");

const app = express();
app.use(express.json()); // For parsing JSON requests

// Route for home
app.get("/home", (req, res) => {
    res.send("home"); // Static response
});

// Route for about
app.get("/about", (req, res) => {
    res.json({
      name:"Nagasurya",
      age:20,
      college:"VCET"
    }); // Static response
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
