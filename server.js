const express = require("express");
const blogRoutes = require("./routes/blogRoutes");

const app = express();
const PORT = process.env.PORT || 3005;

app.use(express.json()); // Middleware to parse JSON

// Use Blog Routes
app.use("/", blogRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
