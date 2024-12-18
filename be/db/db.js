const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",       // For local MySQL
    port: 3306,              // MySQL default port
    user: "root",            // Local MySQL user
    password: "123456",      // Your local MySQL password
    database: "employeemanagement" // Your local database name
});


db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('MySQL Connected...');
});

module.exports = db;