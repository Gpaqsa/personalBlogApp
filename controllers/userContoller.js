const db = require("../db");

// const checkIfEmailExists = (email) => {
//   return new Promise((resolve, reject) => {
//     db.get("SELECT * FROM users WHERE email = ?", [email], (err, row) => {
//       if (err) return reject(err);
//       resolve(row);
//     });
//   });
// };

// const checkIfUsernameExists = (username) => {
//   return new Promise((resolve, reject) => {
//     db.get("SELECT * FROM users WHERE username = ?", [username], (err, row) => {
//       if (err) return reject(err);
//       resolve(row);
//     });
//   });
// };
