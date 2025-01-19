const express = require("express");
const cors = require("cors");  // Import cors
const app = express();
const port = 3000;

app.use(cors());

// API Endpoint
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
