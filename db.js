const mysql = require("mysql2");

// Create a MySQL connection
const db = mysql.createConnection({
  host: "localhost", // or your MySQL server host
  user: "root", // your MySQL username
  password: "paksa1234", // your MySQL password
  database: "blogDB", // the database we created
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database: ", err);
    return;
  }
  console.log("Connected to the MySQL database");
});


// Check if the "users" table exists, and create it if it doesn't
//   const createUsersTableQuery = `
//     CREATE TABLE IF NOT EXISTS users (
//       id INT AUTO_INCREMENT PRIMARY KEY,
//       username VARCHAR(50) NOT NULL UNIQUE,
//       email VARCHAR(100) NOT NULL UNIQUE,
//       password VARCHAR(255) NOT NULL,
//       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//     )
//   `;

//   db.query(createUsersTableQuery, (err, result) => {
//     if (err) {
//       console.error("Error creating users table: ", err);
//       return;
//     }
//     console.log("Users table checked/created successfully");
//   });
// });
// // 
//    // Insert sample data into the users table
//     const insertUsersQuery = `
//       INSERT INTO users (username, email, password)
//       VALUES 
//         ('john_doe', 'john@example.com', 'password123'),
//         ('jane_doe', 'jane@example.com', 'password456'),
//         ('alice_smith', 'alice@example.com', 'password789')
//     `;

//     db.query(insertUsersQuery, (err, result) => {
//       if (err) {
//         console.error("Error inserting data into users table: ", err);
//         return;
//       }
//       console.log("Sample users inserted successfully");
//     });
  
// // 

// const createBlogsTableQuery = `
//     CREATE TABLE IF NOT EXISTS blogs (
//       id INT AUTO_INCREMENT PRIMARY KEY,
//       user_id INT NOT NULL,
//       title VARCHAR(255) NOT NULL,
//       content TEXT NOT NULL,
//       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//       updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
//       FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
//     )
//   `;

//   db.query(createBlogsTableQuery, (err, result) => {
//     if (err) {
//       console.error("Error creating blogs table: ", err);
//       return;
//     }
//     console.log("Blogs table checked/created successfully");
//   });

//   // Insert sample data into the blogs table
//     const insertBlogsQuery = `
//   INSERT INTO blogs (user_id, title, content)
//   VALUES 
//     (1, 'John''s First Blog', 'This is the content of John''s first blog post.'),
//     (1, 'John''s Second Blog', 'This is the content of John''s second blog post.'),
//     (2, 'Jane''s First Blog', 'This is Jane''s first blog post.'),
//     (3, 'Alice''s Thoughts', 'This is a thoughtful blog post from Alice.'),
//     (3, 'Alice''s Guide to Coding', 'Alice shares her guide to coding for beginners.')
// `;


//     db.query(insertBlogsQuery, (err, result) => {
//       if (err) {
//         console.error("Error inserting data into blogs table: ", err);
//         return;
//       }
//       console.log("Sample blogs inserted successfully");
//     });
module.exports = db;
