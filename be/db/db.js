const mysql = require("mysql2");

const db = mysql.createConnection('mysql://root:OLHCqThmdmwZkrGfKyxHGXZlADWhJPSQ@autorack.proxy.rlwy.net:10971/railway');


db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('MySQL Connected...');
});

module.exports = db;