import mysql from 'mysql2/ppromise';

// Create a connection pool to handle multiple database requests
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',              // corrected key (NOT 'username')
    password: '',              // your MySQL password
    database: 'studentmanagement',
    connectionLimit: 10,
    waitForConnections: true
});

// Test MySQL connection
async function establishConnection() {
    try {
        const con = await pool.getConnection();
        console.log("Connected to MySQL");
        con.release(); // release the connection back to pool
    } catch (err) {
        console.log("Unable to connect with database ", err);
    }
}

// Run connection test
establishConnection();

export default pool;
