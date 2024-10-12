const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/api/users", (req, res) => {
  const sql = "SELECT * FROM users";
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err.message);
      return res.status(500).send("Server Error");
    }

    res.json(result);
  });
});

module.exports = router;
