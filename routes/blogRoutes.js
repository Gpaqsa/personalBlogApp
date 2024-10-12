const express = require("express");
const router = express.Router();
const db = require("../db"); // MySQL connection


// Route to get all blogs
router.get("/api/blogs", (req, res) => {
  db.query("SELECT * FROM blogs", (err, results) => {
    if (err) {
      console.error(err.message);
      return res.status(500).send("Server Error");
    }
    res.json(results);
  });
});

// Route to add a new blog
router.post("/api/blogs", (req, res) => {
  const { title, content } = req.body;

  db.query(
    "INSERT INTO blogs (title, content) VALUES (?, ?)", // MySQL uses `?` placeholders
    [title, content],
    (err, result) => {
      if (err) {
        console.error(err.message);
        return res.status(500).send("Server Error");
      }
      // MySQL doesn't return rows directly, but you can query for the inserted row using `result.insertId`
      db.query(
        "SELECT * FROM blogs WHERE id = ?",
        [result.insertId],
        (err, newBlog) => {
          if (err) {
            console.error(err.message);
            return res.status(500).send("Server Error");
          }
          res.json(newBlog[0]);
        }
      );
    }
  );
});

// Route to delete a blog by ID
router.delete("/api/blogs/:id", (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM blogs WHERE id = ?", [id], (err, result) => {
    if (err) {
      console.error(err.message);
      return res.status(500).send("Server Error");
    }

    if (result.affectedRows === 0) {
      return res.status(404).send("Blog not found");
    }

    res.json({ message: "Blog deleted successfully" });
  });
});

module.exports = router;
