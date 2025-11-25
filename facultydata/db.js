import mysql from "mysql2/promise";

// Creating MySQL connection pool
const pool = mysql.createPool({
    host: "localhost",
    user: "root",         // your MySQL username
    password: "",         // your MySQL password
    database: "studentmanagement",
    connectionLimit: 10,
    waitForConnections: true
});

// Function to test MySQL connection
async function establishConnection() {
    try {
        const connection = await pool.getConnection();
        console.log("✅ Connected to MySQL");
        connection.release();
    } catch (err) {
        console.log("❌ Unable to connect to MySQL", err);
    }
}

// Test connection
establishConnection();

export default pool;
